import React, { useEffect } from "react";

export default (elementRef, handler) => {
    useEffect(() => {
        const listener = (event) => {
            const element = elementRef?.current;
            if (!element?.contains(event?.target)) {
                handler(event);
            }
        };
        document.addEventListener(`mousedown`, listener);
        document.addEventListener(`touchstart`, listener);
        return () => {
            document.removeEventListener(`mousedown`, listener);
            document.removeEventListener(`touchstart`, listener);
        };
    }, [elementRef, handler]);
};
