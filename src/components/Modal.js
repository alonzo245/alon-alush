import React from "react";
import { ExpandModal } from "react-spring-modal";
import { useGlobalState } from "../hooks/useGlobalState";
import "react-spring-modal/styles.css";
import useScreenSize from "../hooks/useScreenSize";
import { mobileThreshold } from "../config/utils";
import FeatureCarousel from "./FeatureCarousel";
import { IoMdClose } from "react-icons/io";
import { icon } from "../assets/icons";
import { P, H3, Container, Row, Close, Content, contentProps, H6, TechList } from "./Modal.style";
import workFeatures from "../assets/workFeatures/coderzApp";
import styled from "@emotion/styled";
export default function () {
    const { width } = useScreenSize();

    const { setState, state } = useGlobalState();

    return (
        <ExpandModal
            isOpen={!!state?.modal}
            // isOpen={true}
            // onDismiss={() => setState({ modal: false })}
            contentProps={contentProps}
        >
            <Container>
                <Close onClick={() => setState({ modal: false, modalData: null })}>
                    <IoMdClose size={30} color={"#fff"} />
                </Close>
                {width < mobileThreshold ? (
                    <>
                        <Content>
                            <H3>{state?.modalData?.title}</H3>
                            <H6>Technologies used in project</H6>
                            <TechList>
                                {(state?.modalData?.technologies || []).map((item, i) => (
                                    <div key={i}>
                                        {icon(item, width > mobileThreshold ? 40 : 22)}
                                    </div>
                                ))}
                            </TechList>
                            <P
                                dangerouslySetInnerHTML={{
                                    __html: state?.modalData?.description,
                                }}
                            />
                        </Content>
                        <DIV>
                            {(state?.modalData?.items || []).map((item, i) => {
                                return <Img alt="" key={i} src={workFeatures[item]} />;
                            })}
                        </DIV>
                    </>
                ) : (
                    <>
                        {state?.modalData && (
                            <Row>
                                <Content>
                                    <H3>{state?.modalData?.title}</H3>
                                    <H6>Technologies used in project</H6>
                                    <TechList>
                                        {(state?.modalData?.technologies || []).map((item, i) => (
                                            <div key={i}>
                                                {icon(item, width > mobileThreshold ? 40 : 22)}
                                            </div>
                                        ))}
                                    </TechList>
                                    <P
                                        dangerouslySetInnerHTML={{
                                            __html: state?.modalData?.description,
                                        }}
                                    />
                                </Content>
                                <FeatureCarousel />
                            </Row>
                        )}
                    </>
                )}
            </Container>
        </ExpandModal>
    );
}

const DIV = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: visible;
    //height: 824px;
    //display: table; ;
`;

const Img = styled.img`
    width: 70%;
    height: auto;
    //max-height: 100px;
    //height: auto;
    margin: 0 10px;
    display: table-row;

    &:first-child {
        padding-left: -40px;
    }
`;
