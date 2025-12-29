import React, { memo } from "react";
import clsx from "clsx";
import { Link } from "react-aria-components";
import techImages from "../../assets/images/tech";
import { FaGithub } from "react-icons/fa";
import { useGlobalState } from "../../core/hooks/useGlobalState";
import { GitHubProject } from "../../constants/data/githubProjects";

interface ProjectSourceButtonProps {
    url: string;
}

const ProjectSourceButton = memo(({ url }: ProjectSourceButtonProps): React.JSX.Element => {
    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
                "w-full text-white px-4 py-2.5 cursor-pointer text-sm font-medium outline-none",
                "flex items-center justify-center gap-2 border border-dashed border-white/30 rounded-md",
                "no-underline transition-all duration-300 ease-in-out",
                "hover:bg-white/10 hover:border-white/50 hover:shadow-lg active:scale-[0.98]",
                "focus:outline-none focus:ring-2 focus:ring-[#5600ff] focus:ring-offset-2",
            )}
        >
            <span>View Source</span>
            <FaGithub size={18} aria-hidden="true" />
        </Link>
    );
});

ProjectSourceButton.displayName = "ProjectSourceButton";

const Projects = (): React.JSX.Element => {
    const { state } = useGlobalState();

    return (
        <section
            className="flex flex-col items-center justify-center w-full mx-auto px-4"
            id="projects"
            aria-labelledby="projects-heading"
        >
            <h2
                id="projects-heading"
                className="text-[30px] mb-5 mt-[30px] desktop:mt-[30px] wide:mt-[30px] font-bold"
            >
                {state?.user?.projectsTitle}
            </h2>
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl">
                {(state?.user?.projects || []).map((project: GitHubProject, key: number) => (
                    <article
                        key={key}
                        role="listitem"
                        className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm text-white p-6 flex flex-col w-full max-w-[320px] rounded-xl border border-white/10 shadow-xl transition-all duration-300 ease-in-out hover:border-[#5600ff]/50 hover:shadow-2xl hover:shadow-[#5600ff]/20 hover:-translate-y-1 desktop:w-[280px] wide:w-[300px]"
                        style={{
                            backgroundImage: `linear-gradient(135deg, rgba(86, 0, 255, 0.05) 0%, rgba(0, 0, 0, 0.2) 100%)`,
                        }}
                    >
                        {/* Card Content */}
                        <div className="flex flex-col flex-grow mb-4">
                            {/* Title */}
                            <h6 className="text-xl font-bold mb-3 text-white border-b border-dashed border-white/20 pb-3 text-center">
                                <span className="capitalize">
                                    {project.name.replace(/[_,-]/g, " ")}
                                </span>
                            </h6>

                            {/* Description */}
                            <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-grow line-clamp-4">
                                {project.description}
                            </p>

                            {/* Technology Icons */}
                            <div
                                className="flex flex-wrap items-center gap-2 mb-4 pt-3 border-t border-dashed border-white/10"
                                role="list"
                                aria-label="Technologies used"
                            >
                                {project.technologies &&
                                    project.technologies.map((technology: string) => (
                                        <div
                                            key={technology}
                                            role="listitem"
                                            className="rounded-lg w-8 h-8 bg-white/5 border border-white/10 p-1.5 flex items-center justify-center transition-all duration-200 hover:bg-white/10 hover:scale-110"
                                            style={{
                                                backgroundImage: `url(${
                                                    techImages[
                                                        technology as keyof typeof techImages
                                                    ]
                                                })`,
                                                backgroundSize: "contain",
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "center",
                                            }}
                                            title={technology}
                                            aria-label={technology}
                                        />
                                    ))}
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-auto pt-2">
                            {project.url && <ProjectSourceButton url={project.url} />}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default memo(Projects);
