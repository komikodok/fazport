/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AssistantButton = ({handleClick, openAssistant}) => {
    // const [mouseOver, setMouseOver] = useState(false);
    const [moodAssistant, setMoodAssistant] = useState([]);

    useEffect(() => {
      axios.get(`${API_BASE_URL}/assistant/mood`)
        .then((response) => setMoodAssistant(response?.data))
        .catch((error) => console.error(error))
    }, []);

    const moodNormal = moodAssistant.filter((item) => item.mood === "normal")[0]

    return (
        <button className={`fixed cursor-pointer w-14 h-14 bottom-0 ring-0 md:left-10 rounded-full m-10 ${openAssistant ? "translate-y-30" : "translate-y-0"} transform transition-transform ease-out duration-400 md:duration-200 overflow-hidden`}>
            <img 
                src={`${moodNormal?.image_url}`}
                onClick={handleClick}
                // onMouseOver={() => setMouseOver(true)} 
                // onMouseLeave={() => setMouseOver(false)}
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
            />
        </button>
    )
};

export default AssistantButton;