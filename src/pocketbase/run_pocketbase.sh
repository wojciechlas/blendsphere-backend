#!/bin/bash

# PocketBase Run Script for BlendSphere
# This script starts the PocketBase server with the correct configuration

set -e

# Function to find and load .env file from project root
load_env_file() {
    local env_file="../../.env"
    
    # Check if .env file exists in the expected location
    if [ -f "$env_file" ]; then
        echo "Loading environment variables from $env_file..."
        
        # Export all variables from .env file
        set -a
        source "$env_file"
        set +a
        
        echo "✓ Environment variables loaded successfully"
        return 0
    else
        echo "⚠ Warning: .env file not found at $env_file"
        echo "   Please ensure the .env file exists in the project root"
        return 1
    fi
}

# Load environment variables
load_env_file

# Check if PocketBase binary exists
if [ ! -f "./pocketbase" ]; then
    echo "❌ PocketBase binary not found. Please run './install_pocketbase.sh' first."
    exit 1
fi

# Set default values for environment variables if not already set
export POCKETBASE_URL="${POCKETBASE_URL:-http://127.0.0.1:8090}"
export POCKETBASE_SUPERUSER_EMAIL="${POCKETBASE_SUPERUSER_EMAIL:-admin@example.com}"
export POCKETBASE_SUPERUSER_PASSWORD="${POCKETBASE_SUPERUSER_PASSWORD:-password12345}"

# Extract host and port from POCKETBASE_URL for serve command
POCKETBASE_HOST=$(echo "$POCKETBASE_URL" | sed -E 's|^https?://([^:/]+)(:[0-9]+)?.*|\1|')
POCKETBASE_PORT=$(echo "$POCKETBASE_URL" | sed -E 's|^https?://[^:]+:?([0-9]+)?.*|\1|')

# Use default port if not specified
if [ -z "$POCKETBASE_PORT" ] || [ "$POCKETBASE_PORT" = "$POCKETBASE_HOST" ]; then
    POCKETBASE_PORT="8090"
fi

# Use localhost if host is not properly extracted
if [ -z "$POCKETBASE_HOST" ] || [ "$POCKETBASE_HOST" = "$POCKETBASE_URL" ]; then
    POCKETBASE_HOST="127.0.0.1"
fi

echo "🚀 Starting PocketBase server..."
echo "📊 Admin UI will be available at: http://$POCKETBASE_HOST:$POCKETBASE_PORT/_/"
echo "🔌 API will be available at: http://$POCKETBASE_HOST:$POCKETBASE_PORT/api/"
echo "🌐 POCKETBASE_URL: $POCKETBASE_URL"
echo "👤 Superuser Email: $POCKETBASE_SUPERUSER_EMAIL"
echo ""
echo "📝 Environment variables loaded:"
echo "   • GEMINI_API_KEY: ${GEMINI_API_KEY:+[SET]}${GEMINI_API_KEY:-[NOT SET]}"
echo "   • SMTP_HOST: ${SMTP_HOST:-[NOT SET]}"
echo "   • SMTP_PORT: ${SMTP_PORT:-[NOT SET]}"
echo "   • SMTP_USERNAME: ${SMTP_USERNAME:+[SET]}${SMTP_USERNAME:-[NOT SET]}"
echo "   • SENDER_ADDRESS: ${SENDER_ADDRESS:-[NOT SET]}"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start PocketBase with all environment variables and serve on the configured host:port
exec ./pocketbase serve --http="$POCKETBASE_HOST:$POCKETBASE_PORT"