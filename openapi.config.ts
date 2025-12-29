/**
 * OpenAPI/Swagger Configuration
 * 
 * To generate API client types:
 * npm run generate:api -- <path-to-openapi-spec>
 * 
 * Example:
 * npm run generate:api -- https://api.example.com/openapi.json
 */

export default {
    // Output directory for generated types
    output: "./src/core/api/generated",
    
    // OpenAPI spec URL or file path
    // Update this with your actual API spec
    spec: process.env.OPENAPI_SPEC_URL || "./openapi.json",
    
    // TypeScript configuration
    typescript: {
        // Generate types only (no runtime code)
        typesOnly: true,
        
        // Use enum for enums
        enum: true,
        
        // Export types
        export: true,
    },
};

