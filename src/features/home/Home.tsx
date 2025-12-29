import React, { memo, Suspense, lazy } from "react";
import clsx from "clsx";
import { Link } from "react-aria-components";
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import { useGlobalState } from "../../core/hooks/useGlobalState";
import { useUserQuery } from "../../core/hooks/useUserQuery";
import LoadingSpinner from "../../shared/components/LoadingSpinner";

// Lazy load heavy components
const Resume = lazy(() => import("../resume/Resume"));
const Summary = lazy(() => import("../summary/Summary"));
const Navigation = lazy(() =>
    import("../../shared/components/Navigation").then((m) => ({ default: m.default })),
);
const Projects = lazy(() => import("../projects/Projects"));
const Modal = lazy(() => import("../../shared/components/Modal"));
const Avatar = lazy(() => import("./Avatar"));
const Attributes = lazy(() => import("../attributes/Attributes"));
const Videos = lazy(() => import("../videos/Videos"));

interface SocialLinkProps {
    href: string;
    children: React.ReactNode;
    ariaLabel: string;
}

const SocialLink = memo(({ href, children, ariaLabel }: SocialLinkProps): React.JSX.Element => {
    return (
        <Link
            href={href}
            target={"_blank"}
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="inline-block cursor-pointer my-[10px] mx-[10px] focus:outline-none focus:ring-2 focus:ring-[#5600ff] focus:ring-offset-2 rounded"
        >
            {children}
        </Link>
    );
});

SocialLink.displayName = "SocialLink";

const LoadingFallback = (): React.JSX.Element => (
    <div className="mx-auto flex justify-center items-center h-screen">
        <LoadingSpinner size="lg" />
    </div>
);

const Home = (): React.JSX.Element => {
    const { state } = useGlobalState();
    const { data: userData, isLoading } = useUserQuery();
    const user = userData || state?.user;

    if (isLoading) {
        return (
            <div className="mx-auto flex justify-center items-center h-screen">
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    return (
        <main
            className={clsx(
                "mx-auto flex justify-center items-start flex-col",
                "desktop:max-w-[1260px] wide:max-w-[1440px]",
            )}
        >
            <Suspense fallback={null}>
                <Modal />
            </Suspense>

            <header role="banner">
                <Suspense fallback={null}>
                    <Navigation />
                </Suspense>
            </header>
            <section
                className={clsx(
                    "flex justify-between items-center flex-col mx-auto w-full pt-4",
                    "desktop:flex-row desktop:items-center desktop:my-5 desktop:mx-auto desktop:w-[90%]",
                    "wide:flex-row wide:items-center wide:my-5 wide:mx-auto",
                )}
                id="hero"
                aria-labelledby="hero-heading"
            >
                <Suspense
                    fallback={
                        <div className="rounded-[250px] h-[250px] w-[250px] bg-gray-800 animate-pulse" />
                    }
                >
                    <Avatar />
                </Suspense>
                <div
                    className={clsx(
                        "relative w-[480px] min-w-[480px] flex flex-col text-center items-center",
                        "desktop:ml-5 desktop:min-w-[670px] desktop:items-start desktop:text-left",
                        "wide:ml-[60px] wide:min-w-[830px] wide:items-start wide:text-left",
                    )}
                >
                    <h1
                        id="hero-heading"
                        className={clsx(
                            "text-white text-[60px] text-center mt-5 font-bold",
                            "wide:text-[100px] wide:mt-0",
                            "desktop:text-[86px] desktop:mt-0",
                        )}
                    >
                        {user?.name}
                    </h1>
                    <h2
                        className={clsx(
                            "text-[22px] text-[#5600ff] px-[60px] mb-[10px] font-bold",
                            "desktop:text-[46px] desktop:px-0",
                            "wide:text-[56px] wide:px-0",
                        )}
                    >
                        {user?.currentJobTitle}
                    </h2>

                    <nav aria-label="Social media links">
                        {user?.linkedin && (
                            <SocialLink href={user.linkedin} ariaLabel="LinkedIn">
                                <FaLinkedin size={35} color={"#999"} />
                            </SocialLink>
                        )}
                        {user?.github && (
                            <SocialLink href={user.github} ariaLabel="GitHub">
                                <FaGithubSquare size={35} color={"#999"} />
                            </SocialLink>
                        )}
                        <SocialLink href="#videos" ariaLabel="YouTube Videos">
                            <FaYoutubeSquare size={35} color={"#999"} />
                        </SocialLink>
                    </nav>
                </div>
            </section>
            <Suspense fallback={<LoadingFallback />}>
                <Resume />
            </Suspense>
            <Suspense fallback={null}>
                <Attributes />
            </Suspense>
            <Suspense fallback={null}>
                <Summary />
            </Suspense>
            <Suspense fallback={null}>
                <Videos />
            </Suspense>
            <Suspense fallback={null}>
                <Projects />
            </Suspense>
        </main>
    );
};

export default memo(Home);
