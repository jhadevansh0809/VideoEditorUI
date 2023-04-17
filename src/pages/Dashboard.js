import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import scissors from "../images/scissors.png";
import record from "../images/record.png";
import Projects from "../components/Projects";
const Dashboard = () => {
  return (
    <div className="flex justify-between">
      <Navbar />
      <div className="w-full px-10 py-6">
        <div className="flex">
          <Search />
          <div className="flex justify-center items-center h-12">
            <img src={user} alt="user logo" className="w-[50px]" />
          </div>
        </div>
        <div className="flex justify-between my-10">
          <ul className="flex">
            <Link to="/editvideo">
              <li className="btn">
                {" "}
                <img
                  src={scissors}
                  alt="create project"
                  className="h-[20px] inline-block"
                />{" "}
                Create Project
              </li>
            </Link>
            <Link to="#">
              <li className="btn">
                <img
                  src={record}
                  alt="record video"
                  className="h-[20px] inline-block"
                />{" "}
                Record Video
              </li>
            </Link>
          </ul>
          <Link to="#">
            <h3 className="font-bold text-blue-700 hover:underline">
              All videos&gt;
            </h3>
          </Link>
        </div>

        <div>
          <h1 className="font-bold text-2xl">Recent Videos</h1>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
