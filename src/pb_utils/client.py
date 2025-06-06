from pocketbase import PocketBase


class Client(PocketBase):
    def __init__(self, url, **kwargs):
        super().__init__(url, **kwargs)

    def get_template(self, template_id: str):
        return self.collection("templates").get_one(template_id)

    def get_template_fields(self, template_id: str):
        return self.collection("fields").get_list(query_params = {"filter": f"template='{template_id}'"})

    