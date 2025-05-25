# BlendSphere PocketBase - Quick Setup Guide

## 🚀 One-Command Setup (Recommended)

For new collaborators who want to get started immediately:

```bash
# 1. Make scripts executable and install PocketBase
chmod +x *.sh && ./install_pocketbase.sh

# 2. Start PocketBase
./run_pocketbase.sh
```

Then in your browser:
1. Go to http://127.0.0.1:8090/_/
2. Create your admin account
3. Go to **Settings** → **Import collections**
4. Upload `pb_migrations/consolidated_schema.json`
5. Click **Import**

> **📋 Need Help?** See [IMPORT_GUIDE.md](IMPORT_GUIDE.md) for detailed import instructions and troubleshooting.

> **⚠️ Import Issues?** If you get relation errors, the collections need to be imported in dependency order. The consolidated schema handles this automatically.

## 🔍 Verify Everything Works

```bash
# Test the setup
./verify_setup.sh
```

## 📋 What You Get

After import, you'll have **21 collections** ready for BlendSphere:

### 🔐 System Collections (5)
- Authentication origins, external auth, MFA, OTP, superusers

### 📦 Core Collections (8) 
- Users, templates, fields, decks, flashcards, AI prompts, auth methods

### 🎓 Educational Collections (3)
- Classes, enrollments, lessons

### 📚 Study Collections (2)
- Study sessions, flashcard reviews (SRS algorithm)

### 👥 Social Collections (3)
- Posts, comments, reactions

## 🛠️ Advanced Setup

### Rebuild Schema from Individual Files
```bash
cd pb_migrations
./consolidate_schema.sh
```

### Import Specific Collections
```bash
cd pb_migrations
./import_collections.sh --collection users
./import_collections.sh --list  # see all available
```

### Validate Setup
```bash
./verify_setup.sh  # comprehensive verification
./test_connection.sh  # basic connectivity test
```

## 🌐 URLs

- **Admin Dashboard**: http://127.0.0.1:8090/_/
- **API Documentation**: http://127.0.0.1:8090/_/#/docs
- **Health Check**: http://127.0.0.1:8090/api/health

## 🔧 Troubleshooting

### PocketBase won't start
```bash
# Check if port is in use
lsof -i :8090

# Start with different port
./pocketbase serve --http="127.0.0.1:8091"
```

### Schema import fails
```bash
# Regenerate schema
cd pb_migrations && ./consolidate_schema.sh

# Verify JSON is valid
cat pb_schema_complete.json | jq . > /dev/null
```

### Permission errors
```bash
# Fix script permissions
chmod +x *.sh
chmod +x pb_migrations/*.sh
```

## 📚 Documentation

- [Complete README](README.md) - Full documentation
- [Schema Documentation](pb_migrations/README.md) - Collection details
- [Frontend Integration](../frontend/docs/) - Frontend setup

---

**Need help?** Check the verify_setup.sh output for detailed diagnostics.
