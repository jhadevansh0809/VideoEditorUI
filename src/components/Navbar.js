import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col border-r-2  shadow-lg px-10 py-6 h-screen w-1/5">
      <div className="flex justify-center items-center ">
        <img src={logo} alt="logo" className="w-[30px]" />
        <h1 className="text-3xl font-bold italic logo-font">VEDitor</h1>
      </div>
      <ul className="mt-4">
        <Link to="#">
          <li className="btn my-10">+ New Video</li>
        </Link>
        <Link to="#">
          <li className="btn my-10">Home</li>
        </Link>
        <Link to="#">
          <li className="btn my-10">Template</li>
        </Link>
        <Link to="#">
          <li className="btn my-10">All Videos</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
