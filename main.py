"""
Main entry point for the BlendSphere FastAPI application.

This module configures and starts the FastAPI server using uvicorn,
with environment-based configuration for port and other settings.
"""

import uvicorn
import os
from dotenv import load_dotenv


def main() -> None:
    """
    Initialize and start the FastAPI application server.
    
    This function loads environment variables, configures the server port,
    and starts the uvicorn server with the FastAPI application. The server
    is configured for development with auto-reload enabled.
    
    Environment Variables:
        PORT: Server port number (defaults to 8000)
    """
    # Load environment variables
    load_dotenv()
    
    # Get port from environment variable, default to 8000
    port: int = int(os.getenv("PORT", "8000"))
    
    # Run the FastAPI app with uvicorn
    uvicorn.run(
        "src.app.app:app",
        host="0.0.0.0",
        port=port,
        reload=True
    )


if __name__ == "__main__":
    main()
