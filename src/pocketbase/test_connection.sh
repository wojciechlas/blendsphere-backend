#!/bin/bash

# Test PocketBase Connection Script
# This script tests if PocketBase is running and accessible

POCKETBASE_URL="http://127.0.0.1:8090"

echo "Testing PocketBase connection..."

# Test if PocketBase is responding
if curl -s -f "${POCKETBASE_URL}/api/health" > /dev/null 2>&1; then
    echo "✓ PocketBase is running and accessible at ${POCKETBASE_URL}"
    echo "✓ Health endpoint is responding"
    
    # Get version info
    VERSION_INFO=$(curl -s "${POCKETBASE_URL}/api/health" | grep -o '"version":"[^"]*' | cut -d'"' -f4)
    if [ ! -z "$VERSION_INFO" ]; then
        echo "✓ PocketBase version: ${VERSION_INFO}"
    fi
    
    echo ""
    echo "Admin UI: ${POCKETBASE_URL}/_/"
    echo "API Docs: ${POCKETBASE_URL}/_/#/docs"
    echo ""
else
    echo "✗ PocketBase is not running or not accessible at ${POCKETBASE_URL}"
    echo ""
    echo "To start PocketBase:"
    echo "  ./run_pocketbase.sh"
    echo ""
    echo "If you haven't installed PocketBase yet:"
    echo "  ./install_pocketbase.sh"
    echo ""
    exit 1
fi
