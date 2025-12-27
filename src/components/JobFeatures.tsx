import React from "react";
import { useGlobalState } from "../hooks/useGlobalState";
import workFeatures from "../data/workFeatures";
import { BsCodeSlash } from "react-icons/bs";
import styled from "@emotion/styled";
import useScreenSize from "../hooks/useScreenSize";
import { DIV } from "./ResumeEditItem.style";

interface JobFeaturesProps {
    id: string;
}

export default function JobFeatures({ id }: JobFeaturesProps): JSX.Element {
    const { setState, state } = useGlobalState();
    const { width } = useScreenSize();

    return (
        <Container>
            {(Object.keys(workFeatures[id as keyof typeof workFeatures] || {}) || []).map(
                (featureName: string, i: number) => {
                    const featureData = (workFeatures[id as keyof typeof workFeatures] as any)?.[
                        featureName
                    ];
                    return (
                        <FeatureBtn
                            key={i}
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
                        </FeatureBtn>
                    );
                },
            )}
        </Container>
    );
}

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    overflow-y: hidden;
    overflow-x: auto;
    flex-direction: column;
    flex-wrap: wrap;

    width: 100%;
    height: 82px;
    //background-color: red;
    /* border-bottom: 1px dotted #99999960; */
    /* border-top: 1px dotted #99999960; */
`;

export const FeatureBtn = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-inline: 10px;
    border-radius: 10px;
    border: 1px dotted #ffffff30;
    padding: 5px;
    width: 110px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    background-color: #00000030;

    &:hover {
        background-color: #ffffff20;
    }
    p {
        font-size: 11px;
    }
`;

