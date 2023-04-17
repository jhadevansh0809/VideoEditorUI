import React from "react";
import pro1thumbnail from "../images/pro1thumbnail.jpg";
import pro2thumbnail from "../images/pro2thumbnail.jpg";
import pro3thumbnail from "../images/pro3thumbnail.jpg";
import pro4thumbnail from "../images/pro4thumbnail.jpg";

const Projects = () => {
  return (
    <div className="flex flex-wrap h-[350px] overflow-auto my-4 w-4/5 bg-neutral-300 rounded-xl">
      <div className=" p-4 rounded-lg bg-white m-4 w-96">
        <img
          src={pro1thumbnail}
          alt="video thumbnail"
          className="w-full rounded-lg"
        />
        <h3 className="font-bold pt-2">Project Name - 1</h3>
      </div>
      <div className=" p-4 rounded-lg bg-white m-4 w-96">
        <img
          src={pro2thumbnail}
          alt="video thumbnail"
          className="w-full rounded-lg"
        />
        <h3 className="font-bold pt-2">Project Name - 2</h3>
      </div>
      <div className=" p-4 rounded-lg bg-white m-4 w-96">
        <img
          src={pro3thumbnail}
          alt="video thumbnail"
          className="w-full rounded-lg"
        />
        <h3 className="font-bold pt-2">Project Name - 3</h3>
      </div>
      <div className=" p-4 rounded-lg bg-white m-4 w-96">
        <img
          src={pro4thumbnail}
          alt="video thumbnail"
          className="w-full rounded-lg"
        />
        <h3 className="font-bold pt-2">Project Name - 4</h3>
      </div>
    </div>
  );
};

export default Projects;
