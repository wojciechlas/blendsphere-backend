# blendsphere-backend
Backend of BlendSphere - a blended learning app

## Running the application.
To run the app, you have to create an .env file in the
root folder with your GEMINI_API_KEY.
Then, you can run the following command, also from root folder:

``uv run uvicorn src.app.app:app --reload --port 8000``