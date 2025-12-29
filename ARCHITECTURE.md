# Project Architecture

This project follows a modern, scalable architecture with clear separation of concerns.

## Directory Structure

```
src/
├── app/              # New work goes here (App Router pattern)
├── components/        # Design system components
│   ├── ui/           # Basic UI components
│   ├── layout/       # Layout components
│   └── ...
├── core/             # Business logic, hooks, utils
│   ├── hooks/        # Custom React hooks
│   ├── utils/        # Utility functions
│   ├── api/          # API client & queries
│   └── types/        # TypeScript types
├── routes/           # Route-based pages + nested components
├── store/            # Zustand stores
├── stories/          # Storybook stories
├── features/         # Feature-based modules (legacy, migrate to routes/)
└── routes.tsx        # Route configuration
```

## Key Technologies

- **React 19** - Latest React features
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React Aria Components** - Accessible components
- **React Router 7** - Routing
- **TanStack Query** - Data fetching & caching
- **Zustand** - State management
- **nuqs** - URL-based state
- **clsx** - Conditional className
- **visx** - Data visualization
- **Storybook** - Component development
- **Playwright** - E2E testing

## State Management

### Global State (Zustand)
Use `useAppStore` from `store/useAppStore.ts` for global application state.

### URL State (nuqs)
Use `useQueryStates` from `nuqs` for URL-based state management.

### Server State (TanStack Query)
Use TanStack Query hooks for server data fetching and caching.

## Component Guidelines

1. **Design System Components** (`components/`)
   - Reusable, accessible components
   - Use React Aria Components
   - Style with Tailwind CSS
   - Use `clsx` for conditional classes

2. **Feature Components** (`routes/` or `features/`)
   - Page-level components
   - Feature-specific logic
   - Can use design system components

## Testing

- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Playwright (`e2e/` directory)
- **Component Tests**: Storybook (`stories/` directory)

## API Client Generation

1. Place OpenAPI spec as `openapi.json`
2. Run `npm run generate:api`
3. Generated types available in `core/api/generated/`

