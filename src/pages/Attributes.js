import React, { useEffect, useState } from "react";
import techIcons from "../data/techIcons";
import { H3, RowIcons, TechItem, Input, TechItemEdit } from "./Attributes.style";
import { useGlobalState } from "../hooks/useGlobalState";
import { EditIconWrapper } from "./Home.style";
import AttributesEdit from "../components/AttributesEdit";

export default function () {
    const { setState, state } = useGlobalState();

    return state?.edit ? (
        <AttributesEdit />
    ) : (
        <>
            {state?.user?.attributes?.length > 0 ? (
                <H3 style={{ alignSelf: "center", marginBottom: "30px", marginTop: "40px" }}>
                    {state?.user?.attributesTitle}
                </H3>
            ) : null}
            <RowIcons>
                {(state?.user?.attributes || []).map((title, k) => {
                    const i = techIcons?.find((icon) => icon?.title === title);
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
        </>
    );
}
