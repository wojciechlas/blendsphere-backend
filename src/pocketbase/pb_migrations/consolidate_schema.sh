#!/bin/bash

# BlendSphere PocketBase Schema Consolidation Script
# This script consolidates individual collection JSON files into a complete schema

COLLECTIONS_DIR="$(dirname "$0")/collections"
OUTPUT_FILE="$(dirname "$0")/consolidated_schema.json"
BACKUP_FILE="$(dirname "$0")/consolidated_schema_backup.json"

echo "🔄 Consolidating BlendSphere PocketBase schema..."

# Backup existing schema
if [ -f "/home/wlas/BlendSphere/pocketbase/pb_migrations/pb_schema.json" ]; then
    cp "/home/wlas/BlendSphere/pocketbase/pb_migrations/pb_schema.json" "$BACKUP_FILE"
    echo "✅ Backed up existing schema to pb_schema_backup.json"
fi

# Start building the complete schema - create an array of collection objects
echo "[" > "$OUTPUT_FILE"

# Add each collection to the schema
FIRST=true
for collection_file in "$COLLECTIONS_DIR"/*.json; do
    if [ -f "$collection_file" ]; then
        if [ "$FIRST" = true ]; then
            FIRST=false
        else
            echo "," >> "$OUTPUT_FILE"
        fi
        
        # Add the collection content with proper indentation
        cat "$collection_file" >> "$OUTPUT_FILE"
        
        collection_name=$(basename "$collection_file" .json)
        echo "✅ Added collection: $collection_name"
    fi
done

# Close the schema array
echo "" >> "$OUTPUT_FILE"
echo "]" >> "$OUTPUT_FILE"

echo ""
echo "🎉 Schema consolidation complete!"
echo "📁 Complete schema saved to: $OUTPUT_FILE"
echo "📁 Original schema backed up to: $BACKUP_FILE"
echo ""
echo "📊 Collection Summary:"
echo "====================="

# Count and list collections
SYSTEM_COUNT=0
BASE_COUNT=0

for collection_file in "$COLLECTIONS_DIR"/*.json; do
    if [ -f "$collection_file" ]; then
        collection_name=$(basename "$collection_file" .json)
        if [[ "$collection_name" == _* ]]; then
            SYSTEM_COUNT=$((SYSTEM_COUNT + 1))
            echo "🔐 System: $collection_name"
        else
            BASE_COUNT=$((BASE_COUNT + 1))
            echo "📦 Base: $collection_name"
        fi
    fi
done

echo ""
echo "📈 Total Collections: $((SYSTEM_COUNT + BASE_COUNT))"
echo "🔐 System Collections: $SYSTEM_COUNT"
echo "📦 Base Collections: $BASE_COUNT"
echo ""
echo "🚀 Ready to import into PocketBase!"
echo ""
echo "Next steps:"
echo "1. Copy $OUTPUT_FILE to your PocketBase admin interface"
echo "2. Or use the import_collections.sh script"
echo "3. Verify all relationships and access rules"
