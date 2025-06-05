from pydantic import BaseModel
from typing import List, Optional

class GenerationFieldData(BaseModel):
    fieldId: str # foreign key to fields collection
    value: str # value of the field, e.g. "Ciao", "Cześć", "Ciao, come stai?"

class GenerationFlashcard(BaseModel):
    fields: List[GenerationFieldData]  # List of field values for the flashcard

class FlashcardGenerationRequest(BaseModel):
    templateId: str
    batchContext: Optional[str] = None
    inputFields: List[GenerationFieldData]

class FlashcardGenerationResponse(BaseModel):
    flashcards: List[GenerationFlashcard]  # List of generated flashcards with field values