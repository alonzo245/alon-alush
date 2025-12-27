declare module "react-scroll" {
    import { ComponentType, HTMLAttributes } from "react";

    export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
        to: string;
        spy?: boolean;
        smooth?: boolean;
        hashSpy?: boolean;
        offset?: number;
        duration?: number;
        delay?: number;
        isDynamic?: boolean;
        onSetActive?: (to: string) => void;
        onSetInactive?: (to: string) => void;
        ignoreCancelEvents?: boolean;
        spyThrottle?: number;
        containerId?: string;
        activeClass?: string;
        [key: string]: any;
    }

    export const Link: ComponentType<LinkProps>;
    export const animateScroll: {
        scrollTo: (
            target: string,
            options?: {
                duration?: number;
                delay?: number;
                smooth?: boolean;
                containerId?: string;
                offset?: number;
            },
        ) => void;
    };
}
