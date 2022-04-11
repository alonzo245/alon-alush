import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const globalStateContext = React.createContext({
    user: null,
    setState: () => {},
});

const useGlobalState = () => useContext(globalStateContext);

const initialState = { user: null, setState: () => {} };

const { Provider } = globalStateContext;

const GlobalStateProvider = ({ children }) => {
    const [state, setGlobalState] = useState(initialState);

    const setState = (stateToUpdate) => {
        setGlobalState({ ...state, ...stateToUpdate });
    };
    return <Provider value={{ state, setState }}>{children}</Provider>;
};

export { GlobalStateProvider, useGlobalState };
