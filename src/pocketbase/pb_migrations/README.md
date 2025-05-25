# BlendSphere PocketBase Schema

This directory contains the complete PocketBase schema for the BlendSphere application, divided into individual collection JSON files for better organization and maintainability.

## 📁 Directory Structure

```
pb_migrations/
├── collections/                    # Individual collection definitions
│   ├── _superusers.json           # System: Superuser authentication
│   ├── _authOrigins.json          # System: Authentication origins
│   ├── _externalAuths.json        # System: External auth providers
│   ├── _mfas.json                 # System: Multi-factor authentication
│   ├── _otps.json                 # System: One-time passwords
│   ├── users.json                 # Core: User accounts and profiles
│   ├── authMethods.json           # Core: Additional authentication methods
│   ├── templates.json             # Core: Flashcard templates
│   ├── fields.json                # Core: Template field definitions
│   ├── decks.json                 # Core: Flashcard deck management
│   ├── flashcards.json            # Core: Individual flashcards with SRS data
│   ├── classes.json               # Education: Class management
│   ├── classEnrollments.json      # Education: Student-class relationships
│   ├── lessons.json               # Education: Lesson content
│   ├── studySessions.json         # SRS: Study session tracking
│   ├── flashcardReviews.json      # SRS: Individual card review records
│   ├── posts.json                 # Social: Discussion posts
│   ├── comments.json              # Social: Post comments
│   ├── reactions.json             # Social: User reactions (likes, etc.)
│   └── aiPrompts.json             # AI: AI generation history
├── consolidate_schema.sh          # Script to merge collections into complete schema
├── import_collections.sh          # Script to help import collections
├── pb_schema.json                 # Original monolithic schema (backup)
├── pb_schema_complete.json        # Generated complete schema
└── README.md                      # This file
```

## 🚀 Quick Start

### 1. Consolidate Schema
```bash
cd /home/wlas/BlendSphere/pocketbase/pb_migrations
chmod +x consolidate_schema.sh
./consolidate_schema.sh
```

### 2. Import Collections
```bash
chmod +x import_collections.sh

# List available collections
./import_collections.sh --list

# Import all collections
./import_collections.sh --all

# Import specific collection
./import_collections.sh --collection users
```

## 📊 Collection Overview

### System Collections (6)
- **_superusers**: System superuser authentication
- **_authOrigins**: Authentication origin tracking
- **_externalAuths**: External authentication providers (Google, Facebook, etc.)
- **_mfas**: Multi-factor authentication settings
- **_otps**: One-time password management

### Core Collections (8)
- **users**: User accounts with enhanced profile fields
- **authMethods**: Additional authentication methods
- **templates**: Flashcard templates with language support
- **fields**: Template field definitions and validation
- **decks**: Flashcard deck organization
- **flashcards**: Individual cards with FSRS algorithm data

### Educational Collections (3)
- **classes**: Class/course management for teachers
- **classEnrollments**: Student enrollment tracking
- **lessons**: Individual lesson content within classes

### Study & Review Collections (2)
- **studySessions**: Study session tracking and statistics
- **flashcardReviews**: Individual card review records with SRS data

### Social Collections (3)
- **posts**: Discussion posts within lessons
- **comments**: Comments on posts
- **reactions**: User reactions (like, helpful, confused, etc.)

### AI Integration (1)
- **aiPrompts**: AI-assisted content generation history

## 🔐 Security & Access Rules

Each collection includes appropriate access rules:

- **System collections**: Admin-only access
- **User data**: Owner-only access with proper authentication
- **Class data**: Teacher management, student read access
- **Public data**: Controlled public access where appropriate
- **Study data**: Personal data with user-scoped access

## 🔄 Schema Management

### Adding New Collections
1. Create a new JSON file in `collections/` directory
2. Follow the PocketBase collection schema format
3. Run `consolidate_schema.sh` to update complete schema
4. Import using `import_collections.sh`

### Modifying Existing Collections
1. Edit the appropriate JSON file in `collections/` directory
2. Update field definitions, rules, or indexes as needed
3. Run `consolidate_schema.sh` to regenerate complete schema
4. Re-import the collection

### Schema Validation
- All collections include proper field validation
- Relationships use correct collection IDs
- Indexes are optimized for common queries
- Access rules follow security best practices

## 🌐 Language Support

The schema includes comprehensive language support:

### Supported Languages
- **EN**: English
- **ES**: Spanish (Español)
- **FR**: French (Français)
- **DE**: German (Deutsch)
- **IT**: Italian (Italiano)
- **PL**: Polish (Polski)

### Language Levels (CEFR)
- **A1, A2**: Beginner
- **B1, B2**: Intermediate
- **C1, C2**: Advanced

## 🧠 SRS Algorithm Integration

The schema supports the FSRS (Free Spaced Repetition Scheduler) algorithm:

### Flashcard States
- **NEW**: Never reviewed
- **LEARNING**: Currently being learned
- **REVIEW**: In review cycle
- **RELEARNING**: Being relearned after failure

### Review Ratings
- **AGAIN**: Complete failure (1)
- **HARD**: Difficult recall (2)
- **GOOD**: Successful recall (3)
- **EASY**: Very easy recall (4)

### SRS Parameters
- **Difficulty**: Card difficulty rating (0-100)
- **Stability**: Memory stability factor
- **Retrievability**: Current recall probability (0-1)

## 📱 Frontend Integration

This schema is designed to work seamlessly with:

- **React/Next.js** frontends
- **PocketBase SDK** for JavaScript/TypeScript
- **Real-time subscriptions** for live updates
- **File uploads** for avatars and media content

## 🔧 Development Tools

### Scripts Included
- **consolidate_schema.sh**: Merges individual collections into complete schema
- **import_collections.sh**: Helps import collections into PocketBase
- **Validation helpers**: Built-in field validation and constraints

### IDE Support
- JSON schema validation in VS Code
- Auto-completion for PocketBase field types
- Syntax highlighting for collection definitions

## 📚 Documentation

For more information, see:
- [PocketBase Documentation](https://pocketbase.io/docs/)
- [BlendSphere Project Documentation](../docs/)
- [FSRS Algorithm Details](../docs/srs-algorithm.md)
- [Template System Requirements](../docs/template-system-requirements.md)

## 🤝 Contributing

When contributing to the schema:

1. Follow the existing naming conventions
2. Include proper validation rules
3. Add appropriate indexes for performance
4. Document any breaking changes
5. Test relationships thoroughly
6. Update this README if needed

## 📄 License

This schema is part of the BlendSphere project and follows the same license terms.
