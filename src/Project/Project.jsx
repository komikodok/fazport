import { useEffect, useState } from "react"
import ProjectDetail from "./ProjectDetail";

const Project = () => {
    const [openProjectDetail, setOpenProjectDetail] = useState(false);
    const [projectData, setProjectData] = useState([]);
    const [projectSlug, setProjectSlug] = useState("");

    useEffect(() => {
        setOpenProjectDetail(false);

        axios.get("http://localhost:8000/api/projects")
            .then((response) => {
                setProjectData(response.data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            {!openProjectDetail && (
                <div className="bg-gradient-to-t from-slate-950 to-slate-900 py-15 p-3 max-w-full grid grid-cols-1 gap-8">
                    <div className="py-20">
                        <h1 className="m-7 mb-14 font-semibold text-white text-3xl">
                            My <span className="text-blue-400">Project</span>
                            <div className="w-[400px] h-[5px] bg-gray-800 bg-gradient-to-r from-slate-300 rounded-full"></div>
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-self-center">
                            {projectData.map((data, index) => (
                                <div key={index} className="flex flex-col justify-between w-80 h-80 border-x-2 border-slate-600 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl shadow-2xl shadow-slate-900 hover:scale-105 transition-all duration-700">
                                    <div className="border-x-2 border-slate-600 flex w-72 h-40 overflow-hidden rounded-3xl bg-cover place-self-center my-5">
                                        <img className="w-full h-full" src={data.image_url} alt="" />
                                    </div>
                                    <p className="text-white text-center text-lg mx-auto w-72">{data.title}</p>
                                    <div className="my-5 grid grid-cols-2 gap-3">
                                        <div 
                                            onClick={() => {
                                                setOpenProjectDetail(true);
                                                setProjectSlug(data.slug);
                                            }} 
                                            className="border-x-2 border-slate-200 hover:border-slate-500 rounded-xl place-self-start mx-6 overflow-hidden">
                                                <span className="bg-slate-400 hover:bg-slate-700 active:bg-slate-800 text-slate-950 hover:text-blue-200 text-sm font-bold flex items-center justify-center p-3 h-8">Read More</span>
                                        </div>
                                        <a href="http://github.com/komikodok" className="border-x-2 border-slate-200 hover:border-slate-500 rounded-xl place-self-end mx-6 overflow-hidden">
                                            <span className="bg-slate-400 hover:bg-slate-700 active:bg-slate-800 text-slate-950 hover:text-blue-200 text-sm font-bold flex items-center justify-center p-3 h-8">Github</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {openProjectDetail && (
                <ProjectDetail projectSlug={projectSlug} setProjectSlug={setProjectSlug}/>
            )}  
        </>
    )
}

export default Project