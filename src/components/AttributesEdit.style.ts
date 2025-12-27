import React from "react";
import styled from "@emotion/styled";
import { DESKTOP_MQ, WIDE_MQ } from "../config/utils";
import editIcon from "../assets/svg/edit.svg";

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

export const EditIconWrapper = styled.div`
    position: relative;

    //display: block;
    //width: 100%;

    &:before {
        position: absolute;
        left: -25px;
        top: 10px;
        display: block;
        width: 20px;
        height: 20px;
        content: "";
        background-image: url(${editIcon});
        background-repeat: no-repeat;
        background-position: top left;
    }
    ${WIDE_MQ} {
    }

    ${DESKTOP_MQ} {
    }
`;

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

export const TechItemEdit = styled.div`
    padding: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    cursor: pointer;
    border: 1px solid #ffffff20;
    border-radius: 10px;
    margin: 3px;

    &:hover {
        background-color: #00000030;
    }

    ${DESKTOP_MQ} {
        padding: 7px;
    }

    ${WIDE_MQ} {
        padding: 7px;
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
    text-align: center;
    margin-bottom: 20px;

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
// export const Input = styled.input`
//     background-color: transparent;
//     border: unset;
//     outline: unset;
//     font-weight: bold;
//     min-width: 250px;
//     border-bottom: 1px dashed #88888840;
//     text-align: left;
//     color: #627fc6;
//     padding-left: 30px;
//     //background: red;
//     font-size: 30px;
//     width: 100%;
//     text-align: center;
//
//     &::placeholder {
//         color: #627fc6;
//     }
//     &:focus {
//         border-bottom: 1px dashed #888;
//     }
//
//     &:hover {
//         border-bottom: 1px dashed #888;
//     }
// `;

