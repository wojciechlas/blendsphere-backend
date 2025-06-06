from fastapi import FastAPI
from src.agent.flashcard_agent import FlashcardAgent
from src.model.flashcard_request import FlashcardRequest
from src.pb_utils.client import Client
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

agent = FlashcardAgent()

pocketbase_client = Client("http://127.0.0.1:8090/")
user_data = pocketbase_client.collection("users").auth_with_password(
    "test@test.pl", "test1234")
print(f"User token valid: {user_data.is_valid}")

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/health")
async def health():
    return {"status": "ok"}

@app.post("/flashcards/generate")
async def generate_flashcards(request: FlashcardRequest):
    template = pocketbase_client.get_template(request.template)
    template_fields = pocketbase_client.get_template_fields(request.template)

    return await agent.generate_flashcards(request, template, template_fields)


from src.model.flashcard_review_request import FlashcardReviewRequest
from src.fsrs.fsrs_manager import review_card

@app.post("/flashcards/review")
async def review_flashcard(request: FlashcardReviewRequest):
    print(f"Received payload: {request.dict()}")

    card, review_log = await review_card(request.flashcard_id, request.rating)
    return {
        "card": card.to_dict(),
        "review_log": review_log.to_dict()
    }