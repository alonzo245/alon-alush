import React from "react";
import techImages from "../../assets/images/tech";
import { FaGithub } from "react-icons/fa";
import { useGlobalState } from "../../shared/hooks/useGlobalState";
import ProjectsEdit from "./ProjectsEdit";
import { GitHubProject } from "../../constants/data/githubProjects";

const projectSourceUrlButton = (url: string): React.JSX.Element => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-[#e9e9e9] px-[0.4rem] py-[0.4rem] cursor-pointer text-[0.7rem] outline-none flex items-center mx-[5px] h-[36px] border border-dashed border-[#999] no-underline transition-all duration-200 ease-in desktop:hover:bg-white desktop:hover:text-[#2d2d2d] wide:hover:bg-white wide:hover:text-[#2d2d2d]"
    >
        <span style={{ marginRight: "10px" }}>View Source</span>
        <FaGithub size={20} color={"$999"} />
    </a>
);

export default function Projects(): React.JSX.Element {
    const { state } = useGlobalState();

    return state?.edit ? (
        <ProjectsEdit />
    ) : (
        <div className="flex flex-col items-center justify-center w-full mx-auto" id="projects">
            <h3 className="text-[30px] mb-5 mt-[50px] desktop:mt-0 wide:mt-0">
                {state?.user?.projectsTitle}
            </h3>
            <div className="flex flex-wrap justify-center mt-[10px] w-full desktop:w-full desktop:flex-wrap wide:w-full wide:flex-wrap">
                {(state?.user?.projects || []).map((project: GitHubProject, key: number) => (
                    <div
                        key={key}
                        className="m-[10px] h-[320px] text-white p-[5px] flex flex-col items-center transition-all duration-200 ease-in w-[320px] rounded-[10px] border border-dashed border-[#999] desktop:w-[240px] desktop:hover:bg-[#5600ff] desktop:hover:text-white wide:w-[240px] wide:hover:bg-[#5600ff] wide:hover:text-white"
                    >
                        <div className="justify-items-center items-center p-[5px] text-[0.9rem] w-full h-[62%]">
                            <h6 className="text-base font-bold border-b border-dashed border-[#999] h-[50px] w-full text-center leading-[1.4] text-[#ffffff80] mb-5 flex justify-center items-center">
                                <span>{project.name.replace(/[_,-]/g, " ")}</span>
                            </h6>
                            <p>{project.description}</p>
                        </div>

                        <div className="justify-items-center items-center flex-wrap flex w-full mx-[5px] justify-start">
                            {project.technologies &&
                                project.technologies.map((technology: string) => (
                                    <div
                                        key={technology}
                                        className="rounded-[15px] w-[33px] h-[33px] bg-contain bg-center m-[5px]"
                                        style={{
                                            backgroundImage: `url(${
                                                techImages[technology as keyof typeof techImages]
                                            })`,
                                        }}
                                    />
                                ))}
                        </div>

                        <div className="flex justify-center relative w-full flex-grow items-end pb-[5px]">
                            {project.url && projectSourceUrlButton(project.url)}
                            {/*{project.demoUrl && projectUrlButton(project.demoUrl)}*/}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
