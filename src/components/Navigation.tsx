import React, { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { animateScroll as scroll, Link } from "react-scroll";
import { mobileThreshold } from "../config/utils";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import useScreenSize from "../hooks/useScreenSize";
import { useGlobalState } from "../hooks/useGlobalState";

export default function Navigation(): React.JSX.Element | null {
    const [open, setOpen] = useState<boolean>(false);
    const node = useRef<HTMLDivElement>(null);
    const { width } = useScreenSize();
    const { state } = useGlobalState();
    useClickOutside(node, () => setOpen(false));

    if (state?.modal) return null;

    const onClick = (section?: string): boolean => {
        setOpen(!open);

        if (!open) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
            if (section)
                scroll.scrollTo(section, {
                    // duration: 1500,
                    delay: 100,
                    smooth: true,
                    containerId: section,
                    offset: 700,
                });
        }

        return open;
    };

    return (
        <div
            ref={node}
            className="w-screen h-[30px] desktop:w-auto desktop:h-auto wide:w-auto wide:h-auto"
        >
            <Burger open={open} setOpen={onClick} />
            <nav
                className={`fixed flex flex-col justify-center bg-black transition-transform duration-300 ease-in-out h-screen text-left p-8 top-0 left-0 z-[99999] w-full cursor-pointer ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <Link
                    to="hero"
                    onClick={() => onClick("hero")}
                    className="text-[2rem] uppercase py-8 font-bold tracking-[0.1rem] text-[#5600ff] no-underline transition-colors duration-300 linear hover:text-[#343078] max-[576px]:text-[1.5rem] max-[576px]:text-center"
                >
                    TOP
                </Link>

                <Link
                    to="resume"
                    onClick={() => onClick("resume")}
                    className="text-[2rem] uppercase py-8 font-bold tracking-[0.1rem] text-[#5600ff] no-underline transition-colors duration-300 linear hover:text-[#343078] max-[576px]:text-[1.5rem] max-[576px]:text-center"
                >
                    WORK TIMELINE
                </Link>
                <Link
                    to="summary"
                    onClick={() => onClick("summary")}
                    className="text-[2rem] uppercase py-8 font-bold tracking-[0.1rem] text-[#5600ff] no-underline transition-colors duration-300 linear hover:text-[#343078] max-[576px]:text-[1.5rem] max-[576px]:text-center"
                >
                    SUMMARY & EXPERIENCE
                </Link>
                <Link
                    to="projects"
                    onClick={() => onClick("projects")}
                    className="text-[2rem] uppercase py-8 font-bold tracking-[0.1rem] text-[#5600ff] no-underline transition-colors duration-300 linear hover:text-[#343078] max-[576px]:text-[1.5rem] max-[576px]:text-center"
                >
                    GitHub Projects
                </Link>
                <Link
                    to="videos"
                    onClick={() => onClick("videos")}
                    className="text-[2rem] uppercase py-8 font-bold tracking-[0.1rem] text-[#5600ff] no-underline transition-colors duration-300 linear hover:text-[#343078] max-[576px]:text-[1.5rem] max-[576px]:text-center"
                >
                    Videos & Tutorials
                </Link>
                {width < mobileThreshold && (
                    <div className="flex justify-center items-center">
                        <a
                            href="https://il.linkedin.com/in/alonalush"
                            target={"_blank"}
                            rel="noopener noreferrer"
                            onClick={() => onClick("")}
                            className="inline-block my-[10px] mx-5"
                        >
                            <FaLinkedin size={50} color={"#999"} />
                        </a>
                        <a
                            href="https://github.com/alonzo245"
                            target={"_blank"}
                            rel="noopener noreferrer"
                            onClick={() => onClick("")}
                            className="inline-block my-[10px] mx-5"
                        >
                            <FaGithubSquare size={50} color={"#999"} />
                        </a>
                    </div>
                )}
            </nav>
        </div>
    );
}

interface BurgerProps {
    open: boolean;
    setOpen: (section?: string) => boolean;
}

const Burger = ({ open, setOpen }: BurgerProps): React.JSX.Element => {
    return (
        <div
            className={`flex justify-center items-center fixed top-[5%] right-8 rounded-[2rem] z-[9999999] w-[35px] ${
                open ? "bg-[#FFFFFF00]" : "bg-[#222]"
            } desktop:bg-transparent wide:bg-transparent`}
        >
            <button
                className={`scale-[0.6] flex flex-col justify-around h-8 bg-transparent border-0 cursor-pointer p-0 focus:outline-none desktop:scale-100 wide:scale-100 ${
                    open ? "w-[25px]" : "w-[35px]"
                }`}
                onClick={() => setOpen()}
                style={{ width: open ? "25px" : "35px" }}
            >
                <div
                    className={`w-8 h-1 rounded-[10px] transition-all duration-300 linear relative origin-[1px] ${
                        open ? "bg-white rotate-[45deg]" : "bg-[#EFFFFA] rotate-0"
                    }`}
                />
                <div
                    className={`w-8 h-1 rounded-[10px] transition-all duration-300 linear relative origin-[1px] ${
                        open ? "opacity-0 translate-x-5" : "opacity-100 translate-x-0"
                    }`}
                    style={{ backgroundColor: open ? "#FFFFFF" : "#EFFFFA" }}
                />
                <div
                    className={`w-8 h-1 rounded-[10px] transition-all duration-300 linear relative origin-[1px] ${
                        open ? "bg-white rotate-[-45deg]" : "bg-[#EFFFFA] rotate-0"
                    }`}
                />
            </button>
        </div>
    );
};
