import React, { useEffect, useState } from "react";
import techIcons from "../data/techIcons";
import { H3 } from "./Attributes.style";
import { useGlobalState } from "../hooks/useGlobalState";
import { EditIconWrapper } from "./Home.style";
import AttributesEdit from "../components/AttributesEdit";
import styled from "@emotion/styled";
import { DESKTOP_MQ, WIDE_MQ } from "../config/utils";
import { MdFilterNone } from "react-icons/md";
import { FaBorderNone } from "react-icons/fa";
import { AttributeCategory } from "../data/user";

export default function Attributes(): JSX.Element {
    const { setState, state } = useGlobalState();

    return (
        <>
            <H3 style={{ alignSelf: "center", marginBottom: "30px", marginTop: "40px" }}>
                {state?.user?.attributesTitle}
            </H3>

            <Sections>
                {(state?.user?.attributes || []).map((section: AttributeCategory, key: number) => {
                    return (
                        <React.Fragment key={key}>
                            <Title>{section?.title}</Title>

                            <Section>
                                {section?.items?.map((iconName: string, k: number) => {
                                    // console.log(iconName);
                                    const i = techIcons?.find((item) => item?.title === iconName);
                                    // console.log("dddddd", i);
                                    return (
                                        <TechItem key={k}>
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
                                        </TechItem>
                                    );
                                })}
                            </Section>
                        </React.Fragment>
                    );
                })}
            </Sections>
        </>
    );
}

const Title = styled.div`
    width: 100%;
    text-align: center;
    padding: 20px;
    color: #627fc6;
    font-size: 26px;
    font-weight: bold;
    ${DESKTOP_MQ} {
    }

    ${WIDE_MQ} {
    }
`;

const TechItem = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    text-align: center;

    ${DESKTOP_MQ} {
    }

    ${WIDE_MQ} {
    }
`;

const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    width: 100%;
    ${DESKTOP_MQ} {
        width: 50%;
    }

    ${WIDE_MQ} {
        width: 50%;
    }
`;

const Sections = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    ${DESKTOP_MQ} {
        /* flex-direction: row; */
    }

    ${WIDE_MQ} {
        /* flex-direction: row; */
    }
`;
