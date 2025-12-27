import React, { useState } from "react";
import "./resume.style.css";
import workHistory from "../../data/workHistory";
import images from "../../assets/images";
import { MdWorkOutline } from "react-icons/md";
import { useGlobalState } from "../../hooks/useGlobalState";
import workFeatures from "../../data/workFeatures";
import { H3, Container, P, ImgContainer, ReadMore, Input } from "./Resume.style";
import JobFeatures from "../../components/JobFeatures";
import ResumeEditItem from "../../components/ResumeEditItem";
import { EditIconWrapper } from "../Home.style";
import { WorkHistoryItem } from "../../data/workHistory";

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
        <Container className="row centered" id="resume">
            <div className="title">
                {state?.edit ? (
                    <EditIconWrapper style={{ width: "60%", margin: "0 auto" }}>
                        <Input
                            value={state?.user?.resumeTitle}
                            placeholder={"Enter Resume Title"}
                        />
                    </EditIconWrapper>
                ) : (
                    <> {resume?.length > 0 ? <H3>{state?.user?.resumeTitle}</H3> : null}</>
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
                                            <ImgContainer className="node-icon">
                                                {images[icon as keyof typeof images] ? (
                                                    <img
                                                        alt={icon}
                                                        src={images[icon as keyof typeof images]}
                                                    />
                                                ) : (
                                                    <div>
                                                        <MdWorkOutline
                                                            size={35}
                                                            color={"#ff6b6b"}
                                                        />
                                                    </div>
                                                )}
                                            </ImgContainer>
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
                                                        <ReadMore onClick={() => toggleHidden(k)}>
                                                            {opened?.includes(k)
                                                                ? "Read Less"
                                                                : "Read More"}
                                                        </ReadMore>
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
        </Container>
    );
}
