const MySkills = () => {
    return (
        // <!-- My Skills -->
        <section className="bg-gradient-to-t from-slate-950 to-slate-900 py-20">
            <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-white text-center mb-14">
                My <span className="text-blue-400">Skills</span>
            </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 w-full p-10">
            {/* <!-- Programming Language Box --> */}
            <div className="w-full h-full p-6">
                <div className="flex text-3xl mb-6">
                    <strong className="mr-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-300 to-blue-500">Programming Language</strong>
                </div>
                {/* <!-- Python --> */}
                <div className="flex p-2">
                    <div className="bg-slate-500 w-28 flex flex-col rounded-md py-3">
                        <i className="devicon-python-plain text-5xl m-auto text-slate-950"></i>
                        <h2 className="text-slate-950 m-auto">90%</h2>
                    </div>
                    <div className="w-full">
                        <h2 className="text-slate-300 text-2xl m-3">Python</h2>
                        <div className="bg-slate-300 border-2 border-slate-300 h-3.5 m-3 rounded-full">
                        <div className="bg-gray-900 h-full w-[90%] rounded-full"></div>
                        </div>
                    </div>
                </div>
                {/* <!-- PHP --> */}
                <div className="flex p-2">
                    <div className="bg-slate-500 w-28 flex flex-col rounded-md py-3">
                        <i className="devicon-php-plain text-5xl m-auto text-slate-950"></i>
                        <h2 className="text-slate-950 m-auto">80%</h2>
                    </div>
                    <div className="w-full">
                        <h2 className="text-slate-300 text-2xl m-3">PHP</h2>
                        <div className="bg-slate-300 border-2 border-slate-300 h-3.5 m-3 rounded-full">
                        <div className="bg-gray-900 h-full w-[80%] rounded-full"></div>
                        </div>
                    </div>
                </div>
                {/* <!-- Javascript --> */}
                <div className="flex p-2">
                    <div className="bg-slate-500 w-28 flex flex-col rounded-md py-3">
                        <i className="devicon-javascript-plain text-5xl m-auto text-slate-950"></i>
                        <h2 className="text-slate-950 m-auto">80%</h2>
                    </div>
                    <div className="w-full">
                        <h2 className="text-slate-300 text-2xl m-3">Javascript</h2>
                        <div className="bg-slate-300 border-2 border-slate-300 h-3.5 m-3 rounded-full">
                        <div className="bg-gray-900 h-full w-[80%] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Framework box --> */}
            <div className="w-full h-full p-6 from-slate-950 via-gray-900 to-slate-950  rounded-xl">
                <div className="flex text-3xl mb-6">
                <strong className="mr-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-300 to-blue-500">Framework</strong>
                </div>
                {/* <!-- Tensorflow --> */}
                <div className="flex p-2">
                    <div className="bg-slate-500 w-28 flex flex-col rounded-md py-3">
                        <i className="devicon-tensorflow-original text-5xl m-auto text-slate-950"></i>
                        <h2 className="text-slate-950 m-auto">85%</h2>
                    </div>
                    <div className="w-full">
                        <h2 className="text-slate-300 text-2xl m-3">Tensorflow (Machine Learning)</h2>
                        <div className="bg-slate-300 border-2 border-slate-300 h-3.5 m-3 rounded-full">
                        <div className="bg-gray-900 h-full w-[85%] rounded-full"></div>
                        </div>
                    </div>
                </div>
                {/* <!-- Langchain --> */}
                <div className="flex p-2">
                    <div className="bg-slate-500 w-28 flex flex-col rounded-md py-3">
                        <i className="fas fa-link text-5xl m-auto text-slate-950"></i>
                        <h2 className="text-slate-950 m-auto">90%</h2>
                    </div>
                    <div className="w-full">
                        <h2 className="text-slate-300 text-2xl m-3">Langchain (Large Language Model)</h2>
                        <div className="bg-slate-300 border-2 border-slate-300 h-3.5 m-3 rounded-full">
                        <div className="bg-gray-900 h-full w-[90%] rounded-full"></div>
                        </div>
                    </div>
                </div>
                {/* <!-- Django --> */}
                <div className="flex p-2">
                    <div className="bg-slate-500 w-28 flex flex-col rounded-md py-3">
                        <i className="devicon-django-plain-wordmark text-5xl m-auto text-slate-950"></i>
                        <h2 className="text-slate-950 m-auto">90%</h2>
                    </div>
                    <div className="w-full">
                        <h2 className="text-slate-300 text-2xl m-3">Django (Web Development)</h2>
                        <div className="bg-slate-300 border-2 border-slate-300 h-3.5 m-3 rounded-full">
                        <div className="bg-gray-900 h-full w-[90%] rounded-full"></div>
                        </div>
                    </div>
                </div>
                {/* <!-- FastAPI --> */}
                <div className="flex p-2">
                    <div className="bg-slate-500 w-28 flex flex-col rounded-md py-3">
                        <i className="devicon-fastapi-plain text-5xl m-auto text-slate-950"></i>
                        <h2 className="text-slate-950 m-auto">80%</h2>
                    </div>
                    <div className="w-full">
                        <h2 className="text-slate-300 text-2xl m-3">FastAPI (Web Development)</h2>
                        <div className="bg-slate-300 border-2 border-slate-300 h-3.5 m-3 rounded-full">
                        <div className="bg-gray-900 h-full w-[80%] rounded-full"></div>
                        </div>
                    </div>
                </div>
                {/* <!-- Laravel --> */}
                <div className="flex p-2">
                    <div className="bg-slate-500 w-28 flex flex-col rounded-md py-3">
                        <i className="devicon-laravel-original text-5xl m-auto text-slate-950"></i>
                        <h2 className="text-slate-950 m-auto">80%</h2>
                    </div>
                    <div className="w-full">
                        <h2 className="text-slate-300 text-2xl m-3">Laravel (Web Development)</h2>
                        <div className="bg-slate-300 border-2 border-slate-300 h-3.5 m-3 rounded-full">
                        <div className="bg-gray-900 h-full w-[80%] rounded-full"></div>
                        </div>
                    </div>
                </div>
                {/* <!-- React JS --> */}
                <div className="flex p-2">
                    <div className="bg-slate-500 w-28 flex flex-col rounded-md py-3">
                        <i className="devicon-react-original text-5xl m-auto text-slate-950"></i>
                        <h2 className="text-slate-950 m-auto">85%</h2>
                    </div>
                    <div className="w-full">
                        <h2 className="text-slate-300 text-2xl m-3">React JS (Web Development)</h2>
                        <div className="bg-slate-300 border-2 border-slate-300 h-3.5 m-3 rounded-full">
                        <div className="bg-gray-900 h-full w-[85%] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
};

export default MySkills;