# PocketBase Setup for BlendSphere

This directory contains PocketBase v0.28.2 and all necessary configuration for the BlendSphere educational flashcard application.

## 🚀 Quick Start for Collaborators

### Prerequisites
- Linux/macOS/WSL (Windows Subsystem for Linux)
- `wget` and `unzip` commands available
- Port 8090 available (or modify the port in scripts)

### 1. First-Time Setup
```bash
# Make scripts executable
chmod +x *.sh

# Install PocketBase (downloads v0.28.2 automatically)
./install_pocketbase.sh

# Start PocketBase server
./run_pocketbase.sh
```

### 2. Import Complete Schema
After PocketBase starts, you have two options to import the schema:

#### Option A: Import via Admin Dashboard (Recommended)
1. Open http://127.0.0.1:8090/_/ in your browser
2. Create your admin account when prompted
3. Go to **Settings** → **Import collections**
4. Upload the file: `pb_migrations/consolidated_schema.json`
5. Click **Import** to create all collections

> 📋 **Detailed Instructions**: See [IMPORT_GUIDE.md](IMPORT_GUIDE.md) for complete import instructions and troubleshooting.

#### Option B: Import via Script
```bash
cd pb_migrations
./import_collections.sh --all
```

### 3. Verify Setup
```bash
# Test if PocketBase is responding
./test_connection.sh

# Verify collections were imported
./verify_setup.sh
```

## 📁 Project Structure

### PocketBase Binary
- `pocketbase` - The main PocketBase executable (v0.28.2, auto-downloaded)

### Setup Scripts
- `install_pocketbase.sh` - Downloads and installs PocketBase v0.28.2
- `run_pocketbase.sh` - Starts the PocketBase server on port 8090
- `test_connection.sh` - Tests if PocketBase is running and responding
- `verify_setup.sh` - Verifies all collections are properly imported

### Schema and Migrations
- `pb_migrations/` - Complete schema and migration files
  - `collections/` - Individual collection JSON files (21 collections)
  - `pb_schema_complete.json` - Complete schema for import
  - `consolidate_schema.sh` - Rebuilds complete schema from individual files
  - `import_collections.sh` - Helper for importing collections

### Data Directory
- `pb_data/` - PocketBase data directory (created automatically)
  - `data.db` - Main SQLite database
  - `types.d.ts` - Auto-generated TypeScript types

## 🗂️ Database Collections (21 Total)

### System Collections (5)
- `_authOrigins` - Authentication origin tracking
- `_externalAuths` - External auth providers (Google, GitHub, etc.)
- `_mfas` - Multi-factor authentication
- `_otps` - One-time passwords
- `_superusers` - Admin accounts

### Core Collections (8)
- `users` - User accounts and profiles
- `authMethods` - Additional authentication methods  
- `templates` - Flashcard templates with language support
- `fields` - Template field definitions
- `decks` - Flashcard deck organization
- `flashcards` - Individual cards with FSRS algorithm data
- `aiPrompts` - AI-assisted content generation

### Educational Collections (3)
- `classes` - Teacher class/course management
- `classEnrollments` - Student enrollment tracking  
- `lessons` - Individual lesson content

### Study System Collections (2)
- `studySessions` - Study session tracking and statistics
- `flashcardReviews` - Individual card reviews with SRS data

### Social Collections (3)
- `posts` - Discussion posts within lessons
- `comments` - Comments on posts
- `reactions` - User reactions (likes, helpful, confused, etc.)

## 📖 Step-by-Step Import Instructions for PocketBase Admin Dashboard

### Method 1: Complete Schema Import (Recommended)

This method imports all 21 collections at once using the consolidated schema:

1. **Prepare the Schema**:
   ```bash
   cd pb_migrations
   ./consolidate_schema.sh  # Ensures latest schema is ready
   ```

2. **Start PocketBase and Create Admin**:
   ```bash
   cd ..
   ./run_pocketbase.sh
   ```
   - Open http://127.0.0.1:8090/_/ in your browser
   - Create admin account when prompted

3. **Import in Admin Dashboard**:
   - In the admin dashboard, click the **Settings** gear icon (⚙️)
   - Select **Import collections** from the sidebar
   - Click **Choose file** and select: `pb_migrations/consolidated_schema.json`
   - Review the preview (should show 21 collections)
   - Click **Import** button
   - Wait for confirmation message

