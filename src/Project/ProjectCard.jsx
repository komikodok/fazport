/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

const ProjectCard = ({projectData, setProjectSlug}) => {
    const [openProjectCard, setOpenProjectCard] = useState(false);
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Geser ke kiri
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Geser ke kanan
        }
    };
    return (
        <>
            <button onClick={() => setOpenProjectCard(true)} className={`${openProjectCard && "opacity-0"} cursor-pointer flex fixed justify-center items-center shadow-2xl shadow-gray-950 bottom-0 right-20 translate-x-10 w-12 h-12 rounded-full mb-10 transition-transform duration-300 hover:scale-110 hover:rotate-45 active:rotate-180`}>
                <span className="text-white text-3xl transform transition-transform duration-500 ease-in-out group-hover:rotate-180">📋</span>
            </button>

            <div className={`fixed bottom-0 left-1/2 w-[480px] transition-transform -translate-x-1/2 ${openProjectCard ? "translate-y-0" : "translate-y-full"} md:mt-3 lg:mt-8 transition-all duration-700 ease-out md:pb-4`}>

                <button onClick={() => setOpenProjectCard(false)} className="absolute cursor-pointer w-7 -right-2 -top-2 rounded z-10 hover:scale-90 transition-all duration-500">❌</button>
                <button onClick={scrollLeft} className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded z-10">‹</button>
                <button onClick={scrollRight} className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded z-10">›</button>
                
                <div ref={sliderRef} className="grid grid-flow-col auto-cols-max snap-x scroll-smooth overflow-x-scroll" style={{ scrollbarWidth: "none" }}>
                    {projectData.map((data, index) => (
                        <div key={index} onClick={() => setProjectSlug(data.slug)} className="w-60 h-60 border-x-2 border-slate-600 bg-slate-900 overflow-hidden rounded-3xl scale-90 hover:scale-100 transition-all duration-700">
                            <div className="border-x-2 border-slate-600 flex w-52 h-36 overflow-hidden rounded-3xl place-self-center my-3">
                                <img className="w-full h-full object-cover object-center" src={data.image_url || null} alt="" />
                            </div>
                            <p className="text-white text-center text-sm mx-auto w-56">{data.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default ProjectCard;