import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useGlobalState } from "../hooks/useGlobalState";
import useScreenSize from "../hooks/useScreenSize";
import { SiteWrapper, Header, Hero, Row, H1, H2 } from "./Home.style";
import Resume from "./resume/Resume";
import Summary from "./Summary";
import Navigation from "../components/Navigation";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import styled from "@emotion/styled";
import { mobileThreshold } from "../config/utils";
import Projects from "./Projects";
import Modal from "../components/Modal";
import Avatar from "../components/Avatar";

export default function () {
    // const { videoId } = useParams();
    // const { state, setState } = useGlobalState();
    const { width } = useScreenSize();

    return (
        <SiteWrapper>
            <Modal />
            <Header>
                <Navigation />
            </Header>
            <Hero id="hero">
                <Avatar />
                <Row>
                    <H1>Alon Alush</H1>
                    <H2>
                        Hand-On Full-Stack Developer
                        <br /> R&D Director of Engineering
                    </H2>
                    {width > mobileThreshold && (
                        <div>
                            <A href="https://il.linkedin.com/in/alonalush" target={"_blank"}>
                                <FaLinkedin size={30} color={"#999"} />
                            </A>
                            <A href="https://github.com/alonzo245" target={"_blank"}>
                                <FaGithubSquare size={30} color={"#999"} />
                            </A>
                        </div>
                    )}
                </Row>
            </Hero>
            <Resume />
            <Summary />
            <Projects />
        </SiteWrapper>
    );
}

const A = styled.a`
    &:first-child {
        margin: 0;
    }
    display: inline-block;

    margin: 10px 10px;
`;
