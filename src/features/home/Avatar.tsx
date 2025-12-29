import React, { memo } from "react";
import Alon from "../../assets/images/alon-alush-resized.jpg";

const Avatar = memo((): React.JSX.Element => {
    return (
        <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#5600ff]/20 via-[#5600ff]/10 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10 desktop:blur-2xl wide:blur-3xl" />

            {/* Border ring with gradient */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-br from-[#5600ff]/50 via-[#5600ff]/30 to-[#5600ff]/10 p-1 group-hover:from-[#5600ff] group-hover:via-[#5600ff]/70 group-hover:to-[#5600ff]/40 transition-all duration-500 desktop:border-[6px] wide:border-[8px]">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#5600ff]/10 to-transparent" />
            </div>

            {/* Main avatar container */}
            <div className="relative rounded-full h-[250px] w-[250px] overflow-hidden shadow-2xl ring-4 ring-[#5600ff]/20 group-hover:ring-[#5600ff]/40 transition-all duration-500 desktop:rounded-full desktop:h-[350px] desktop:w-[350px] wide:rounded-full wide:h-[550px] wide:w-[550px] desktop:shadow-[0_0_40px_rgba(86,0,255,0.3)] wide:shadow-[0_0_60px_rgba(86,0,255,0.4)]">
                {/* Image with hover zoom effect */}
                <img
                    src={Alon}
                    alt="Alon Alush"
                    loading="lazy"
                    width={550}
                    height={550}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Animated pulse ring (optional decorative element) */}
            <div className="absolute inset-0 rounded-full border-2 border-[#5600ff]/30 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
});

Avatar.displayName = "Avatar";

export default Avatar;
