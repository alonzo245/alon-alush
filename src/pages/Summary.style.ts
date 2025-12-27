import React from "react";
import styled from "@emotion/styled";
import { DESKTOP_MQ, WIDE_MQ } from "../config/utils";

export const Row = styled.div`
    display: flex;
    flex: 1 1;
    //padding: 0 10px;
    margin: 0px auto;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;

    ${DESKTOP_MQ} {
        margin: 40px auto;
        padding: 0 00px;
        //flex-direction: column;
        & > div {
            width: calc(50% - 20px);
            margin: 0 10px;
            padding: 0 10px;
        }
    }

    ${WIDE_MQ} {
        margin: 40px auto;
        padding: 0 0px;

        //flex-direction: column;
        & > div {
            width: calc(50% - 20px);
            padding: 0 20px;
        }
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

export const Textarea = styled.textarea`
    color: #acbac4;
    background-color: transparent;
    border: unset;
    outline: unset;
    min-width: 250px;
    border-bottom: 1px dashed #88888840;
    width: 100%;
    padding-left: 23px;
    margin-top: 10px;
    //height: 300px;

    &::placeholder {
        color: #acbac4;
    }
    &:focus {
        color: #acbac4;
        border-bottom: 1px dashed #888;
    }

    &:hover {
        color: #acbac4;
        border-bottom: 1px dashed #888;
    }
`;

export const Input2 = styled.input`
    color: #acbac4;
    background-color: transparent;
    border: unset;
    outline: unset;
    font-weight: bold;
    min-width: 250px;
    border-bottom: 1px dashed #88888840;
    width: 100%;
    padding-left: 23px;

    &::placeholder {
        color: #acbac4;
    }
    &:focus {
        color: #999;
        border-bottom: 1px dashed #888;
    }

    &:hover {
        color: #999;
        border-bottom: 1px dashed #888;
    }
`;
export const Input = styled.input`
    background-color: transparent;
    border: unset;
    outline: unset;
    font-weight: bold;
    min-width: 250px;
    border-bottom: 1px dashed #88888840;
    text-align: left;
    color: #627fc6;
    padding-left: 30px;
    //background: red;
    font-size: 30px;
    width: 100%;

    &::placeholder {
        color: #627fc6;
    }
    &:focus {
        border-bottom: 1px dashed #888;
    }

    &:hover {
        border-bottom: 1px dashed #888;
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

export const DIV = styled.div`
    flex: unset;
    line-height: 1.2;
    //max-width: calc(50% - 20px);
    padding: 20px;
    //background: #99999920;
    border-radius: 10px;
    width: 100%;
    align-self: flex-start;
    margin-bottom: 20px;
    & li {
        padding: 3px 0;
    }

    ${DESKTOP_MQ} {
        max-width: 1000px;
    }

    ${WIDE_MQ} {
        max-width: 1000px;
    }
`;

