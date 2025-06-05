import uvicorn
import os
from dotenv import load_dotenv

def main():
    # Load environment variables
    load_dotenv()
    
    # Get port from environment variable, default to 8000
    port = int(os.getenv("PORT", 8000))
    
    # Run the FastAPI app with uvicorn
    uvicorn.run(
        "src.app.app:app",
        host="0.0.0.0",
        port=port,
        reload=True
    )


if __name__ == "__main__":
    main()
