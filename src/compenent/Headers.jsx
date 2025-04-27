import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import Home from './Home';
import Project from './project';
import Education from './Education';
import Contact from './Contact';
import Footer from './footer';

export default function Headers() {
    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => setToggle(prev => !prev);

    return (
        <>
            <div
                className={`md:hidden fixed top-[60px] right-0 w-full overflow-hidden z-40
                    transition-all duration-500 ease-in-out
                    ${toggle ? 'h-[20vh] opacity-100' : 'h-0 opacity-0'}
                `}
            >
                <div
                    className="w-full h-full bg-white/10 backdrop-blur-md flex justify-center items-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    <ul className="flex flex-col gap-2 text-base font-semibold text-white text-center">
                        <li className="hover:text-[#fc8019]"><a href="#home">Home</a></li>
                        <li className="hover:text-[#fc8019]"><a href="#projects">Projects</a></li>
                        <li className="hover:text-[#fc8019]"><a href="#education">Education</a></li>
                        <li className="hover:text-[#fc8019]"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <header className="p-[15px] bg-black shadow-sm text-white fixed top-0 w-full z-50">
                <div className="max-w-[1200px] mx-auto flex items-center">
                    <div className="text-lg font-bold">| JAYENDRA</div>

                    <div className="ml-auto md:hidden">
                        {toggle ? (
                            <RxCross2
                                size={24}
                                onClick={toggleMenu}
                                className="text-[#fc8019] cursor-pointer"
                            />
                        ) : (
                            <FiAlignJustify
                                size={24}
                                onClick={toggleMenu}
                                className="text-[#fc8019] cursor-pointer"
                            />
                        )}
                    </div>
                    <ul className="hidden md:flex gap-10 ml-auto text-[18px] font-semibold cursor-pointer">
                        <li className="hover:text-[#fc8019]"><a href="#home">Home</a></li>
                        <li className="hover:text-[#fc8019]"><a href="#projects">Projects</a></li>
                        <li className="hover:text-[#fc8019]"><a href="#education">Education</a></li>
                        <li className="hover:text-[#fc8019]"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </header>
            <main className="mt-20 scroll-smooth">
                <section id="home">
                    <Home />
                </section>
                <section id="projects">
                    <Project />
                </section>
                <section id="education">
                    <Education />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
            <Footer/>
        </>
    );
}
