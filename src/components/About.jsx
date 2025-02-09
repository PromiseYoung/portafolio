import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      name="acerca"
      className="bg-gradient-to-b from-gray-800 via-black to-black w-full min-h-screen flex items-center text-white p-5"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full">
        {/* Título con animación */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-8 text-center"
        >
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline-block">
            Sobre Mí
          </h2>
        </motion.div>

        {/* Contenido con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6 text-justify max-w-3xl mx-auto leading-relaxed text-lg"
        >
          <p>
            Soy una persona competitiva, activa y comprometida con el crecimiento personal y profesional.
            Me apasiona la tecnología y siempre busco aprender nuevas herramientas y desarrollar proyectos innovadores.
            Disfruto trabajar en equipo y enfrentar nuevos desafíos que me ayuden a mejorar mis habilidades como desarrollador.
          </p>
          <p>
            Me considero responsable, honesto y humilde. Me encanta conocer nuevas personas y explorar oportunidades que me ayuden
            a crecer. Entre mis pasatiempos están la música (Rock, Pop, Lofi-Hip Hop y Rock Metal), el dibujo de caricaturas y anime,
            así como el cine y las series de streaming.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
