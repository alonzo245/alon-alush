import React, { useEffect, useState } from "react";
import techIcons from "../data/techIcons";
import { useGlobalState } from "../hooks/useGlobalState";
import { TechIcon } from "../data/techIcons";
import { AttributeCategory } from "../data/user";

export default function AttributesEdit(): React.JSX.Element {
    const { setState, state } = useGlobalState();
    const [iconTitles, setIconTitles] = useState<string[]>([]);

    useEffect(() => {
        setIconTitles([...techIcons?.map((icon) => icon?.title)]);
    }, []);

    const onClick = (attr: AttributeCategory, action: "remove" | "add"): void => {
        if (action === "remove") {
            setState({
                user: {
                    attributes: [
                        ...(state?.user?.attributes?.filter((i: AttributeCategory) => i !== attr) ||
                            []),
                    ],
                },
            });
        } else {
            setState({
                user: { attributes: [...(state?.user?.attributes || []), attr] },
            });
        }
    };
    return (
        <>
            {(state?.user?.attributes?.length || 0) > 0 ? (
                <h3
                    className="text-[30px] mb-[10px] mt-0 desktop:mb-[10px] desktop:mt-0 wide:mb-[10px] wide:mt-0"
                    style={{ alignSelf: "center", marginBottom: "30px", marginTop: "40px" }}
                >
                    {state?.user?.attributesTitle}
                </h3>
            ) : null}

            {state?.edit ? (
                <>
                    <div className="flex-wrap flex flex-row justify-center mb-5 desktop:px-[90px] wide:px-[130px]">
                        {techIcons.map((icon: TechIcon, i: number) => {
                            const iconEntity = (
                                <div key={i}>
                                    {icon.icon}
                                    <p
                                        style={{
                                            fontSize: "11px",
                                            marginTop: "5px",
                                            textAlign: "center",
                                        }}
                                    >
                                        {icon.title}
                                    </p>
                                </div>
                            );
                            const checked = state?.user?.attributes?.some(
                                (attr: AttributeCategory) => attr.title === icon?.title,
                            );
                            return (
                                <div
                                    key={i}
                                    className="p-[7px] flex flex-col justify-center items-center w-[70px] cursor-pointer border border-solid border-[#ffffff20] rounded-[10px] m-[3px] hover:bg-[#00000030] desktop:p-[7px] wide:p-[7px]"
                                    onClick={() =>
                                        onClick(
                                            { title: icon.title, items: [] },
                                            checked ? "remove" : "add",
                                        )
                                    }
                                    style={{ border: `1px solid ${checked ? "green" : ""}` }}
                                >
                                    {iconEntity}
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                <div className="flex-wrap flex flex-row justify-center mb-5 desktop:px-[90px] wide:px-[130px]">
                    {(state?.user?.attributes || []).map((i: AttributeCategory, k: number) => {
                        const techIcon = techIcons.find((icon) => icon.title === i.title);
                        return (
                            <div
                                key={k}
                                className="p-[7px] flex flex-col justify-center items-center w-[70px] desktop:p-[7px] wide:p-[7px]"
                            >
                                {techIcon?.icon || null}
                                <p
                                    style={{
                                        fontSize: "11px",
                                        marginTop: "5px",
                                        textAlign: "center",
                                    }}
                                >
                                    {i.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
