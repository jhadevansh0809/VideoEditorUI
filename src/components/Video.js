import React from "react";
import file1 from "../images/file1.png";
import vbtn1 from "../images/vbtn1.png";
import vbtn2 from "../images/vbtn2.png";
import vbtn3 from "../images/vbtn3.png";
import play from "../images/play.png";
import prev from "../images/prev.png";
import next from "../images/next.png";

const Video = () => {
  return (
    <div className="w-1/3">
      <div className="py-3 flex justify-center">
        <button className="w-6 hover:scale-110">
          <img src={vbtn1} alt="edit button" />
        </button>
        <button className="w-6 hover:scale-110 mx-2">
          <img src={vbtn2} alt="edit button" />
        </button>
        <button className="w-6 hover:scale-110">
          <img src={vbtn3} alt="edit button" />
        </button>
        <select data-te-select-init className="outline-none ml-8 rounded-full">
          <option value="1">50%</option>
          <option value="2">100%</option>
          <option value="3">150%</option>
          <option value="4">200%</option>
        </select>
      </div>
      <div className="p-2">
        <img src={file1} className="h-[250px]" alt="video" />
      </div>
      <div className="w-[95%] m-auto bg-gray-200 rounded-full h-1.5 my-2 dark:bg-gray-700 cursor-pointer">
        <div class="w-full bg-gray-200 h-2.5 mb-4 dark:bg-gray-700">
          <div
            class="bg-indigo-600 h-2.5 dark:bg-indigo-500"
            style={{ width: "45%" }}
          ></div>
        </div>
      </div>
      <div className="py-1">
        <p className="text-center text-xs font-bold">02:25/05:00</p>
      </div>
      <div className="py-3 flex justify-center">
        <button className="w-10 hover:scale-110 border-2 border-purple-600 rounded-full p-1">
          <img src={prev} alt="previous button" />
        </button>
        <button className="w-10 hover:scale-110 border-2 border-purple-600 rounded-full pr-1 pl-2 mx-8">
          <img src={play} alt="play button" />
        </button>
        <button className="w-10 hover:scale-110 border-2 border-purple-600 rounded-full p-1">
          <img src={next} alt="next button" />
        </button>
      </div>
    </div>
  );
};

export default Video;
