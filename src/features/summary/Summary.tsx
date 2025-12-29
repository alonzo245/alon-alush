import React from "react";
import { useGlobalState } from "../../core/hooks/useGlobalState";
import { SummaryItem } from "../../constants/data/summary";

export default function Summary(): React.JSX.Element {
    const { state } = useGlobalState();

    return (
        <section
            className="flex flex-col px-[10px] mx-auto desktop:my-10 desktop:px-20 wide:my-10 wide:px-20"
            id="summary"
            aria-labelledby="summary-heading"
        >
            {state?.user?.summary?.length === 0 ? null : (
                <div className="flex flex-1 mx-auto flex-col w-full items-start desktop:flex-row desktop:my-10 desktop:px-0 desktop:justify-evenly desktop:flex-wrap wide:flex-row wide:my-10 wide:px-0 wide:justify-evenly wide:flex-wrap">
                    {(state?.user?.summary || [])?.map((item: SummaryItem, i: number) => {
                        return (
                            <article
                                key={i}
                                className="flex-none leading-[1.2] p-5 rounded-[10px] w-full self-start mb-5 [&_li]:py-[3px] desktop:w-[calc(50%-20px)] desktop:mx-[10px] desktop:px-[10px] wide:w-[calc(50%-20px)] wide:px-5"
                            >
                                <h3 className="text-[30px] mb-[10px] mt-[30px] desktop:mb-[10px] desktop:mt-0 wide:mb-[10px] wide:mt-0">
                                    {item?.title}
                                </h3>
                                <ul aria-label={`${item?.title} details`}>
                                    {(item?.bullets || [])?.map((bullet: string, k: number) => {
                                        return <li key={k}>{bullet}</li>;
                                    })}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            )}
        </section>
    );
}
