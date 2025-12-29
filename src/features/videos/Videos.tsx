import React, { useState, useCallback, memo } from "react";
import { Button } from "react-aria-components";
import videosList from "../../lib/utils/videosList";

interface VideoItem {
    videoId: string;
    open: boolean;
}

const Videos = (): React.JSX.Element => {
    const [list, setList] = useState<VideoItem[]>(() =>
        Object.keys(videosList).map((videoId) => ({ videoId, open: false })),
    );

    const handleVideoClick = useCallback((videoId: string): void => {
        setList((prevList) =>
            prevList.map((video) => {
                if (videoId === video.videoId) return { videoId, open: true };
                return video;
            }),
        );
    }, []);

    return (
        <section
            className="flex flex-col items-center justify-center w-full mx-auto px-[10px] desktop:px-0 wide:px-0"
            id="videos"
            aria-labelledby="videos-heading"
        >
            <h2
                id="videos-heading"
                className="text-[30px] mb-5 mt-[30px] desktop:mt-[30px] wide:mt-[30px] font-bold"
            >
                Videos & Tutorials
            </h2>
            <div
                className="flex flex-wrap justify-center mt-[10px] w-full desktop:w-full desktop:flex-wrap"
                role="list"
                aria-label="Video tutorials"
            >
                {videosList &&
                    list.map((video, key) =>
                        video.open ? (
                            <div
                                key={key}
                                role="listitem"
                                className="flex-[100%] m-[10px] desktop:flex-[30%] wide:flex-[30%]"
                            >
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.videoId}`}
                                    title={`${
                                        (videosList as any)[video.videoId]?.title ||
                                        "Video tutorial"
                                    }`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen={true}
                                    className="w-full border-0 h-[320px] desktop:h-auto wide:h-auto"
                                    aria-label={`${
                                        (videosList as any)[video.videoId]?.title ||
                                        "Video tutorial"
                                    }`}
                                />
                            </div>
                        ) : (
                            <Button
                                key={key}
                                onPress={() => handleVideoClick(video.videoId)}
                                className="m-[10px] w-full flex-[100%] relative transition-all duration-[100ms] ease cursor-pointer desktop:flex-[30%] wide:flex-[30%] focus:outline-none focus:ring-2 focus:ring-[#5600ff] focus:ring-offset-2 rounded"
                                aria-label={`Play ${
                                    (videosList as any)[video.videoId]?.title || "video"
                                }`}
                            >
                                <img
                                    src={`/images/videos/${video.videoId}.jpg`}
                                    alt={`${
                                        (videosList as any)[video.videoId]?.title ||
                                        "Video thumbnail"
                                    }`}
                                    className="w-full opacity-80 desktop:opacity-100 desktop:hover:opacity-70"
                                    loading="lazy"
                                    width={640}
                                    height={360}
                                />
                                <span
                                    className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-2xl z-[11111] w-0 h-[74px] border-[transparent_transparent_transparent_#ffffff] border-solid border-[37px_0_37px_60px] desktop:hidden desktop:group-hover:block"
                                    aria-hidden="true"
                                />
                            </Button>
                        ),
                    )}
            </div>
        </section>
    );
};

export default memo(Videos);