4. **Verify Import**:
   - Go to **Collections** tab
   - You should see all 21 collections listed
   - Check a few collections to ensure fields are properly imported

### Method 1B: Manual Consolidated Schema Import

If you prefer to copy-paste the schema directly:

1. **Open the Schema File**:
   ```bash
   cat pb_migrations/consolidated_schema.json
   ```

2. **Copy the JSON Content**:
   - Select all content from the file (it should be a JSON array)
   - Copy to clipboard

3. **Import via Dashboard**:
   - In admin dashboard: **Settings** → **Import collections**
   - Click **Load from JSON**
   - Paste the copied JSON content
   - Click **Review import**
   - Verify all 21 collections are listed
   - Click **Import**

### Method 2: Individual Collection Import

If you need to import collections one by one or if the consolidated import fails:

1. **Access Collections**:
   - In admin dashboard, go to **Collections** tab
   - Click **+ New collection**

2. **For Each Collection**:
   - Choose **Import from JSON**
   - Copy content from individual files in `pb_migrations/collections/`
   - Paste and click **Create**

3. **Import Order** (IMPORTANT - import in this order to avoid relation errors):
   ```bash
   # 1. System collections first
   _authOrigins.json
   _superusers.json
   
   # 2. Users collection (required for relations)
   users.json
   
   # 3. Core collections without dependencies
   templates.json
   aiPrompts.json
   
   # 4. Collections with user relations
   fields.json
   classes.json
   
   # 5. Collections with class relations
   classEnrollments.json  # Creates classEnrollments_via_class back relation
   
   # 6. Collections that depend on classes and enrollments
   decks.json
   lessons.json
   posts.json
   
   # 7. Collections that depend on previous collections
   flashcards.json
   studySessions.json
   comments.json
   reactions.json
   flashcardReviews.json
   ```

### Troubleshooting Import

**Import fails with "failed to load back relation field" errors**:
- This occurs when collections reference relations that don't exist yet
- **Solution**: Import collections in the correct order (see Method 2 above)
- **Quick Fix**: Import `classEnrollments.json` before any collections that reference `classEnrollments_via_class`

**Import fails with validation errors**:
- Ensure PocketBase is the latest version (v0.28.2+)
- Check JSON validity: `cat pb_migrations/consolidated_schema.json | jq .`
- Try importing system collections first
- Verify the file path is correct: `pb_migrations/consolidated_schema.json`

**Collections appear but with missing fields**:
- Re-import the specific collection
- Check for special characters in field names
- Verify field types are supported in your PocketBase version

**Access rule errors during import**:
- Collections will import with their defined access rules
- If rules reference non-existent relations, import will fail
- **Solution**: Import collections in dependency order
- Review and adjust rules in **Collections** → **API Rules** as needed

**"enrollments_via_class" relation errors**:
- This error was fixed in May 2025 - use the latest schema files
- The correct back relation name is `classEnrollments_via_class`
- If you see this error, regenerate the schema: `./consolidate_schema.sh`

**File not found errors**:
- Ensure you're in the correct directory: `/src/pocketbase/`
- Check file exists: `ls -la pb_migrations/consolidated_schema.json`
- Regenerate if missing: `cd pb_migrations && ./consolidate_schema.sh`

## 🔗 Important URLs

- **Admin Dashboard**: http://127.0.0.1:8090/_/
- **API Base URL**: http://127.0.0.1:8090/api/
- **API Documentation**: http://127.0.0.1:8090/_/#/docs
- **Health Check**: http://127.0.0.1:8090/api/health

## 🌐 Frontend Integration

The BlendSphere frontend is pre-configured to work with this PocketBase setup:

- **Connection**: Automatically connects to `http://localhost:8090`
- **Configuration**: Located in `/src/lib/pocketbase.ts`
- **Services**: API services in `/src/lib/services/`
- **Environment**: Uses `VITE_POCKETBASE_URL=http://localhost:8090`

## 👥 Development Workflow

### For New Collaborators
1. Follow the **Quick Start** section above
2. Import the complete schema using Method 1
3. Start developing immediately with all collections ready

