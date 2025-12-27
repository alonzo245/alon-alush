import React, { useRef } from "react";
import { useGlobalState } from "../../shared/hooks/useGlobalState";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import useScreenSize from "../../shared/hooks/useScreenSize";
import { mobileThreshold } from "../../constants/config";
import Hamburger from "hamburger-react";

export default function Header(): React.JSX.Element | null {
    const { width } = useScreenSize();
    const { state, setState } = useGlobalState();
    const ref = useRef<HTMLDivElement>(null);

    if (state?.modal) return null;

    return (
        <header
            ref={ref}
            className="flex h-[55px] justify-between items-center px-[10px] bg-black max-[950px]:fixed max-[950px]:z-[100] max-[950px]:min-w-full max-[950px]:text-[rgb(227,229,236)] max-[950px]:flex max-[950px]:items-center max-[950px]:px-[10px]"
        >
            {width < mobileThreshold ? (
                <>
                    <div className="w-5" />
                    <div className="fixed top-[5px] right-[5px] bg-black rounded-full z-[11]">
                        <Hamburger
                            color={"#fff"}
                            size={18}
                            onToggle={(toggled) => setState({ mobileMenuVisibility: toggled })}
                            toggled={state?.mobileMenuVisibility}
                        />
                    </div>
                </>
            ) : (
                <>
                    <Link to={"/"}>logo</Link>
                    {state?.user?.email && (
                        <ReactTooltip place="bottom" type="dark" effect="solid" />
                    )}
                </>
            )}
        </header>
    );
}
