import React, { useState } from "react";
import "./resume.style.css";
import workHistory from "../../data/workHistory";
import styled from "@emotion/styled";
import images from "../../assets/images";
import { DESKTOP_MQ, WIDE_MQ } from "../../config/utils";
import { RiTeamFill } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineOndemandVideo, MdWork, MdWorkOutline } from "react-icons/md";
import { BottomModal, ModalTitle, ModalCloseTarget } from "react-spring-modal";
import { useGlobalState } from "../../hooks/useGlobalState";

export default function () {
    const [opened, setOpened] = useState([]);
    const { setState, state } = useGlobalState();

    const toggleHidden = (key) => {
        if (opened?.includes(key)) {
            setOpened([...opened.filter((i) => i !== key)]);
            return;
        }
        setOpened([...opened, key]);
    };

    return (
        <div className="row centered" id="resume">
            <div className="title">
                <H3>Work</H3>
            </div>
            <div>
                <ul className="branch branch-centered">
                    {workHistory.map(({ title, company, icon, description, date }, k) => {
                        return (
                            <li className="item" key={k}>
                                <div className="date-title">
                                    <span>
                                        {company}
                                        <br />
                                        {date}
                                    </span>
                                </div>
                                <ImgContainer className="node-icon">
                                    {images[icon] ? (
                                        <img alt={icon} src={images[icon]} />
                                    ) : (
                                        <div>
                                            <MdWorkOutline size="35" color={"#ff6b6b"} />
                                        </div>
                                    )}
                                </ImgContainer>
                                <div className="content">
                                    <h3 className="item-title">{title}</h3>
                                    <JobAttrs>
                                        <div onClick={() => setState({ modal: true })}>
                                            <MdOutlineOndemandVideo size={20} color={"#fff"} />
                                            <p>Videos</p>
                                        </div>
                                    </JobAttrs>
                                    {description?.length > 800 ? (
                                        <>
                                            <P
                                                dangerouslySetInnerHTML={{ __html: description }}
                                                open={opened?.includes(k) ? "open" : ""}
                                            />
                                            <ReadMore onClick={() => toggleHidden(k)}>
                                                {opened?.includes(k) ? "Read Less" : "Read More"}
                                            </ReadMore>
                                        </>
                                    ) : (
                                        <P
                                            dangerouslySetInnerHTML={{ __html: description }}
                                            open={"open"}
                                        />
                                    )}
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
const JobAttrs = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & div {
        p {
            font-size: 11px;
        }
    }
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

const ImgContainer = styled.div`
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
