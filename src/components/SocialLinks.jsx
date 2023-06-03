import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={25} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/pawarutnarksuth",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:pawarut.narksuth.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "/Resume_ปวรุตม์.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="lg:flex flex-col top-[35%] left-0 fixed hidden">
      <ul>
        {links.map(({ id, child, style, href, download }) => (
          <li
            key={id}
            className={
              " flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              download={download}
              target="_blank"
              className="flex justify-between items-center w-full  text-white"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default SocialLinks;
