import React, { useState } from "react";
import "./resume.style.css";
import workHistory from "../../data/workHistory";
import images from "../../assets/images";
import { MdWorkOutline } from "react-icons/md";
import { useGlobalState } from "../../hooks/useGlobalState";
import workFeatures from "../../data/workFeatures";
import { H3, P, ImgContainer, ReadMore } from "./Resume.style";
import JobFeatures from "../../components/JobFeatures";

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
                    {workHistory.map(({ id, title, company, icon, description, date }, k) => {
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
                                    {workFeatures[id] && <JobFeatures id={id} />}
                                    {description?.length > 800 ? (
                                        <>
                                            <P
                                                dangerouslySetInnerHTML={{
                                                    __html: description,
                                                }}
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
