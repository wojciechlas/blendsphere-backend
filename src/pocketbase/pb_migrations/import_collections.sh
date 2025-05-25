#!/bin/bash

# BlendSphere PocketBase Collection Import Script
# This script helps import individual collections or the complete schema into PocketBase

POCKETBASE_URL="${POCKETBASE_URL:-http://localhost:8090}"
COLLECTIONS_DIR="/home/wlas/BlendSphere/pocketbase/pb_migrations/collections"
COMPLETE_SCHEMA="/home/wlas/BlendSphere/pocketbase/pb_migrations/pb_schema_complete.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE} BlendSphere Collection Importer${NC}"
    echo -e "${BLUE}================================${NC}"
    echo ""
}

print_usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -a, --all           Import all collections from complete schema"
    echo "  -c, --collection    Import specific collection by name"
    echo "  -l, --list          List available collections"
    echo "  -u, --url           PocketBase URL (default: http://localhost:8090)"
    echo "  -h, --help          Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 --all                           # Import complete schema"
    echo "  $0 --collection users              # Import specific collection"
    echo "  $0 --list                          # List available collections"
    echo "  $0 --url http://localhost:8091     # Use custom PocketBase URL"
}

list_collections() {
    echo -e "${YELLOW}Available Collections:${NC}"
    echo "======================"
    
    echo -e "\n${GREEN}System Collections:${NC}"
    for file in "$COLLECTIONS_DIR"/_*.json; do
        if [ -f "$file" ]; then
            collection_name=$(basename "$file" .json)
            echo "  🔐 $collection_name"
        fi
    done
    
    echo -e "\n${GREEN}Base Collections:${NC}"
    for file in "$COLLECTIONS_DIR"/*.json; do
        if [ -f "$file" ]; then
            collection_name=$(basename "$file" .json)
            if [[ "$collection_name" != _* ]]; then
                echo "  📦 $collection_name"
            fi
        fi
    done
}

check_pocketbase() {
    echo -e "${YELLOW}Checking PocketBase connection...${NC}"
    
    if curl -s --fail "$POCKETBASE_URL/_/" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ PocketBase is running at $POCKETBASE_URL${NC}"
        return 0
    else
        echo -e "${RED}❌ Cannot connect to PocketBase at $POCKETBASE_URL${NC}"
        echo -e "${YELLOW}Please ensure PocketBase is running and accessible${NC}"
        return 1
    fi
}

consolidate_schema() {
    echo -e "${YELLOW}Consolidating schema from individual collections...${NC}"
    
    if [ -f "$COLLECTIONS_DIR/../consolidate_schema.sh" ]; then
        chmod +x "$COLLECTIONS_DIR/../consolidate_schema.sh"
        "$COLLECTIONS_DIR/../consolidate_schema.sh"
    else
        echo -e "${RED}❌ Consolidation script not found${NC}"
        return 1
    fi
}

import_complete_schema() {
    echo -e "${YELLOW}Importing complete schema...${NC}"
    
    # First consolidate the schema
    if ! consolidate_schema; then
        return 1
    fi
    
    if [ ! -f "$COMPLETE_SCHEMA" ]; then
        echo -e "${RED}❌ Complete schema file not found: $COMPLETE_SCHEMA${NC}"
        return 1
    fi
    
    echo -e "${BLUE}📤 Uploading schema to PocketBase...${NC}"
    echo -e "${YELLOW}Note: This should be done through the PocketBase Admin UI${NC}"
    echo -e "${YELLOW}File ready for import: $COMPLETE_SCHEMA${NC}"
    
    # Display instructions for manual import
    echo ""
    echo -e "${GREEN}Manual Import Instructions:${NC}"
    echo "1. Open PocketBase Admin UI at $POCKETBASE_URL/_/"
    echo "2. Go to Settings > Import collections"
    echo "3. Upload the file: $COMPLETE_SCHEMA"
    echo "4. Review and confirm the import"
}

import_collection() {
    local collection_name="$1"
    local collection_file="$COLLECTIONS_DIR/$collection_name.json"
    
    if [ ! -f "$collection_file" ]; then
        echo -e "${RED}❌ Collection file not found: $collection_file${NC}"
        return 1
    fi
    
    echo -e "${YELLOW}Importing collection: $collection_name${NC}"
    echo -e "${YELLOW}File: $collection_file${NC}"
    echo ""
    echo -e "${GREEN}Manual Import Instructions:${NC}"
    echo "1. Open PocketBase Admin UI at $POCKETBASE_URL/_/"
    echo "2. Go to Collections"
    echo "3. Create new collection or import from JSON"
    echo "4. Use the content from: $collection_file"
}

# Parse command line arguments
IMPORT_ALL=false
IMPORT_COLLECTION=""
LIST_ONLY=false

while [[ $# -gt 0 ]]; do
    case $1 in
        -a|--all)
            IMPORT_ALL=true
            shift
            ;;
        -c|--collection)
            IMPORT_COLLECTION="$2"
            shift 2
            ;;
        -l|--list)
            LIST_ONLY=true
            shift
            ;;
        -u|--url)
            POCKETBASE_URL="$2"
            shift 2
            ;;
        -h|--help)
            print_header
            print_usage
            exit 0
            ;;
        *)
            echo -e "${RED}Unknown option: $1${NC}"
            print_usage
            exit 1
            ;;
    esac
done

# Main execution
print_header

if [ "$LIST_ONLY" = true ]; then
    list_collections
    exit 0
fi

if [ "$IMPORT_ALL" = false ] && [ -z "$IMPORT_COLLECTION" ]; then
    echo -e "${RED}❌ Please specify --all or --collection <name>${NC}"
    echo ""
    print_usage
    exit 1
fi

# Check PocketBase connection
if ! check_pocketbase; then
    exit 1
fi

# Execute import
if [ "$IMPORT_ALL" = true ]; then
    import_complete_schema
elif [ -n "$IMPORT_COLLECTION" ]; then
    import_collection "$IMPORT_COLLECTION"
fi

echo ""
echo -e "${GREEN}🎉 Import process completed!${NC}"
echo -e "${YELLOW}Remember to verify all relationships and access rules in PocketBase Admin UI${NC}"
