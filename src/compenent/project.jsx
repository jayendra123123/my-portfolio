import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'River CleanUp',
    description: 'A full-stack app for organizing cleanup events with maps, email, and event storage.',
    live: 'https://clean-up-rw7s.onrender.com',
    code: 'https://github.com/jayendra123123/clean-up'
  },
  {
    title: 'Movie Review',
    description: 'React app that lets users search, view, and rate movies using TMDB API.',
    live: 'https://movie-review-omega-seven.vercel.app',
    code: 'https://github.com/jayendra123123/movie-review'
  },
  {
    title: 'Calculator',
    description: 'A simple, responsive calculator built with JavaScript, HTML and CSS.',
    live: 'https://jayendra123123.github.io/project1/',
    code: 'https://github.com/jayendra123123/project1'
  },
  {
    title: 'Notepad',
    description: 'Minimal notepad app that saves data using localStorage. Allows users to create, edit, and delete notes built with JavaScript, HTML and CSS.',
    live: 'https://jayendra123123.github.io/Note-Pad/',
    code: 'https://github.com/jayendra123123/Note-Pad'
  }
];

export default function Project() {
  return (
    <div className="bg-black text-white py-10 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-left"
        >
          <p className="text-[15px] text-[grey]">________ PROJECTS</p>
          <h1 className="text-[30px] mb-2">PROJECTS</h1>
          <p className="text-[40px] text-[#fc8019] leading-tight mt-[-10px]">
            <Typewriter
              words={['1 River CleanUp', '2 Movie Review', '3 Calculator', '4 Notepad']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </p>
        </motion.div>

        <br />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] text-white p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl text-[#fc8019] font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#fc8019] text-black px-3 py-2 rounded text-sm sm:text-base hover:bg-white transition"
                >
                  Live Demo
                </a>
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#fc8019] text-[#fc8019] px-3 py-2 rounded text-sm sm:text-base hover:bg-[#fc8019] hover:text-black transition"
                >
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
