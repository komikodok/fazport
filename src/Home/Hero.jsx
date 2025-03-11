import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
    const [text] = useTypewriter({
        words: [
            "AI & Web development enthusiast.",
            "Think. Code. Innovate.",
            "Passionate about building scalable and efficient systems.",
            "Driven by continuous learning and technological advancement",
        ],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 40,
    });

    return (
        <section className="bg-gradient-to-b from-gray-950 via-slate-950 to-slate-900 py-20">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center py-20">
                <div className="flex flex-row-reverse max-md:flex-col w-[95%] my-10 p-4 justify-center items-center">
                    <div className="group mb-10 border-4 border-slate-400 rounded-xl mx-auto h-64 md:h-72">
                        <div className="h-64 md:h-72 mx-auto group-hover:scale-105 group-focus:scale-105 -rotate-10 group-hover:rotate-0 group-focus:rotate-0 transition-all duration-300 rounded-xl border-4 border-blue-400 overflow-hidden">
                            <div className="backdrop-blur-3xl blur-xs group-hover:blur-none group-focus:blur-none">
                                <img 
                                    src={"b.png"} 
                                    className="group-hover:scale-x-[1] group-focus:scale-x-[1] scale-x-[-1] w-52 md:w-64 h-60 md:h-72 scale-120 transition-transform duration-900 object-cover mx-auto"
                                    draggable="false"
                                    onContextMenu={(e) => e.preventDefault()} 
                                    />
                            </div>
                        </div>
                    </div>
            
                    <div className="w-full mx-5 md:w-1/2">
                        <h1 className="text-4xl md:text-7xl font-bold text-white">Hi, I`m  
                            <span className="text-blue-400"> Faza Ihza Rosyada</span>
                        </h1>
                        <p className="mt-4 text-xl font-semibold md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-slate-300 to-blue-500">
                            {text}
                        
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;