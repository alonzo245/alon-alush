import React, { ReactNode } from "react";

interface EditWrapperProps {
    children: ReactNode;
}

export default function EditWrapper({ children }: EditWrapperProps): React.JSX.Element {
    return <div className="relative">{children}</div>;
}
