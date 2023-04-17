import React from "react";
import exportIcon from "../images/exportIcon.png";
import rotation from "../images/rotation.png";

const Properties = () => {
  return (
    <div className="w-1/3 bg-neutral-200 border-l-2 border-black">
      <div className="flex justify-center items-center h-1/5">
        <span className="btn">
          {" "}
          <img
            src={exportIcon}
            className="w-4 inline-block"
            alt="export icon"
          />{" "}
          Export
        </span>
      </div>
      <div className="h-3/5 bg-yellow-500">
        <h2 className="text-2xl text-center py-2 font-bold">Properties</h2>
        <div class="mb-1 text-center font-medium py-1">Scale</div>
        <div className="w-[70%] m-auto bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700 cursor-pointer">
          <div
            className="bg-red-600 h-1 rounded-full dark:bg-red-500"
            style={{ width: "45%" }}
          ></div>
        </div>
        <div className="mb-1 text-center font-medium py-1">Opacity</div>
        <div className="w-[70%] m-auto bg-gray-200 rounded-full 1 mb-4 dark:bg-gray-700 cursor-pointer">
          <div
            className="bg-green-600 h-1 rounded-full dark:bg-green-500"
            style={{ width: "85%" }}
          ></div>
        </div>
        <div class="mb-1 text-center font-medium py-1">Rotation</div>
        <div className="flex justify-center">
          <span className="btn">
            {" "}
            <img
              src={rotation}
              className="w-4 inline-block"
              alt="rotation icon"
            />{" "}
            Z
          </span>
          <span className="btn">
            {" "}
            <img
              src={rotation}
              className="w-4 inline-block"
              alt="rotation icon"
            />{" "}
            Y
          </span>
          <span className="btn">
            {" "}
            <img
              src={rotation}
              className="w-4 inline-block"
              alt="rotation icon"
            />{" "}
            X
          </span>
        </div>
      </div>
      <div className="h-1/5">
        <h2 className="text-lg text-center font-bold py-1 mb-2">Position</h2>
        <div className="flex justify-center">
          <span className="btn">
            {" "}
            <img
              src={rotation}
              className="w-4 inline-block"
              alt="rotation icon"
            />{" "}
            Z
          </span>
          <span className="btn">
            {" "}
            <img
              src={rotation}
              className="w-4 inline-block"
              alt="rotation icon"
            />{" "}
            Y
          </span>
          <span className="btn">
            {" "}
            <img
              src={rotation}
              className="w-4 inline-block"
              alt="rotation icon"
            />{" "}
            X
          </span>
        </div>
      </div>
    </div>
  );
};

export default Properties;
