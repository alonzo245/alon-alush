# Migration Guide

This document outlines the migration from the old architecture to the new one.

## Completed Migrations

### ✅ State Management
- Migrated from `useGlobalState` (Context API) to Zustand
- Created `store/useAppStore.ts` with Zustand store
- Created compatibility hook `core/hooks/useGlobalState.ts` for gradual migration

### ✅ Routing
- Created `routes.tsx` for centralized route configuration
- Updated `App.tsx` to use `useRoutes` hook

### ✅ Directory Structure
- Created `core/` directory for hooks and utilities
- Created `components/` directory for design system
- Created `store/` directory for Zustand stores
- Created `routes/` directory for route-based pages
- Created `e2e/` directory for Playwright tests
- Created `stories/` directory for Storybook stories
- Created `app/` directory for new work

### ✅ Package Updates
- Added Zustand for state management
- Added nuqs for URL state (to be configured)
- Added visx for charts
- Added Storybook dependencies
- Added Playwright dependencies
- Added OpenAPI TypeScript generator

## Next Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure nuqs
Once nuqs is installed, uncomment the NuqsAdapter in `AppWrapper.tsx`:
```tsx
import { NuqsAdapter } from "nuqs/adapters/react-router";

// In AppWrapper:
<NuqsAdapter>
  <App />
</NuqsAdapter>
```

### 3. Migrate Components
- Move shared components from `shared/components/` to `components/`
- Update imports accordingly

### 4. Migrate Features to Routes
- Move feature pages from `features/` to `routes/`
- Update route configuration in `routes.tsx`

### 5. Set Up API Client
- Place OpenAPI spec as `openapi.json`
- Run `npm run generate:api`
- Create API query hooks in `core/api/queries/`

### 6. Write Tests
- Add Playwright E2E tests in `e2e/`
- Add Storybook stories in `stories/`

## Breaking Changes

### State Management
- `useGlobalState` hook now uses Zustand internally
- State is persisted to localStorage (user data only)
- Use `useAppStore` directly for better TypeScript support

### Imports
- Hooks moved from `shared/hooks/` to `core/hooks/`
- Update all imports accordingly

## Compatibility

The compatibility hook `core/hooks/useGlobalState.ts` maintains the same API, so existing components continue to work. However, it's recommended to migrate to `useAppStore` directly for better performance and TypeScript support.

