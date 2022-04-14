import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useGlobalState } from "../hooks/useGlobalState";
import ReactTooltip from "react-tooltip";
import { Link, useNavigate } from "react-router-dom";
import useScreenSize from "../hooks/useScreenSize";
import { MOBILE_MQ, mobileThreshold, DESKTOP_MQ, WIDE_MQ } from "../config/utils";
import Hamburger from "hamburger-react";
import Alon from "../assets/images/alon-alush-resized.jpg";

export default function () {
    const { width } = useScreenSize();
    const { state, setState } = useGlobalState();
    const [play, setPlay] = useState(false);

    return (
        <Container>
            <Mask>
                <Img src={Alon} alt={"Alon ALush"} />
                {/* {play ? (
                    <Img src={Alon} alt={"Alon ALush"} />
                ) : (
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${"BFuWc2Hwhdc"}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                )} */}
            </Mask>
        </Container>
    );
}

const Img = styled.img`
    width: 100%;
`;

const Mask = styled.div`
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
const Container = styled.div``;
