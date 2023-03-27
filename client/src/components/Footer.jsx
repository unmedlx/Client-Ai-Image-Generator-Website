import React from "react";
import { insta, linkedin, github } from "../assets";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center border-t-2 pt-10 pb-8 mt-16">
      <p className=" text-center text-lg font-semibold text-[grey]">
        Ayyash @2023 All Right Reserved
      </p>
      <div className="flex justify-center items-center">
        <a
          target="_blank"
          href="https://www.instagram.com/unmedlx/"
          className="m-1 text-lg hover:bg-gray-400 rounded-lg"
        >
          <img
            src={insta}
            alt="insta"
            className="w-10 object-contain opacity-70 "
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/luthfi-ayyash-45535020b/"
          className="m-1 text-lg hover:bg-gray-400 rounded-lg"
        >
          <img
            className="w-6 m-2 object-contain opacity-70 "
            src={linkedin}
            alt="linkedin"
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/unmedlx"
          className="m-1 text-lg hover:bg-gray-400 rounded-lg"
        >
          <img
            className="w-6 m-2 object-contain opacity-70 "
            src={github}
            alt="github"
          />
        </a>
      </div>
      <p className=" text-center text-sm font-semibold text-[grey]">
        Reach Me Out
      </p>
    </div>
  );
};

export default Footer;
