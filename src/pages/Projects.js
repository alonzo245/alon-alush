import React from "react";
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
import { useGlobalState } from "../hooks/useGlobalState";
import ProjectsEdit from "../components/ProjectsEdit";

const projectSourceUrlButton = (url) => (
    <Btn href={url} target="_blank">
        <span style={{ marginRight: "10px" }}>View Source</span>
        <FaGithub size={20} color={"$999"} />
    </Btn>
);

export default function (props) {
    const { state, setState } = useGlobalState();

    return state?.edit ? (
        <ProjectsEdit />
    ) : (
        <Container id="projects">
            <H3>{state?.user?.projectsTitle}</H3>
            <CardContainer>
                {(state?.user?.projects || []).map((project, key) => (
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
