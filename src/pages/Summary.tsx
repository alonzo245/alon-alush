import React from "react";
import { Container, Row, H4, Input, Input2, Textarea, DIV } from "./Summary.style";
import { useGlobalState } from "../hooks/useGlobalState";
import SummaryEditItem from "../components/SummaryEditItem";
import { SummaryItem } from "../data/summary";

export default function Summary(): JSX.Element {
    const { setState, state } = useGlobalState();

    return (
        <Container id="summary">
            {state?.user?.summary?.length === 0 || state?.edit ? null : (
                <Row>
                    {(state?.user?.summary || [])?.map((item: SummaryItem, i: number) => {
                        return (
                            <DIV key={i}>
                                <H4>{item?.title}</H4>
                                <ul>
                                    {(item?.bullets || [])?.map((bullet: string, k: number) => {
                                        return <li key={k}>{bullet}</li>;
                                    })}
                                </ul>
                            </DIV>
                        );
                    })}
                </Row>
            )}
            <SummaryEditItem />
        </Container>
    );
}
