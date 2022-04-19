import React, { useState } from "react";
import techIcons from "../data/techIcons";
import { Input, Input2, Textarea } from "../pages/Summary.style";
import { useGlobalState } from "../hooks/useGlobalState";
import { EditIconWrapper2, EditIconWrapper3 } from "../pages/Home.style";
import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { ImgContainer, LI2 } from "./ResumeEditItem.style";
import styled from "@emotion/styled";
import { DESKTOP_MQ, WIDE_MQ } from "../config/utils";

export default function () {
    const { setState, state } = useGlobalState();
    const [summary, setSummary] = useState(() => state?.user?.summary || []);

    const onClick = () => {
        setSummary([{ title: "", bullets: ["First bullet :)"] }, ...summary]);
    };

    const onClick2 = (i) => {
        const arr = [...summary];
        setSummary(
            arr.map((item, index) => {
                if (index === i) return { ...item, bullets: [...item.bullets, ""] };
                return item;
            }),
        );
    };

    const onClick3 = (i, k) => {
        const array = [...summary];
        array[i]?.bullets?.splice(k, 1);
        setSummary([...array]);
    };

    return (
        state?.edit && (
            <Row>
                <Button onClick={onClick}>
                    <span>
                        <AiOutlinePlus size={15} color={"#fff"} />
                    </span>
                    Add another summary
                </Button>
                {summary?.map((item, i) => {
                    return (
                        <DIV key={i}>
                            <EditIconWrapper2>
                                <Input value={item?.title} name="h1" placeholder={"Title"} />
                            </EditIconWrapper2>
                            <ul>
                                {(item?.bullets || []).map((bullet, k) => {
                                    return (
                                        <li style={{ display: "flex", marginTop: "10px" }}>
                                            <AiOutlineCloseCircle
                                                onClick={() => onClick3(i, k)}
                                                size={20}
                                                color={"#fff"}
                                                style={{ display: "flex", marginTop: "10px" }}
                                            />
                                            <Textarea
                                                value={bullet}
                                                placeholder={"Another one...?"}
                                            />
                                        </li>
                                    );
                                })}
                                <li style={{ listStyle: "none" }}>
                                    <Button2 onClick={() => onClick2(i)}>Add bullet</Button2>
                                </li>
                            </ul>
                        </DIV>
                    );
                })}
            </Row>
        )
    );
}

export const Row = styled.div`
    display: flex;
    flex: 1 1;
    padding: 0 30px;
    margin: 0px auto;
    flex-direction: column;
    width: 100%;

    ${DESKTOP_MQ} {
        margin: 40px auto;
        padding: 0 80px;
    }

    ${WIDE_MQ} {
        margin: 40px auto;
        padding: 0 80px;
    }
`;

export const DIV = styled.div`
    flex: unset;
    line-height: 1.2;

    padding: 20px;
    background: #99999920;
    border-radius: 10px;
    width: 100%;
    align-self: center;
    margin-bottom: 20px;
    & li {
        padding: 3px 0;
    }

    ${DESKTOP_MQ} {
        max-width: 1000px;
    }

    ${WIDE_MQ} {
        max-width: 1000px;
    }
`;

const Button2 = styled.div`
    margin: 10px auto;
    padding: 15px;
    background-color: #66666640;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    width: 100%;
    align-self: center;
    text-align: center;

    &:hover {
        background-color: #77777780;
    }

    ${WIDE_MQ} {
        width: 200px;
    }

    ${DESKTOP_MQ} {
        width: 200px;
    }
`;

const Button = styled.div`
    margin: 10px auto;
    padding: 15px;
    background-color: #66666640;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
        background-color: #77777780;
    }
`;
