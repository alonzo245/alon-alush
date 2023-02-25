import styled from "@emotion/styled";
import { DESKTOP_MQ, WIDE_MQ } from "../config/utils";

export const Container = styled.section`
    align-self: center;
    & img {
        height: 3em;
        padding: 0;
        margin: 0;

        &:hover {
        }
    }

    ${DESKTOP_MQ} {
    }

    ${WIDE_MQ} {
    }
`;

export const H1 = styled.h1`
    font-family: "Poiret One", cursive;
    font-size: 3em;
    padding: 0.5em 0;
    margin: 0;
    ${DESKTOP_MQ} {
    }

    ${WIDE_MQ} {
    }
`;

export const Title = styled.div`
    font-family: "Poiret One", cursive;
    letter-spacing: 0.5px;
    color: #fff;
    text-align: center;
    padding: 1em 0 0 0;

    ${DESKTOP_MQ} {
        padding: 1em 0 2em;
    }

    ${WIDE_MQ} {
        padding: 1em 0 2em;
    }
`;

export const Timeline = styled.section`
    overflow: hidden;
    margin: 0 auto;
    padding: 0 0 2em 0;

    ${DESKTOP_MQ} {
    }

    ${WIDE_MQ} {
    }
`;

export const TimelineContainer = styled.div`
    overflow: hidden;
    margin: 0 auto;
    padding: 0 0 2em 0;

    &::before {
        /* VERTICAL LINE */
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 18px;
        height: 100%;
        width: 4px;
        background: #d7e4ed;
    }

    ${DESKTOP_MQ} {
        &::before {
            left: 50%;
            margin-left: 1px;
        }
    }

    ${WIDE_MQ} {
        &::before {
            left: 50%;
            margin-left: 1px;
        }
    }
`;
