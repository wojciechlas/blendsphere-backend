# define pydantic model and parse the template
from pydantic import BaseModel
from typing import List, Dict

class Field(BaseModel):
    id: int
    type: str
    isInput: bool
    language: str
    label: str
    description: str

class TemplateStyles(BaseModel):
    backgroundColor: str
    fontSize: int
    fontFamily: str

class Template(BaseModel):
    name: str
    description: Optional[str] = None
    version: str
    author: str
    nativeLanguage: str
    learningLanguage: str
    languageLevel: str
    frontLayout: str # HTML with placeholders
    backLayout: str # HTML with placeholders
    fields: List[Field]
    styles: TemplateStyles
