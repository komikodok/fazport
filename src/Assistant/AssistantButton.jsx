/* eslint-disable react/prop-types */
import { useState } from "react";
import API_BASE_URL from "../config/apiConfig";

const AssistantButton = ({handleClick, openAssistant, setOpenAssistant}) => {
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <button className={`fixed cursor-pointer w-14 h-14 bottom-0 ring-0 md:left-10 rounded-full m-10 ${openAssistant ? "translate-y-30" : "translate-y-0"} transform transition-transform ease-out duration-400 md:duration-200 overflow-hidden`}>
            <img 
                src={`${mouseOver ? "image1.png" : "image0.png"}`}
                onClick={handleClick}
                onMouseOver={() => setMouseOver(true)} 
                onMouseLeave={() => setMouseOver(false)} 
            />
        </button>
    )
};

export default AssistantButton;