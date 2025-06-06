from pocketbase import PocketBase
from pocketbase.models import Record
from pocketbase.models.utils import ListResult
import time
from typing import Optional, Dict, Any
from fastapi import HTTPException


class Client(PocketBase):
    """
    Extended PocketBase client with authentication and domain-specific methods.
    
    This class extends the base PocketBase client to provide authentication
    handling and convenience methods for working with flashcard templates,
    fields, and AI prompt logging.
    """

    def __init__(self, url: str, **kwargs: Any) -> None:
        """
        Initialize the PocketBase client.
        
        Args:
            url: PocketBase server URL
            **kwargs: Additional arguments passed to parent PocketBase constructor
        """
        super().__init__(url, **kwargs)

    @staticmethod
    def from_auth_header(pocketbase_url: str, authorization: Optional[str] = None) -> 'Client':
        """
        Create an authenticated PocketBase client from Authorization header.
        
        This method extracts a Bearer token from the Authorization header and
        creates an authenticated client instance. It validates the token by
        attempting to refresh the authentication.
        
        Args:
            pocketbase_url: The PocketBase server URL
            authorization: The Authorization header value (Bearer token)
            
        Returns:
            Client: Authenticated PocketBase client instance
            
        Raises:
            HTTPException: If authentication fails, token is missing, or invalid
        """
        if not authorization or not authorization.startswith("Bearer "):
            raise HTTPException(status_code=401, detail="Missing or invalid authorization header")
        
        token = authorization.replace("Bearer ", "")
        
        # Connect to PocketBase and authenticate user
        pocketbase_client = Client(pocketbase_url)
        pocketbase_client.auth_store.save(token)
          # Validate token by trying to refresh it
        try:
            pocketbase_client.collection('users').auth_refresh()
        except Exception:
            raise HTTPException(status_code=401, detail="Invalid authentication token")
        
        return pocketbase_client

    def get_template(self, template_id: str) -> Record:
        """
        Retrieve a single template record by ID.
        
        Args:
            template_id: Unique identifier for the template
            
        Returns:
            Record: The template record from PocketBase
            
        Raises:
            Exception: If template not found or access denied
        """
        return self.collection("templates").get_one(template_id)    
        
    def get_template_fields(self, template_id: str) -> ListResult:
        """
        Retrieve all fields associated with a specific template.
        
        Args:
            template_id: Unique identifier for the template
            
        Returns:
            ListResult: Collection of field records for the template
            
        Raises:
            Exception: If template not found or access denied
        """        
        return self.collection("fields").get_list(query_params = {"filter": f"template='{template_id}'"})
    
    def log_ai_prompt(
        self, 
        prompt: str, 
        response: Optional[str] = None, 
        response_time: Optional[int] = None, 
        prompt_type: str = "FLASHCARD_GENERATION"
    ) -> Record:
        """
        Log AI prompt and response to the aiPrompts collection.
        
        This method records AI interactions for analytics, debugging, and
        improvement purposes. It captures the prompt, response, timing,
        and associates the log with the authenticated user.
        
        Args:
            prompt: The AI prompt text sent to the model
            response: The AI response text (optional)
            response_time: Response time in milliseconds (optional)
            prompt_type: Type of prompt - must be one of: FLASHCARD_GENERATION, 
                        EXPLANATION_HELP, TRANSLATION
                        
        Returns:
            Record: The created aiPrompt record
            
        Raises:
            ValueError: If user is not authenticated or prompt_type is invalid
            Exception: If logging to PocketBase fails
        """
        # Validate token by trying to refresh it
        try:
            self.collection('users').auth_refresh()
        except Exception:
            raise ValueError("User must be authenticated to log AI prompts")
        
        # Get current authenticated user ID
        user_id = None
        if self.auth_store.model:
            user_id = self.auth_store.model.id
        
        if not user_id:
            raise ValueError("User must be authenticated to log AI prompts")
        
        data = {
            "user": user_id,
            "prompt": prompt,
            "type": prompt_type
        }        
        if response is not None:
            data["response"] = response
            
        if response_time is not None:
            data["responseTime"] = str(response_time)
            
        return self.collection("aiPrompts").create(data)

