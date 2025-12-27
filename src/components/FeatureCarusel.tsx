import React, { useState } from "react";
import { ExpandModal, ModalTitle, ModalCloseTarget } from "react-spring-modal";
import { useGlobalState } from "../hooks/useGlobalState";
import "react-spring-modal/styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useScreenSize from "../hooks/useScreenSize";
import { mobileThreshold } from "../config/utils"; // requires a loader

export default function FeatureCarusel(): JSX.Element {
    const { width } = useScreenSize();

    const { setState, state } = useGlobalState();
    return (
        <Carousel
            labels={undefined}
            showStatus={false}
            showThumbs={true}
            renderThumbs={() => [<div key="1">1</div>, <div key="2">1</div>]}
        >
            <div>
                <iframe
                    width="100%"
                    height={width > mobileThreshold ? "620px" : "180px"}
                    src={`https://www.youtube.com/embed/${"BFuWc2Hwhdc"}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <p></p>
            </div>
            <div>
                <iframe
                    width="100%"
                    height="auto"
                    src={`https://www.youtube.com/embed/${"BFuWc2Hwhdc"}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <p className="legend"></p>
            </div>
        </Carousel>
    );
}
