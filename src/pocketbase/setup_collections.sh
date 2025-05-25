#!/bin/bash

# Setup BlendSphere Collections in PocketBase
# This script creates the necessary collections for BlendSphere

set -e

POCKETBASE_URL="http://127.0.0.1:8090"

echo "Setting up BlendSphere collections in PocketBase..."

# Check if PocketBase is running
if ! curl -s -f "${POCKETBASE_URL}/api/health" > /dev/null 2>&1; then
    echo "Error: PocketBase is not running. Please start it with './run_pocketbase.sh'"
    exit 1
fi

echo "✓ PocketBase is running"

# Note: Collections should be created through the admin UI or migrations
# This script serves as documentation of the required collections

echo ""
echo "Required collections for BlendSphere:"
echo ""
echo "Core Collections:"
echo "  - users (built-in auth collection)"
echo "  - templates (flashcard templates)"
echo "  - fields (template fields)"
echo "  - decks (flashcard decks)"
echo "  - flashcards (individual flashcards)"
echo ""
echo "Class Management:"
echo "  - classes (teacher classes)"
echo "  - classEnrollments (student enrollments)"
echo "  - lessons (class lessons)"
echo ""
echo "Study System:"
echo "  - studySessions (study session records)"
echo "  - flashcardReviews (individual card reviews)"
echo ""
echo "Social Features:"
echo "  - posts (community posts)"
echo "  - comments (post comments)"
echo "  - reactions (likes, etc.)"
echo ""
echo "AI Features:"
echo "  - aiPrompts (AI generation prompts)"
echo "  - authMethods (authentication methods)"
echo ""
echo "To create these collections:"
echo "1. Open the Admin UI: ${POCKETBASE_URL}/_/"
echo "2. Create your superuser account (first time only)"
echo "3. Navigate to Collections and create the above collections"
echo "4. Or import a schema if you have migration files"
echo ""
echo "Frontend services are already configured to use these collections."
echo "See: src/lib/services/ for the service implementations"
