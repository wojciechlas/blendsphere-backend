from fastapi import FastAPI, Header, Depends
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional, Dict, Any
from src.agent.flashcard_agent import FlashcardAgent
from src.model.flashcard_generation import FlashcardGenerationRequest, FlashcardGenerationResponse
from src.model.flashcard_review_request import FlashcardReviewRequest
from src.fsrs.fsrs_manager import review_card
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
    """
    Extract token from Authorization header and return authenticated PocketBase client.

    Args:
        authorization: Optional authorization header containing Bearer token

    Returns:
        Client: Authenticated PocketBase client instance

    Raises:
        HTTPException: If authentication fails or token is invalid
    """
    return Client.from_auth_header(pocketbase_url, authorization)

@app.get("/")
async def root() -> Dict[str, str]:
    """Health check endpoint for the API root."""
    return {"message": "Hello World"}

@app.get("/health")
async def health() -> Dict[str, str]:
    """Health check endpoint to verify API is running."""
    return {"status": "ok"}

@app.post("/api/flashcards/generate")
async def generate_flashcards(
    request: FlashcardGenerationRequest,
    pocketbase_client: Client = Depends(get_authenticated_client)
) -> FlashcardGenerationResponse:
    """
    Generate flashcards based on the provided template and input fields.

    This endpoint uses AI to generate flashcard content based on a template
    structure and user-provided input fields. The generation process includes
    logging the request and response for analytics purposes.

    Args:
        request: FlashcardGenerationRequest containing template ID and input fields
        pocketbase_client: Authenticated PocketBase client injected via dependency

    Returns:
        FlashcardGenerationResponse: Generated flashcard fields and content

    Raises:
        HTTPException: If authentication fails, template not found, or generation fails
    """
    template = pocketbase_client.get_template(request.templateId)
    template_fields = pocketbase_client.get_template_fields(request.templateId)

    return await agent.generate_flashcards(request, template, template_fields, pocketbase_client)

@app.post("/flashcards/generate")
async def generate_flashcards(request: FlashcardRequest):
    template = pocketbase_client.get_template(request.template)
    template_fields = pocketbase_client.get_template_fields(request.template)

    return await agent.generate_flashcards(request, template, template_fields)


@app.post("/flashcards/review")
async def review_flashcard(request: FlashcardReviewRequest):
    print(f"Received payload: {request.model_dump_json()}")

    card, review_log = review_card(request.flashcard_id, request.rating)
    return {
        "card": card.to_dict(),
        "review_log": review_log.to_dict()
    }