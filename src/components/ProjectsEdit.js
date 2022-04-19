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
} from "./ProjectsEdit.style";
import { EditIconWrapper, Input } from "./AttributesEdit.style";
import { useGlobalState } from "../hooks/useGlobalState";

const projectSourceUrlButton = (url) => (
    <Btn href={url} target="_blank">
        <span style={{ marginRight: "10px" }}>View Source</span>
        <FaGithub size={20} color={"$999"} />
    </Btn>
);

export default function (props) {
    const { state, setState } = useGlobalState();

    return (
        <Container id="projects">
            {state?.edit ? (
                <EditIconWrapper style={{ width: "60%", margin: "0 auto" }}>
                    <Input
                        value={state?.user?.projectsTitle}
                        name={"attributesTitle"}
                        placeholder={"Enter Title for your projects"}
                    />
                </EditIconWrapper>
            ) : (
                <>
                    {state?.user?.attributes?.length > 0 ? (
                        <H3
                            style={{ alignSelf: "center", marginBottom: "30px", marginTop: "40px" }}
                        >
                            {state?.user?.projectsTitle}
                        </H3>
                    ) : null}
                </>
            )}
            <CardContainer>
                {state?.user?.projects.map((project, key) => (
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
