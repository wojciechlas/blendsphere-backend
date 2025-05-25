#!/bin/bash

# BlendSphere PocketBase Setup Verification Script
# This script verifies that PocketBase is running and all collections are properly imported

set -e

POCKETBASE_URL="http://127.0.0.1:8090"
API_URL="${POCKETBASE_URL}/api"
HEALTH_URL="${API_URL}/health"
FRONTEND_URL="http://localhost:5174"

echo "🔍 BlendSphere PocketBase Setup Verification"
echo "=============================================="
echo ""

# Check if PocketBase binary exists
if [ -f "./pocketbase" ]; then
    echo "✓ PocketBase binary is installed"
    VERSION=$(./pocketbase --version 2>/dev/null || echo "Unknown")
    echo "  Version: $VERSION"
else
    echo "✗ PocketBase binary not found"
    echo "  Run: ./install_pocketbase.sh"
    exit 1
fi

echo ""

# Check if PocketBase is running
echo "1. Testing PocketBase Connection"
if curl -s "$HEALTH_URL" > /dev/null 2>&1; then
    echo "   ✅ PocketBase is running and responding"
    echo "   🌐 Admin UI: ${POCKETBASE_URL}/_/"
    echo "   📚 API Docs: ${POCKETBASE_URL}/_/#/docs"
    
    # Get version from API
    API_VERSION=$(curl -s "$HEALTH_URL" 2>/dev/null | grep -o '"version":"[^"]*' | cut -d'"' -f4 || echo "Unknown")
    echo "   📦 Version: $API_VERSION"
else
    echo "   ❌ PocketBase is not responding at $HEALTH_URL"
    echo "   💡 Try running: ./run_pocketbase.sh"
    exit 1
fi

echo ""

# Check collections
echo "2. Verifying Collections Schema"
COLLECTIONS_RESPONSE=$(curl -s "${API_URL}/collections" 2>/dev/null || echo "ERROR")

if [ "$COLLECTIONS_RESPONSE" = "ERROR" ]; then
    echo "   ❌ Could not fetch collections list"
    echo "   💡 Make sure PocketBase admin account is created"
    exit 1
fi

# Parse collection count
COLLECTION_COUNT=$(echo "$COLLECTIONS_RESPONSE" | grep -o '"name"' | wc -l)
echo "   📊 Found $COLLECTION_COUNT collections"

# Check for required collections
echo ""
echo "3. Checking Required Collections"

# Define required collections by category
SYSTEM_COLLECTIONS=("_authOrigins" "_externalAuths" "_mfas" "_otps" "_superusers")
CORE_COLLECTIONS=("users" "templates" "fields" "decks" "flashcards" "aiPrompts" "authMethods")
EDU_COLLECTIONS=("classes" "classEnrollments" "lessons")
STUDY_COLLECTIONS=("studySessions" "flashcardReviews")
SOCIAL_COLLECTIONS=("posts" "comments" "reactions")

ALL_REQUIRED=(${SYSTEM_COLLECTIONS[@]} ${CORE_COLLECTIONS[@]} ${EDU_COLLECTIONS[@]} ${STUDY_COLLECTIONS[@]} ${SOCIAL_COLLECTIONS[@]})
MISSING_COLLECTIONS=()

echo "   🔐 System Collections:"
for collection in "${SYSTEM_COLLECTIONS[@]}"; do
    if echo "$COLLECTIONS_RESPONSE" | grep -q "\"name\":\"$collection\""; then
        echo "      ✅ $collection"
    else
        echo "      ❌ $collection (missing)"
        MISSING_COLLECTIONS+=("$collection")
    fi
done

echo "   📦 Core Collections:"
for collection in "${CORE_COLLECTIONS[@]}"; do
    if echo "$COLLECTIONS_RESPONSE" | grep -q "\"name\":\"$collection\""; then
        echo "      ✅ $collection"
    else
        echo "      ❌ $collection (missing)"
        MISSING_COLLECTIONS+=("$collection")
    fi
done

echo "   🎓 Educational Collections:"
for collection in "${EDU_COLLECTIONS[@]}"; do
    if echo "$COLLECTIONS_RESPONSE" | grep -q "\"name\":\"$collection\""; then
        echo "      ✅ $collection"
    else
        echo "      ❌ $collection (missing)"
        MISSING_COLLECTIONS+=("$collection")
    fi
done

