# API Client

API client code and generated types from OpenAPI/Swagger specifications.

## Structure

- `generated/` - Auto-generated types from OpenAPI spec (gitignored)
- `client.ts` - API client setup
- `queries/` - TanStack Query hooks for API calls

## Usage

1. Place your OpenAPI spec file in the project root as `openapi.json`
2. Run `npm run generate:api` to generate types
3. Use TanStack Query hooks in components:

```tsx
import { useUserQuery } from '@/core/api/queries/user';

function Component() {
  const { data, isLoading } = useUserQuery();
  // ...
}
```

