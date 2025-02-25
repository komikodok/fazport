const Hero = () => {
    return (
        <section id="hero" className="bg-gradient-to-b from-gray-950 via-slate-950 to-slate-900 py-20">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center py-20">
                <div className="flex flex-row-reverse max-md:flex-col w-[95%] my-10 p-4 justify-center items-center">
                    <div className="mb-8 mx-auto bg-contain">
                        <img src="" className="w-52 md:w-64 h-60 md:h-72 mx-auto rounded-xl border-4 border-blue-400" />
                    </div>
            
                    <div className="w-full mx-5 md:w-1/2">
                        <h1 className="text-4xl md:text-7xl font-bold text-white">Hi, I`m  
                            <span className="text-blue-400"> Faza Ihza Rosyada</span>
                        </h1>
                        <p className="mt-4 text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-slate-300 to-blue-500">AI & Web development enthusiast</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;