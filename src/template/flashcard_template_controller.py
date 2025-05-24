from fastapi import APIRouter, HTTPException

from . import flashcard_template_models as models
from . import flashcard_template_repository as repository

router = APIRouter(
    prefix="/flashcard-templates",
    tags=["flashcard-templates"]
)


@router.post("/", response_model=int)
def create_flashcard_template(template: models.FlashcardTemplate):
    return repository.create_flashcard_template(template)


# @router.get("/", response_model=List[models.FlashcardTemplate])
# def read_flashcard_templates(skip: int = 0, limit: int = 100):
#     return repository.get_flashcard_templates( skip=skip, limit=limit)

@router.get("/{template_id}", response_model=models.FlashcardTemplate)
def get_flashcard_template_by_id(template_id: int):
    template = repository.get_flashcard_template(template_id)
    if template is None:
        raise HTTPException(status_code=404, detail="Template not found")
    return template


@router.put("/{template_id}", response_model=models.FlashcardTemplate)
def update_flashcard_template(template_id: int, template: models.FlashcardTemplate):
    updated = repository.update_flashcard_template(template_id, template)
    if updated is None:
        raise HTTPException(status_code=404, detail="Template not found")
    return updated


@router.delete("/{template_id}", response_model=models.FlashcardTemplate)
def delete_flashcard_template(template_id: int):
    deleted = repository.delete_flashcard_template(template_id)
    if deleted is None:
        raise HTTPException(status_code=404, detail="Template not found")
    return deleted


class ResponseWrapper:
    def __init__(self, data):
        self.data = data
