import React, { useEffect, useState } from "react";
import useVideo from "../../hooks/useVideo";

const Dashboard = () => {
  const [img, setImg] = useState("");
  const handleChange = (e) => {
    setImg(e.target.files[0]);
  };
  const { sendVideo, fileGet, imgURL } = useVideo();
  const handleSubmit = () => {
    sendVideo(img, "video.mp4");
  };
  const fetchFile = () => {
    fileGet("/video.mp4");
  };
  console.log({ imgURL });
  useEffect(() => {
    fetchFile();
  }, []);
  console.log({ img });
  return (
    <div>
      <input onClick={handleChange} type="file" />
      <img src={imgURL} alt="Learn with Sumit Logo" />

      {imgURL && (
        <video width="320" height="240" controls>
          <source src={imgURL} type="video/mp4" />
        </video>
      )}
      <br />
      <br />

      <button onClick={handleSubmit}>Send File</button>
      <br />

      <button onClick={fetchFile}>Fetch File</button>
    </div>
  );
};

export default Dashboard;
