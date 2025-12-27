import React, { useState } from "react";
import "./resume.style.css";
import images from "../../assets/images";
import { MdWorkOutline } from "react-icons/md";
import { useGlobalState } from "../../shared/hooks/useGlobalState";
import workFeatures from "../../constants/data/workFeatures";
import JobFeatures from "./JobFeatures";
import { WorkHistoryItem } from "../../constants/data/workHistory";

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
    const { state } = useGlobalState();
    const [opened, setOpened] = useState<number[]>([]);
    const [resume] = useState<WorkHistoryItem[]>(() => [...(state?.user?.resume || [])]);

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
                {resume?.length > 0 ? (
                    <h3 className="text-[50px]">{state?.user?.resumeTitle}</h3>
                ) : null}
            </div>
            <div>
                <ul className="branch branch-centered">
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
                </ul>
            </div>
        </div>
    );
}
