import React from "react";
import techImages from "../../assets/images/tech";
import { useGlobalState } from "../../shared/hooks/useGlobalState";
import { AiOutlinePlus } from "react-icons/ai";
import { GitHubProject } from "../../constants/data/githubProjects";
import editIcon from "../../assets/svg/edit.svg";

const EditIconWrapper = ({
    children,
    style,
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
}): React.JSX.Element => (
    <div
        className="relative"
        style={{
            ...style,
        }}
    >
        <div
            className="absolute left-[-25px] top-[10px] block w-5 h-5 bg-no-repeat bg-[top_left]"
            style={{
                backgroundImage: `url(${editIcon})`,
            }}
        />
        {children}
    </div>
);

export default function ProjectsEdit(): React.JSX.Element {
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
        <div className="flex flex-col items-center justify-center w-full mx-auto" id="projects">
            {state?.edit ? (
                <EditIconWrapper style={{ width: "60%", margin: "0 auto" }}>
                    <input
                        className="bg-transparent border-0 outline-0 font-bold min-w-[250px] border-b border-dashed border-[#88888840] text-left text-[#627fc6] pl-[30px] text-[30px] w-full text-center mb-5 placeholder:text-[#627fc6] focus:border-[#888] hover:border-[#888]"
                        value={state?.user?.projectsTitle}
                        name={"attributesTitle"}
                        placeholder={"Enter Title for your projects"}
                    />
                </EditIconWrapper>
            ) : (
                <>
                    {(state?.user?.attributes?.length || 0) > 0 ? (
                        <h3
                            className="text-[30px] mb-5 mt-[50px] desktop:mt-0 wide:mt-0"
                            style={{ alignSelf: "center", marginBottom: "30px", marginTop: "40px" }}
                        >
                            {state?.user?.projectsTitle}
                        </h3>
                    ) : null}
                </>
            )}
            <div className="flex flex-wrap justify-center mt-[10px] w-full desktop:w-full desktop:flex-wrap wide:w-full wide:flex-wrap">
                <div
                    className="m-[10px] h-[320px] text-white p-[5px] transition-all duration-200 ease-in w-[320px] rounded-[10px] border border-dashed border-[#999] cursor-pointer flex justify-center items-center desktop:w-[240px] desktop:hover:bg-[#444] desktop:hover:border-[#ffffff] desktop:hover:text-white desktop:hover:[&>div]:bg-white desktop:hover:[&>div]:border-[#ffffff] wide:w-[240px] wide:hover:bg-[#444] wide:hover:border-[#ffffff] wide:hover:text-white"
                    onClick={onClick}
                >
                    <div className="transition-all duration-200 ease-in flex justify-center items-center h-[50px] w-[50px] border border-dashed border-white rounded-[50px]">
                        <AiOutlinePlus size={40} color={"#999"} />
                    </div>
                </div>
                {(state?.user?.projects || []).map((project: GitHubProject, key: number) => (
                    <div
                        key={key}
                        className="m-[10px] h-[320px] text-white p-[5px] flex flex-col items-center transition-all duration-200 ease-in w-[320px] rounded-[10px] border border-dashed border-[#999] desktop:w-[240px] desktop:hover:text-white wide:w-[240px] wide:hover:text-white"
                    >
                        <div className="justify-items-center items-center p-[5px] text-[0.9rem] w-full h-[62%]">
                            <h6 className="text-base font-bold border-b border-dashed border-[#999] h-[50px] w-full text-center leading-[1.4] text-[#ffffff80] mb-5 flex justify-center items-center">
                                <input
                                    className="text-[#acbac4] bg-transparent border-0 outline-0 font-bold text-[18px] p-[10px] placeholder:text-[#acbac4] focus:text-[#999] hover:text-[#999]"
                                    value={project.name}
                                    placeholder={"Enter Work Duration"}
                                />
                            </h6>
                            <textarea
                                className="text-[#acbac4] bg-transparent border-0 outline-0 w-full placeholder:text-[#acbac4] focus:text-[#acbac4] focus:border-b focus:border-dashed focus:border-[#888] hover:text-[#acbac4] hover:border-b hover:border-dashed hover:border-[#888]"
                                rows={4}
                                value={project.description}
                                placeholder={"What did you worked on over there?"}
                            />
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

                        <input
                            className="text-[#acbac4] bg-[#00000040] border-0 outline-0 font-bold text-[18px] p-[10px] rounded-[10px] placeholder:text-[#acbac4] focus:text-[#999] hover:text-[#999]"
                            value={project.url}
                            placeholder={"project url"}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
