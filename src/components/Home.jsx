import React from "react";
import { motion } from "framer-motion";
import image from "../assets/profile.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-6">
        {/* Sección de texto con animación */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center h-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-sans">
            Desarrollador Web
          </h2>
          <p className="text-gray-400 py-4 max-w-md leading-relaxed">
            Tengo 2 años de experiencia en el desarrollo de sistemas web,
            plataformas de escritorio y bots para diversas aplicaciones.
            También tengo experiencia en soporte TI, participando en implementaciones
            para grandes empresas dentro del SAT.
            Actualmente, me especializo en desarrollo Frontend con React, Angular, Tailwind,
            Next.js y Laravel.
          </p>
          <div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="portafolio"
                smooth
                duration={800}
                className="group text-white inline-flex items-center justify-center px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer font-medium text-lg transition-transform transform-gpu"
              >
                Portafolio
                <MdKeyboardArrowRight
                  size={24}
                  className="group-hover:rotate-90 ml-1 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Sección de Imagen con animación */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <img
            src={image}
            alt="Foto de perfil"
            className="w-1/4 md:w-full max-w-sm md:rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
