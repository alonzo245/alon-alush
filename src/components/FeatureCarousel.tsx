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

interface FeatureCarouselProps {
    [key: string]: any;
}

export default function FeatureCarousel(data: FeatureCarouselProps): JSX.Element {
    const { width } = useScreenSize();

    const { setState, state } = useGlobalState();
    return (
        <StyledCarousel
            labels={undefined}
            showStatus={false}
            showThumbs={true}
            showIndicators={false}
            showArrows={false}
            // thumbWidth={"40px"}
            renderThumbs={() => {
                if ((state?.modalData?.thumbnails?.length || 0) <= 1) return null;
                return (state?.modalData?.thumbnails || []).map((item: any, i: number) => {
                    if (item?.type === "youtube") {
                        return (
                            <Thumb
                                alt=""
                                key={i}
                                src={workFeatures[item?.name as keyof typeof workFeatures]}
                            />
                        );
                    }
                    return (
                        <div key={i}>
                            {item?.type === "wide" ? (
                                <Thumb
                                    alt=""
                                    key={i}
                                    src={workFeatures[item?.name as keyof typeof workFeatures]}
                                    style={{ height: "60px" }}
                                />
                            ) : (
                                <Thumb
                                    alt=""
                                    key={i}
                                    src={workFeatures[item as keyof typeof workFeatures]}
                                />
                            )}
                        </div>
                    );
                });
            }}
        >
            {(state?.modalData?.items || []).map((item: any, i: number) => {
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
                                    src={
                                        item?.name
                                            ? workFeatures[item?.name as keyof typeof workFeatures]
                                            : workFeatures[item as keyof typeof workFeatures]
                                    }
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