echo "   📚 Study Collections:"
for collection in "${STUDY_COLLECTIONS[@]}"; do
    if echo "$COLLECTIONS_RESPONSE" | grep -q "\"name\":\"$collection\""; then
        echo "      ✅ $collection"
    else
        echo "      ❌ $collection (missing)"
        MISSING_COLLECTIONS+=("$collection")
    fi
done

echo "   👥 Social Collections:"
for collection in "${SOCIAL_COLLECTIONS[@]}"; do
    if echo "$COLLECTIONS_RESPONSE" | grep -q "\"name\":\"$collection\""; then
        echo "      ✅ $collection"
    else
        echo "      ❌ $collection (missing)"
        MISSING_COLLECTIONS+=("$collection")
    fi
done

echo ""

# Schema files check
echo "4. Checking Schema Files"
if [ -f "./pb_migrations/pb_schema_complete.json" ]; then
    echo "   ✅ Complete schema file exists"
    SCHEMA_SIZE=$(du -h ./pb_migrations/pb_schema_complete.json | cut -f1)
    echo "   📄 Size: $SCHEMA_SIZE"
else
    echo "   ❌ Complete schema file missing"
    echo "   💡 Run: cd pb_migrations && ./consolidate_schema.sh"
fi

if [ -d "./pb_migrations/collections" ]; then
    INDIVIDUAL_COUNT=$(find ./pb_migrations/collections -name "*.json" | wc -l)
    echo "   ✅ Individual collection files: $INDIVIDUAL_COUNT"
else
    echo "   ❌ Individual collection files missing"
fi

echo ""

# Summary and recommendations
echo "5. Setup Summary"
echo "================"

if [ ${#MISSING_COLLECTIONS[@]} -eq 0 ]; then
    echo "🎉 SUCCESS: All required collections are present!"
    echo "📊 Total collections: $COLLECTION_COUNT"
    echo "✅ BlendSphere is ready for development!"
    echo ""
    echo "🚀 Next Steps:"
    echo "   • Start frontend: cd ../frontend && npm run dev"
    echo "   • Access admin: ${POCKETBASE_URL}/_/"
    echo "   • View API docs: ${POCKETBASE_URL}/_/#/docs"
else
    echo "⚠️  INCOMPLETE SETUP: Missing ${#MISSING_COLLECTIONS[@]} collections"
    echo "Missing: ${MISSING_COLLECTIONS[*]}"
    echo ""
    echo "🔧 To Fix This:"
    echo "   1. Open admin dashboard: ${POCKETBASE_URL}/_/"
    echo "   2. Go to Settings → Import collections"
    echo "   3. Upload: pb_migrations/pb_schema_complete.json"
    echo "   4. Click Import"
    echo "   5. Run verification again: ./verify_setup.sh"
    exit 1
fi

echo ""

# Frontend integration check
echo "6. Frontend Integration Check"
FRONTEND_DIR="../frontend"
if [ -d "$FRONTEND_DIR" ]; then
    echo "   ✅ Frontend directory found"
    
    # Check PocketBase configuration
    if [ -f "$FRONTEND_DIR/src/lib/pocketbase.ts" ]; then
        echo "   ✅ PocketBase client configured"
    else
        echo "   ❌ PocketBase client not found"
    fi
    
    # Check environment file
    if [ -f "$FRONTEND_DIR/.env" ]; then
        if grep -q "VITE_POCKETBASE_URL" "$FRONTEND_DIR/.env"; then
            CONFIGURED_URL=$(grep "VITE_POCKETBASE_URL" "$FRONTEND_DIR/.env" | cut -d'=' -f2)
            echo "   ✅ Environment configured: $CONFIGURED_URL"
        else
            echo "   ⚠️  VITE_POCKETBASE_URL not found in .env"
        fi
    else
        echo "   ⚠️  Frontend .env file not found"
    fi
    
    # Check if frontend is running
    if curl -s -f "$FRONTEND_URL" > /dev/null 2>&1; then
        echo "   ✅ Frontend server running at $FRONTEND_URL"
    else
        echo "   ℹ️  Frontend server not running"
        echo "      Start with: cd $FRONTEND_DIR && npm run dev"
    fi
else
    echo "   ℹ️  Frontend directory not found (../frontend)"
fi

echo ""
echo "📚 Useful Commands:"
echo "   ./test_connection.sh              - Test basic connectivity"
echo "   ./run_pocketbase.sh               - Start/restart PocketBase"
echo "   ./verify_setup.sh                 - Run this verification again"
echo "   cd pb_migrations && ./consolidate_schema.sh - Rebuild schema"
echo ""
