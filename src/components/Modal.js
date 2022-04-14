import React, { useState } from "react";
import { ExpandModal, ModalTitle, ModalCloseTarget, CenterModal } from "react-spring-modal";
import { useGlobalState } from "../hooks/useGlobalState";
import "react-spring-modal/styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useScreenSize from "../hooks/useScreenSize";
import { mobileThreshold } from "../config/utils"; // requires a loader
import FeatureCarusel from "./FeatureCarusel";
import { IoMdClose } from "react-icons/io";
import styled from "@emotion/styled";

export default function () {
    const { width } = useScreenSize();

    const { setState, state } = useGlobalState();
    return (
        <>
            <ExpandModal
                isOpen={!!state?.modal}
                // isOpen={true}
                onDismiss={() => setState({ modal: false })}
                contentProps={{
                    style: {
                        position: "fixed",
                        // top: "calc(50% - 10rem)",
                        // left: "calc(50% - 10rem)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        top: "50%",
                        width: "98vw",
                        height: "98vh",
                        backgroundImage:
                            "repeating-linear-gradient(45deg, #2d2d2d 0, #2d2d2d 0.8px, #222 0, #222 0.3%)",
                        color: "#acbac4",
                        // borderRadius: "10rem",
                        // backgroundColor: "transparent",
                        zIndex: 11122211,
                    },
                }}
            >
                <Close>
                    <IoMdClose
                        size={30}
                        color={"#fff"}
                        onClick={() => setState({ modal: false })}
                    />
                </Close>
                <Row>
                    <FeatureCarusel />
                    <Content>
                        Being a productive leader of the team where leadership is a behavioral
                        trait.
                        <br />
                        Developing and maintaining team standards, documentation, tools, and best
                        practices in the agile scrum world.
                        <br />
                        Develop and maintain the back-end,front-end and core applications of the
                        company.
                        <br />
                        Work closely with the product team, developers, testers, designers, data
                        scientists.
                        <br />
                        Reaching for quality tests of the applications.
                        <br />
                        Working in TDD SOLID methodologies.
                        <br />
                        Developing and designing system architecture of the company features and
                        products.
                    </Content>
                </Row>
            </ExpandModal>
        </>
    );
}

const Content = styled.div`
    width: 50%;
    height: 100%;
    text-align: left;
    vertical-align: top;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Close = styled.div`
    position: fixed;
    right: 10px;
    top: 10px;
    cursor: pointer;
`;
