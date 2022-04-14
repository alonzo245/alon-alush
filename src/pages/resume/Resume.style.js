import "./resume.style.css";
import styled from "@emotion/styled";
import { DESKTOP_MQ, WIDE_MQ } from "../../config/utils";

export const H3 = styled.h3`
    font-size: 50px;
    //margin-bottom: 10px;
`;

export const ReadMore = styled.div`
    border: 1px dashed #99999980;
    height: 35px;
    text-align: center;
    border-radius: 5px;
    line-height: 35px;
    cursor: pointer;
    margin: 10px auto 0 auto;

    ${DESKTOP_MQ} {
        max-width: 250px;
    }

    ${WIDE_MQ} {
        max-width: 350px;
    }
    //margin-top: 10px;
`;

export const P = styled.p`
    height: ${(p) => (p.open ? "auto" : "100px")};
    -webkit-mask-image: ${(p) =>
        p.open
            ? ""
            : `
    
    -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 1)),
        to(rgba(0, 0, 0, 0))
    )
    
    `};
`;

export const ImgContainer = styled.div`
    & img,
    div {
        height: 45px;
        border-radius: 45px;
        background: #ffffff;
        border: 3px solid transparent;
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
        transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
    }
`;
