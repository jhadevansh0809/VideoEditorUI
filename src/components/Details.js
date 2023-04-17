import React from "react";
import rotateleft from "../images/rotateleft.png";
import rotateright from "../images/rotateright.png";
import copy from "../images/copy.png";
import paste from "../images/paste.png";
import zoomin from "../images/zoomin.png";
import zoomout from "../images/zoomout.png";

const Details = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="py-3 flex justify-start ml-4">
        <button className="w-8 hover:scale-110">
          <img src={rotateleft} alt="rotateleft button" />
        </button>
        <button className="w-8 hover:scale-110">
          <img src={rotateright} alt="rotateright button" />
        </button>
        <button className="w-8 hover:scale-110">
          <img src={copy} alt="copy button" />
        </button>
        <button className="w-8 hover:scale-110">
          <img src={paste} alt="paste button" />
        </button>
      </div>
      <div className="w-1/5 flex justify-end mr-4">
        <button className="w-8 hover:scale-110">
          <img src={zoomin} alt="zoom-in button" />
        </button>
        <button className="w-8 hover:scale-110">
          <img src={zoomout} alt="zoom out button" />
        </button>
      </div>
    </div>
  );
};

export default Details;
