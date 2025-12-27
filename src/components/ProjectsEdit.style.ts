import React from "react";
import styled from "@emotion/styled";
import { COLORS, DESKTOP_MQ, WIDE_MQ } from "../config/utils";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 0px auto 0px auto;
`;

export const CardImage = styled.img``;

export const Btn = styled.a`
    width: 100%;
    color: #e9e9e9;
    padding: 0.4rem 0.4rem;
    cursor: pointer;
    font-size: 0.7rem;
    outline: none;
    transition: all 0.2s ease-in;
    align-items: center;
    display: flex;
    justify-content: inherit;
    margin: 0px 5px 0px 5px;
    height: 36px;
    border: dashed #999 1px;
    text-decoration: none;

    ${DESKTOP_MQ} {
        &:hover {
            background-color: #fff;
            color: #2d2d2d;
        }
    }

    ${WIDE_MQ} {
        &:hover {
            background-color: #fff;
            color: #2d2d2d;
        }
    }
`;

export const Badge2 = styled.div`
    border-radius: 15px;
    width: 33px;
    height: 33px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    margin: 5px;
`;

export const CardBadges = styled.div`
    justify-items: center;
    align-items: center;
    flex-wrap: wrap;
    grid-area: cardBadges;
    display: flex;
    width: 100%;
    margin: 5px 5px;
    justify-content: flex-start;
`;

export const CardButton = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    flex-grow: 1;
    align-items: flex-end;
    padding-bottom: 5px;
`;

export const CardContent = styled.div`
    justify-items: center;
    align-items: center;
    padding: 5px;
    font-size: 0.9rem;
    width: 100%;
    height: 62%;
`;

export const H3 = styled.h3`
    font-size: 30px;
    margin-bottom: 20px;
    margin-top: 50px;

    ${DESKTOP_MQ} {
        margin-top: 0px;
    }
    ${WIDE_MQ} {
        margin-top: 0px;
    }
`;
export const H6 = styled.h6`
    font-size: 1rem;
    font-weight: bolder;
    border-bottom: dashed #999 1px;
    height: 50px;
    //vertical-align: middle;
    display: inline-block;
    width: 100%;
    text-align: center;
    line-height: 1.4;
    color: #ffffff80;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardEdit = styled.div`
    margin: 10px;
    height: 320px;
    color: white;
    padding: 5px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s ease-in;
    width: 320px;
    border-radius: 10px;
    border: 1px dashed #999;

    ${DESKTOP_MQ} {
        width: 240px;
        &:hover {
            //background-color: ${COLORS.blueish};
            color: #fff;
        }
    }

    ${WIDE_MQ} {
        width: 240px;
        &:hover {
            //background-color: ${COLORS.blueish};
            color: #fff;
        }
    }
`;

export const CardAddProject = styled.div`
    margin: 10px;
    height: 320px;
    color: white;
    padding: 5px 5px;
    transition: all 0.2s ease-in;
    width: 320px;
    border-radius: 10px;
    border: 1px dashed #999;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        transition: all 0.2s ease-in;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        border: 1px dashed #ffffff;
        border-radius: 50px;
    }

    ${DESKTOP_MQ} {
        width: 240px;
        &:hover {
            background-color: #444;
            border: 1px dashed #ffffff;
            color: #fff;

            div {
                background-color: #fff;
                border: 1px dashed #ffffff;
            }
        }
    }

    ${WIDE_MQ} {
        width: 240px;
        &:hover {
            background-color: #444;
            border: 1px dashed #ffffff;

            color: #fff;
        }
    }
`;

export const Textarea = styled.textarea`
    color: #acbac4;
    background-color: transparent;
    border: unset;
    outline: unset;
    //min-width: 250px;
    //border-bottom: 1px dashed #88888840;
    width: 100%;
    //padding-left: 23px;

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
    background-color: #00000040;
    border: unset;
    outline: unset;
    font-weight: bold;
    //min-width: 250px;
    //border-bottom: 1px dashed #88888840;
    //width: 100%;
    //padding-left: 23px;
    font-size: 18px;
    padding: 10px;
    border-radius: 10px;

    &::placeholder {
        color: #acbac4;
    }
    &:focus {
        color: #999;
        //border-bottom: 1px dashed #888;
    }

    &:hover {
        color: #999;
        //border-bottom: 1px dashed #888;
    }
`;
export const Input1 = styled.input`
    color: #acbac4;
    background-color: #00000000;
    border: unset;
    outline: unset;
    font-weight: bold;
    //min-width: 250px;
    //border-bottom: 1px dashed #88888840;
    //width: 100%;
    //padding-left: 23px;
    font-size: 18px;
    padding: 10px;

    &::placeholder {
        color: #acbac4;
    }
    &:focus {
        color: #999;
        //border-bottom: 1px dashed #888;
    }

    &:hover {
        color: #999;
        //border-bottom: 1px dashed #888;
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

export const Card = styled.div`
    margin: 10px;
    height: 320px;
    color: white;
    padding: 5px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s ease-in;
    width: 320px;
    border-radius: 10px;
    border: 1px dashed #999;

    ${DESKTOP_MQ} {
        width: 240px;
        &:hover {
            background-color: ${COLORS.blueish};
            color: #fff;
        }
    }

    ${WIDE_MQ} {
        width: 240px;
        &:hover {
            background-color: ${COLORS.blueish};
            color: #fff;
        }
    }
`;

export const CardContainerEdit = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
    width: 100%;

    ${DESKTOP_MQ} {
        width: 100%;
        flex-flow: wrap;
    }
    ${WIDE_MQ} {
        width: 100%;
        flex-flow: wrap;
    }
`;
