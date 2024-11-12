import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Resumen <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "./CV JARAMILLO.pdf",
      style: "rounded-br-md",
      download: true,
    },
    {
      id: 2,
      child: (
        <>
          Outlook <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:hugoenri1009@hotmail.com",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/inghugojaramillo/",
    },
    {
      id: 4,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/PromiseYoung",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
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
