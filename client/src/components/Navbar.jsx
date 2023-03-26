import React from "react";
import { Link } from "react-router-dom";
import { robot } from "../assets";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-3 h-[4rem] border-b-2 ">
      <Link to="/">
        <div className="flex items-center">
          <div className="">
            <img
              className=" w-10 object-cover overflow-hidden"
              src={robot}
              alt="robot"
            />
          </div>
          <h1 className="text-xl font-bold sm:text-2xl">Image Generator</h1>
        </div>
      </Link>
      <Link
        to="/create-img"
        className="font-inter font-medium text-sm sm:text-base bg-[var(--color-secondary)] text-white px-4 py-2 rounded-md"
      >
        Create Img
      </Link>
    </div>
  );
};

export default Navbar;
