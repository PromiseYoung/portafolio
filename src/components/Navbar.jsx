import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const links = [
  { id: 1, title: "Home", target: "home" },
  { id: 2, title: "Acerca", target: "acerca" },
  { id: 3, title: "Portafolio", target: "portafolio" },
  { id: 4, title: "Experiencia", target: "experiencia" },
  { id: 5, title: "Contacto", target: "contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar el scroll para cambiar el fondo del navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar el menú cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) setIsOpen(false);
    };

    if (isOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      className={`navbar fixed w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-black bg-opacity-90 shadow-lg border-b border-gray-700"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-white">Ing. Jaramillo</h1>

          {/* Menú en escritorio */}
          <ul className="hidden md:flex">
            {links.map(({ id, title, target }) => (
              <li key={id} className="mx-4 my-2">
                <Link
                  to={target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-white font-medium tracking-wide uppercase text-base cursor-pointer transition-colors duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón del menú móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-white hover:text-gray-200 hover:bg-gray-700 focus:outline-none transition duration-300"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Menú lateral en móvil */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-90 shadow-xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="text-center space-y-6">
            {links.map(({ id, title, target }) => (
              <li key={id}>
                <Link
                  to={target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                  className="text-gray-300 hover:text-white font-medium tracking-wide uppercase text-lg cursor-pointer transition-colors duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
