#!/bin/bash

# PocketBase Run Script for BlendSphere
# This script starts the PocketBase server with the correct configuration

set -e

# Check if PocketBase binary exists
if [ ! -f "./pocketbase" ]; then
    echo "PocketBase binary not found. Please run './install_pocketbase.sh' first."
    exit 1
fi

echo "Starting PocketBase server..."
echo "Admin UI will be available at: http://127.0.0.1:8090/_/"
echo "API will be available at: http://127.0.0.1:8090/api/"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start PocketBase with migrations auto-applied
./pocketbase serve --http="127.0.0.1:8090"
