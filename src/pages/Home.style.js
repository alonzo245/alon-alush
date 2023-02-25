import styled from "@emotion/styled";
import { COLORS, DESKTOP_MQ, MOBILE_MQ, WIDE_MQ } from "../config/utils";
import { AiFillEdit } from "react-icons/ai";
import editIcon from "../assets/svg/edit.svg";

export const SiteWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    ${DESKTOP_MQ} {
        max-width: 1260px;
    }

    ${WIDE_MQ} {
        max-width: 1440px;
    }
`;

export const Row = styled.div`
    position: relative;
    width: 480px;
    min-width: 480px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    ${DESKTOP_MQ} {
        margin-left: 20px;
        min-width: 670px;
        align-items: flex-start;
        text-align: left;
    }

    ${WIDE_MQ} {
        margin-left: 60px;

        min-width: 830px;
        align-items: flex-start;
        text-align: left;
    }
`;

export const H1 = styled.h1`
    color: #fff;
    font-size: 60px;
    text-align: center;
    margin-top: 20px;
    ${WIDE_MQ} {
        font-size: 100px;
        margin-top: 0px;
    }

    ${DESKTOP_MQ} {
        font-size: 86px;
        margin-top: 0px;
    }
`;

export const H1InputAiFillEdit = styled(AiFillEdit)`
    position: absolute;
    z-index: 22;
    left: -24px;
    top: 7px;

    ${WIDE_MQ} {
    }

    ${DESKTOP_MQ} {
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
export const EditIconWrapper2 = styled.div`
    position: relative;

    //display: block;
    width: 100%;

    &:before {
        position: absolute;
        left: 0px;
        top: 5px;
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
export const EditIconWrapper3 = styled.div`
    position: relative;

    //display: block;
    //width: 100%;

    &:before {
        position: absolute;
        left: 0px;
        top: 5px;
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

export const H1InputWrapper = styled.div`
    position: relative;
    //display: block;
    //width: 100%;
    ${WIDE_MQ} {
    }

    ${DESKTOP_MQ} {
    }
`;

export const H1Input = styled.input`
    color: #fff;
    font-size: 60px;
    text-align: center;
    margin-top: 20px;
    border: unset;
    outline: unset;
    font-weight: bold;
    display: block;
    background-color: transparent;
    width: 100%;
    border-bottom: 1px dashed #88888840;

    &::placeholder {
        color: #999;
        border-bottom: 1px dashed #888;
    }

    &:focus {
        color: #fff;
        border-bottom: 1px dashed #888;
    }

    &:hover {
        color: #fff;
        border-bottom: 1px dashed #888;
    }

    ${WIDE_MQ} {
        text-align: left;
        font-size: 100px;
        margin-top: 0px;
    }

    ${DESKTOP_MQ} {
        text-align: left;
        font-size: 86px;
        margin-top: 0px;
    }
`;

export const H2 = styled.h1`
    font-size: 22px;
    color: ${COLORS.blueish};
    padding: 0 60px;
    margin-top: 10px;
    margin-bottom: 10px;

    ${DESKTOP_MQ} {
        font-size: 46px;
        padding: 0 0;
    }

    ${WIDE_MQ} {
        font-size: 56px;
        padding: 0 0;
    }
`;

export const LinkInput = styled.input`
    color: ${COLORS.blueish};
    font-size: 22px;
    text-align: center;
    margin-top: 20px;
    border: unset;
    outline: unset;
    font-weight: bold;
    //display: block;
    background-color: transparent;
    //width: 100%;
    border-bottom: 1px dashed #88888840;

    &::placeholder {
        color: #999;
        border-bottom: 1px dashed #888;
    }

    &:focus {
        color: ${COLORS.blueish};
        border-bottom: 1px dashed #888;
    }

    &:hover {
        color: ${COLORS.blueish};
        border-bottom: 1px dashed #888;
    }

    ${WIDE_MQ} {
        text-align: left;
        //font-size: 46px;
    }

    ${DESKTOP_MQ} {
        text-align: left;
        //font-size: 56px;
    }
`;
export const H2Input = styled.input`
    color: ${COLORS.blueish};
    font-size: 22px;
    text-align: center;
    margin-top: 20px;
    border: unset;
    outline: unset;
    font-weight: bold;
    //display: block;
    background-color: transparent;
    width: 100%;
    border-bottom: 1px dashed #88888840;

    &::placeholder {
        color: #999;
        border-bottom: 1px dashed #888;
    }

    &:focus {
        color: ${COLORS.blueish};
        border-bottom: 1px dashed #888;
    }

    &:hover {
        color: ${COLORS.blueish};
        border-bottom: 1px dashed #888;
    }

    ${WIDE_MQ} {
        text-align: left;
        font-size: 46px;
    }

    ${DESKTOP_MQ} {
        text-align: left;
        font-size: 56px;
    }
`;
export const Hero = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin: 0 auto 0 auto;
    width: 100%;

    ${DESKTOP_MQ} {
        flex-direction: row;
        align-items: center;
        margin: 20px auto 0 auto;
        width: 90%;
    }

    ${WIDE_MQ} {
        flex-direction: row;
        align-items: center;
        margin: 20px auto 0 auto;
    }
`;
export const Nav = styled.nav``;
export const Header = styled.header`
    ${DESKTOP_MQ} {
    }

    ${WIDE_MQ} {
    }
`;
