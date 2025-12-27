import React from "react";
import {
    SiBuddy,
    SiGraphql,
    SiHelm,
    SiKubernetes,
    SiMongodb,
    SiNestjs,
    SiRedis,
} from "react-icons/si";
import { FaAws, FaMobileAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { AiFillEdit, AiOutlineAntDesign } from "react-icons/ai";

export const icon = (name: string = "", size: number = 30, color: string = "#C1C1C1"): JSX.Element | null => {
    const icons: { [key: string]: JSX.Element } = {
        aws: <FaAws size={size} color={color} />,
        eks: <SiKubernetes size={size} color={color} />,
        kubernetes: <SiKubernetes size={size} color={color} />,
        helm: <SiHelm size={size} color={color} />,
        buddy: <SiBuddy size={size} color={color} />,
        nodejs: <FaNodeJs size={size} color={color} />,
        nestjs: <SiNestjs size={size} color={color} />,
        mongodb: <SiMongodb size={size} color={color} />,
        redis: <SiRedis size={size} color={color} />,
        react: <FaReact size={size} color={color} />,
        antd: <AiOutlineAntDesign size={size} color={color} />,
        graphql: <SiGraphql size={size} color={color} />,
        "react-native": <FaReact size={size} color={color} />,
        circleci: <FaMobileAlt size={size} color={color} />,
    };

    return icons[name] ? icons[name] : null;
};

