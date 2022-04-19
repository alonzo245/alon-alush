import styled from "@emotion/styled";
import { COLORS, DESKTOP_MQ, WIDE_MQ } from "../config/utils";
import { Link } from "react-scroll";

export const Container = styled.div`
    width: 100vw;
    height: 30px;

    ${DESKTOP_MQ} {
        width: unset;
        height: unset;
    }

    ${WIDE_MQ} {
        width: unset;
        height: unset;
    }
`;

export const StyledLink = styled(Link)`
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: ${COLORS.blueish};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
        font-size: 1.5rem;
        text-align: center;
    }

    &:hover {
        color: #343078;
    }
`;
export const StyledMenu = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #000000;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    //position: absolute;
    top: 0;
    left: 0;
    z-index: 99999;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    cursor: pointer;

    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const StyledBurger = styled.button`
    transform: scale(0.6);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: ${({ open }) => (open ? "25px" : "35px")};
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    //background-color: red;
    &:focus {
        outline: none;
    }

    ${DESKTOP_MQ} {
        transform: unset;
    }

    ${WIDE_MQ} {
        transform: unset;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ open }) => (open ? "#FFFFFF" : "#EFFFFA")};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-of-type {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }

        :nth-of-type(2) {
            opacity: ${({ open }) => (open ? "0" : "1")};
            transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
        }

        :nth-of-type(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;

export const BurgerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 5%;
    right: 2rem;
    background-color: ${({ open }) => (open ? "#FFFFFF00" : "#222")};
    border-radius: 2rem;
    z-index: 9999999;
    width: 35px;

    ${DESKTOP_MQ} {
        background-color: transparent;
    }

    ${WIDE_MQ} {
        background-color: transparent;
    }
`;
