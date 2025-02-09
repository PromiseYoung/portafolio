import React from "react";
import javascript from "../assets/portafolio/javascript.png";
import laravel from "../assets/portafolio/laravel.png";
import react from "../assets/portafolio/react.png";
import git from "../assets/portafolio/git.png";
import github from "../assets/portafolio/github.png";
import html from "../assets/portafolio/html.png";
import netcore from "../assets/portafolio/netcore.png";
import php from "../assets/portafolio/php.png";
import tailwind from "../assets/portafolio/tailwind.png";

function Experience() {
  const tecnologias = [
    { id: 1, src: javascript, title: "JavaScript", style: "shadow-yellow-400" },
    { id: 2, src: html, title: "CSS-HTML", style: "shadow-orange-400" },
    { id: 3, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 4, src: laravel, title: "Laravel", style: "shadow-red-600" },
    { id: 5, src: react, title: "React", style: "shadow-blue-500" },
    { id: 6, src: git, title: "Git", style: "shadow-orange-500" },
    { id: 7, src: netcore, title: ".NET CORE", style: "shadow-fuchsia-600" },
    { id: 8, src: tailwind, title: "TailwindCSS", style: "shadow-sky-400" },
    { id: 9, src: php, title: "PHP", style: "shadow-violet-700" },
  ];

  return (
    <section
      name="experiencia"
      className="bg-gradient-to-b from-gray-900 via-black to-black min-h-screen py-16 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold border-b-4 border-cyan-500 inline-block pb-2">
            Experiencia
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            Tecnologías con las que he trabajado.
          </p>
        </div>

        {/* Grid de Tecnologías */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {tecnologias.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`bg-gray-900 bg-opacity-80 shadow-lg rounded-xl p-6 text-center backdrop-blur-md transition-transform transform hover:scale-110 hover:shadow-2xl ${style}`}
            >
              <img src={src} alt={title} className="w-24 mx-auto mb-4" />
              <p className="text-xl font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
