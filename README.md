# CoLiving

Enterprise-Grade Coliving Community Platform with Modern Best Practices

## Overview

CoLiving is a production-ready React Native application demonstrating enterprise-level mobile engineering practices including:

- **MVVM Architecture** with custom hooks as ViewModels
- **Offline-First** architecture with intelligent conflict resolution
- **Multi-Layer Security** including certificate pinning
- **WCAG 2.1 AA** accessibility compliance
- **Comprehensive Testing** with 85%+ coverage targets
- **Performance Optimization** following React Native 0.73+ best practices

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

### Testing Strategy
- **70% Unit Tests**: Models, ViewModels, utilities
- **20% Integration Tests**: Feature flows, service integration
- **10% E2E Tests**: Critical user journeys

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

# Start development server
yarn start

# Run on iOS
yarn ios

# Run on Android
yarn android

# Run on Web
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

This project uses **Yarn** as the package manager. All commands should use `yarn` instead of `npm`:

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

# Testing
yarn test
yarn test:watch
yarn test:coverage

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

- **Framework**: React Native (Expo SDK 54)
- **Language**: TypeScript (strict mode)
- **Package Manager**: Yarn
- **GraphQL**: Apollo Client + Supabase GraphQL
- **Database**: WatermelonDB (offline-first)
- **Navigation**: React Navigation
- **State Management**: React Hooks (MVVM pattern) + Redux Toolkit
- **Testing**: Jest + React Native Testing Library
- **Linting**: ESLint + Prettier

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

