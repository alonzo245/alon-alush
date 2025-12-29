import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

// Lazy load routes for code splitting
const Home = lazy(() => import("./features/home/Home"));

const LoadingFallback = (): React.JSX.Element => (
    <div className="mx-auto flex justify-center items-center h-screen">
        <div className="text-white">Loading...</div>
    </div>
);

export const routes: RouteObject[] = [
    {
        path: "/",
        element: (
            <Suspense fallback={<LoadingFallback />}>
                <Home />
            </Suspense>
        ),
    },
    {
        path: "/alon-alush",
        element: (
            <Suspense fallback={<LoadingFallback />}>
                <Home />
            </Suspense>
        ),
    },
];
