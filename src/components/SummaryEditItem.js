import React from "react";
import { useGlobalState } from "../hooks/useGlobalState";
import { EditIconWrapper2 } from "../pages/Home.style";
import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { DIV, Row, Input, Textarea, Button, Button2 } from "./ResumeEditItem.style";

export default function () {
    const { setState, state } = useGlobalState();

    const onClick = () => {
        setState({
            user: {
                ...state?.user,
                summary: [{ title: "", bullets: ["First bullet :)"] }, ...state?.user?.summary],
            },
        });
    };

    const onClick2 = (i) => {
        const array = [...state?.user?.summary];

        setState({
            user: {
                ...state?.user,
                summary: array.map((item, index) => {
                    if (index === i) return { ...item, bullets: [...item.bullets, ""] };
                    return item;
                }),
            },
        });
    };

    const onClick3 = (i, k) => {
        const array = [...state?.user?.summary];
        array[i]?.bullets?.splice(k, 1);
        // setState([...array]);
        setState({
            user: {
                ...state?.user,
                summary: [...array],
            },
        });
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
                {(state?.user?.summary || [])?.map((item, i) => {
                    return (
                        <DIV key={i}>
                            <EditIconWrapper2>
                                <Input value={item?.title} name="h1" placeholder={"Title"} />
                            </EditIconWrapper2>
                            <ul>
                                {(item?.bullets || []).map((bullet, k) => {
                                    return (
                                        <li style={{ display: "flex", marginTop: "10px" }} key={k}>
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
