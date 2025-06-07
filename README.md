# blendsphere-backend
Backend of BlendSphere - a blended learning app

## Running the application

To run the app, you have to create an .env file in the
root folder with your GEMINI_API_KEY and optionally set the PORT.
Then, you can run the application in one of the following ways:

### Option 1: Using Docker (Recommended for Production)

This option runs both FastAPI and PocketBase services in optimized Docker containers with multi-stage builds to minimize image size.

#### Quick Start

1. **Setup environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env file with your actual configuration values
   ```

2. **Start services (Production mode):**
   ```bash
   ./docker-start.sh start
   ```

3. **Start services (Development mode with hot-reloading):**
   ```bash
   ./docker-start.sh dev
   ```

#### Available Docker Commands

```bash
./docker-start.sh start      # Production mode (optimized images)
./docker-start.sh dev        # Development mode (with hot-reloading)
./docker-start.sh stop       # Stop all services
./docker-start.sh restart    # Restart services
./docker-start.sh logs       # View service logs
./docker-start.sh status     # Check service status
./docker-start.sh build      # Build production images
./docker-start.sh build-dev  # Build development images
./docker-start.sh clean      # Clean up Docker resources
```

#### Manual Docker Compose

```bash
# Production mode (optimized images)
docker-compose up -d

# Development mode (with volume mounts for hot-reloading)
docker-compose -f docker-compose.dev.yml up -d
```

#### Service Access

- **FastAPI Backend:** http://localhost:8000
- **FastAPI Docs:** http://localhost:8000/docs  
- **PocketBase Admin:** http://localhost:8090/_/
- **PocketBase API:** http://localhost:8090/api/

#### Docker Optimization Features

- **Multi-stage builds:** Separate build and runtime dependencies
- **Minimal base images:** Python slim and Alpine Linux for smaller images
- **Service separation:** FastAPI and PocketBase run in separate optimized containers
- **Health checks:** Built-in health monitoring for both services
- **Development mode:** Hot-reloading support with volume mounts
- **Security:** Non-root user execution

### Option 2: Using the main.py script (Development)
```bash
uv run python main.py
```
This will read the PORT from your .env file (defaults to 8000 if not set).

### Option 3: Using uvicorn directly (Development)
```bash
uv run uvicorn src.app.app:app --reload --port 8000
```
Replace 8000 with your desired port number.

**Note:** For options 2 and 3, you'll need to start PocketBase separately:
```bash
cd src/pocketbase
./install_pocketbase.sh  # First time only
./run_pocketbase.sh
```