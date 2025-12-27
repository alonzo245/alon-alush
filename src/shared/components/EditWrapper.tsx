import { AiFillEdit } from "react-icons/ai";

import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { useGlobalState } from "../hooks/useGlobalState";

interface EditWrapperProps {
    children: ReactNode;
}

export default function EditWrapper({ children }: EditWrapperProps): React.JSX.Element {
    const { state } = useGlobalState();

    return (
        <Container>
            {state?.edit && <AiFillEdit size={20} color={"#fff"} />} {children}
        </Container>
    );
}

const Container = styled.div`
    position: relative;
`;
