import React from "react";

export default function Contact() {
    return(
        <section id="contact" className="relative">
        <div className="container px-5 py-10 mx-auto flex flex-wrap flex-col items-center">
            <h2 className="sm:text-4xl text-3xl text-center font-medium title-font mb-4 text-white">
                Connect With Me
            </h2>
                <div className="w-full bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=Waterloo,+Canada&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                Waterloo <br />
                                Ontario, ON , N2L 6G9
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-400 leading-relaxed">
                                isha2830733@gmail.com
                            </a>
                            <h2>
                                <a href="https://www.linkedin.com/in/isha-sharma-se/" target="_blank" class="text-indigo-400 leading-relaxed">LinkedIn</a>
                                &nbsp;||&nbsp;
                                <a href="https://github.com/ish100" target="_blank" class="text-indigo-400 leading-relaxed">Github</a>
                            </h2>
                            <button className="mt-4 bg-indigo-500 text-white  px-6 rounded hover:bg-indigo-600">
                                <a href="https://drive.google.com/file/d/1Xm_wTaUZ5kaq-y9_Lf9RmqKkcyu6-gUR/view?usp=sharing" target="_blank" download>

                                    Download Resume
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
