import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: 1,
      child: (
        <>
          Resumen <BsFillPersonLinesFill size={28} />
        </>
      ),
      href: "/build/CV JARAMILLO.pdf",
      download: true,
    },
    {
      id: 2,
      child: (
        <>
          Outlook <HiOutlineMail size={28} />
        </>
      ),
      href: "mailto:hugoenri1009@hotmail.com",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <FaLinkedin size={28} />
        </>
      ),
      href: "https://www.linkedin.com/in/inghugojaramillo/",
    },
    {
      id: 4,
      child: (
        <>
          Github <FaGithub size={28} />
        </>
      ),
      href: "https://github.com/PromiseYoung",
    },
  ];

  return (
    <div className="fixed top-[35%] left-0 z-50">
      {/* Botón para abrir/cerrar en móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden bg-cyan-500 text-white p-2 rounded-r-md text-lg"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Menú Social */}
      <ul className={`lg:flex flex-col transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className="flex justify-between items-center w-48 h-14 px-4 ml-[-120px] hover:ml-0 transition-all duration-300 bg-gray-800 hover:bg-cyan-600 rounded-r-lg"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white text-lg font-medium"
              target="_blank"
              rel="noreferrer"
              download={download}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
