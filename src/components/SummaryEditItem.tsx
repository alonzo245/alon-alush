import React from "react";
import { useGlobalState } from "../hooks/useGlobalState";
import { EditIconWrapper2 } from "../pages/Home.style";
import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { SummaryItem } from "../data/summary";

export default function SummaryEditItem(): React.JSX.Element | null {
    const { setState, state } = useGlobalState();

    const onClick = (): void => {
        setState({
            user: {
                ...state?.user,
                summary: [
                    { title: "", bullets: ["First bullet :)"] },
                    ...(state?.user?.summary || []),
                ],
            },
        });
    };

    const onClick2 = (i: number): void => {
        const array = [...(state?.user?.summary || [])];

        setState({
            user: {
                ...state?.user,
                summary: array.map((item, index) => {
                    if (index === i) return { ...item, bullets: [...(item.bullets || []), ""] };
                    return item;
                }),
            },
        });
    };

    const onClick3 = (i: number, k: number): void => {
        const array = [...(state?.user?.summary || [])];
        if (array[i]?.bullets) {
            array[i].bullets.splice(k, 1);
        }
        // setState([...array]);
        setState({
            user: {
                ...state?.user,
                summary: [...array],
            },
        });
    };

    if (!state?.edit) return null;

    return (
        <div className="flex flex-1 px-[30px] mx-auto flex-col w-full desktop:my-10 desktop:px-20 wide:my-10 wide:px-20">
            <div
                className="my-[10px] mx-auto p-[15px] bg-[#66666640] rounded-[10px] cursor-pointer transition-all duration-200 ease-in hover:bg-[#77777780]"
                onClick={onClick}
            >
                <span>
                    <AiOutlinePlus size={15} color={"#fff"} />
                </span>
                Add another summary
            </div>
            {(state?.user?.summary || [])?.map((item: SummaryItem, i: number) => {
                return (
                    <div
                        key={i}
                        className="flex-none leading-[1.2] p-5 bg-[#99999920] rounded-[10px] w-full self-center mb-5 [&_li]:py-[3px] desktop:max-w-[1000px] wide:max-w-[1000px]"
                    >
                        <EditIconWrapper2>
                            <input
                                className="uppercase text-[#acbac4] bg-transparent border-0 outline-0 font-bold min-w-[250px] border-b border-dashed border-[#88888840] w-full pl-[23px] placeholder:text-[#acbac4] focus:text-[#999] focus:border-[#888] hover:text-[#999] hover:border-[#888]"
                                value={item?.title}
                                name="h1"
                                placeholder={"Title"}
                            />
                        </EditIconWrapper2>
                        <ul>
                            {(item?.bullets || []).map((bullet: string, k: number) => {
                                return (
                                    <li style={{ display: "flex", marginTop: "10px" }} key={k}>
                                        <AiOutlineCloseCircle
                                            onClick={() => onClick3(i, k)}
                                            size={20}
                                            color={"#fff"}
                                            style={{ display: "flex", marginTop: "10px" }}
                                        />
                                        <textarea
                                            className="text-[#acbac4] bg-transparent border-0 outline-0 min-w-[250px] border-b border-dashed border-[#88888840] w-full pl-[23px] placeholder:text-[#acbac4] focus:text-[#acbac4] focus:border-[#888] hover:text-[#acbac4] hover:border-[#888]"
                                            value={bullet}
                                            placeholder={"Another one...?"}
                                        />
                                    </li>
                                );
                            })}
                            <li style={{ listStyle: "none" }}>
                                <div
                                    className="my-[10px] mx-auto p-[15px] bg-[#66666640] rounded-[10px] cursor-pointer transition-all duration-200 ease-in w-full self-center text-center hover:bg-[#77777780] desktop:w-[200px] wide:w-[200px]"
                                    onClick={() => onClick2(i)}
                                >
                                    Add bullet
                                </div>
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}
