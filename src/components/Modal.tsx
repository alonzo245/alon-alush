import React from "react";
import { ExpandModal } from "react-spring-modal";
import { useGlobalState } from "../hooks/useGlobalState";
import "react-spring-modal/styles.css";
import useScreenSize from "../hooks/useScreenSize";
import { mobileThreshold } from "../config/utils";
import FeatureCarousel from "./FeatureCarousel";
import { IoMdClose } from "react-icons/io";
import { icon } from "../assets/icons";
import workFeatures from "../assets/workFeatures";

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
            <div className="relative w-full h-full overflow-y-auto desktop:overflow-y-visible wide:overflow-y-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div
                    className="fixed right-[10px] top-[10px] cursor-pointer z-[9999999]"
                    onClick={() => setState({ modal: false, modalData: null })}
                >
                    <IoMdClose size={30} color={"#fff"} />
                </div>
                {width < mobileThreshold ? (
                    <>
                        <div className="text-left align-top desktop:w-[60%] desktop:text-left desktop:align-top desktop:pl-[30px] desktop:pr-[30px] wide:w-[60%] wide:text-left wide:align-top wide:pl-[30px] wide:pr-[30px]">
                            <h3 className="text-white text-[30px] mb-[10px] w-full block desktop:text-white desktop:text-[50px] desktop:mb-[30px] wide:text-white wide:text-[50px] wide:mb-[30px]">
                                {state?.modalData?.title}
                            </h3>
                            <h6 className="text-[#958eca] text-[20px] mb-5 desktop:text-[#958eca] desktop:text-[25px] desktop:mb-5 wide:text-[#958eca] wide:text-[25px] wide:mb-5">
                                Technologies used in project
                            </h6>
                            <div className="flex items-start mb-5 w-full flex-wrap justify-start desktop:flex desktop:items-center desktop:mb-[30px] desktop:w-full desktop:flex-wrap desktop:justify-start wide:flex wide:items-center wide:mb-[30px] wide:w-full wide:flex-wrap wide:justify-start [&>div]:m-[5px]">
                                {(state?.modalData?.technologies || []).map(
                                    (item: string, i: number) => (
                                        <div key={i}>
                                            {icon(item, width > mobileThreshold ? 40 : 22)}
                                        </div>
                                    ),
                                )}
                            </div>
                            <div
                                className="mb-0 desktop:mb-0 wide:mb-0"
                                dangerouslySetInnerHTML={{
                                    __html: state?.modalData?.description || "",
                                }}
                            />
                        </div>
                        <div className="flex mt-[30px] justify-start overflow-x-auto overflow-y-visible">
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
                                    <img
                                        alt=""
                                        key={i}
                                        src={workFeatures[item as keyof typeof workFeatures]}
                                        className="w-[70%] h-auto m-0 mx-[10px] table-row first:pl-[-40px]"
                                    />
                                );
                            })}
                        </div>
                    </>
                ) : (
                    <>
                        {state?.modalData && (
                            <div className="flex justify-start items-start flex-col h-full desktop:flex desktop:justify-around desktop:items-start desktop:flex-row wide:flex wide:justify-around wide:items-start wide:flex-row">
                                <div className="text-left align-top desktop:w-[60%] desktop:text-left desktop:align-top desktop:pl-[30px] desktop:pr-[30px] wide:w-[60%] wide:text-left wide:align-top wide:pl-[30px] wide:pr-[30px]">
                                    <h3 className="text-white text-[30px] mb-[10px] w-full block desktop:text-white desktop:text-[50px] desktop:mb-[30px] wide:text-white wide:text-[50px] wide:mb-[30px]">
                                        {state?.modalData?.title}
                                    </h3>
                                    <h6 className="text-[#958eca] text-[20px] mb-5 desktop:text-[#958eca] desktop:text-[25px] desktop:mb-5 wide:text-[#958eca] wide:text-[25px] wide:mb-5">
                                        Technologies used in project
                                    </h6>
                                    <div className="flex items-start mb-5 w-full flex-wrap justify-start desktop:flex desktop:items-center desktop:mb-[30px] desktop:w-full desktop:flex-wrap desktop:justify-start wide:flex wide:items-center wide:mb-[30px] wide:w-full wide:flex-wrap wide:justify-start [&>div]:m-[5px]">
                                        {(state?.modalData?.technologies || []).map(
                                            (item: string, i: number) => (
                                                <div key={i}>
                                                    {icon(item, width > mobileThreshold ? 40 : 22)}
                                                </div>
                                            ),
                                        )}
                                    </div>
                                    <div
                                        className="mb-0 desktop:mb-0 wide:mb-0"
                                        dangerouslySetInnerHTML={{
                                            __html: state?.modalData?.description || "",
                                        }}
                                    />
                                </div>
                                <FeatureCarousel />
                            </div>
                        )}
                    </>
                )}
            </div>
        </ExpandModal>
    );
}
