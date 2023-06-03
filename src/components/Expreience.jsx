import React from "react";
import Html from "../assets/Image/html.png";
import Css from "../assets/Image/css.png";
import Reac from "../assets/Image/react.png";
import Python from "../assets/Image/python.png";
import Php from "../assets/Image/php.png";
import Sql from "../assets/Image/sql.png";

const Expreience = () => {
  const tech = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Reac,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 4,
      src: Python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: Php,
      title: "PHP",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      src: Sql,
      title: "SQL",
      style: "shadow-orange-600",
    },
  ];
  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2inline">
            Exprerience
          </p>
          <p className="py-6">I have Expreience this.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                " shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt="" className=" w-20 mx-auto" />
              <p className="mt-4 text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expreience;
