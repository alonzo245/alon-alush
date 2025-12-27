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
    CardContainerEdit,
    H3,
    H6,
    Input3,
    Textarea,
    CardEdit,
    Input1,
    Input2,
    CardAddProject,
} from "./ProjectsEdit.style";
import { EditIconWrapper, Input } from "./AttributesEdit.style";
import { useGlobalState } from "../hooks/useGlobalState";
import { EditIconWrapper2 } from "../pages/Home.style";
import { AiOutlinePlus } from "react-icons/ai";
import { GitHubProject } from "../data/githubProjects";

interface ProjectsEditProps {
    [key: string]: any;
}

const projectSourceUrlButton = (url: string): JSX.Element => (
    <Btn href={url} target="_blank" rel="noopener noreferrer">
        <span style={{ marginRight: "10px" }}>View Source</span>
        <FaGithub size={20} color={"$999"} />
    </Btn>
);

export default function ProjectsEdit(props: ProjectsEditProps): JSX.Element {
    const { state, setState } = useGlobalState();

    const onClick = (): void => {
        setState({
            user: {
                ...state?.user,
                projects: [
                    {
                        name: "",
                        created_at: "",
                        language: "",
                        url: "",
                        description: "",
                        technologies: [],
                    },
                    ...(state?.user?.projects || []),
                ],
            },
        });
    };

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
                    {(state?.user?.attributes?.length || 0) > 0 ? (
                        <H3
                            style={{ alignSelf: "center", marginBottom: "30px", marginTop: "40px" }}
                        >
                            {state?.user?.projectsTitle}
                        </H3>
                    ) : null}
                </>
            )}
            <CardContainerEdit>
                <CardAddProject onClick={onClick}>
                    <div>
                        <AiOutlinePlus size={40} color={"#999"} />
                    </div>
                </CardAddProject>
                {(state?.user?.projects || []).map((project: GitHubProject, key: number) => (
                    <CardEdit key={key}>
                        <CardContent>
                            <H6>
                                <Input1 value={project.name} placeholder={"Enter Work Duration"} />
                            </H6>
                            <Textarea
                                rows={4}
                                value={project.description}
                                placeholder={"What did you worked on over there?"}
                            />
                        </CardContent>

                        <CardBadges>
                            {project.technologies &&
                                project.technologies.map((technology: string) => (
                                    <Badge2
                                        key={technology}
                                        style={{
                                            backgroundImage: `url(${techImages[technology as keyof typeof techImages]})`,
                                        }}
                                    />
                                ))}
                        </CardBadges>

                        <Input2 value={project.url} placeholder={"project url"} />
                    </CardEdit>
                ))}
            </CardContainerEdit>
        </Container>
    );
}

