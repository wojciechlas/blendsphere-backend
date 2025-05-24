from src.template.flashcard_template_controller import router as flashcard_template_router
from fastapi import FastAPI
app = FastAPI()
app.include_router(flashcard_template_router)


def main():
    print("Starting blendsphere-backend!")
    app.include_router(flashcard_template_router)


if __name__ == "__main__":
    print("Starting blendsphere-backend!")
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
