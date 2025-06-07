from string import Template
from typing import Any, Dict, cast

from pocketbase.models import Record
from pocketbase.models.utils import ListResult


def __get_inputs_string__(field: Any) -> str:
    """
    Determine the input string based on field type.

    Args:
        field: Field object with is_input attribute

    Returns:
        str: "$inputs" if field is input, "[]" otherwise
    """
    if field.is_input:
        return "$inputs"
    else:
        return "[]"


def __generate_fields__(template_fields: ListResult) -> str:
    """
    Generate a JSON string representation of template fields.

    This function converts a list of template fields into a structured JSON format
    that can be used in the AI prompt for flashcard generation.

    Args:
        template_fields: ListResult containing template field records    Returns:
        str: JSON-formatted string representation of all template fields
    """
    fields = "["
    for field in template_fields.items:
        fields = (
            fields
            + f"""{{
            id: {field.id},
            type: {field.type},
            isInput: {field.is_input},
            language: {field.language},
            label: {field.label},
            description: {field.description},
            example: {field.example},
        }},\n"""
        )

    fields = fields + "]"
    return fields


def build_flashcard_request(template: Record, template_fields: ListResult) -> Template:
    """
    Build a Template object for AI flashcard generation requests.

    This function creates a structured template that combines template metadata
    with field definitions to form a complete context for AI flashcard generation.
    The template uses string substitution to allow dynamic input injection.

    Args:
        template: PocketBase template record containing metadata like name, description,
                 languages, and level information
        template_fields: ListResult containing all field definitions for the template

    Returns:
        Template: String template object with placeholder for inputs that can be
                 substituted with actual input data during generation
    """  # Cast Record to Dict to help mypy understand it supports dictionary-like access
    template_dict = cast(Dict[str, Any], template)

    flashcard_template = f"""
            {{
                "name": "{template.name}",
                "description": "{template.description}",
                "nativeLanguage": "{template.native_language}",
                "learningLanguage": "{template.learning_language}",
                "languageLevel": "{template.language_level}",
                "fields": {__generate_fields__(template_fields)},
                "inputs": "$inputs"
            }}"""

    return Template(flashcard_template)
