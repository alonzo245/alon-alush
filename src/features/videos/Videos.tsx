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
                                className="group m-[10px] w-full flex-[100%] relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] desktop:flex-[30%] wide:flex-[30%] focus:outline-none focus:ring-2 focus:ring-[#5600ff] focus:ring-offset-2"
                                aria-label={`Play ${
                                    (videosList as any)[video.videoId]?.title || "video"
                                }`}
                            >
                                <div className="relative w-full aspect-video overflow-hidden bg-gray-900">
                                    <img
                                        src={`/images/videos/${video.videoId}.jpg`}
                                        alt={`${
                                            (videosList as any)[video.videoId]?.title ||
                                            "Video thumbnail"
                                        }`}
                                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        loading="lazy"
                                        width={640}
                                        height={360}
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                    {/* Play button overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-30 scale-20">
                                        <div className="relative w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            {/* Outer circle */}
                                            <div className="absolute inset-0 bg-[#ffffff]/90 rounded-full blur-md group-hover:bg-[#5600ff] group-hover:blur-lg transition-all duration-300" />
                                            {/* Inner circle */}
                                            <div className="absolute inset-0 bg-[#ffffff] rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                                            {/* Play icon */}
                                            <div className="relative w-0 h-0 border-l-[24px] border-l-[#5600ff] border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-1" />
                                        </div>
                                    </div>

                                    {/* Video title overlay (bottom) */}
                                    {(videosList as any)[video.videoId]?.title && (
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/90 to-transparent">
                                            <p className="text-white text-sm font-semibold line-clamp-2 group-hover:text-[#5600ff] transition-colors duration-300 text-right">
                                                {(videosList as any)[video.videoId]?.title}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </Button>
                        ),
                    )}
            </div>
        </section>
    );
};

export default memo(Videos);
