import { useEffect, useState } from "react";
import AssistantButton from "./AssistantButton";
import API_BASE_URL from "../config/apiConfig";

const Assistant = () => {
    const [openAssistant, setOpenAssistant] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/assistant`)
            .then((response) => setData(response?.data))
            .catch((error) => setData(error.response?.data))
    });

    const handleSubmit = () => {
        axios.post(`${API_BASE_URL}/api/assistant`, {prompt: prompt}, {withCredentials: true})
            .then((response) => setData(response?.data))
            .catch((error) => setData(error.response?.data))
    }
    return (
        <>
            <div className={`fixed inset-0 ${!openAssistant && "hidden"} w-full h-full opacity-60 bg-black`}></div>
            <div className={`fixed bottom-0 right-1/2 ${openAssistant ? "translate-y-0" : "translate-y-full"} translate-x-1/2 w-full md:w-[90%] lg:w-[70%] h-[80%] transition-all duration-75 bg-gradient-to-b from-transparent to-slate-950`}>
                <button type="button" onClick={() => setOpenAssistant(false)} className="absolute right-0 cursor-pointer rounded-full p-2 hover:rotate-90 transition-transform">❌</button>
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
                        <img src={data.image_url} className={`${openAssistant ? "translate-y-1" : "translate-y-full"} trnasition-all duration-300`} alt="image" />
                        <div className="flex text-center p-4 w-full h-full bg-gradient-to-r from-transparent via-cyan-950 to-transparent rounded-r-xl">
                            <p className="w-full h-full text-sky-100 font-bold break-words break-all overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
                                {data.generation}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <AssistantButton openAssistant={openAssistant} setOpenAssistant={setOpenAssistant}/>

        </>
    )
};

export default Assistant;

            // <div className={`fixed ${!openAssistant && "hidden"} inset-0 bg-slate-900 opacity-60 z-30`}>
            //     <div className="absolute bg-transparent bg-opacity-80 bg-gradient-to-b from-transparent via-slate-950 to-slate-950 bottom-0 translate-x-1/2 right-1/2 w-full lg:w-[70%] h-3/4 z-40">
            //         <form onSubmit={handleSubmit} className="absolute flex flex-col top-[8%] right-0 w-[90%] h-[40%] z-50">
            //             <button type="button" onClick={() => setOpenAssistant(false)} className="absolute right-0 -top-[40%] rounded-full p-2 bg-gradient-to-tr from-gray-950 via-gray-800 to-gray-600 border-2 border-black hover:rotate-90 transition-transform">❌</button>
            //             <textarea 
            //             name="prompt" 
            //             type="text"
            //             placeholder=". . . ?"
            //             rows="1"
            //             className="absolute resize-none placeholder:text-sm text-center right-[1%] w-[45%] h-auto max-h-full bg-slate-200 text-slate-950 font-bold rounded-2xl shadow-md shadow-black p-3 focus:ring-0 border border-slate-200 focus:border-slate-200"
            //             style={{scrollbarWidth: "none"}}></textarea>
            //             <button
            //                 type="submit"
            //                 className="absolute disabled:opacity-0 opacity-100 right-[55%] transform translate-x-1/2 h-auto border-2 border-slate-700 bg-slate-800 text-slate-200 font-bold rounded-xl p-3 shadow-[0_0_20px_#00f2ff] hover:shadow-[0_0_25px_#00f2ff] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out"
            //                 disabled>
            //                 Send
            //             </button>
            //         </form>
            //         <div className="absolute flex bottom-0 bg-black bg-opacity-30 lg:bg-opacity-5 bg-gradient-to-r from-transparent via-black to-transparent w-full h-[40%]">
            //             <div className="flex w-full justify-between">
            //                 {/* <!-- Avatar --> */}
            //                     <div className="h-full">
            //                         <div className="absolute w-auto h-[35vh] -left-3 -bottom-1">
            //                             <img className={`w-full h-full transform ${openAssistant ? "translate-y-0" : "translate-y-full"} ease-out transition-transform duration-300`} src={"image0.png" || null} alt="" />
            //                         </div>
            //                     </div>
            //                 {/* <!-- Assistant Bubble's Chat --> */}
            //                 <p className="text-md text-center ml-auto text-slate-200 w-[70%] md:w-[80%] h-full p-4 md:px-7 overflow-y-scroll break-words break-all whitespace-normal" style={{scrollbarWidth: "none"}}></p>
            //             </div>
            //             <div className="absolute flex -top-[22%] right-[2%] bg-gradient-to-r via-cyan-800 w-[30%] h-[22%]">
            //                 <strong className="m-auto text-xl text-slate-200">Assistant</strong>
            //             </div>
            //         </div>
            //     </div>
            // </div>