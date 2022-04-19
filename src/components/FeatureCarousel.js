import React, { useState } from "react";
import { ExpandModal, ModalTitle, ModalCloseTarget } from "react-spring-modal";
import { useGlobalState } from "../hooks/useGlobalState";
import "react-spring-modal/styles.css";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.min.css";
import useScreenSize from "../hooks/useScreenSize";
import { DESKTOP_MQ, mobileThreshold, WIDE_MQ } from "../config/utils"; // requires a loader
import workFeatures from "../assets/workFeatures";
import styled from "@emotion/styled";
import { DIV } from "./ResumeEditItem.style";

export default function (data) {
    const { width } = useScreenSize();

    const { setState, state } = useGlobalState();
    return (
        <StyledCarousel
            labels={false}
            showStatus={false}
            showThumbs={true}
            showIndicators={false}
            showArrows={false}
            // thumbWidth={"40px"}
            renderThumbs={() => {
                if (state?.modalData?.thumbnails?.length <= 1) return null;
                return (state?.modalData?.thumbnails || []).map((item, i) => {
                    if (item?.type === "youtube") {
                        return <Thumb alt="" key={i} src={workFeatures[item?.name]} key={i} />;
                    }
                    return (
                        <div key={i}>
                            {item?.type === "wide" ? (
                                <Thumb
                                    alt=""
                                    key={i}
                                    src={workFeatures[item?.name]}
                                    style={{ height: "60px" }}
                                />
                            ) : (
                                <Thumb alt="" key={i} src={workFeatures[item]} />
                            )}
                        </div>
                    );
                });
            }}
        >
            {(state?.modalData?.items || []).map((item, i) => {
                return (
                    <div key={i} style={{ height: width > mobileThreshold ? "620px" : "180px" }}>
                        {item?.type === "youtube" ? (
                            <iframe
                                width="100%"
                                height={width > mobileThreshold ? "620px" : "180px"}
                                src={item?.url}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        ) : (
                            <ImgWrapper>
                                <Img
                                    alt=""
                                    key={i}
                                    src={item?.name ? workFeatures[item?.name] : workFeatures[item]}
                                />
                            </ImgWrapper>
                        )}
                    </div>
                );
            })}
        </StyledCarousel>
    );
}

const StyledCarousel = styled(Carousel)`
    width: 100%;
    align-self: center;
    flex: 2;
    .carousel-root {
        height: 100% !important;
    }

    ${DESKTOP_MQ} {
        width: 50%;
        flex: 1;
    }

    ${WIDE_MQ} {
        width: 50%;
        flex: 1;
    }
`;

const Thumb = styled.img`
    height: 100%;
    width: auto;
    //transform: scale(1.2);
`;

const ImgWrapper = styled.div`
    overflow: hidden;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    //background-color: red;

    ${DESKTOP_MQ} {
        margin-bottom: 0px;
    }

    ${WIDE_MQ} {
        margin-bottom: 0px;
    }
`;

const Img = styled.img`
    width: auto !important;

    height: 100%;
    //height: auto;
    //height: 200px;
`;
