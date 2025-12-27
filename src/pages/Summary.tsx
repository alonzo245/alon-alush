import React from "react";
import { useGlobalState } from "../hooks/useGlobalState";
import SummaryEditItem from "../components/SummaryEditItem";
import { SummaryItem } from "../data/summary";

export default function Summary(): React.JSX.Element {
    const { setState, state } = useGlobalState();

    return (
        <div
            className="flex flex-col px-[10px] mx-auto desktop:my-10 desktop:px-20 wide:my-10 wide:px-20"
            id="summary"
        >
            {state?.user?.summary?.length === 0 || state?.edit ? null : (
                <div className="flex flex-1 mx-auto flex-row w-full flex-wrap justify-evenly items-start desktop:my-10 desktop:px-0 desktop:[&>div]:w-[calc(50%-20px)] desktop:[&>div]:mx-[10px] desktop:[&>div]:px-[10px] wide:my-10 wide:px-0 wide:[&>div]:w-[calc(50%-20px)] wide:[&>div]:px-5">
                    {(state?.user?.summary || [])?.map((item: SummaryItem, i: number) => {
                        return (
                            <div
                                key={i}
                                className="flex-none leading-[1.2] p-5 rounded-[10px] w-full self-start mb-5 [&_li]:py-[3px] desktop:max-w-[1000px] wide:max-w-[1000px]"
                            >
                                <h4 className="text-[30px] mb-[10px] mt-[30px] desktop:mb-[10px] desktop:mt-0 wide:mb-[10px] wide:mt-0">
                                    {item?.title}
                                </h4>
                                <ul>
                                    {(item?.bullets || [])?.map((bullet: string, k: number) => {
                                        return <li key={k}>{bullet}</li>;
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            )}
            <SummaryEditItem />
        </div>
    );
}
