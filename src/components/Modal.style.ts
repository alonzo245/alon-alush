import "react-spring-modal/styles.css";
import { COLORS, DESKTOP_MQ, WIDE_MQ } from "../config/utils"; // requires a loader
import styled from "@emotion/styled";

export const P = styled.div`
    margin-bottom: 0px;

    ${DESKTOP_MQ} {
        margin-bottom: 0px;
    }

    ${WIDE_MQ} {
        margin-bottom: 0px;
    }
`;
export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;

    ${DESKTOP_MQ} {
        overflow-y: unset;
    }

    ${WIDE_MQ} {
        overflow-y: unset;
    }
`;
export const H6 = styled.h6`
    color: #958eca;
    font-size: 20px;
    margin-bottom: 20px;

    ${DESKTOP_MQ} {
        color: #958eca;
        font-size: 25px;
        margin-bottom: 20px;
    }

    ${WIDE_MQ} {
        color: #958eca;
        font-size: 25px;
        margin-bottom: 20px;
    }
`;
export const H3 = styled.h3`
    color: #fff;
    font-size: 30px;
    margin-bottom: 10px;
    width: 100%;
    display: block;

    ${DESKTOP_MQ} {
        color: #fff;
        font-size: 50px;
        margin-bottom: 30px;
    }

    ${WIDE_MQ} {
        color: #fff;
        font-size: 50px;
        margin-bottom: 30px;
    }
`;

export const TechList = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
    //transform: scale(80%);
    & > div {
        margin: 5px;
    }

    ${DESKTOP_MQ} {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        width: 100%;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    ${WIDE_MQ} {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        width: 100%;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
`;

export const Content = styled.div`
    text-align: left;
    vertical-align: top;

    ${DESKTOP_MQ} {
        width: 60%;
        //height: 100%;
        text-align: left;
        vertical-align: top;
        padding-left: 30px;
        padding-right: 30px;
    }

    ${WIDE_MQ} {
        width: 60%;
        //height: 100%;
        text-align: left;
        vertical-align: top;
        padding-left: 30px;
        padding-right: 30px;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    //background-color: red;
    height: 100%;

    ${DESKTOP_MQ} {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: row;
    }

    ${WIDE_MQ} {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: row;
    }
`;

export const Close = styled.div`
    position: fixed;
    right: 10px;
    top: 10px;
    cursor: pointer;
    //background-color: red;
    z-index: 9999999;
`;

