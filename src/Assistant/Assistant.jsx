import { useEffect, useState } from "react";
import AssistantButton from "./AssistantButton";
import API_BASE_URL from "../config/apiConfig";
import BASE_URL from "../config/baseConfig";

const Assistant = () => {
    const [openAssistant, setOpenAssistant] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [token, setToken] = useState({});
    const [data, setData] = useState({});
    const [showAssistant, setShowAssistant] = useState(true);

    useEffect(() => {
        axios.get(`${BASE_URL}/csrf-token`, {withCredentials: true})
            .then((response) => setToken(response.data.csrfToken))
            .catch((error) => console.error(error));
    }, []);

    const handleClick = () => {
        setOpenAssistant(true);
        
        axios.get(`${API_BASE_URL}/assistant/`)
            .then((response) => setData(response?.data))
            .catch((error) => setData(error.response?.data));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`${API_BASE_URL}/assistant/`, {prompt: prompt}, 
            {
                headers: { "X-CSRFToken": token },
                withCredentials: true
            })
            .then((response) => setData(response?.data))
            .catch((error) => setData(error.response?.data));

        setShowAssistant(false);
        setTimeout(() => setShowAssistant(true), 300);

        setPrompt("");
    }

    const clearMessageHistory = async () => {
        setOpenAssistant(false);
        setData({});

        await axios.post(`${API_BASE_URL}/assistant/clear-history/`, {}, 
            {
                headers: { "X-CSRFToken": token },
                withCredentials: true
            })
            .then((response) => setData(response?.data))
            .catch((error) => setData(error.response?.data));
    }
    
    return (
        <>
            <AssistantButton handleClick={handleClick} openAssistant={openAssistant} />

            <div className={`fixed inset-0 ${!openAssistant && "hidden"} w-full h-full opacity-60 bg-black`}></div>
            <div className={`fixed bottom-0 right-1/2 ${openAssistant ? "translate-y-0" : "translate-y-full"} translate-x-1/2 w-full md:w-[90%] lg:w-[70%] h-[80%] transition-all duration-75 bg-gradient-to-b from-transparent to-slate-950`}>
                <button type="button" onClick={clearMessageHistory} className="absolute right-0 cursor-pointer rounded-full p-2 hover:rotate-90 transition-transform">❌</button>
                <form onSubmit={handleSubmit} className="absolute flex p-1 justify-end right-0 top-10 w-[60%] h-[40%]">
                    <button
                        type="submit"
                        className={`${prompt ? "opacity-100" : "opacity-0"} w-14 h-14 text-sm transform mx-5 border-2 border-slate-700 bg-slate-800 text-slate-200 font-bold rounded-xl p-2 shadow-[0_0_20px_#00f2ff] hover:shadow-[0_0_25px_#00f2ff] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out`}
                    >
                        Send
                    </button>
                    <textarea 
                        name="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="w-[50%] max-w-full h-10 max-h-full resize-none outline-none bg-white rounded-xl text-black text-center flex p-2 text-sm font-bold" 
                        placeholder="..."
                        style={{ scrollbarWidth: "none" }}
                    >
                    </textarea>
                </form>
                <div className="absolute bottom-0 w-full h-[40%] border-3 border-cyan-700 p-0.5 bg-gray-950 rounded-xl">
                    <div className="absolute flex -top-[22%] right-[2%] bg-gradient-to-r via-cyan-800 w-[30%] h-[22%]">
                        <strong className="m-auto text-xl text-slate-200">Assistant</strong>
                    </div>
                    <div className="flex w-full h-full">
                        <img 
                            src={data.image_url} 
                            className={`${showAssistant ? "translate-y-2 opacity-100" : "translate-y-full opacity-0"} pointer-events-none transition-all duration-300`} 
                            alt="" 
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false" />
                        <div className="flex text-center p-4 w-full h-full bg-gradient-to-r from-transparent via-cyan-950 to-transparent rounded-r-xl">
                            <p className="w-full h-full text-sky-100 font-bold break-words break-all overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
                                {data.generation}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Assistant;