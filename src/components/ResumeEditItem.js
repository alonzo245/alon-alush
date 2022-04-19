import React, { forwardRef, useEffect, useRef, useState } from "react";
import "../pages/resume/resume.style.css";
import { useGlobalState } from "../hooks/useGlobalState";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { EditIconWrapper2 } from "../pages/Home.style";
import { ImgContainer, LI, LI2, Input, Input2, Input3, Textarea } from "./ResumeEditItem.style";
export default function () {
    const { setState, state } = useGlobalState();
    const [items, setItems] = useState([]);
    const [resume, setResume] = useState(() => [...(state?.user?.resume || [])]);

    const onClick = () => {
        setItems([
            ...items,
            {
                title: "",
                date: "",
                company: "",
                description: "",
            },
        ]);
    };

    return (
        <>
            {(resume || []).map((item, i) => {
                return (
                    <LI className="item">
                        <div className="date-title">
                            <span>
                                <EditIconWrapper2>
                                    <Input
                                        value={item?.company}
                                        placeholder={"Enter Company name"}
                                    />
                                </EditIconWrapper2>
                                <br />
                                <EditIconWrapper2>
                                    <Input3
                                        value={item?.date}
                                        placeholder={"Enter Work Duration"}
                                    />
                                </EditIconWrapper2>
                            </span>
                        </div>
                        <ImgContainer className="node-icon">
                            <div>
                                <AiFillEdit size={20} color={"#fff"} />
                            </div>
                        </ImgContainer>
                        <div className="content">
                            <h3 className="item-title">
                                <EditIconWrapper2>
                                    <Input2
                                        value={item?.title}
                                        placeholder={"What's you job title?"}
                                    />
                                </EditIconWrapper2>
                            </h3>
                            {/*{workFeatures[id] && <JobFeatures id={id} />}*/}
                            {/*<P*/}
                            {/*    dangerouslySetInnerHTML={{*/}
                            {/*        __html: description,*/}
                            {/*    }}*/}
                            {/*    open={opened?.includes(k) ? "open" : ""}*/}
                            {/*/>*/}
                            <EditIconWrapper2>
                                <Textarea
                                    rows={10}
                                    value={item?.description}
                                    placeholder={"What did you worked on over there?"}
                                />
                            </EditIconWrapper2>
                        </div>
                    </LI>
                );
            })}
            <LI2 className="item" onClick={onClick}>
                <ImgContainer className="node-icon">
                    <div>
                        <AiOutlinePlus size={20} color={"#fff"} />
                    </div>
                </ImgContainer>
            </LI2>
        </>
    );
}
