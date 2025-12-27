import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useGlobalState } from "../hooks/useGlobalState";
import ReactTooltip from "react-tooltip";
import { Link, useNavigate } from "react-router-dom";
import useScreenSize from "../hooks/useScreenSize";
import { MOBILE_MQ, mobileThreshold } from "../config/utils";
import Hamburger from "hamburger-react";

export default function Header(): React.JSX.Element | null {
    const { width } = useScreenSize();
    const { state, setState } = useGlobalState();
    const ref = useRef<HTMLDivElement>(null);

    if (state?.modal) return null;

    return (
        <Container ref={ref}>
            {width < mobileThreshold ? (
                <>
                    <TransparentElement />
                    <HamburgerWrapper>
                        <Hamburger
                            color={"#fff"}
                            size={18}
                            onToggle={(toggled) => setState({ mobileMenuVisibility: toggled })}
                            toggled={state?.mobileMenuVisibility}
                        />
                    </HamburgerWrapper>
                </>
            ) : (
                <>
                    <Link to={"/"}>logo</Link>
                    {state?.user?.email && (
                        <ReactTooltip place="bottom" type="dark" effect="solid" />
                    )}
                </>
            )}
        </Container>
    );
}
const TransparentElement = styled.div`
    width: 20px;
`;
const HamburgerWrapper = styled.div`
    position: fixed;
    top: 5px;
    right: 5px;
    background-color: #000000;
    border-radius: 50%;
    z-index: 11;
    //height: 20px;
`;

const Container = styled.header`
    display: flex;
    height: 55px;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background-color: #000;

    ${MOBILE_MQ} {
        position: fixed;
        z-index: 100;
        min-width: 100%;
        color: rgb(227, 229, 236);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding: 0 10px;
    }
`;

