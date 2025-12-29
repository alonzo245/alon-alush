import React, { memo } from "react";

interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg";
    className?: string;
}

const LoadingSpinner = memo(
    ({ size = "md", className = "" }: LoadingSpinnerProps): React.JSX.Element => {
        const sizeClasses = {
            sm: "w-4 h-4 border-2",
            md: "w-8 h-8 border-2",
            lg: "w-12 h-12 border-4",
        };

        return (
            <div
                className={`flex items-center justify-center ${className}`}
                role="status"
                aria-label="Loading"
            >
                <div
                    className={`${sizeClasses[size]} border-[#5600ff] border-t-transparent rounded-full animate-spin`}
                    aria-hidden="true"
                />
                <span className="sr-only">Loading...</span>
            </div>
        );
    },
);

LoadingSpinner.displayName = "LoadingSpinner";

export default LoadingSpinner;
