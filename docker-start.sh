#!/bin/bash

# BlendSphere Docker Startup Script
# This script helps you start the BlendSphere application with Docker

set -e

echo "🚀 BlendSphere Docker Startup Script"
echo "===================================="

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  .env file not found. Creating from .env.example..."
    if [ -f ".env.example" ]; then
        cp .env.example .env
        echo "✅ Created .env file from .env.example"
        echo "⚠️  Please edit .env file with your actual configuration values!"
        echo ""
    else
        echo "❌ .env.example file not found. Please create a .env file manually."
        exit 1
    fi
fi

# Load environment variables from .env file
echo "📦 Loading environment variables from .env file..."
set -a
source .env
set +a

echo "📋 Current Configuration:"
echo "   FastAPI Port: ${FASTAPI_PORT:-8000}"
echo "   PocketBase Port: ${POCKETBASE_PORT:-8090}"
echo ""

# Function to start services
start_services() {
    local compose_file="docker-compose.yml"
    local mode="production"
    
    # Check if development mode is requested
    if [[ "${1:-}" == "dev" ]] || [[ "${1:-}" == "development" ]]; then
        compose_file="docker-compose.dev.yml"
        mode="development"
        echo "🚀 Starting in development mode with hot-reloading..."
    else
        echo "🚀 Starting in production mode..."
    fi
    
    echo "🏗️  Building Docker images for $mode mode..."
    docker-compose -f "$compose_file" build

    echo "🚀 Starting services..."
    docker-compose -f "$compose_file" up -d

    echo ""
    echo "✅ Services are starting up!"
    echo ""
    echo "📊 Service URLs:"
    echo "   • FastAPI Backend: http://localhost:${FASTAPI_PORT:-8000}"
    echo "   • FastAPI Docs: http://localhost:${FASTAPI_PORT:-8000}/docs"
    echo "   • PocketBase Admin: http://localhost:${POCKETBASE_PORT:-8090}/_/"
    echo "   • PocketBase API: http://localhost:${POCKETBASE_PORT:-8090}/api/"
    echo ""
    echo "📝 To view logs: docker-compose -f $compose_file logs -f"
    echo "🛑 To stop services: docker-compose -f $compose_file down"
    echo ""
}

# Function to show logs
show_logs() {
    echo "📝 Showing service logs (Press Ctrl+C to exit)..."
    if [ -f "docker-compose.dev.yml" ] && docker-compose -f docker-compose.dev.yml ps -q >/dev/null 2>&1; then
        docker-compose -f docker-compose.dev.yml logs -f
    else
        docker-compose logs -f
    fi
}

# Function to stop services
stop_services() {
    echo "🛑 Stopping services..."
    docker-compose down 2>/dev/null || true
    docker-compose -f docker-compose.dev.yml down 2>/dev/null || true
    echo "✅ Services stopped."
}

# Function to restart services
restart_services() {
    echo "🔄 Restarting services..."
    if [ -f "docker-compose.dev.yml" ] && docker-compose -f docker-compose.dev.yml ps -q >/dev/null 2>&1; then
        docker-compose -f docker-compose.dev.yml restart
    else
        docker-compose restart
    fi
    echo "✅ Services restarted."
}

# Function to show status
show_status() {
    echo "📊 Service Status:"
    echo ""
    echo "Production services:"
    docker-compose ps
    echo ""
    echo "Development services:"
    docker-compose -f docker-compose.dev.yml ps 2>/dev/null || echo "No development services running"
}

# Parse command line arguments
case "${1:-start}" in
    "start")
        start_services "${2:-}"
        ;;
    "dev"|"development")
        start_services "dev"
        ;;
    "stop")
        stop_services
        ;;
    "restart")
        restart_services
        ;;
    "logs")
        show_logs
        ;;
    "status")
        show_status
        ;;
    "build")
        echo "🏗️  Building Docker images..."
        docker-compose build
        ;;
    "build-dev")
        echo "🏗️  Building Docker images for development..."
        docker-compose -f docker-compose.dev.yml build
        ;;
    "clean")
        echo "🧹 Cleaning up Docker resources..."
        docker-compose down -v
        docker-compose -f docker-compose.dev.yml down -v 2>/dev/null || true
        docker system prune -f
        echo "✅ Cleanup completed."
        ;;
    *)
        echo "Usage: $0 {start|dev|stop|restart|logs|status|build|build-dev|clean}"
        echo ""
        echo "Commands:"
        echo "  start     - Build and start all services in production mode (default)"
        echo "  dev       - Build and start all services in development mode with hot-reloading"
        echo "  stop      - Stop all services"
        echo "  restart   - Restart all services"
        echo "  logs      - Show service logs"
        echo "  status    - Show service status"
        echo "  build     - Build Docker images for production"
        echo "  build-dev - Build Docker images for development"
        echo "  clean     - Stop services and clean up Docker resources"
        exit 1
        ;;
esac
