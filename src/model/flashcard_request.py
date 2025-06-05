from pydantic import BaseModel
from typing import List

class FlashcardRequest(BaseModel):
    template: str
    words: List[str]