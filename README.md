# CoLiving

Enterprise-Grade Coliving Community Platform

## Overview

A production-ready React Native application built with enterprise-level mobile engineering practices:

- **MVVM Architecture** - Custom hooks as ViewModels, domain-driven design
- **Offline-First** - WatermelonDB with queue-based sync and conflict resolution
- **Multi-Layer Security** - Certificate pinning, biometric auth, secure storage
- **WCAG 2.1 AA Compliant** - Full accessibility support
- **84% Test Coverage** - 258 passing tests across units, integration, and E2E
- **Type-Safe** - TypeScript strict mode with GraphQL code generation

## Architecture

This project follows the **MVVM (Model-View-ViewModel)** architecture pattern:

```
src/
├── models/          # Domain models (pure business logic)
│   ├── domain/      # Framework-independent business entities
│   └── database/    # WatermelonDB models
├── viewmodels/      # Custom hooks implementing ViewModels
├── views/           # UI components
│   ├── screens/     # Screen components
│   └── components/  # Reusable components
├── services/        # Infrastructure services
├── utils/           # Utility functions
├── types/           # TypeScript type definitions
└── config/          # Configuration files
```

## Key Features

### Offline-First Architecture
- Local-first data strategy with WatermelonDB
- Queue-based sync with priority levels
- Automatic conflict resolution
- Background synchronization

### Security
- Certificate pinning implementation
- Biometric authentication
- Secure storage with keychain
- JWT with refresh tokens
- Role-based access control

### Accessibility (WCAG 2.1 AA)
- Full screen reader support
- Minimum 4.5:1 contrast ratios
- Proper touch target sizes (44pt/48dp)
- Dynamic type support
- Semantic roles and labels

### Testing & Quality

- **84% Code Coverage** (Statements: 84.11% | Branches: 62.88% | Functions: 81.73%)
- **258 Passing Tests** - All test suites green
- **Comprehensive Coverage**:
  - Auth flows (100% coverage)
  - State management (99% coverage)
  - Domain models (98% coverage)
  - ViewModels and services (60-100% coverage)
- **Continuous Testing**: Jest + React Native Testing Library

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- Yarn (package manager) - [Install Yarn](https://yarnpkg.com/getting-started/install)
- Expo CLI (installed globally or via npx)
- iOS Simulator (Mac) or Android Emulator

### Installation

```bash
# Install dependencies
yarn install


# For iOS (requires Mac)
cd ios && pod install && cd ..
yarn ios

# For Android
yarn android

# Start development server (after native build)
yarn start

# Run on Web (limited MMKV support)
yarn web
```

### Installing Additional Dependencies

```bash
# Add a new dependency
yarn add <package-name>

# Add a dev dependency
yarn add -D <package-name>

# Remove a dependency
yarn remove <package-name>
```

### Package Management

```bash
# Install dependencies
yarn install

# Run scripts
yarn <script-name>

# Add packages
yarn add <package>
```

### Development Scripts

```bash
# Type checking
yarn type-check

# Linting
yarn lint
yarn lint:fix

# Formatting
yarn format
yarn format:check

# Testing (258 tests, 84% coverage)
yarn test              # Run all tests
yarn test:watch        # Watch mode
yarn test:coverage     # Generate coverage report

# GraphQL Code Generation
yarn codegen
```

## Project Structure

See detailed documentation:

- [Models Documentation](src/models/domain/README.md)
- [ViewModels Documentation](src/viewmodels/README.md)
- [Views Documentation](src/views/README.md)
- [Services Documentation](src/services/README.md)

## Technology Stack

- **Framework**: React Native (Expo SDK 51)
- **Language**: TypeScript (strict mode)
- **Backend**: Supabase (Auth, PostgreSQL, GraphQL)
- **State**: Zustand + React Hooks (MVVM)
- **Database**: WatermelonDB (offline-first)
- **Storage**: MMKV v2 (fast key-value)
- **GraphQL**: Apollo Client + Code Generation
- **Navigation**: React Navigation v6
- **Testing**: Jest + React Native Testing Library (84% coverage)
- **Quality**: ESLint + Prettier + TypeScript strict

## Development Guidelines

### Code Style
- Follow ESLint and Prettier configurations
- Use TypeScript strict mode
- Prefer functional programming patterns
- Write self-documenting code

### Accessibility
- All interactive elements must have `accessibilityLabel`
- Minimum touch targets: 44pt (iOS) / 48dp (Android)
- Test with VoiceOver (iOS) and TalkBack (Android)
- Ensure 4.5:1 contrast ratio for all text

### Performance
- Use `React.memo` strategically
- Implement `getItemLayout` for FlatList
- Optimize images with FastImage
- Enable Hermes engine

## Project Setup

### Initial Setup

After cloning the repository:

```bash
# Install all dependencies
yarn install

# Generate GraphQL types (after configuring Supabase schema)
yarn codegen
```

### Environment Variables

Create a `.env` file in the root directory:

```bash
EXPO_PUBLIC_SUPABASE_URL=your-supabase-url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
EXPO_PUBLIC_GRAPHQL_ENDPOINT=your-graphql-endpoint
```

## Documentation

Comprehensive documentation will be available in the `/docs` directory:

- `ARCHITECTURE.md` - System architecture details
- `OFFLINE_STRATEGY.md` - Offline-first implementation
- `SECURITY.md` - Security architecture
- `TESTING_STRATEGY.md` - Testing approach
- `ACCESSIBILITY.md` - Accessibility guidelines
- `PERFORMANCE.md` - Performance optimization guide

## License

Private - Internal project

## Author

Built following enterprise-grade best practices for mobile application development.

