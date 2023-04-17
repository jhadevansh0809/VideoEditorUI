import React from "react";
import eye from "../images/eye.png";
import unlock from "../images/unlock.png";
import scale from "../images/scale.png";
import track2 from "../images/track2.png";
import track1 from "../images/track1.png";

const Track = () => {
  return (
    <div>
      <div className="flex w-full h-14 border-t-2 border-black">
        <div className="w-[15%] bg-yellow-500"></div>
        <div className="w-[85%]">
          <img src={scale} className="h-full" alt="scale" />
        </div>
      </div>
      <div className="flex w-full h-14 border-t-2 border-black">
        <div className="w-[15%] bg-yellow-500 flex justify-center items-center font-bold relative">
          Track2
          <img
            src={eye}
            className="absolute w-4 top-0 right-0 mr-1 cursor-pointer"
            alt="show logo"
          />
          <img
            src={unlock}
            className="absolute w-4 bottom-0 right-0 py-1 mr-1 cursor-pointer"
            alt="unlock logo"
          />
        </div>
        <div className="w-[85%]">
          <img src={track2} className="h-full" alt="track2" />
        </div>
      </div>
      <div className="flex w-full h-14 border-t-2 border-black">
        <div className="w-[15%] bg-yellow-500 flex justify-center items-center font-bold relative">
          Track1
          <img
            src={eye}
            className="absolute w-4 top-0 right-0 mr-1 cursor-pointer"
            alt="show logo"
          />
          <img
            src={unlock}
            className="absolute w-4 bottom-0 right-0 py-1 mr-1 cursor-pointer"
            alt="unlock logo"
          />
        </div>
        <div className="w-[85%]">
          <img src={track1} className="h-full" alt="track1" />
        </div>
      </div>
      {/* <div></div>
      <div></div> */}
    </div>
  );
};

export default Track;
