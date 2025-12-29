/**
 * Compatibility hook for migrating from useGlobalState to Zustand
 * @deprecated Use useAppStore directly instead
 */
import { useAppStore } from "../../store/useAppStore";

export const useGlobalState = () => {
    const { user, modal, modalData, mobileMenuVisibility, setState } = useAppStore();

    return {
        state: {
            user,
            modal,
            modalData,
            mobileMenuVisibility,
            setState: () => {},
        },
        setState,
    };
};
