import React from "react";
import clsx from "clsx";
import { useLink } from "@react-aria/link";
import Resume from "../resume/Resume";
import Summary from "../summary/Summary";
import Navigation from "../../shared/components/Navigation";
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import Projects from "../projects/Projects";
import Modal from "../../shared/components/Modal";
import Avatar from "./Avatar";
import { useGlobalState } from "../../core/hooks/useGlobalState";
import { useUserQuery } from "../../core/hooks/useUserQuery";
import Attributes from "../attributes/Attributes";
import Videos from "../videos/Videos";

const SocialLink = ({ href, children, ariaLabel }: { href: string; children: React.ReactNode; ariaLabel: string }) => {
    const linkRef = React.useRef<HTMLAnchorElement>(null);
    const { linkProps } = useLink(
        {
            elementType: "a",
        },
        linkRef
    );

    return (
        <a
            {...linkProps}
            ref={linkRef}
            href={href}
            target={"_blank"}
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="inline-block cursor-pointer my-[10px] mx-[10px]"
        >
            {children}
        </a>
    );
};

export default function Home(): React.JSX.Element {
    const { state } = useGlobalState();
    const { data: userData, isLoading } = useUserQuery();
    const user = userData || state?.user;

    if (isLoading) {
        return (
            <div className="mx-auto flex justify-center items-center h-screen">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    return (
        <div className={clsx("mx-auto flex justify-center items-start flex-col", "desktop:max-w-[1260px] wide:max-w-[1440px]")}>
            <Modal />

            <header>
                <Navigation />
            </header>
            <div className={clsx(
                "flex justify-between items-center flex-col mx-auto w-full",
                "desktop:flex-row desktop:items-center desktop:my-5 desktop:mx-auto desktop:w-[90%]",
                "wide:flex-row wide:items-center wide:my-5 wide:mx-auto"
            )} id="hero">
                <Avatar />
                <div className={clsx(
                    "relative w-[480px] min-w-[480px] flex flex-col text-center items-center",
                    "desktop:ml-5 desktop:min-w-[670px] desktop:items-start desktop:text-left",
                    "wide:ml-[60px] wide:min-w-[830px] wide:items-start wide:text-left"
                )}>
                    <h1 className={clsx(
                        "text-white text-[60px] text-center mt-5",
                        "wide:text-[100px] wide:mt-0",
                        "desktop:text-[86px] desktop:mt-0"
                    )}>
                        {user?.name}
                    </h1>
                    <h2 className={clsx(
                        "text-[22px] text-[#5600ff] px-[60px] mt-[10px] mb-[10px]",
                        "desktop:text-[46px] desktop:px-0",
                        "wide:text-[56px] wide:px-0"
                    )}>
                        {user?.currentJobTitle}
                    </h2>

                    <div>
                        {user?.linkedin && (
                            <SocialLink href={user.linkedin} ariaLabel="LinkedIn">
                                <FaLinkedin size={35} color={"#999"} />
                            </SocialLink>
                        )}
                        {user?.github && (
                            <SocialLink href={user.github} ariaLabel="GitHub">
                                <FaGithubSquare size={35} color={"#999"} />
                            </SocialLink>
                        )}
                        <SocialLink href="#videos" ariaLabel="YouTube Videos">
                            <FaYoutubeSquare size={35} color={"#999"} />
                        </SocialLink>
                    </div>
                </div>
            </div>
            <Resume />
            <Attributes />
            <Summary />
            <Videos />
            <Projects />
        </div>
    );
}
