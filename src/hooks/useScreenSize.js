import { useEffect, useState } from "react";

export default () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });

    useEffect(() => {
        function handleResize() {
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
