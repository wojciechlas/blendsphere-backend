from template.flashcard_template_controller import router as flashcard_template_router
from fastapi import FastAPI
app = FastAPI()

def main():
    print("Hello from blendsphere-backend!")
    app.include_router(flashcard_template_router)


if __name__ == "__main__":
    main()
