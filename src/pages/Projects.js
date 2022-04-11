import React, { useState } from "react";
import "./resume/resume.style.css";
import githubProjects from "../data/githubProjects";
import techImages from "../assets/images/tech";
import { FaGithub } from "react-icons/fa";
import {
    Badge2,
    CardContent,
    Container,
    Btn,
    Card,
    CardBadges,
    CardButton,
    CardContainer,
    H3,
    H6,
} from "./Projects.style";

const projectSourceUrlButton = (url) => (
    <Btn href={url} target="_blank">
        <span style={{ marginRight: "10px" }}>View Source</span>{" "}
        <FaGithub size={20} color={"$999"} />
    </Btn>
);

const projectUrlButton = (demoUrl) => (
    <Btn style={{ marginRight: "10px" }} href={demoUrl} target="_blank">
        View Project
    </Btn>
);

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
        <Container id="projects">
            <H3>GitHub Projects</H3>
            <CardContainer>
                {githubProjects.map((project, key) => (
                    <Card key={key}>
                        <CardContent>
                            <H6>
                                <span>{project.name.replace(/[_,-]/g, " ")}</span>
                            </H6>
                            <p>{project.description}</p>
                        </CardContent>

                        <CardBadges>
                            {project.technologies &&
                                project.technologies.map((technology) => (
                                    <Badge2
                                        key={technology}
                                        style={{
                                            backgroundImage: `url(${techImages[technology]})`,
                                        }}
                                    />
                                ))}
                        </CardBadges>

                        <CardButton>
                            {project.url && projectSourceUrlButton(project.url)}
                            {/*{project.demoUrl && projectUrlButton(project.demoUrl)}*/}
                        </CardButton>
                    </Card>
                ))}
            </CardContainer>
        </Container>
    );
}
