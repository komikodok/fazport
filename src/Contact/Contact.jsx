const Contact = () => {
    const handleSubmit = () => {
        //
    };
    return (
        // <!-- Contact section -->
        <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20">
            <div className="mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-white text-center mb-12">
                    Contact <span className="text-blue-400">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* <!-- Contact Box --> */}
                    <div className="bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950 mx-auto rounded-xl shadow-md shadow-black w-[90%] flex-col p-2">
                        <div className="text-3xl flex p-4">
                            <strong className="mr-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-300 to-blue-500">Let’s make collaborations!</strong>
                        </div>
                        <form className="grid grid-cols-2 gap-2" onSubmit={handleSubmit}>
                                {/* <!-- First Name --> */}
                                <div className="flex flex-col mx-3 my-2 gap-2">
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" name="first_name" id="first_name" 
                                            className="text-slate-200 w-full mx-auto p-2 outline-none font-semibold bg-zinc-950 rounded-md focus:border-slate-300 focus:ring-2 text-sm" 
                                            placeholder="Enter your first name..." />
                                </div>
                                {/* <!-- Last Name --> */}
                                <div className="flex flex-col mx-3 my-2 gap-2">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" name="last_name" id="last_name" 
                                            className="text-slate-200 w-full mx-auto p-2 outline-none font-semibold bg-zinc-950 rounded-md focus:border-slate-300 focus:ring-2 text-sm" 
                                            placeholder="Enter your last name..." />
                                </div>
                                {/* <!-- Email --> */}
                                <div className="flex flex-col mx-3 my-2 gap-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" name="email" id="email" 
                                            className="text-slate-200 w-full mx-auto p-2 outline-none font-semibold bg-zinc-950 rounded-md focus:border-slate-300 focus:ring-2 text-sm" 
                                            placeholder="Enter your email address..." />
                                </div>
                                {/* <!-- Phone Number --> */}
                                <div className="flex flex-col mx-3 my-2 gap-2">
                                    <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="text" name="phone_number" id="phone_number" 
                                            className="text-slate-200 w-full mx-auto p-2 outline-none font-semibold bg-zinc-950 rounded-md focus:border-slate-300 focus:ring-2 text-sm" 
                                            placeholder="Phone Number..." />
                                </div>
                                {/* <!-- Message --> */}
                                <div className="flex flex-col mx-3 col-span-2 gap-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea name="message" id="message" 
                                                className="text-slate-200 bg-zinc-950 rounded-md p-2 outline-none font-semibold resize-none focus:border-slate-300 focus:ring-2 text-sm w-full h-52 col-span-2" 
                                                placeholder="Message..."></textarea>
                                </div>
                            {/* <!-- Submit Button --> */}
                            <button className="group bg-gradient-to-r from-slate-400 via-slate-400 to-slate-500 hover:from-slate-500 hover:via-slate-400 hover:to-slate-400 rounded-3xl flex w-[90%] h-12 m-4" type="submit">
                                <strong className="text-gray-800 group-hover:text-gray-950 text-lg fond-bold m-auto">Send Message</strong>
                            </button>
                        </form>
                    </div>
                    {/* <!-- My Contact --> */}
                    <div className="flex flex-col w-[90%] h-52 md:h-full max-md:my-16 justify-center items-center mx-auto">
                        <div className="">
                            <h2 className="font-bold text-2xl sm:text-lg lg:text-2xl m-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-slate-300 to-blue-300"><i className="devicon-google-plain"></i> test@gmail.com</h2>
                            <h2 className="font-bold text-2xl sm:text-lg lg:text-2xl m-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-slate-300 to-blue-300">
                                <i className="fab fa-whatsapp"></i>
                                +62 85123456789
                            </h2>
                            <h2 className="font-bold text-2xl sm:text-lg lg:text-2xl m-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-slate-300 to-blue-300">
                                <i className="fab fa-github"></i>
                                http://github.com/komikodok
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact