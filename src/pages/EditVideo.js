import React from "react";
import Assets from "../components/Assets";
import Video from "../components/Video";
import Properties from "../components/Properties";
import Details from "../components/Details";
import Track from "../components/Track";

const EditVideo = () => {
  return (
    <>
      <div className="h-[490px] border-b-2 border-black flex">
        <Assets />
        <Video />
        <Properties />
      </div>
      <div>
        <Details />
      </div>
      <div>
        <Track />
      </div>
    </>
  );
};

export default EditVideo;
