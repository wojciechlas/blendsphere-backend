from fastapi import FastAPI, HTTPException
from src.agent.flashcard_agent import FlashcardAgent
from src.model.flashcard_request import FlashcardRequest
from src.template.flashcard_template_repository import init_db

from src.template import flashcard_template_models as models
from src.template import flashcard_template_repository as repository

app = FastAPI()

init_db()
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


@app.post("/flashcard-template/", response_model=int)
def create_flashcard_template(template: models.FlashcardTemplate):
    return repository.create_flashcard_template(template)


@app.get("/flashcard-template/{template_id}", response_model=models.FlashcardTemplate)
def get_flashcard_template_by_id(template_id: int):
    template = repository.get_flashcard_template(template_id)
    if template is None:
        raise HTTPException(status_code=404, detail="Template not found")
    return template


@app.put("/flashcard-template/{template_id}", response_model=models.FlashcardTemplate)
def update_flashcard_template(template_id: int, template: models.FlashcardTemplate):
    updated = repository.update_flashcard_template(template_id, template)
    if updated is None:
        raise HTTPException(status_code=404, detail="Template not found")
    return updated


@app.delete("/flashcard-template/{template_id}", response_model=models.FlashcardTemplate)
def delete_flashcard_template(template_id: int):
    deleted = repository.delete_flashcard_template(template_id)
    if deleted is None:
        raise HTTPException(status_code=404, detail="Template not found")
    return deleted
