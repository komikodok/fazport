/* eslint-disable react/prop-types */
import { useState } from "react";
import Menu from "./Menu";

const Navbar = ({currentPage, setCurrentPage}) => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <nav id="navbar" className="bg-slate-900 w-full fixed shadow-md shadow-slate-950 rounded-xl z-50" data-home-url="#">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <strong className="flex items-center py-5 px-2 text-white font-sans font-bold text-2xl">
                            fazport
                        </strong>
                    </div>
            
                    <div className="hidden mx-auto md:flex">
                        <Menu menu="Home" currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        <Menu menu="About" currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        <Menu menu="Project" currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        <Menu menu="Contact" currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </div>
            
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenu(!mobileMenu)} className="cursor-pointer">
                            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {mobileMenu && (
                <div className="md:hidden">
                    <Menu menu="Home" currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <Menu menu="About" currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <Menu menu="Project" currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <Menu menu="Contact" currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
            )}
        </nav>
    )
};

export default Navbar;