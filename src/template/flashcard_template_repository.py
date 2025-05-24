from peewee import (
    Model, CharField, TextField, BooleanField, ForeignKeyField,
    SqliteDatabase
)

from src.template.flashcard_template_models import FlashcardTemplate, FlashcardField

db = SqliteDatabase('flashcards.db')

class Entity(Model):
    class Meta:
        database = db

class FlashcardTemplateRecord(Entity):
    name = CharField()
    type = CharField()
    description = TextField()
    version = CharField()
    author = CharField()
    tags = TextField()
    nativeLanguage = CharField()
    learningLanguage = CharField()
    languageLevel = CharField()
    example = TextField()
    front = TextField()
    back = TextField()

class FlashcardFieldRecord(Entity):
    template = ForeignKeyField(FlashcardTemplateRecord, backref='fields')
    type = CharField()
    isInput = BooleanField()
    language = CharField()
    label = CharField()
    description = TextField()


import json

def init_db(db_path: str = "flashcards.db"):
    db.init(db_path)
    db.connect()
    db.create_tables([FlashcardTemplateRecord, FlashcardFieldRecord], safe=True)


def create_flashcard_template(data: FlashcardTemplate) -> int:
    template = FlashcardTemplateRecord.create(
        name=data.name,
        type=data.type,
        description=data.description,
        version=data.version,
        author=data.author,
        tags=",".join(data.tags),
        nativeLanguage=data.nativeLanguage,
        learningLanguage=data.learningLanguage,
        languageLevel=data.languageLevel,
        example=json.dumps(data.example),
        front=data.front,
        back=data.back
    )
    for field in data.fields:
        FlashcardFieldRecord.create(
            template=template,
            type=field.type,
            isInput=field.isInput,
            language=field.language,
            label=field.label,
            description=field.description
        )
    return template.id


def get_flashcard_template(template_id: int) -> FlashcardTemplate | None:
    try:
        template = FlashcardTemplateRecord.get_by_id(template_id)
        fields = [
            FlashcardField(
                id=field.id,
                type=field.type,
                isInput=field.isInput,
                language=field.language,
                label=field.label,
                description=field.description
            )
            for field in template.fields
        ]
        return FlashcardTemplate(
            name=template.name,
            type=template.type,
            description=template.description,
            version=template.version,
            author=template.author,
            tags=template.tags.split(","),
            nativeLanguage=template.nativeLanguage,
            learningLanguage=template.learningLanguage,
            languageLevel=template.languageLevel,
            example=json.loads(template.example),
            fields=fields,
            front=template.front,
            back=template.back
        )
    except FlashcardTemplateRecord.DoesNotExist:
        return None

def update_flashcard_template(template_id: int, data: FlashcardTemplate) -> bool:
    try:
        template = FlashcardTemplateRecord.get_by_id(template_id)
        template.name = data.name
        template.type = data.type
        template.description = data.description
        template.version = data.version
        template.author = data.author
        template.tags = ",".join(data.tags)
        template.nativeLanguage = data.nativeLanguage
        template.learningLanguage = data.learningLanguage
        template.languageLevel = data.languageLevel
        template.example = json.dumps(data.example)
        template.front = data.front
        template.back = data.back
        template.save()

        # remove old fields and add new ones
        FlashcardFieldRecord.delete().where(FlashcardFieldRecord.template == template).execute()
        for field in data.fields:
            FlashcardFieldRecord.create(
                template=template,
                type=field.type,
                isInput=field.isInput,
                language=field.language,
                label=field.label,
                description=field.description
            )
        return True
    except FlashcardTemplateRecord.DoesNotExist:
        return False

def delete_flashcard_template(template_id: int) -> bool:
    try:
        template = FlashcardTemplateRecord.get_by_id(template_id)
        FlashcardFieldRecord.delete().where(FlashcardFieldRecord.template == template).execute()
        template.delete_instance()
        return True
    except FlashcardTemplateRecord.DoesNotExist:
        return False


if __name__ == "__main__":
    init_db()