### For Ongoing Development
1. **Start PocketBase**: `./run_pocketbase.sh`
2. **Start Frontend**: (in the frontend directory) `npm run dev`
3. **Development**: Both services run simultaneously
4. **Admin Access**: Use the admin dashboard for data management

### For Schema Changes
1. **Edit**: Modify individual collection files in `pb_migrations/collections/`
2. **Consolidate**: Run `./consolidate_schema.sh` to rebuild complete schema
3. **Apply**: Re-import changed collections via admin dashboard
4. **Commit**: Commit both individual and complete schema files

## Collections Required

The following collections need to be created in PocketBase for BlendSphere:

### Core Collections
- `users` (built-in auth collection)
- `templates` - Flashcard templates
- `fields` - Template fields
- `decks` - Flashcard decks
- `flashcards` - Individual flashcards

### Class Management
- `classes` - Teacher classes
- `classEnrollments` - Student enrollments
- `lessons` - Class lessons

### Study System
- `studySessions` - Study session records
- `flashcardReviews` - Individual card reviews

### Social Features
- `posts` - Community posts
- `comments` - Post comments
- `reactions` - Likes, reactions

### AI Features
- `aiPrompts` - AI generation prompts
- `authMethods` - Authentication methods

## 🔧 Troubleshooting

### Common Issues and Solutions

#### PocketBase won't start
```bash
# Check if port 8090 is already in use
lsof -i :8090

# Kill any existing process
sudo kill -9 $(lsof -t -i:8090)

# Or start on different port
./pocketbase serve --http="127.0.0.1:8091"
```

#### Schema import fails
```bash
# Regenerate the complete schema
cd pb_migrations && ./consolidate_schema.sh

# Validate JSON syntax
cat pb_migrations/pb_schema_complete.json | jq . > /dev/null

# Check file size (should be ~50KB+)
ls -lh pb_migrations/pb_schema_complete.json
```

#### Frontend can't connect
```bash
# Verify PocketBase is running
./test_connection.sh

# Check CORS settings in PocketBase admin
# Settings → Application → CORS
```

#### Permission errors
```bash
# Fix script permissions
chmod +x *.sh
chmod +x pb_migrations/*.sh

# Fix PocketBase binary
chmod +x pocketbase
```

#### Collections missing after import
```bash
# Run comprehensive verification
./verify_setup.sh

# Check PocketBase logs
tail -f pb_data/logs.db  # if logs are enabled
```

#### Database corruption
```bash
# Backup and reset (DANGER: loses all data)
mv pb_data pb_data.backup
./run_pocketbase.sh  # Creates fresh database
# Then re-import schema
```

### Support and Documentation

- **PocketBase Docs**: https://pocketbase.io/docs/
- **API Reference**: http://127.0.0.1:8090/_/#/docs (when running)
- **GitHub Issues**: Report BlendSphere-specific issues
- **Schema Reference**: See `pb_migrations/README.md`

## 📋 Quick Reference

### Essential Commands
```bash
# Setup (first time)
./install_pocketbase.sh        # Download PocketBase v0.28.2
./run_pocketbase.sh           # Start server
./verify_setup.sh             # Check everything works

# Schema management
cd pb_migrations
./consolidate_schema.sh       # Rebuild complete schema

# Daily development
./run_pocketbase.sh           # Start PocketBase
./test_connection.sh          # Quick connectivity test
```

### Important Files
- `pb_migrations/consolidated_schema.json` - Complete schema for import
- `pb_migrations/collections/*.json` - Individual collection definitions
- `pb_data/data.db` - Main SQLite database
- `pb_data/types.d.ts` - Auto-generated TypeScript types

### Quick Links
- [Admin Dashboard](http://127.0.0.1:8090/_/) - Main interface
- [API Docs](http://127.0.0.1:8090/_/#/docs) - Auto-generated API documentation
- [Health Check](http://127.0.0.1:8090/api/health) - Server status
- [Quick Start Guide](QUICK_START.md) - Fastest setup method

## 📄 Version Information

- **PocketBase Version**: 0.28.2
- **Platform**: Linux AMD64
- **Collections**: 21 total (5 system + 16 application)
- **Installation Date**: May 25, 2025
- **Last Schema Update**: May 25, 2025

---

**🎉 You're all set!** BlendSphere PocketBase is ready for development. Start with the [Quick Start Guide](QUICK_START.md) for the fastest setup.
