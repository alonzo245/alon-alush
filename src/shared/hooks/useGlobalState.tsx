import React, { useContext, useState, ReactNode } from "react";
import jwt_decode from "jwt-decode";
import user from "../../constants/data/user";

interface User {
    [key: string]: any;
}

interface GlobalState {
    user: User | null;
    edit: boolean;
    modal?: boolean;
    modalData?: any;
    mobileMenuVisibility?: boolean;
    setState: (stateToUpdate: Partial<GlobalState>) => void;
}

interface GlobalStateContextValue {
    state: GlobalState;
    setState: (stateToUpdate: Partial<GlobalState>) => void;
}

const globalStateContext = React.createContext<GlobalStateContextValue>({
    state: {
        user: null,
        edit: true,
        setState: () => {},
    },
    setState: () => {},
});

export const useGlobalState = (): GlobalStateContextValue => useContext(globalStateContext);

const initialState: GlobalState = {
    user: { ...user },
    edit: false,
    setState: () => {},
};

const { Provider } = globalStateContext;

interface GlobalStateProviderProps {
    children: ReactNode;
}

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps): React.JSX.Element => {
    const [state, setGlobalState] = useState<GlobalState>(initialState);

    const setState = (stateToUpdate: Partial<GlobalState>) => {
        setGlobalState({ ...state, ...stateToUpdate });
    };

    return <Provider value={{ state, setState }}>{children}</Provider>;
};
