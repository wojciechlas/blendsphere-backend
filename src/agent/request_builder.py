from string import Template

from pocketbase.models.utils import ListResult

def __get_inputs_string__(field):
    if field.is_input:
        return "$inputs"
    else:
        return "[]"

def __generate_fields__(template_fields: ListResult):
    fields = "["
    for field in template_fields.items:
        fields = fields + f"""{{
            id: {field.id},
            type: {field.type},
            isInput: {field.is_input},
            language: {field.language},
            label: {field.label},
            description: {field.description},
            example: {field.example},
        }},\n"""

    fields = fields + "]\n"
    return fields

def build_flashcard_request(template, template_fields):
    flashcard_template = f"""
            {{
                "name": {template.name},
                "description": {template.description},
                "nativeLanguage": {template.native_language},
                "learningLanguage": {template.learning_language},
                "languageLevel": {template.language_level},
                "fields": {__generate_fields__(template_fields)},
                "inputs": "$inputs"
            }}"""

    return Template(flashcard_template)