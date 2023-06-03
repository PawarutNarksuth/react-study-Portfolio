import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import PicProfile from "../assets/Image/IngProfile.jpg";
import { Link } from "react-scroll";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-white text-4xl sm:text-5xl font-bold">
            I'am a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
            bg-gradient-to-r from-cyan-600 to-blue-500 cursor-pointer"
            >
              Protfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={PicProfile}
            alt="My Profile"
            className=" rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
