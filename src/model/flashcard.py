# define pydantic model and parse the template
from pydantic import BaseModel, Field as PydanticField
from typing import List, Dict, Optional


class Field(BaseModel):
    """
    Represents a template field definition.
    
    Defines the structure and properties of a field within a flashcard template,
    including its type, language, and whether it requires user input.
    """
    id: int = PydanticField(..., description="Unique identifier for the field")
    type: str = PydanticField(..., description="Field type (e.g., 'text', 'image', 'audio')")
    isInput: bool = PydanticField(..., description="Whether this field requires user input")
    language: str = PydanticField(..., description="ISO 639 language code for the field content")
    label: str = PydanticField(..., description="Human-readable label for the field")
    description: str = PydanticField(..., description="Description of what content should go in this field")


class TemplateStyles(BaseModel):
    """
    Visual styling configuration for flashcard templates.
    
    Defines the appearance and formatting options that will be applied
    to flashcards generated from this template.
    """
    backgroundColor: str = PydanticField(..., description="Background color for the flashcard")
    fontSize: int = PydanticField(..., description="Font size in pixels")
    fontFamily: str = PydanticField(..., description="Font family name")


class Template(BaseModel):
    """
    Complete flashcard template definition.
    
    Represents a complete template for generating flashcards, including
    metadata, field definitions, layout specifications, and styling options.
    This model serves as the blueprint for creating consistent flashcards
    for language learning.
    """
    name: str = PydanticField(..., description="Template name")
    description: Optional[str] = PydanticField(None, description="Template description")
    version: str = PydanticField(..., description="Template version")
    author: str = PydanticField(..., description="Template author")
    nativeLanguage: str = PydanticField(..., description="ISO 639 code for native language")
    learningLanguage: str = PydanticField(..., description="ISO 639 code for language being learned")
    languageLevel: str = PydanticField(..., description="CEFR language level (A1, A2, B1, B2, C1, C2)")
    frontLayout: str = PydanticField(..., description="HTML template for flashcard front with placeholders")
    backLayout: str = PydanticField(..., description="HTML template for flashcard back with placeholders")
    fields: List[Field] = PydanticField(..., description="List of field definitions for this template")
    styles: TemplateStyles = PydanticField(..., description="Visual styling configuration")
