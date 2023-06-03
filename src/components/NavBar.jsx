import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [Nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      links: "home",
    },
    {
      id: 2,
      links: "about",
    },
    {
      id: 3,
      links: "portfolio",
    },
    {
      id: 4,
      links: "experience",
    },
    {
      id: 5,
      links: "contact",
    },
  ];
  return (
    // div ขอ NavBar ทั้งหมด
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
      {/* div แสดง Logo */}
      <div>
        <h1 className="text-5xl font-signature ml-2">Pawarut</h1>
      </div>

      {/* สร้าง Menu ของ Navbar โดยถ้าขนาดหน้าเจอลดเกินจะ hidden */}
      <ul className="hidden md:flex">
        {links.map(({ id, links }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={links} smooth duration={500}>
              {links}
            </Link>
          </li>
        ))}
      </ul>

      {/* div สร้าง icon ถ้าขนาดหน้าจากลดเกิน และ onClick เปลี่ยนรูปแบบ */}
      <div
        onClick={() => setNav(!Nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {/* ถ้ามีการคลิกที่ icon สถานะ state จะเปลี่ยนจาก false ที่เป็น defualt จะเปลี่ยนเป็น ture และจะแสดง icon ใหม่*/}
        {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* เช็คว่าถ้า Nav เป็น true จะแสดงหน้านี้ขึ้นมา */}
      {Nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, links }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!Nav)}
                to={links}
                smooth
                duration={500}
              >
                {links}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
