import { useEffect, useState } from "react"

const About = () => {
    const [projectData, setProjectData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/projects")
            .then((response) => {
                setProjectData(response.data.slice(0, 2));
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        // <!-- Contact section -->
        <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20">
            <div className="mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-white text-center mb-12">
                    About <span className="text-blue-400">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    {/* <!-- Profile Box --> */}
                    <div className="bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950 mx-auto rounded-xl shadow-md shadow-black w-[90%] flex-col p-2">
                        <div className="flex flex-col p-4">
                            <strong className="mr-auto text-transparent text-3xl  bg-clip-text bg-gradient-to-r from-blue-400 via-slate-300 to-blue-500">Faza Ihza Rosyada</strong>
                            <h2 className="mr-auto text-xl text-blue-300">Pekalongan, Indonesia</h2>
                        </div>
                        <p className="text-slate-300 px-5 py-2"> 
                            &rdquo;I am an enthusiast with expertise in programming, particularly in web development and artificial intelligence (AI). I have experience working on projects utilizing modern technologies such as 
                            <strong className="text-blue-400"> Langchain</strong>, <strong className="text-blue-400">FastAPI</strong>, and <strong className="text-blue-400">Laravel</strong>&rdquo;.
                        </p>
                        <ul className="text-blue-300 list-disc list-inside px-5 py-2">
                            <li className="">komikodok.github.io/fazport</li>
                            <li className="">https://github.com/komikodok</li>
                            <li className="">+62 85974850272</li>
                            <li className="">Pekalongan, Indonesia</li>
                            <li className="">fazaihzarosyada@gmail.com</li>
                        </ul>
                    </div>
                    {/* <!-- Project Box --> */}
                    <div className="bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950 mx-auto rounded-xl shadow-md shadow-black w-[90%] flex-col p-2">
                        <div className="text-3xl flex p-4">
                            <strong className="mr-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-300 to-blue-500">Best Project</strong>
                        </div>
                        <div className="flex flex-col p-2">
                            {projectData.map((item, index) => (
                                <div key={index}>
                                    <a>
                                        <strong className="mr-auto text-xl px-4 text-blue-300">{item.title}</strong>
                                    </a>
                                    <p className="text-slate-300 px-5 pt-1 pb-3 indent-8">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;