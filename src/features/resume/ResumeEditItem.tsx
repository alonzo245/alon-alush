import React from "react";
import "./resume.style.css";
import { useGlobalState } from "../../shared/hooks/useGlobalState";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { EditIconWrapper2 } from "../home/Home";
import { WorkHistoryItem } from "../../constants/data/workHistory";

export default function ResumeEditItem(): React.JSX.Element {
    const { setState, state } = useGlobalState();

    const onClick = (): void => {
        setState({
            user: {
                ...state?.user,
                resume: [
                    ...(state?.user?.resume || []),
                    {
                        id: "",
                        icon: "",
                        title: "",
                        date: "",
                        company: "",
                        description: "",
                    },
                ],
            },
        });
    };

    return (
        <>
            {(state?.user?.resume || []).map((item: WorkHistoryItem, i: number) => {
                return (
                    <li className="item rounded-[10px]" key={i}>
                        <div className="date-title">
                            <span>
                                <EditIconWrapper2>
                                    <input
                                        className="uppercase text-[#627fc6] bg-transparent border-0 outline-0 font-bold min-w-[250px] border-b border-dashed border-[#88888840] w-full pl-[23px] placeholder:text-[#627fc6] focus:border-[#888] hover:border-[#888]"
                                        value={item?.company}
                                        placeholder={"Enter Company name"}
                                    />
                                </EditIconWrapper2>
                                <br />
                                <EditIconWrapper2>
                                    <input
                                        className="text-[#acbac4] bg-transparent border-0 outline-0 font-bold min-w-[250px] border-b border-dashed border-[#88888840] w-full pl-[23px] placeholder:text-[#acbac4] focus:text-[#999] focus:border-[#888] hover:text-[#999] hover:border-[#888]"
                                        value={item?.date}
                                        placeholder={"Enter Work Duration"}
                                    />
                                </EditIconWrapper2>
                            </span>
                        </div>
                        <div className="node-icon">
                            <div className="h-[45px] w-[45px] rounded-[45px] bg-[#5600ff] flex items-center justify-center absolute top-0 left-0 translate-x-[-13px] border-[3px] border-white transition-[background,border] duration-300 ease-in-out hover:cursor-pointer hover:bg-[#5600ff40]">
                                <AiFillEdit size={20} color={"#fff"} />
                            </div>
                        </div>
                        <div className="content">
                            <h3 className="item-title">
                                <EditIconWrapper2>
                                    <input
                                        className="uppercase text-[#627fc6] bg-transparent border-0 outline-0 font-bold text-[20px] min-w-[250px] border-b border-dashed border-[#88888840] w-full pl-[23px] placeholder:text-[#627fc6] focus:text-[#627fc6] focus:border-[#888] hover:text-[#627fc6] hover:border-[#888]"
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
                                <textarea
                                    className="text-[#acbac4] bg-transparent border-0 outline-0 min-w-[250px] border-b border-dashed border-[#88888840] w-full pl-[23px] placeholder:text-[#acbac4] focus:text-[#acbac4] focus:border-[#888] hover:text-[#acbac4] hover:border-[#888]"
                                    rows={10}
                                    value={item?.description || ""}
                                    placeholder={"What did you worked on over there?"}
                                />
                            </EditIconWrapper2>
                        </div>
                    </li>
                );
            })}
            <li className="item rounded-[10px] pb-[45px] !important" onClick={onClick}>
                <div className="node-icon">
                    <div className="h-[45px] w-[45px] rounded-[45px] bg-[#5600ff] flex items-center justify-center absolute top-0 left-0 translate-x-[-13px] border-[3px] border-white transition-[background,border] duration-300 ease-in-out hover:cursor-pointer hover:bg-[#5600ff40]">
                        <AiOutlinePlus size={20} color={"#fff"} />
                    </div>
                </div>
            </li>
        </>
    );
}
