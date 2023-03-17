import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-3 h-[4rem]">
      <Link to="/">
        <h1 className="text-3xl font-bold underline">Ai Image Generator</h1>
      </Link>
      <Link
        to="/create-img"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Create Img
      </Link>
    </div>
  );
};

export default Navbar;
