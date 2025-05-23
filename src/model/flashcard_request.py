from pydantic import BaseModel
from typing import List

class FlashcardRequest(BaseModel):
    words: List[str]