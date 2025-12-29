import React, { useRef, useState, useCallback, memo } from "react";
import clsx from "clsx";
import { useButton } from "@react-aria/button";
import useClickOutside from "../../core/hooks/useClickOutside";
import { animateScroll as scroll, Link } from "react-scroll";
import { mobileThreshold } from "../../constants/config";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import useScreenSize from "../../core/hooks/useScreenSize";
import { useGlobalState } from "../../core/hooks/useGlobalState";

const Navigation = (): React.JSX.Element | null => {
    const [open, setOpen] = useState<boolean>(false);
    const node = useRef<HTMLDivElement>(null);
    const { width } = useScreenSize();
    const { state } = useGlobalState();

    const handleClickOutside = useCallback(() => {
        setOpen(false);
    }, []);

    useClickOutside(node, handleClickOutside);

    const handleNavClick = useCallback((section?: string): void => {
        setOpen((prevOpen) => {
            const newOpen = !prevOpen;

            if (!newOpen) {
                document.body.style.overflowY = "hidden";
            } else {
                document.body.style.overflowY = "auto";
                if (section) {
                    scroll.scrollTo(section, {
                        delay: 100,
                        smooth: true,
                        containerId: section,
                        offset: 700,
                    });
                }
            }

            return newOpen;
        });
    }, []);

    if (state?.modal) return null;

    return (
        <div
            ref={node}
            className="w-screen h-[30px] desktop:w-auto desktop:h-auto wide:w-auto wide:h-auto"
        >
            <Burger open={open} setOpen={handleNavClick} />
            <nav
                className={clsx(
                    "fixed flex flex-col justify-center bg-black transition-transform duration-300 ease-in-out h-screen text-left p-8 top-0 left-0 z-[99999] w-full cursor-pointer",
                    open ? "translate-x-0" : "-translate-x-full",
                )}
                role="navigation"
                aria-label="Main navigation"
            >
                <NavLink to="hero" onClick={() => handleNavClick("hero")}>
                    TOP
                </NavLink>

                <NavLink to="resume" onClick={() => handleNavClick("resume")}>
                    WORK TIMELINE
                </NavLink>
                <NavLink to="summary" onClick={() => handleNavClick("summary")}>
                    SUMMARY & EXPERIENCE
                </NavLink>
                <NavLink to="projects" onClick={() => handleNavClick("projects")}>
                    GitHub Projects
                </NavLink>
                <NavLink to="videos" onClick={() => handleNavClick("videos")}>
                    Videos & Tutorials
                </NavLink>
                {width < mobileThreshold && (
                    <div className="flex justify-center items-center">
                        <a
                            href="https://il.linkedin.com/in/alonalush"
                            target={"_blank"}
                            rel="noopener noreferrer"
                            onClick={() => handleNavClick("")}
                            className="inline-block my-[10px] mx-5 focus:outline-none focus:ring-2 focus:ring-[#5600ff] focus:ring-offset-2 rounded"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin size={50} color={"#999"} aria-hidden="true" />
                        </a>
                        <a
                            href="https://github.com/alonzo245"
                            target={"_blank"}
                            rel="noopener noreferrer"
                            onClick={() => handleNavClick("")}
                            className="inline-block my-[10px] mx-5 focus:outline-none focus:ring-2 focus:ring-[#5600ff] focus:ring-offset-2 rounded"
                            aria-label="GitHub Profile"
                        >
                            <FaGithubSquare size={50} color={"#999"} aria-hidden="true" />
                        </a>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default memo(Navigation);

interface BurgerProps {
    open: boolean;
    setOpen: (section?: string) => void;
}

interface NavLinkProps {
    to: string;
    onClick: () => void;
    children: React.ReactNode;
}

const NavLink = memo(({ to, onClick, children }: NavLinkProps): React.JSX.Element => {
    return (
        <Link
            to={to}
            onClick={onClick}
            className={clsx(
                "text-[2rem] uppercase py-8 font-bold tracking-[0.1rem] text-[#5600ff] no-underline transition-colors duration-300 linear hover:text-[#343078]",
                "max-[576px]:text-[1.5rem] max-[576px]:text-center",
            )}
        >
            {children}
        </Link>
    );
});

NavLink.displayName = "NavLink";

const Burger = memo(({ open, setOpen }: BurgerProps): React.JSX.Element => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(
        {
            onPress: () => setOpen(),
        },
        buttonRef,
    );

    return (
        <div
            className={clsx(
                "flex justify-center items-center fixed top-[5%] right-8 rounded-[2rem] z-[9999999] w-[35px]",
                open ? "bg-[#FFFFFF00]" : "bg-[#222]",
                "desktop:bg-transparent wide:bg-transparent",
            )}
        >
            <button
                {...buttonProps}
                ref={buttonRef}
                className={clsx(
                    "scale-[0.6] flex flex-col justify-around h-8 bg-transparent border-0 cursor-pointer p-0 focus:outline-none desktop:scale-100 wide:scale-100",
                    open ? "w-[25px]" : "w-[35px]",
                )}
                style={{ width: open ? "25px" : "35px" }}
            >
                <div
                    className={clsx(
                        "w-8 h-1 rounded-[10px] transition-all duration-300 linear relative origin-[1px]",
                        open ? "bg-white rotate-[45deg]" : "bg-[#EFFFFA] rotate-0",
                    )}
                />
                <div
                    className={clsx(
                        "w-8 h-1 rounded-[10px] transition-all duration-300 linear relative origin-[1px]",
                        open ? "opacity-0 translate-x-5" : "opacity-100 translate-x-0",
                    )}
                    style={{ backgroundColor: open ? "#FFFFFF" : "#EFFFFA" }}
                />
                <div
                    className={clsx(
                        "w-8 h-1 rounded-[10px] transition-all duration-300 linear relative origin-[1px]",
                        open ? "bg-white rotate-[-45deg]" : "bg-[#EFFFFA] rotate-0",
                    )}
                />
            </button>
        </div>
    );
});

Burger.displayName = "Burger";
