import React from "react";
import "../pages/resume/resume.style.css";
import styled from "@emotion/styled";
import { COLORS } from "../config/utils";

export const LI = styled.li`
    //background-color: #33333360;
    border-radius: 10px;
    //padding-top: 40px !important;
    //padding-bottom: 45px !important;
    //padding-top: 60px !important;
`;
export const LI2 = styled.li`
    //background-color: #33333360;
    border-radius: 10px;
    //padding-top: 40px !important;
    padding-bottom: 45px !important;
    //padding-top: 60px !important;
`;

export const ImgContainer = styled.div`
    div {
        height: 45px;
        width: 45px;
        border-radius: 45px;
        background: ${COLORS.blueish};
        content: "";
        display: flex;
        align-items: center;
        justify-content: center;
        //height: 11px;
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(-13px, 0px);
        //z-index: 1;
        //width: 11px;
        border: 3px solid #fff;
        transition: background 0.3s ease-in-out, border 0.3s ease-in-out;

        &::placeholder {
            background-color: ${COLORS.blueish}40;
        }

        &:hover {
            cursor: pointer;
            background-color: ${COLORS.blueish}40;
        }

        //&::before {
        //    //z-index: 22;
        //    content: "";
        //    width: 3px;
        //    background: #ccd5db;
        //    background: red;
        //    display: block;
        //    position: absolute;
        //    top: -144px;
        //    left: 6px;
        //}
    }
`;

export const Input2 = styled.input`
    text-transform: uppercase;
    color: #627fc6;
    background-color: transparent;
    border: unset;
    outline: unset;
    font-weight: bold;
    font-size: 20px;
    min-width: 250px;
    border-bottom: 1px dashed #88888840;
    width: 100%;
    padding-left: 23px;

    &::placeholder {
        color: #627fc6;
    }

    &:focus {
        color: #627fc6;
        border-bottom: 1px dashed #888;
    }

    &:hover {
        color: #627fc6;
        border-bottom: 1px dashed #888;
    }
`;
export const Input = styled.input`
    text-transform: uppercase;
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
export const Input3 = styled.input`
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

export const Textarea = styled.textarea`
    color: #acbac4;
    background-color: transparent;
    border: unset;
    outline: unset;
    min-width: 250px;
    border-bottom: 1px dashed #88888840;
    width: 100%;
    padding-left: 23px;

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
