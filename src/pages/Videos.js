import React, { useState } from "react";
import githubProjects from "../data/githubProjects";
import techImages from "../assets/images/tech";
import { FaGithub } from "react-icons/fa";

import { useGlobalState } from "../hooks/useGlobalState";
import ProjectsEdit from "../components/ProjectsEdit";
import videosList from "../utils/videosList";
import { DESKTOP_MQ, WIDE_MQ, mobileThreshold } from "../config/utils";
import useScreenSize from "../hooks/useScreenSize";
import styled from "@emotion/styled";

export default function (props) {
    const [list, setList] = useState(() =>
        Object.keys(videosList).map((videoId) => ({ videoId, open: false })),
    );
    // const { width } = useScreenSize();
    // const { state, setState } = useGlobalState();

    const onClick = (e, videoId) => {
        console.log("click", videoId);
        setList(
            list.map((video) => {
                if (videoId === video.videoId) return { videoId, open: true };
                return video;
            }),
        );
    };

    // width < mobileThreshold

    return (
        <Container id="videos">
            <H3>Videos & Tutorials</H3>
            <CardContainer>
                {/* {console.log(Object.keys(videosList))} */}
                {videosList &&
                    list.map((video, key) =>
                        video.open ? (
                            <Iframe
                                key={key}
                                // width="100%"
                                // height="100%"
                                src={`https://www.youtube.com/embed/${video.videoId}`}
                                title={`${videosList[video.videoId].title}`}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen={1}
                            />
                        ) : (
                            <Div key={key} onClick={(e) => onClick(e, video.videoId)}>
                                <Img src={`/images/videos/${video.videoId}.jpg`} />
                            </Div>
                        ),
                    )}
            </CardContainer>
        </Container>
    );
}

const Iframe = styled.iframe`
    flex-basis: 100%;
    margin: 10px;
    border: unset;
    height: 320px;

    ${DESKTOP_MQ} {
        /* width: 25%; */
        flex-basis: 30%;
        height: unset;
    }
    ${WIDE_MQ} {
        /* width: 25%; */
        flex-basis: 30%;
        height: unset;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 0px auto;
    padding: 0 10px;

    ${DESKTOP_MQ} {
        padding: unset;
    }
    ${WIDE_MQ} {
        padding: unset;
    }
`;

const H3 = styled.h3`
    font-size: 30px;
    margin-bottom: 20px;
    margin-top: 30px;

    ${DESKTOP_MQ} {
        margin-top: 30px;
    }
    ${WIDE_MQ} {
        margin-top: 30px;
    }
`;

const Div = styled.div`
    margin: 10px;
    width: 100%;
    flex-basis: 100%;
    position: relative;
    transition: 100ms all ease;

    cursor: pointer;

    & > img {
        opacity: 0.8;
    }
    &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 24px;
        content: "";
        z-index: 11111;
        border: 0;
        background: transparent;
        box-sizing: border-box;
        width: 0;
        height: 74px;
        border-color: transparent transparent transparent #ffffff;
        cursor: pointer;
        border-style: solid;
        border-width: 37px 0 37px 60px;
    }

    ${DESKTOP_MQ} {
        /* width: 25%; */
        flex-basis: 30%;
        height: unset;

        & > img {
            opacity: 1;
        }

        &:before {
            display: none;
        }
        :hover {
            & > img {
                opacity: 0.7;
            }
            &:before {
                display: block;

                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 24px;
                content: "";
                z-index: 11111;
                border: 0;
                background: transparent;
                box-sizing: border-box;
                width: 0;
                height: 74px;
                border-color: transparent transparent transparent #ffffff;
                cursor: pointer;
                border-style: solid;
                border-width: 37px 0 37px 60px;
            }
        }
    }
    ${WIDE_MQ} {
        /* width: 25%; */
        flex-basis: 30%;
        height: unset;

        & > img {
            opacity: 1;
        }

        &:before {
            display: none;
        }
        :hover {
            & > img {
                opacity: 0.7;
            }
            &:before {
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 24px;
                content: "";
                z-index: 11111;
                border: 0;
                background: transparent;
                box-sizing: border-box;
                width: 0;
                height: 74px;
                border-color: transparent transparent transparent #ffffff;
                cursor: pointer;
                border-style: solid;
                border-width: 37px 0 37px 60px;
            }
        }
    }
`;

const Img = styled.img`
    width: 100%;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
    width: 100%;

    ${DESKTOP_MQ} {
        width: 100%;
        flex-flow: wrap;
    }
`;

const AsyncImage = (props) => {
    const [loadedSrc, setLoadedSrc] = React.useState(null);
    React.useEffect(() => {
        setLoadedSrc(null);
        if (props.src) {
            const handleLoad = () => {
                setLoadedSrc(props.src);
            };
            const image = new Image();
            image.addEventListener("load", handleLoad);
            image.src = props.src;
            return () => {
                image.removeEventListener("load", handleLoad);
            };
        }
    }, [props.src]);
    if (loadedSrc === props.src) {
        return <img {...props} />;
    }
    return null;
};
