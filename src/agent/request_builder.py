from string import Template

from pocketbase.models.utils import ListResult


def __get_example_string__(template_fields: ListResult):
    example = ""
    for field in template_fields.items:
        example = example + f"{field.label}: {field.example},\n"

    return example

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
            language: {field.language},
            label: {field.label},
            description: {field.description},
            inputs: {__get_inputs_string__(field)}
        }},\n"""

    fields = fields + "]\n"
    return fields

def build_flashcard_request(template, template_fields):
    flashcard_template = f"""
            {{
                "nativeLanguage": {template.native_language},
                "learningLanguage": {template.learning_language},
                "languageLevel": {template.language_level},
                "example": {{
                    {__get_example_string__(template_fields)}
                }},
                "fields": {__generate_fields__(template_fields)}
            }}"""

    return Template(flashcard_template)