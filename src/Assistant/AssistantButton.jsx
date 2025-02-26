import { useState } from "react";

const AssistantButton = () => {
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <button className="fixed cursor-pointer w-14 h-14 bottom-0 ring-0 md:left-10 rounded-full m-10 translate-y-0 transform transition-transform ease-out duration-500 md:duration-300 overflow-hidden">
            <img 
                src={`${mouseOver ? "image1.png" : "image0.png"}`} 
                onMouseOver={() => setMouseOver(true)} 
                onMouseLeave={() => setMouseOver(false)} 
            />
        </button>
    )
};

export default AssistantButton;