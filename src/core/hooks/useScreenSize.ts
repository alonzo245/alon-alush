import { useEffect, useState } from "react";

interface WindowSize {
    width: number;
}

const useScreenSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: window.innerWidth,
    });

    useEffect(() => {
        function handleResize(): void {
            setWindowSize({
                width: window.innerWidth,
                // height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};

export default useScreenSize;
