#!/bin/bash

# PocketBase Installation Script for BlendSphere
# This script downloads and installs PocketBase v0.28.2

set -e

POCKETBASE_VERSION="0.28.2"
DOWNLOAD_URL="https://github.com/pocketbase/pocketbase/releases/download/v${POCKETBASE_VERSION}/pocketbase_${POCKETBASE_VERSION}_linux_amd64.zip"
ARCHIVE_NAME="pocketbase_${POCKETBASE_VERSION}_linux_amd64.zip"

echo "Installing PocketBase v${POCKETBASE_VERSION}..."

# Check if PocketBase is already installed
if [ -f "./pocketbase" ]; then
    echo "PocketBase is already installed. Use './pocketbase --version' to check the version."
    echo "If you want to reinstall, remove the 'pocketbase' binary first."
    exit 0
fi

# Download PocketBase
echo "Downloading PocketBase from ${DOWNLOAD_URL}..."
wget -O "${ARCHIVE_NAME}" "${DOWNLOAD_URL}"

# Extract the archive
echo "Extracting PocketBase..."
unzip "${ARCHIVE_NAME}"

# Make the binary executable
chmod +x pocketbase

# Clean up
rm "${ARCHIVE_NAME}"

echo "PocketBase v${POCKETBASE_VERSION} has been successfully installed!"
echo "You can now start PocketBase with: ./run_pocketbase.sh"
echo "Or manually with: ./pocketbase serve"
