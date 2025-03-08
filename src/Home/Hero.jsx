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
        deleteSpeed: 50,
    });

    return (
        <section className="bg-gradient-to-b from-gray-950 via-slate-950 to-slate-900 py-20">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center py-20">
                <div className="flex flex-row-reverse max-md:flex-col w-[95%] my-10 p-4 justify-center items-center">
                    <div className="mb-8 mx-auto bg-contain">
                        <img src={null} className="w-52 md:w-64 h-60 md:h-72 mx-auto rounded-xl border-4 border-blue-400" />
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