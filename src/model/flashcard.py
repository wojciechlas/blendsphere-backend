# define pydantic model and parse the template
from pydantic import BaseModel
from typing import List, Dict

class FlashcardField(BaseModel):
    id: int
    type: str
    isInput: bool
    language: str
    label: str
    description: str

class FlashcardStyles(BaseModel):
    backgroundColor: str
    fontSize: int
    fontFamily: str

class FlashcardTemplate(BaseModel):
    name: str
    type: str
    description: str
    version: str
    author: str
    tags: List[str]
    nativeLanguage: str
    learningLanguage: str
    languageLevel: str
    example: Dict[str, str]
    fields: List[FlashcardField]
    styles: FlashcardStyles
    front: str
    back: str