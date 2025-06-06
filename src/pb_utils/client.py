from pocketbase import PocketBase


class Client(PocketBase):
    def __init__(self, url, **kwargs):
        super().__init__(url, **kwargs)

    def get_template(self, template_id):
        return self.collection("templates").get_one(template_id)

    def get_template_fields(self, field_id):
        return self.collection("fields").get_list(query_params = {"filter": f"template='{field_id}'"})

    def get_flashcard(self, flashcard_id):
        return self.collection("flashcards").get_one(flashcard_id)

    def update_flashcard(self, flashcard_id, data):
        return self.collection("flashcards").update(flashcard_id, data)

    def save_flashcard_review(self, flashcard_id, review_data):
        return self.collection("flashcard_reviews").create({
            "flashcard": flashcard_id,
            **review_data
        })