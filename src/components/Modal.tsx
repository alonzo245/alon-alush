import React from "react";
import { ExpandModal } from "react-spring-modal";
import { useGlobalState } from "../hooks/useGlobalState";
import "react-spring-modal/styles.css";
import useScreenSize from "../hooks/useScreenSize";
import { mobileThreshold } from "../config/utils";
import FeatureCarousel from "./FeatureCarousel";
import { IoMdClose } from "react-icons/io";
import { icon } from "../assets/icons";
import { P, H3, Container, Row, Close, Content, H6, TechList } from "./Modal.style";
import workFeatures from "../assets/workFeatures";
import styled from "@emotion/styled";

export default function Modal(): React.JSX.Element {
    const { width } = useScreenSize();

    const { setState, state } = useGlobalState();

    return (
        <ExpandModal
            isOpen={!!state?.modal}
            // isOpen={true}
            // onDismiss={() => setState({ modal: false })}
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
                    width: width > mobileThreshold ? "98%" : "100%",
                    height: width > mobileThreshold ? "98%" : "100%",
                    backgroundImage:
                        "repeating-linear-gradient(45deg, #2d2d2d 0, #2d2d2d 0.8px, #222 0, #222 0.3%)",
                    color: "#acbac4",
                    // borderRadius: "10rem",
                    // backgroundColor: "transparent",
                    zIndex: 11122211,
                    padding: "20px",
                },
            }}
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
                                {(state?.modalData?.technologies || []).map(
                                    (item: string, i: number) => (
                                        <div key={i}>
                                            {icon(item, width > mobileThreshold ? 40 : 22)}
                                        </div>
                                    ),
                                )}
                            </TechList>
                            <P
                                dangerouslySetInnerHTML={{
                                    __html: state?.modalData?.description || "",
                                }}
                            />
                        </Content>
                        <DIV>
                            {(state?.modalData?.thumbnails || []).map((item: any, i: number) => {
                                if (item?.type === "youtube") {
                                    return (
                                        <iframe
                                            key={i}
                                            width="100%"
                                            height={width > mobileThreshold ? "320px" : "220px"}
                                            src={item?.url}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="Embedded youtube"
                                        />
                                    );
                                }
                                return item?.type === "wide" ? null : (
                                    <Img
                                        alt=""
                                        key={i}
                                        src={workFeatures[item as keyof typeof workFeatures]}
                                    />
                                );
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
                                        {(state?.modalData?.technologies || []).map(
                                            (item: string, i: number) => (
                                                <div key={i}>
                                                    {icon(item, width > mobileThreshold ? 40 : 22)}
                                                </div>
                                            ),
                                        )}
                                    </TechList>
                                    <P
                                        dangerouslySetInnerHTML={{
                                            __html: state?.modalData?.description || "",
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

    &:first-of-type {
        padding-left: -40px;
    }
`;
