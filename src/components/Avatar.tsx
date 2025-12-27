import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useGlobalState } from "../hooks/useGlobalState";
import ReactTooltip from "react-tooltip";
import { Link, useNavigate } from "react-router-dom";
import useScreenSize from "../hooks/useScreenSize";
import { MOBILE_MQ, mobileThreshold, DESKTOP_MQ, WIDE_MQ } from "../config/utils";
import Hamburger from "hamburger-react";
import Alon from "../assets/images/alon-alush-resized.jpg";
import { AiFillEdit } from "react-icons/ai";

export default function Avatar(): JSX.Element {
    const { width } = useScreenSize();
    const { state, setState } = useGlobalState();
    const [play, setPlay] = useState<boolean>(false);

    return (
        <Container>
            <Mask>
                <Img src={Alon} alt={"Alon ALush"} />
            </Mask>
        </Container>
    );
}

const AvatarAiFillEdit = styled(AiFillEdit)`
    position: absolute;
`;

const Edit = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #666;
    z-index: 3;
    opacity: 0.5;
    position: absolute;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

const Img = styled.img`
    width: 100%;
`;

const Mask = styled.div`
    position: relative;
    border-radius: 250px;
    height: 250px;
    width: 250px;
    overflow: hidden;

    ${DESKTOP_MQ} {
        border-radius: 300px;
        height: 350px;
        width: 350px;
    }

    ${WIDE_MQ} {
        border-radius: 300px;
        height: 550px;
        width: 550px;
    }
`;
const Container = styled.div`
    position: relative;
`;
