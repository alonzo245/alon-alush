import React from "react";
import { useGlobalState } from "../../shared/hooks/useGlobalState";
import workFeatures from "../../constants/data/workFeatures";
import { BsCodeSlash } from "react-icons/bs";

interface JobFeaturesProps {
    id: string;
}

export default function JobFeatures({ id }: JobFeaturesProps): React.JSX.Element {
    const { setState } = useGlobalState();

    return (
        <div className="flex justify-start items-start mb-[10px] pb-[10px] pt-[10px] overflow-y-hidden overflow-x-auto flex-col flex-wrap w-full h-[82px]">
            {(Object.keys(workFeatures[id as keyof typeof workFeatures] || {}) || []).map(
                (featureName: string, i: number) => {
                    const featureData = (workFeatures[id as keyof typeof workFeatures] as any)?.[
                        featureName
                    ];
                    return (
                        <div
                            key={i}
                            className="flex justify-center flex-col items-center mx-[10px] rounded-[10px] border border-dotted border-[#ffffff30] p-[5px] w-[110px] cursor-pointer transition-all duration-200 ease-in bg-[#00000030] hover:bg-[#ffffff20] [&_p]:text-[11px]"
                            onClick={() =>
                                setState({
                                    modal: true,
                                    modalData: {
                                        ...featureData,
                                    },
                                })
                            }
                        >
                            <BsCodeSlash size={20} color={"#ffffff60"} />
                            <p>{featureData?.title}</p>
                        </div>
                    );
                },
            )}
        </div>
    );
}
