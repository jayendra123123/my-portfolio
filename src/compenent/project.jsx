import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'River CleanUp',
    description: 'A full-stack app for organizing cleanup events with maps, email notifications, and event storage.',
    live: 'https://clean-up-rw7s.onrender.com',
    code: 'https://github.com/jayendra123123/clean-up',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: '/images/cleanup.png',
    logo: 'https://sdmntprcentralus.oaiusercontent.com/files/00000000-7120-61f5-bb1a-e09107301d4e/raw?se=2025-07-12T20%3A04%3A54Z&sp=r&sv=2024-08-04&sr=b&scid=8fd1ba0b-d66b-50bc-98bd-da915ad9e029&skoid=5cab1ff4-c20d-41dc-babb-df0c2cc21dd4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-12T00%3A50%3A59Z&ske=2025-07-13T00%3A50%3A59Z&sks=b&skv=2024-08-04&sig=xPWF6WfNubRQOmfre4itvtUChd80i8pq/TizU0JUgt0%3D'
  },
  {
    title: 'Movie Review',
    description: 'React app that lets users search, view, and rate movies using TMDB API.',
    live: 'https://movie-review-omega-seven.vercel.app',
    code: 'https://github.com/jayendra123123/movie-review',
    tech: ['React', 'TMDB API', 'CSS'],
    image: 'movie-review.png',
    logo: 'https://i.pinimg.com/736x/ea/8d/11/ea8d11f1ffc6355b8a440106ce61d0f3.jpg'
  },
  {
    title: 'Calculator',
    description: 'Responsive calculator built using vanilla JavaScript, HTML, and CSS.',
    live: 'https://jayendra123123.github.io/project1/',
    code: 'https://github.com/jayendra123123/project1',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: 'calculater.png',
    logo: 'https://as2.ftcdn.net/jpg/02/22/46/27/1000_F_222462765_0UzKwPpeJuPiCjXJX1nrCmHGDx2wFNA6.jpg'
  },
  {
    title: 'Notepad',
    description: 'Minimal notepad app using localStorage. Users can create, edit, and delete notes.',
    live: 'https://jayendra123123.github.io/Note-Pad/',
    code: 'https://github.com/jayendra123123/Note-Pad',
    tech: ['JavaScript', 'HTML', 'CSS', 'localStorage'],
    image: 'notepad.png',
    logo: 'https://thumbs.dreamstime.com/b/to-do-list-icon-flat-style-document-checklist-vector-illustration-white-isolated-background-notepad-check-mark-business-171865694.jpg'
  }
];

export default function ProjectShowcase() {
  const [selected, setSelected] = useState(0);
  const proj = projects[selected];

  return (
    <>
      <section className="bg-black text-white py-10 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left: List with transparent background */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg overflow-y-auto max-h-[80vh] pr-4 border border-gray-700">
            <h3 className="text-xl font-bold mb-6 text-[#fc8019]">Projects</h3>
            {projects.map((p, i) => (
              <motion.div
                key={i}
                onClick={() => setSelected(i)}
                whileHover={{ scale: 1.02 }}
                className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 mb-5 ${i === selected ? 'border-2 border-[#fc8019]' : 'border border-gray-700'}`}
              >
                <div className="flex flex-col sm:flex-row bg-black/20 p-4 gap-4 rounded-lg">
                  <div className="relative w-full sm:w-60 h-60">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <img
                      src={p.logo}
                      alt={`${p.title} Logo`}
                      className="absolute top-2 left-2 w-8 h-8 object-contain bg-white rounded-full p-1"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-[#fc8019]">{p.title}</h3>
                    <p className="text-sm text-gray-300 mt-2 line-clamp-3">{p.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Details more efficient */}
          <div className="space-y-6 bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700">
            <motion.img
              key={proj.image}
              src={proj.image}
              alt={proj.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-80 object-cover rounded-lg border border-gray-700"
            />
            <div className="flex items-center gap-3">
              <img src={proj.logo} alt="Logo" className="w-10 h-10 object-contain bg-white rounded-full p-1 border border-[#fc8019]" />
              <h2 className="text-2xl font-bold text-[#fc8019]">{proj.title}</h2>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((tech, i) => (
                <span key={i} className="bg-[#2e2e2e] text-white text-xs px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#fc8019] text-black px-4 py-2 rounded text-sm hover:bg-white"
              >
                <ExternalLink size={16} /> Live
              </a>
              <a
                href={proj.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[#fc8019] text-[#fc8019] px-4 py-2 rounded text-sm hover:bg-[#fc8019] hover:text-black"
              >
                <Github size={16} /> Code
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}