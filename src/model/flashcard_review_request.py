from pydantic import BaseModel

class FlashcardReviewRequest(BaseModel):
    flashcard_id: str
    rating: int