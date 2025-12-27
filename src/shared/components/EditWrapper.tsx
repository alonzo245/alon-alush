import { AiFillEdit } from "react-icons/ai";

import React, { ReactNode } from "react";
import { useGlobalState } from "../hooks/useGlobalState";

interface EditWrapperProps {
    children: ReactNode;
}

export default function EditWrapper({ children }: EditWrapperProps): React.JSX.Element {
    const { state } = useGlobalState();

    return (
        <div className="relative">
            {state?.edit && <AiFillEdit size={20} color={"#fff"} />} {children}
        </div>
    );
}
