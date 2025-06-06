from pydantic import BaseModel
from typing import List, Optional

class GenerationFieldData(BaseModel):
    fieldId: str # foreign key to fields collection
    flashcardId: Optional[int] = None  # optional, used for batch generation
    value: str # value of the field, e.g. "Ciao", "Cześć", "Ciao, come stai?"

class FlashcardGenerationRequest(BaseModel):
    templateId: str
    batchContext: Optional[str] = None
    inputFields: List[GenerationFieldData]

class FlashcardGenerationResponse(BaseModel):
    fields: List[GenerationFieldData]  # List of generated flashcards with field values