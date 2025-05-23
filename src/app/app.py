from fastapi import FastAPI
from src.agent.flashcard_agent import FlashcardAgent
from src.model.flashcard_request import FlashcardRequest

app = FastAPI()

agent = FlashcardAgent()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.post("/flashcards")
async def generate_flashcards(request: FlashcardRequest):
    return await agent.generate_flashcards(request)