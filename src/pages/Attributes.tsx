import React from "react";
import techIcons from "../data/techIcons";
import { useGlobalState } from "../hooks/useGlobalState";
import { EditIconWrapper } from "./Home.style";
import AttributesEdit from "../components/AttributesEdit";
import { FaBorderNone } from "react-icons/fa";
import { AttributeCategory } from "../data/user";

export default function Attributes(): React.JSX.Element {
    const { setState, state } = useGlobalState();

    return (
        <>
            <h3
                className="text-[50px] mb-[10px] mt-0 desktop:mb-[10px] desktop:mt-0 wide:mb-[10px] wide:mt-0"
                style={{ alignSelf: "center", marginBottom: "30px", marginTop: "40px" }}
            >
                {state?.user?.attributesTitle}
            </h3>

            <div className="mx-auto w-[90%] flex flex-col items-center justify-start">
                {(state?.user?.attributes || []).map((section: AttributeCategory, key: number) => {
                    return (
                        <React.Fragment key={key}>
                            <div className="w-full text-center py-5 text-[#627fc6] text-[26px] font-bold">
                                {section?.title}
                            </div>

                            <div className="flex flex-wrap justify-center items-center w-full desktop:w-1/2 wide:w-1/2">
                                {section?.items?.map((iconName: string, k: number) => {
                                    const i = techIcons?.find((item) => item?.title === iconName);
                                    return (
                                        <div
                                            key={k}
                                            className="p-[10px] flex flex-col justify-center items-center w-20 text-center"
                                        >
                                            {i && i.icon ? (
                                                i.icon
                                            ) : (
                                                <FaBorderNone size={20} color={"#9c9a9a"} />
                                            )}

                                            <p
                                                style={{
                                                    fontSize: "11px",
                                                    marginTop: "5px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {i?.title || iconName}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </>
    );
}
