import React from "react";
import techIcons from "../../constants/data/techIcons";
import { useGlobalState } from "../../core/hooks/useGlobalState";
import { FaBorderNone } from "react-icons/fa";
import { AttributeCategory } from "../../constants/data/user";

export default function Attributes(): React.JSX.Element {
    const { state } = useGlobalState();

    return (
        <section
            id="attributes"
            aria-labelledby="attributes-heading"
            className="mx-auto w-[90%] flex flex-col items-center justify-start"
        >
            <h2
                id="attributes-heading"
                className="text-[50px] mb-[10px] mt-0 desktop:mb-[10px] desktop:mt-0 wide:mb-[10px] wide:mt-0"
                style={{ alignSelf: "center", marginBottom: "30px", marginTop: "40px" }}
            >
                {state?.user?.attributesTitle}
            </h2>

            {(state?.user?.attributes || []).map((section: AttributeCategory, key: number) => {
                return (
                    <div key={key} className="w-full">
                        <h3 className="w-full text-center py-5 text-[#627fc6] text-[26px] font-bold">
                            {section?.title}
                        </h3>

                        <div
                            className="flex flex-wrap justify-center items-center w-full desktop:w-1/2 wide:w-1/2 mx-auto"
                            role="list"
                            aria-label={`${section?.title} technologies`}
                        >
                            {section?.items?.map((iconName: string, k: number) => {
                                const i = techIcons?.find((item) => item?.title === iconName);
                                return (
                                    <div
                                        key={k}
                                        role="listitem"
                                        className="p-[10px] flex flex-col justify-center items-center w-20 text-center"
                                        aria-label={i?.title || iconName}
                                    >
                                        {i && i.icon ? (
                                            <span aria-hidden="true">{i.icon}</span>
                                        ) : (
                                            <FaBorderNone
                                                size={20}
                                                color={"#9c9a9a"}
                                                aria-hidden="true"
                                            />
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
                    </div>
                );
            })}
        </section>
    );
}
