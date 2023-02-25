import React, { useEffect, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import {
    SiteWrapper,
    Header,
    Hero,
    Row,
    H1,
    H2,
    H1Input,
    H2Input,
    EditIconWrapper,
    LinkInput,
} from "./Home.style";
import Resume from "./resume/Resume";
import Summary from "./Summary";
import Navigation from "../components/Navigation";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import styled from "@emotion/styled";
import { mobileThreshold } from "../config/utils";
import Projects from "./Projects";
import Modal from "../components/Modal";
import Avatar from "../components/Avatar";
import { useGlobalState } from "../hooks/useGlobalState";
import { useSearchParams } from "react-router-dom";
import Attributes from "./Attributes";

export default function () {
    const [searchParams, setSearchParams] = useSearchParams();
    const { state, setState } = useGlobalState();
    const { width } = useScreenSize();
    // console.log(searchParams?.get("edit"));

    useEffect(() => {
        searchParams?.get("edit") && setState({ edit: true });
    }, []);

    return (
        <SiteWrapper>
            <Modal />
            <Header>
                <Navigation />
            </Header>
            <Hero id="hero">
                <Avatar />
                <Row>
                    {state?.edit ? (
                        <EditIconWrapper>
                            <H1Input name="h1" placeholder={"Enter your name"} />
                        </EditIconWrapper>
                    ) : (
                        <H1>{state?.user?.name}</H1>
                    )}
                    {state?.edit ? (
                        <EditIconWrapper>
                            <H2Input
                                className={state?.edit && "editIcon"}
                                name="h2"
                                placeholder={"What's you job title?"}
                            />
                        </EditIconWrapper>
                    ) : (
                        <H2>{state?.user?.currentJobTitle}</H2>
                    )}

                    <div>
                        {state?.edit ? (
                            <div>
                                <FaLinkedin
                                    size={35}
                                    color={"#999"}
                                    style={{ marginRight: "10px" }}
                                />
                                <LinkInput name="linkedin" placeholder={"LinkedIn Profile url"} />
                            </div>
                        ) : state?.user?.linkedin ? (
                            <A href={state?.user?.linkedin} target={"_blank"}>
                                <FaLinkedin size={35} color={"#999"} />
                            </A>
                        ) : null}

                        {state?.edit ? (
                            <div>
                                <FaGithubSquare
                                    size={35}
                                    color={"#999"}
                                    style={{ marginRight: "10px" }}
                                />
                                <LinkInput name="github" placeholder={"GitHub Profile url"} />
                            </div>
                        ) : state?.user?.linkedin ? (
                            <A href={state?.user?.github} target={"_blank"}>
                                <FaGithubSquare size={35} color={"#999"} />
                            </A>
                        ) : null}
                    </div>
                </Row>
            </Hero>
            <Resume />
            <Attributes />
            <Summary />
            <Projects />
        </SiteWrapper>
    );
}

const A = styled.a`
    &:first-of-type {
        margin: 0;
    }
    display: inline-block;

    margin: 10px 10px;
`;
