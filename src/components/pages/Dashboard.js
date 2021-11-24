import React from "react";
import useGetVideo from "../../hooks/useGetVideo";
import InputVideo from "../InputVideo";

const Dashboard = () => {
  const videos = useGetVideo();

  return (
    <div>
      <InputVideo />
      {videos.map((video) => (
        <video
          preload="auto"
          width="320"
          poster={video.thumbnail}
          height="240"
          controls
        >
          <source src={video.video} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      ))}
    </div>
  );
};

export default Dashboard;
