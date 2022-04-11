import React from "react";
import styled from "@emotion/styled";
import { DESKTOP_MQ, WIDE_MQ } from "../config/utils";

export const TechItem = styled.div`
    padding: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;

    ${DESKTOP_MQ} {
        padding: 7px;
    }

    ${WIDE_MQ} {
        padding: 7px;
    }
`;
export const RowIcons = styled.div`
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;

    ${DESKTOP_MQ} {
        padding: 0 90px;
    }

    ${WIDE_MQ} {
        padding: 0 130px;
    }
`;

export const Row = styled.div`
    display: flex;
    padding: 0 30px;
    margin: 0px auto;
    flex-direction: column;

    ${DESKTOP_MQ} {
        margin: 40px auto;
        padding: 0 80px;

        flex-direction: row;
    }

    ${WIDE_MQ} {
        margin: 40px auto;
        padding: 0 80px;

        flex-direction: row;
    }
`;

export const Container = styled.div`
    display: flex;
    padding: 0 10px;
    margin: 0px auto;
    flex-direction: column;

    ${DESKTOP_MQ} {
        margin: 40px auto;
        padding: 0 80px;
    }

    ${WIDE_MQ} {
        margin: 40px auto;
        padding: 0 80px;
    }
`;

export const H4 = styled.h4`
    font-size: 30px;
    margin-bottom: 10px;
    margin-top: 30px;

    ${DESKTOP_MQ} {
        margin-bottom: 10px;
        margin-top: 0px;
    }

    ${WIDE_MQ} {
        margin-bottom: 10px;
        margin-top: 0px;
    }
`;
export const H3 = styled.h3`
    font-size: 30px;
    margin-bottom: 10px;
    margin-top: 0px;

    ${DESKTOP_MQ} {
        margin-bottom: 10px;
        margin-top: 0px;
    }

    ${WIDE_MQ} {
        margin-bottom: 10px;
        margin-top: 0px;
    }
`;

export const P = styled.p`
    flex: unset;
    padding: 0 10px;
    line-height: 1.2;

    & li {
        padding: 3px 0;
    }

    ${DESKTOP_MQ} {
        flex: 50%;
    }

    ${WIDE_MQ} {
        flex: 50%;
    }
`;
