import styled from "@emotion/styled";
import { COLORS, DESKTOP_MQ, MOBILE_MQ, WIDE_MQ } from "../config/utils";

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
export const Mask = styled.div`
    border-radius: 250px;
    height: 250px;
    width: 250px;
    overflow: hidden;

    ${DESKTOP_MQ} {
        border-radius: 300px;
        height: 350px;
        width: 350px;
    }

    ${WIDE_MQ} {
        border-radius: 300px;
        height: 550px;
        width: 550px;
    }
`;

export const Img = styled.img`
    width: 100%;
`;

export const Row = styled.div`
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

export const H2 = styled.h1`
    font-size: 22px;
    color: ${COLORS.blueish};

    ${DESKTOP_MQ} {
        font-size: 46px;
    }

    ${WIDE_MQ} {
        font-size: 56px;
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
