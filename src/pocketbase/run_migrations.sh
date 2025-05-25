#!/bin/bash

# Run PocketBase Migrations Script
# This script applies database migrations

set -e

# Check if PocketBase binary exists
if [ ! -f "./pocketbase" ]; then
    echo "PocketBase binary not found. Please run './install_pocketbase.sh' first."
    exit 1
fi

echo "Running PocketBase migrations..."

# Check if migrations directory exists
if [ ! -d "./pb_migrations" ]; then
    echo "Migrations directory (pb_migrations) not found."
    echo "Creating migrations directory..."
    mkdir -p pb_migrations
fi

# Apply migrations
./pocketbase migrate

echo "Migrations completed successfully!"
