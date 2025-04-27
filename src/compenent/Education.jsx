import React from 'react';

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science',
    institution: 'vignan institute of information technology',
    year: '2022 - 2026',
  },
  {
    degree: 'Senior Secondary (XII)',
    field: 'Maths, Physics, and Chemistry (MPC)',
    institution: 'Sri Chaitanya Junior College',
    year: '2020 - 2022',
  },
  {
    degree: 'Secondary (X)',
    field: 'General',
    institution: 'Bhashyam High School',
    year: '2018 - 2020',
  }
];

export default function Education() {
  return (
    <div className="bg-black text-white py-10 px-4 sm:px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col justify-center items-start text-left mb-12">
          <p className="text-xs sm:text-sm text-gray-500 mb-1">________ EDUCATION</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">EDUCATION</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#fc8019]">
                Journey of learning — because Learning never stops...
          </p>
        </div>
        <div className="relative border-l-2 border-[#fc8019] ml-4">
          {education.map((edu, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute w-4 h-4 bg-[#fc8019] rounded-full mt-1.5 -left-2 border border-white"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#fc8019]">{edu.degree}</h3>
              <p className="text-sm sm:text-base text-gray-400">{edu.field}</p>
              <p className="text-sm sm:text-base text-gray-400">{edu.institution}</p>
              <p className="text-xs sm:text-sm text-gray-500">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}