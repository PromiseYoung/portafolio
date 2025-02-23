import React from "react";

const Contact = () => {
  return (
    <section
      name="contacto"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black p-8 text-white flex justify-center items-center"
    >
      <div className="max-w-screen-lg w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block pb-2">
            Contacto
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            ¡Hablemos! Envía el siguiente formulario para ponerte en contacto conmigo.
          </p>
        </div>

        <div className="flex justify-center">
          <form
            action="https://getform.io/f/da450ebc-6827-4cae-97db-8450ed092267"
            method="POST"
            className="w-full md:w-3/5 bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-xl space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre Completo"
              className="w-full p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition duration-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              className="w-full p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition duration-300"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Introduce tu Mensaje"
              className="w-full p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition duration-300"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-md hover:scale-105 transform transition duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
