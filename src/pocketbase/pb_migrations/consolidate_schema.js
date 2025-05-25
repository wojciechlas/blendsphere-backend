#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * BlendSphere PocketBase Schema Consolidation Script
 * 
 * This script merges all individual collection JSON files into a single
 * schema file that can be imported into PocketBase.
 */

const COLLECTIONS_DIR = path.join(__dirname, 'collections');
const OUTPUT_FILE = path.join(__dirname, 'blendsphere_schema.json');

function readCollectionFile(filename) {
    const filePath = path.join(COLLECTIONS_DIR, filename);
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(content);
    } catch (error) {
        console.error(`Error reading ${filename}:`, error.message);
        return null;
    }
}

function consolidateCollections() {
    console.log('🔄 Starting BlendSphere schema consolidation...');

    // Read all JSON files from the collections directory
    const files = fs.readdirSync(COLLECTIONS_DIR)
        .filter(file => file.endsWith('.json'))
        .sort(); // Sort to ensure consistent ordering

    const collections = [];
    const errors = [];

    console.log(`📁 Found ${files.length} collection files:`);

    for (const file of files) {
        console.log(`   • ${file}`);
        const collection = readCollectionFile(file);

        if (collection) {
            collections.push(collection);
        } else {
            errors.push(file);
        }
    }

    if (errors.length > 0) {
        console.error(`❌ Failed to process ${errors.length} files:`, errors);
        process.exit(1);
    }

    // Create the consolidated schema as an array (PocketBase migration format)
    const schema = collections;

    // Write the consolidated schema
    try {
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(schema, null, 2));
        console.log(`✅ Successfully consolidated ${collections.length} collections`);
        console.log(`📄 Output file: ${OUTPUT_FILE}`);

        // Display summary
        console.log('\\n📋 Collections included:');
        collections.forEach(collection => {
            const type = collection.type === 'auth' ? '👤 Auth' :
                collection.system ? '⚙️  System' : '📦 Base';
            console.log(`   ${type}: ${collection.name} (${collection.fields.length} fields)`);
        });

        // File size information
        const stats = fs.statSync(OUTPUT_FILE);
        console.log(`\\n📊 Schema file size: ${(stats.size / 1024).toFixed(2)} KB`);

    } catch (error) {
        console.error('❌ Error writing consolidated schema:', error.message);
        process.exit(1);
    }
}

function validateSchema() {
    console.log('\\n🔍 Validating schema structure...');

    try {
        const schema = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8'));

        // Basic validation
        if (!Array.isArray(schema)) {
            throw new Error('Schema must be an array');
        }

        const collectionNames = new Set();
        const collectionIds = new Set();

        for (const collection of schema) {
            // Check for required fields
            if (!collection.id || !collection.name || !collection.type) {
                throw new Error(`Collection missing required fields: ${JSON.stringify(collection, null, 2)}`);
            }

            // Check for duplicate names/IDs
            if (collectionNames.has(collection.name)) {
                throw new Error(`Duplicate collection name: ${collection.name}`);
            }
            if (collectionIds.has(collection.id)) {
                throw new Error(`Duplicate collection ID: ${collection.id}`);
            }

            collectionNames.add(collection.name);
            collectionIds.add(collection.id);

            // Validate fields array
            if (!Array.isArray(collection.fields)) {
                throw new Error(`Collection ${collection.name} has invalid fields`);
            }
        }

        console.log('✅ Schema validation passed');
        console.log(`   • ${schema.length} collections`);
        console.log(`   • ${schema.reduce((sum, c) => sum + c.fields.length, 0)} total fields`);

        // Count collection types
        const types = schema.reduce((acc, c) => {
            acc[c.type] = (acc[c.type] || 0) + 1;
            return acc;
        }, {});

        Object.entries(types).forEach(([type, count]) => {
            console.log(`   • ${count} ${type} collection(s)`);
        });

    } catch (error) {
        console.error('❌ Schema validation failed:', error.message);
        process.exit(1);
    }
}

// Main execution
if (require.main === module) {
    consolidateCollections();
    validateSchema();

    console.log('\\n🎉 BlendSphere schema consolidation completed successfully!');
    console.log('\\n📝 Usage:');
    console.log('   1. Import the schema into PocketBase admin panel');
    console.log('   2. Or use PocketBase CLI: pocketbase migrate up');
    console.log('   3. The schema includes all collections for the BlendSphere platform');
}

module.exports = {
    consolidateCollections,
    validateSchema,
    COLLECTIONS_DIR,
    OUTPUT_FILE
};
