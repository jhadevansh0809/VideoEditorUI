import React from "react";
import file1 from "../images/file1.png";
import file2 from "../images/file2.png";
import file3 from "../images/file3.png";
import audiofile from "../images/audiofile.png";
import assetbtn1 from "../images/assetbtn1.png";
import assetbtn2 from "../images/assetbtn2.png";
import assetbtn3 from "../images/assetbtn3.png";

const Assets = () => {
  return (
    <div className="asset-container w-1/3 bg-neutral-200 pr-1 border-r-2 border-black relative">
      <div className="flex items-start flex-wrap h-[400px] overflow-auto">
        <div className="p-4 w-56 cursor-pointer">
          <img src={file1} alt="video file" />
          <h3 className="font-bold text-xs pt-1">vid01567.mp4</h3>
        </div>
        <div className="p-4 w-56 cursor-pointer">
          <img src={file2} alt="video file" />
          <h3 className="font-bold text-xs pt-1">vid01032.mp4</h3>
        </div>
        <div className="p-4 w-56 cursor-pointer">
          <img src={audiofile} alt="audio file" />
          <h3 className="font-bold text-xs pt-1">aud012015.mp3</h3>
        </div>
        <div className="p-4 w-56 cursor-pointer">
          <img src={file3} alt="video file" />
          <h3 className="font-bold text-xs pt-1">vid019055.mp4</h3>
        </div>
        <div className="p-4 w-56 cursor-pointer">
          <img src={audiofile} alt="audio file" />
          <h3 className="font-bold text-xs pt-1">aud87534.mp3</h3>
        </div>
      </div>

      <div className="absolute bottom-4 right-3 flex justify-end">
        <button className="w-8 hover:scale-110">
          <img src={assetbtn1} alt="asset button" />
        </button>
        <button className="w-8 hover:scale-110">
          <img src={assetbtn2} alt="asset button" />
        </button>
        <button className="w-8 hover:scale-110">
          <img src={assetbtn3} alt="asset button" />
        </button>
      </div>
    </div>
  );
};

export default Assets;
