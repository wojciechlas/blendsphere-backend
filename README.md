# blendsphere-backend
Backend of BlendSphere - a blended learning app

## Running the application.
To run the app, you have to create an .env file in the
root folder with your GEMINI_API_KEY and optionally set the PORT.
Then, you can run the application in one of the following ways:

### Option 1: Using the main.py script (Recommended)
```bash
uv run python main.py
```
This will read the PORT from your .env file (defaults to 8000 if not set).

### Option 2: Using uvicorn directly
```bash
uv run uvicorn src.app.app:app --reload --port 8000
```
Replace 8000 with your desired port number.