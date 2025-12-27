import { AiFillEdit } from "react-icons/ai";

import React, { useState, ReactNode } from "react";
import styled from "@emotion/styled";
import { useGlobalState } from "../hooks/useGlobalState";
import useScreenSize from "../hooks/useScreenSize";

interface EditWrapperProps {
    children: ReactNode;
}

export default function EditWrapper({ children }: EditWrapperProps): JSX.Element {
    const { width } = useScreenSize();
    const { state, setState } = useGlobalState();
    const [play, setPlay] = useState<boolean>(false);

    return (
        <Container>
            {state?.edit && <AiFillEdit size={20} color={"#fff"} />} {children}
        </Container>
    );
}

const Container = styled.div`
    position: relative;
`;
