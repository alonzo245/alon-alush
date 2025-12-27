import { useEffect, RefObject } from "react";

const useClickOutside = (
    elementRef: RefObject<HTMLElement | null>,
    handler: (event: MouseEvent | TouchEvent) => void,
): void => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent): void => {
            const element = elementRef?.current;
            if (!element?.contains(event.target as Node)) {
                handler(event);
            }
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [elementRef, handler]);
};

export default useClickOutside;
