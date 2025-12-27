import React from "react";
import Alon from "../../assets/images/alon-alush-resized.jpg";

export default function Avatar(): React.JSX.Element {

    return (
        <div className="relative">
            <div className="relative rounded-[250px] h-[250px] w-[250px] overflow-hidden desktop:rounded-[300px] desktop:h-[350px] desktop:w-[350px] wide:rounded-[300px] wide:h-[550px] wide:w-[550px]">
                <img src={Alon} alt={"Alon ALush"} className="w-full" />
            </div>
        </div>
    );
}
