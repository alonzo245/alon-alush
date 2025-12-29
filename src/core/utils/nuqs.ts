import { parseAsString } from "nuqs";

// Example URL state parsers
export const searchParsers = {
    section: parseAsString, // No default - only scroll if explicitly provided
    filter: parseAsString,
    view: parseAsString.withDefault("grid"),
};

// Client-side hooks for URL state
export { useQueryStates } from "nuqs";

