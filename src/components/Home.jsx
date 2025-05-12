import React from "react";
import { motion } from "framer-motion";
import image from "../assets/profile.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-6">
        {/* Sección de texto con animación */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center h-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-sans">
            Ingeniero en Tecnologías de la Información y Comunicaciones
          </h2>
          <p className="text-gray-400 py-2 max-w-md leading-relaxed">
            Con <span className="text-cyan-400 font-semibold">3 años de experiencia</span> en el desarrollo de <span className="text-cyan-400">sistemas web</span>, <span className="text-cyan-400">plataformas de escritorio</span> y <span className="text-cyan-400">bots</span> para diversas aplicaciones.
          </p>
          <p className="text-gray-400 py-2 max-w-md leading-relaxed">
            También he participado en <span className="text-cyan-400">implementaciones tecnológicas</span> para <span className="text-cyan-400">grandes empresas</span> en el <span className="text-cyan-400">SAT</span>, adquiriendo experiencia en <span className="text-cyan-400">soporte TI</span>.
          </p>
          <p className="text-gray-400 py-2 max-w-md leading-relaxed">
            Actualmente, me especializo en el <span className="text-cyan-400">desarrollo web</span>, utilizando tecnologías modernas como:
          </p>
          <ul className="text-gray-400 list-disc list-inside pl-4">
            <li><span className="text-cyan-400">React</span> y <span className="text-cyan-400">Next.js</span> para experiencias interactivas.</li>
            <li><span className="text-cyan-400">Angular</span> para arquitecturas escalables.</li>
            <li><span className="text-cyan-400">Tailwind CSS</span> para diseños elegantes.</li>
            <li><span className="text-cyan-400">Laravel</span> para soluciones robustas y seguras.</li>
          </ul>
          <p className="text-gray-400 py-4 max-w-md leading-relaxed">
            Estoy comprometido con la creación de experiencias digitales innovadoras, enfocándome en <span className="text-cyan-400">usabilidad</span> y <span className="text-cyan-400">rendimiento</span>.
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
                offset={-70}
                className="group text-white inline-flex items-center justify-center px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer font-medium text-lg transition-transform transform-gpu"
              >
                Ver Portafolio
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
            className="w-1/2 md:w-full max-w-sm md:rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
