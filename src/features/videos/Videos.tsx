import React, { useState } from "react";
import videosList from "../../lib/utils/videosList";

interface VideoItem {
    videoId: string;
    open: boolean;
}

export default function Videos(): React.JSX.Element {
    const [list, setList] = useState<VideoItem[]>(() =>
        Object.keys(videosList).map((videoId) => ({ videoId, open: false })),
    );

    const onClick = (e: React.MouseEvent, videoId: string): void => {
        setList(
            list.map((video) => {
                if (videoId === video.videoId) return { videoId, open: true };
                return video;
            }),
        );
    };

    return (
        <div
            className="flex flex-col items-center justify-center w-full mx-auto px-[10px] desktop:px-0 wide:px-0"
            id="videos"
        >
            <h3 className="text-[30px] mb-5 mt-[30px] desktop:mt-[30px] wide:mt-[30px]">
                Videos & Tutorials
            </h3>
            <div className="flex flex-wrap justify-center mt-[10px] w-full desktop:w-full desktop:flex-wrap">
                {videosList &&
                    list.map((video, key) =>
                        video.open ? (
                            <iframe
                                key={key}
                                src={`https://www.youtube.com/embed/${video.videoId}`}
                                title={`${(videosList as any)[video.videoId]?.title || ""}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen={true}
                                className="flex-[100%] m-[10px] border-0 h-[320px] desktop:flex-[30%] desktop:h-auto wide:flex-[30%] wide:h-auto"
                            />
                        ) : (
                            <div
                                key={key}
                                className="m-[10px] w-full flex-[100%] relative transition-all duration-[100ms] ease cursor-pointer [&>img]:opacity-80 desktop:flex-[30%] desktop:h-auto desktop:[&>img]:opacity-100 desktop:hover:[&>img]:opacity-70 desktop:[&:before]:hidden desktop:hover:[&:before]:block desktop:[&:before]:absolute desktop:[&:before]:top-1/2 desktop:[&:before]:left-1/2 desktop:[&:before]:translate-x-[-50%] desktop:[&:before]:translate-y-[-50%] desktop:[&:before]:text-2xl desktop:[&:before]:content-[''] desktop:[&:before]:z-[11111] desktop:[&:before]:border-0 desktop:[&:before]:bg-transparent desktop:[&:before]:box-border desktop:[&:before]:w-0 desktop:[&:before]:h-[74px] desktop:[&:before]:border-[transparent_transparent_transparent_#ffffff] desktop:[&:before]:cursor-pointer desktop:[&:before]:border-solid desktop:[&:before]:border-[37px_0_37px_60px] wide:flex-[30%] wide:h-auto wide:[&>img]:opacity-100 wide:[&:before]:hidden wide:hover:[&>img]:opacity-70 wide:hover:[&:before]:block wide:[&:before]:absolute wide:[&:before]:top-1/2 wide:[&:before]:left-1/2 wide:[&:before]:translate-x-[-50%] wide:[&:before]:translate-y-[-50%] wide:[&:before]:text-2xl wide:[&:before]:content-[''] wide:[&:before]:z-[11111] wide:[&:before]:border-0 wide:[&:before]:bg-transparent wide:[&:before]:box-border wide:[&:before]:w-0 wide:[&:before]:h-[74px] wide:[&:before]:border-[transparent_transparent_transparent_#ffffff] wide:[&:before]:cursor-pointer wide:[&:before]:border-solid wide:[&:before]:border-[37px_0_37px_60px] [&:before]:absolute [&:before]:top-1/2 [&:before]:left-1/2 [&:before]:translate-x-[-50%] [&:before]:translate-y-[-50%] [&:before]:text-2xl [&:before]:content-[''] [&:before]:z-[11111] [&:before]:border-0 [&:before]:bg-transparent [&:before]:box-border [&:before]:w-0 [&:before]:h-[74px] [&:before]:border-[transparent_transparent_transparent_#ffffff] [&:before]:cursor-pointer [&:before]:border-solid [&:before]:border-[37px_0_37px_60px]"
                                onClick={(e) => onClick(e, video.videoId)}
                            >
                                <img
                                    src={`/images/videos/${video.videoId}.jpg`}
                                    alt={video.videoId}
                                    className="w-full"
                                />
                            </div>
                        ),
                    )}
            </div>
        </div>
    );
}
