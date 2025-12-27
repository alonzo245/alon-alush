import React, { useState } from "react";
import "./resume.style.css";
import images from "../../assets/images";
import { MdWorkOutline } from "react-icons/md";
import { useGlobalState } from "../../hooks/useGlobalState";
import workFeatures from "../../data/workFeatures";
import JobFeatures from "../../components/JobFeatures";
import ResumeEditItem from "../../components/ResumeEditItem";
import editIcon from "../../assets/svg/edit.svg";
import { WorkHistoryItem } from "../../data/workHistory";

const EditIconWrapper = ({
    children,
    style,
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
}): React.JSX.Element => (
    <div
        className="relative"
        style={{
            ...style,
        }}
    >
        <div
            className="absolute left-[-25px] top-[10px] block w-5 h-5 bg-no-repeat bg-[top_left]"
            style={{
                backgroundImage: `url(${editIcon})`,
            }}
        />
        {children}
    </div>
);

interface PProps {
    open?: string;
    dangerouslySetInnerHTML?: { __html: string };
}

const P = ({ open, dangerouslySetInnerHTML }: PProps): React.JSX.Element => {
    const isOpen = open === "open";
    return (
        <p
            dangerouslySetInnerHTML={dangerouslySetInnerHTML}
            style={{
                height: isOpen ? "auto" : "100px",
                WebkitMaskImage: isOpen
                    ? ""
                    : `-webkit-gradient(
                linear,
                left top,
                left bottom,
                from(rgba(0, 0, 0, 1)),
                to(rgba(0, 0, 0, 0))
            )`,
            }}
        />
    );
};

export default function Resume(): React.JSX.Element {
    const { setState, state } = useGlobalState();
    const [opened, setOpened] = useState<number[]>([]);
    const [resume, setResume] = useState<WorkHistoryItem[]>(() => [...(state?.user?.resume || [])]);

    const toggleHidden = (key: number): void => {
        if (opened?.includes(key)) {
            setOpened([...opened.filter((i) => i !== key)]);
            return;
        }
        setOpened([...opened, key]);
    };

    return (
        <div className="w-full !important row centered" id="resume">
            <div className="title">
                {state?.edit ? (
                    <EditIconWrapper style={{ width: "60%", margin: "0 auto" }}>
                        <input
                            className="bg-transparent border-0 outline-0 font-bold min-w-[250px] border-b border-dashed border-[#88888840] text-center text-[#627fc6] text-[50px] w-full placeholder:text-[#627fc6] focus:border-[#888] hover:border-[#888]"
                            value={state?.user?.resumeTitle}
                            placeholder={"Enter Resume Title"}
                        />
                    </EditIconWrapper>
                ) : (
                    <>
                        {" "}
                        {resume?.length > 0 ? (
                            <h3 className="text-[50px]">{state?.user?.resumeTitle}</h3>
                        ) : null}
                    </>
                )}
            </div>
            <div>
                <ul className="branch branch-centered">
                    {/*{workHistory[0]}*/}

                    {state?.edit ? (
                        <ResumeEditItem />
                    ) : (
                        <>
                            {(resume || []).map(
                                (
                                    {
                                        id,
                                        title,
                                        company,
                                        icon,
                                        description,
                                        date,
                                        preDescription = null,
                                    },
                                    k,
                                ) => {
                                    return (
                                        <li className="item" key={k}>
                                            <div className="date-title">
                                                <span>
                                                    {company}
                                                    <br />
                                                    {date}
                                                </span>
                                            </div>
                                            <div className="node-icon w-[45px]">
                                                {images[icon as keyof typeof images] ? (
                                                    <img
                                                        alt={icon}
                                                        src={images[icon as keyof typeof images]}
                                                        className="h-[45px] w-[45px] rounded-full bg-white border-[3px] border-transparent object-cover absolute top-0 left-0 translate-x-[-13px] transition-[background,border] duration-300 ease-in-out"
                                                    />
                                                ) : (
                                                    <div className="h-[45px] w-[45px] rounded-full bg-white border-[3px] border-transparent flex items-center justify-center absolute top-0 left-0 translate-x-[-13px] transition-[background,border] duration-300 ease-in-out">
                                                        <MdWorkOutline
                                                            size={35}
                                                            color={"#ff6b6b"}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="content">
                                                <h3 className="item-title">{title}</h3>
                                                {workFeatures[id as keyof typeof workFeatures] && (
                                                    <JobFeatures id={id} />
                                                )}
                                                {preDescription && (
                                                    <div
                                                        style={{ height: "fit-content" }}
                                                        dangerouslySetInnerHTML={{
                                                            __html: preDescription,
                                                        }}
                                                    />
                                                )}
                                                {description && description.length > 800 ? (
                                                    <>
                                                        <P
                                                            dangerouslySetInnerHTML={{
                                                                __html: description,
                                                            }}
                                                            open={opened?.includes(k) ? "open" : ""}
                                                        />
                                                        <div
                                                            className="border border-dashed border-[#99999980] h-[35px] text-center rounded-[5px] leading-[35px] cursor-pointer my-[10px] mx-auto desktop:max-w-[250px] wide:max-w-[350px]"
                                                            onClick={() => toggleHidden(k)}
                                                        >
                                                            {opened?.includes(k)
                                                                ? "Read Less"
                                                                : "Read More"}
                                                        </div>
                                                    </>
                                                ) : (
                                                    description && (
                                                        <P
                                                            dangerouslySetInnerHTML={{
                                                                __html: description,
                                                            }}
                                                            open={"open"}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </li>
                                    );
                                },
                            )}
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}
