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

export default function () {
    const { setState, state } = useGlobalState();
    const [iconTitles, setIconTitles] = useState([]);

    useEffect(() => {
        setIconTitles([...techIcons?.map((icon) => icon?.title)]);
        // console.log([...techIcons?.map((icon) => icon?.title)]);
    }, []);

    const onClick = (attr, action) => {
        if (action === "remove") {
            setState({
                user: { attributes: [...state?.user?.attributes?.filter((i) => i !== attr)] },
            });
        } else {
            setState({ user: { attributes: [...state?.user?.attributes, attr] } });
        }
    };
    return (
        <>
            {state?.edit ? (
                <EditIconWrapper style={{ width: "60%", margin: "0 auto" }}>
                    <Input
                        value={state?.user?.attributesTitle}
                        name={"attributesTitle"}
                        placeholder={"Enter Resume Title"}
                    />
                </EditIconWrapper>
            ) : (
                <>
                    {state?.user?.attributes?.length > 0 ? (
                        <H3
                            style={{ alignSelf: "center", marginBottom: "30px", marginTop: "40px" }}
                        >
                            {state?.user?.attributesTitle}
                        </H3>
                    ) : null}
                </>
            )}

            {state?.edit ? (
                <>
                    <RowIcons>
                        {techIcons.map((icon, i) => {
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
                            const checked = state?.user?.attributes?.includes(icon?.title);
                            return (
                                <TechItemEdit
                                    key={i}
                                    onClick={() => onClick(icon?.title, checked ? "remove" : "add")}
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
                    {(state?.user?.attributes || []).map((i, k) => {
                        return (
                            <TechItem key={k}>
                                {i.icon}
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
