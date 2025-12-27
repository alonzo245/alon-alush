import React, { useEffect, useState } from "react";
import techIcons from "../data/techIcons";
import {
    H3,
    RowIcons,
    TechItem,
    Input,
    TechItemEdit,
    EditIconWrapper,
} from "./AttributesEdit.style";
import { useGlobalState } from "../hooks/useGlobalState";
import { DIV } from "./ResumeEditItem.style";
import { TechIcon } from "../data/techIcons";
import { AttributeCategory } from "../data/user";

export default function AttributesEdit(): JSX.Element {
    const { setState, state } = useGlobalState();
    const [iconTitles, setIconTitles] = useState<string[]>([]);

    useEffect(() => {
        setIconTitles([...techIcons?.map((icon) => icon?.title)]);
        // console.log([...techIcons?.map((icon) => icon?.title)]);
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
                <H3 style={{ alignSelf: "center", marginBottom: "30px", marginTop: "40px" }}>
                    {state?.user?.attributesTitle}
                </H3>
            ) : null}

            {state?.edit ? (
                <>
                    <RowIcons>
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
                                <TechItemEdit
                                    key={i}
                                    onClick={() =>
                                        onClick(
                                            { title: icon.title, items: [] },
                                            checked ? "remove" : "add",
                                        )
                                    }
                                    style={{ border: `1px solid ${checked ? "green" : ""}` }}
                                >
                                    {iconEntity}
                                </TechItemEdit>
                            );
                        })}
                    </RowIcons>
                </>
            ) : (
                <RowIcons>
                    {(state?.user?.attributes || []).map((i: AttributeCategory, k: number) => {
                        const techIcon = techIcons.find((icon) => icon.title === i.title);
                        return (
                            <TechItem key={k}>
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
                            </TechItem>
                        );
                    })}
                </RowIcons>
            )}
        </>
    );
}
