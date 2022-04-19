import { AiFillEdit } from "react-icons/ai";

import React, { useState } from "react";
import styled from "@emotion/styled";
import { useGlobalState } from "../hooks/useGlobalState";
import useScreenSize from "../hooks/useScreenSize";

export default function ({ children }) {
    const { width } = useScreenSize();
    const { state, setState } = useGlobalState();
    const [play, setPlay] = useState(false);

    return (
        <Container>
            {state?.edit && <AiFillEdit size={20} color={"#fff"} />} {children}
        </Container>
    );
}

const Container = styled.div`
    position: relative;
`;
