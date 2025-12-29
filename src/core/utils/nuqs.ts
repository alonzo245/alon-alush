import { parseAsString } from "nuqs";

// Example URL state parsers
export const searchParsers = {
    section: parseAsString.withDefault("hero"),
    filter: parseAsString,
    view: parseAsString.withDefault("grid"),
};

// Client-side hooks for URL state
export { useQueryStates } from "nuqs";

