import React from "react";
import bot from "../assets/portafolio/bot.jpeg";
import node from "../assets/portafolio/nodejs-ar21.png";
import rickymorty from "../assets/portafolio/rickmorty.png";
import snake from "../assets/portafolio/snake.jpg";
import weather from "../assets/portafolio/weather.png";
import car from "../assets/portafolio/carrito.png";

const Portafolio = () => {
  const portafolio = [
    { id: 1, src: bot, title: "BotGame", demo: "#", code: "#" },
    { id: 2, src: node, title: "App Votes", demo: "#", code: "#" },
    { id: 3, src: snake, title: "SnakeGame", demo: "#", code: "#" },
    { id: 4, src: rickymorty, title: "Web Api Rick & Morty", demo: "https://rick-morty-api-opal-rho.vercel.app/", code: "#" },
    { id: 5, src: weather, title: "API Rest Weather", demo: "#", code: "#" },
    { id: 6, src: car, title: "E-Commerce Movies", demo: "#", code: "#" },
  ];

  return (
    <section
      name="portafolio"
      className="bg-gradient-to-b from-black via-black to-gray-900 w-full text-white py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold border-b-4 border-cyan-500 inline-block pb-2">
            Portafolio
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            Echa un vistazo a algunos de mis proyectos destacados.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portafolio.map(({ id, src, title, demo, code }) => (
            <div
              key={id}
              className="bg-gray-900 bg-opacity-90 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl backdrop-blur-md"
            >
              {/* Imagen */}
              <img
                src={src}
                alt={title}
                className="w-full h-56 object-cover rounded-t-lg"
              />

              {/* Contenido */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                <div className="flex justify-center gap-4">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-2 text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-semibold text-lg hover:brightness-110 transition duration-300"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-2 text-center bg-gray-700 rounded-md text-white font-semibold text-lg hover:bg-gray-600 transition duration-300"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
