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
    const { width } = useScreenSize();
    const { state, setState } = useGlobalState();

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
        <Container id="projects">
            <H3>Videos & Tutorials</H3>
            <CardContainer>
                {/* {console.log(Object.keys(videosList))} */}
                {videosList &&
                    list.map((video, key) => (
                        <Div>
                            {video.open ? (
                                <iframe
                                    key={key}
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${video.videoId}`}
                                    title={`${videosList[video.videoId].title}`}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                            ) : (
                                <Img
                                    key={key}
                                    onClick={(e) => onClick(e, video.videoId)}
                                    src={`/alon-alush/images/videos/${video.videoId}.jpg`}
                                />
                            )}
                        </Div>
                    ))}
            </CardContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 0px auto;
    padding: 0 80px;

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
    /* background: red; */
    height: 396px;

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

const Img = styled.img`
    /* margin: 10px; */
    width: 100%;
    cursor: pointer;
    :hover {
        opacity: 0.7;
        &::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            color: #fff;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-left: 10px solid #303030;
            content: "";
            z-index: 11111;
            /* background-color: red; */
        }
    }
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
