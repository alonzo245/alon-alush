import React from "react";
import { useGlobalState } from "../hooks/useGlobalState";
import "react-spring-modal/styles.css";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.min.css";
import useScreenSize from "../hooks/useScreenSize";
import { mobileThreshold } from "../../constants/config";
import workFeatures from "../../assets/workFeatures";

export default function FeatureCarousel(): React.JSX.Element {
    const { width } = useScreenSize();

    const { state } = useGlobalState();
    return (
        <div className="w-full self-center flex-[2] desktop:w-1/2 desktop:flex-1 wide:w-1/2 wide:flex-1 [&_.carousel-root]:!h-full">
            <Carousel
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
                                <img
                                    alt=""
                                    key={i}
                                    src={workFeatures[item?.name as keyof typeof workFeatures]}
                                    className="h-full w-auto"
                                />
                            );
                        }
                        return (
                            <div key={i}>
                                {item?.type === "wide" ? (
                                    <img
                                        alt=""
                                        key={i}
                                        src={workFeatures[item?.name as keyof typeof workFeatures]}
                                        className="h-full w-auto"
                                        style={{ height: "60px" }}
                                    />
                                ) : (
                                    <img
                                        alt=""
                                        key={i}
                                        src={workFeatures[item as keyof typeof workFeatures]}
                                        className="h-full w-auto"
                                    />
                                )}
                            </div>
                        );
                    });
                }}
            >
                {(state?.modalData?.items || []).map((item: any, i: number) => {
                    return (
                        <div
                            key={i}
                            style={{ height: width > mobileThreshold ? "620px" : "180px" }}
                        >
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
                                <div className="overflow-hidden h-full flex items-center justify-center desktop:mb-0 wide:mb-0">
                                    <img
                                        alt=""
                                        key={i}
                                        src={
                                            item?.name
                                                ? workFeatures[
                                                      item?.name as keyof typeof workFeatures
                                                  ]
                                                : workFeatures[item as keyof typeof workFeatures]
                                        }
                                        className="!w-auto h-full"
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}
