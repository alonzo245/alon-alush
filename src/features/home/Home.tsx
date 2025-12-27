import React, { useEffect } from "react";
import Resume from "../resume/Resume";
import Summary from "../summary/Summary";
import Navigation from "../../shared/components/Navigation";
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import Projects from "../projects/Projects";
import Modal from "../../shared/components/Modal";
import Avatar from "./Avatar";
import { useGlobalState } from "../../shared/hooks/useGlobalState";
import { useSearchParams } from "react-router-dom";
import Attributes from "../attributes/Attributes";
import Videos from "../videos/Videos";
import editIcon from "../../assets/svg/edit.svg";

const EditIconWrapper = ({ children }: { children: React.ReactNode }): React.JSX.Element => (
    <div className="relative">
        <div
            className="absolute left-[-25px] top-[10px] block w-5 h-5 bg-no-repeat bg-[top_left]"
            style={{
                backgroundImage: `url(${editIcon})`,
            }}
        />
        {children}
    </div>
);

const EditIconWrapper2 = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
    const editIconPath2 = require("../../assets/svg/edit.svg");
    return (
        <div className="relative w-full">
            <div
                className="absolute left-0 top-[5px] block w-5 h-5 bg-no-repeat bg-[top_left]"
                style={{
                    backgroundImage: `url(${editIconPath2})`,
                }}
            />
            {children}
        </div>
    );
};

export default function Home(): React.JSX.Element {
    const [searchParams] = useSearchParams();
    const { state, setState } = useGlobalState();

    useEffect(() => {
        if (searchParams?.get("edit")) {
            setState({ edit: true });
        }
    }, [searchParams, setState]);

    return (
        <div className="mx-auto flex justify-center items-start flex-col desktop:max-w-[1260px] wide:max-w-[1440px]">
            <Modal />

            <header>
                <Navigation />
            </header>
            <div className="flex justify-between items-center flex-col mx-auto w-full desktop:flex-row desktop:items-center desktop:my-5 desktop:mx-auto desktop:w-[90%] wide:flex-row wide:items-center wide:my-5 wide:mx-auto" id="hero">
                <Avatar />
                <div className="relative w-[480px] min-w-[480px] flex flex-col text-center items-center desktop:ml-5 desktop:min-w-[670px] desktop:items-start desktop:text-left wide:ml-[60px] wide:min-w-[830px] wide:items-start wide:text-left">
                    {state?.edit ? (
                        <EditIconWrapper>
                            <input
                                className="text-white text-[60px] text-center mt-5 border-0 outline-0 font-bold block bg-transparent w-full border-b border-dashed border-[#88888840] placeholder:text-[#999] placeholder:border-b placeholder:border-dashed placeholder:border-[#888] focus:text-white focus:border-b focus:border-dashed focus:border-[#888] hover:text-white hover:border-b hover:border-dashed hover:border-[#888] wide:text-left wide:text-[100px] wide:mt-0 desktop:text-left desktop:text-[86px] desktop:mt-0"
                                name="h1"
                                placeholder={"Enter your name"}
                            />
                        </EditIconWrapper>
                    ) : (
                        <h1 className="text-white text-[60px] text-center mt-5 wide:text-[100px] wide:mt-0 desktop:text-[86px] desktop:mt-0">
                            {state?.user?.name}
                        </h1>
                    )}
                    {state?.edit ? (
                        <EditIconWrapper>
                            <input
                                className={`text-[#5600ff] text-[22px] text-center mt-5 border-0 outline-0 font-bold bg-transparent w-full border-b border-dashed border-[#88888840] placeholder:text-[#999] placeholder:border-b placeholder:border-dashed placeholder:border-[#888] focus:text-[#5600ff] focus:border-b focus:border-dashed focus:border-[#888] hover:text-[#5600ff] hover:border-b hover:border-dashed hover:border-[#888] wide:text-left wide:text-[56px] desktop:text-left desktop:text-[46px] ${state?.edit ? "editIcon" : ""}`}
                                name="h2"
                                placeholder={"What's you job title?"}
                            />
                        </EditIconWrapper>
                    ) : (
                        <h1 className="text-[22px] text-[#5600ff] px-[60px] mt-[10px] mb-[10px] desktop:text-[46px] desktop:px-0 wide:text-[56px] wide:px-0">
                            {state?.user?.currentJobTitle}
                        </h1>
                    )}

                    <div>
                        <a
                            href={state?.user?.linkedin}
                            target={"_blank"}
                            rel="noopener noreferrer"
                            className="inline-block cursor-pointer my-[10px] mx-[10px]"
                        >
                            <FaLinkedin size={35} color={"#999"} />
                        </a>
                        <a
                            href={state?.user?.github}
                            target={"_blank"}
                            rel="noopener noreferrer"
                            className="inline-block cursor-pointer my-[10px] mx-[10px]"
                        >
                            <FaGithubSquare size={35} color={"#999"} />
                        </a>
                        <a
                            href="#videos"
                            className="inline-block cursor-pointer my-[10px] mx-[10px]"
                        >
                            <FaYoutubeSquare size={35} color={"#999"} />
                        </a>
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

// Export EditIconWrapper2 for use in other files
export { EditIconWrapper2 };
