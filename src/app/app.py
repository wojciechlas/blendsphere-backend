from fastapi import FastAPI, Header, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from src.agent.flashcard_agent import FlashcardAgent
from src.model.flashcard_generation import FlashcardGenerationRequest
from src.pb_utils.client import Client
from dotenv import load_dotenv

import os

# Load environment variables from .env file
load_dotenv()

pocketbase_url = os.getenv("POCKETBASE_URL", "http://localhost:8090")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:8080"],  # Add your frontend URLs
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

agent = FlashcardAgent()

def get_authenticated_client(authorization: Optional[str] = Header(None)) -> Client:
    """Extract token from Authorization header and return authenticated PocketBase client"""
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

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.post("/api/flashcards/generate")
async def generate_flashcards(
    request: FlashcardGenerationRequest,
    pocketbase_client: Client = Depends(get_authenticated_client)
):
    """Generate flashcards based on the provided template and input fields."""
    template = pocketbase_client.get_template(request.templateId)
    template_fields = pocketbase_client.get_template_fields(request.templateId)

    return await agent.generate_flashcards(request, template, template_fields)