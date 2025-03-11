/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ProjectDetail = ({projectData, projectSlug, setProjectSlug}) => {
    const [projectDetail, setProjectDetail] = useState({});

    useEffect(() => {
        axios.get(`${API_BASE_URL}/projects/${projectSlug}`)
            .then((response) => {
                setProjectDetail(response.data);
            })
            .catch((error) => console.error(error));
    }, [projectSlug]);

    return (
        <section className="bg-gradient-to-t from-slate-950 to-slate-900 py-15 lg:p-3 w-full h-full pt-24 pb-60 md:pb-64">
            <div className="border-x-4 border-y-2 border-gray-950 bg-gradient-to-r from-gray-900 to-gray-950 rounded-xl max-sm:p-8 p-10 justify-self-center mx-10 shadow-2xl shadow-gray-950">
                <h1 className="text-center text-slate-200 md:text-3xl text-2xl font-semibold -mx-5 mb-7">
                    <span className="underline">{projectDetail.title}</span>
                </h1>
                <p className="text-justify text-slate-300 first-letter:text-8xl first-letter:float-left first-letter:mr-3 first-line:tracking-widest first-line:uppercase">{projectDetail.prefix}</p>
                <div className="flex rounded-xl justify-self-center w-auto h-auto bg-contain my-7">
                    <img className="object-contain border-2 border-slate-950 w-[75%] h-full mx-auto rounded-3xl" src={projectDetail.image_url || null} />
                </div>
                <p className="text-justify text-slate-300">{projectDetail.suffix}</p>
            </div>

            <ProjectCard projectData={projectData} setProjectSlug={setProjectSlug} />

        </section>
    )
};

export default ProjectDetail;