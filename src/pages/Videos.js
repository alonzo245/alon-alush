import React, { useState } from "react";
import githubProjects from "../data/githubProjects";
import techImages from "../assets/images/tech";
import { FaGithub } from "react-icons/fa";
import {
    Badge2,
    CardContent,
    Container,
    Btn,
    Card,
    CardBadges,
    CardButton,
    H3,
    H6,
} from "./Projects.style";
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
            <H3>Videos</H3>
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

const Div = styled.div`
    margin: 10px;
    width: 100%;
    flex-basis: 100%;
    /* background: red; */
    height: 486px;

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
