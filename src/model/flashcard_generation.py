from pydantic import BaseModel, Field
from typing import List, Optional


class GenerationFieldData(BaseModel):
    """
    Represents a single field's data in flashcard generation.
    
    This model encapsulates the data for individual fields within flashcards,
    including field identification, optional flashcard association, and the
    actual content value.
    """
    fieldId: str = Field(..., description="Foreign key reference to the fields collection")
    flashcardId: Optional[int] = Field(None, description="Optional flashcard ID for batch generation")
    value: str = Field(..., description="Field content value (e.g., 'Ciao', 'Cześć', 'Ciao, come stai?')")


class FlashcardGenerationRequest(BaseModel):
    """
    Request model for flashcard generation API endpoint.
    
    Contains all necessary information to generate flashcards including
    the template to use and the input field data provided by the user.
    """
    templateId: str = Field(..., description="ID of the template to use for generation")
    batchContext: Optional[str] = Field(None, description="Optional context for batch generation")
    inputFields: List[GenerationFieldData] = Field(..., description="List of input field data for generation")


class FlashcardGenerationResponse(BaseModel):
    """
    Response model containing generated flashcard data.
    
    Returns the complete set of generated field values for all flashcards
    created during the generation process.
    """
    fields: List[GenerationFieldData] = Field(..., description="List of generated flashcard fields with values")