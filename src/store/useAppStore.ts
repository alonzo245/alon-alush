import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import user from "../constants/data/user";

interface User {
    [key: string]: any;
}

interface AppState {
    user: User | null;
    modal: boolean;
    modalData: any;
    mobileMenuVisibility: boolean;
}

interface AppActions {
    setUser: (user: User | null) => void;
    setModal: (modal: boolean) => void;
    setModalData: (modalData: any) => void;
    setMobileMenuVisibility: (visibility: boolean) => void;
    setState: (stateToUpdate: Partial<AppState>) => void;
}

type AppStore = AppState & AppActions;

export const useAppStore = create<AppStore>()(
    devtools(
        persist(
            (set) => ({
                // Initial state
                user: { ...user },
                modal: false,
                modalData: null,
                mobileMenuVisibility: false,

                // Actions
                setUser: (user) => set({ user }),
                setModal: (modal) => set({ modal }),
                setModalData: (modalData) => set({ modalData }),
                setMobileMenuVisibility: (mobileMenuVisibility) => set({ mobileMenuVisibility }),
                setState: (stateToUpdate) => set((state) => ({ ...state, ...stateToUpdate })),
            }),
            {
                name: "app-storage",
                partialize: (state) => ({
                    user: state.user,
                }),
            }
        ),
        { name: "AppStore" }
    )
);

