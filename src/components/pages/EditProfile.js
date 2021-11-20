import React, { useState } from "react";
import Button from "../Button";
import Form from "../Form";
import InputFile from "../InputFile";
import TextInput from "../TextInput";

const EditProfile = () => {
  const [video, setVideo] = useState({
    video: "",
    thumbnail: "",
  });
  const handleFile = (e) => {
    const file = e.target.files[0];
    setVideo({ ...video, [e.target.name]: file });
  };
  const handleSubmit = (e) => {
    console.log(video);
    e.preventDefault();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <TextInput
          onChange={(e) => setVideo({ ...video, title: e.target.value })}
          placeholder="Input video title"
        />
        <br />
        <InputFile
          onChange={handleFile}
          name="thumbnail"
          title="Upload Thumbnail"
          label={video.thumbnail ? video.thumbnail.name : ""}
        />
        <br />
        <InputFile
          label={video.video ? video.video.name : ""}
          onChange={handleFile}
          name="video"
          title="Upload Video"
          accept="video/mp4,video/x-m4v,video/*"
        />
        <br />
        <Button type="button">Upload</Button>
      </Form>
    </div>
  );
};

export default EditProfile;
