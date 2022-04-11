import React, { useState } from "react";
import "./resume.style.css";
import workHistory from "../data/workHistory";
import styled from "@emotion/styled";
import images from "../assets/images";
import { DESKTOP_MQ, WIDE_MQ } from "../config/utils";

export default function (props) {
    const [opened, setOpened] = useState([]);

    const toggleHidden = (key) => {
        if (opened?.includes(key)) {
            setOpened([...opened.filter((i) => i !== key)]);
            return;
        }
        setOpened([...opened, key]);
    };

    return (
        <div className="row example-centered" id="resume">
            <div className="col-md-12 example-title">
                <H3>Work</H3>
            </div>
            <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                <ul className="timeline timeline-centered">
                    {workHistory.map(({ title, company, icon, description, date }, k) => {
                        return (
                            <li className="timeline-item" key={k}>
                                <div className="timeline-info">
                                    <span>{date}</span>
                                </div>
                                <Img className="timeline-marker">
                                    <img alt={""} src={images[icon]} />
                                </Img>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">{title}</h3>
                                    <P
                                        dangerouslySetInnerHTML={{ __html: description }}
                                        open={opened?.includes(k) ? "open" : ""}
                                    />
                                    <ReadMore onClick={() => toggleHidden(k)}>
                                        {opened?.includes(k) ? "Read Less" : "Read More"}
                                    </ReadMore>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

const H3 = styled.h3`
    font-size: 50px;
    //margin-bottom: 10px;
`;

const ReadMore = styled.div`
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
const P = styled.p`
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

const Img = styled.li`
    & img {
        height: 45px;
        border-radius: 45px;
        background: #ff6b6b;
        border: 3px solid transparent;
        content: "";
        display: block;
        //height: 11px;
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(-13px, 0px);
        z-index: 11111;
        //width: 11px;
        transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
    }
`;
