import React, { useState } from "react";
import useVideo from "../hooks/useVideo";
import Button from "./Button";
import Form from "./Form";
import InputFile from "./InputFile";
import TextInput from "./TextInput";
const InputVideo = () => {
  const [input, setInput] = useState({
    title: "",
    video: {},
    thumbnail: {},
  });
  const { postManageVideo, videos, error, loading } = useVideo();
  const [url, setURL] = useState({});

  const handleFile = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;
    setInput({ ...input, [name]: file });
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setURL({ ...url, [name]: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleSubmit = async (e) => {
    await postManageVideo(input);
    console.log(videos);
    e.preventDefault();
  };
  return (
    <>
      {error && (
        <p style={{ color: "red" }} align="center">
          {error}
        </p>
      )}
      <Form onSubmit={handleSubmit}>
        <TextInput
          onChange={(e) => setInput({ ...input, title: e.target.value })}
          placeholder="Input video title"
        />
        <br />
        <InputFile
          url={url}
          onChange={handleFile}
          name="thumbnail"
          title="Upload Thumbnail"
          accept="image/png, image/jpeg"
          label={input.thumbnail ? input.thumbnail.name : ""}
        />
        <br />

        <InputFile
          label={input.video ? input.video.name : ""}
          onChange={handleFile}
          name="video"
          title="Upload Video"
          accept="video/mp4,video/x-m4v,video/*"
          url={url}
        />
        <br />
        <Button
          onClick={loading ? () => {} : handleSubmit}
          disabled={loading ? true : false}
          type="button"
        >
          {loading ? "Uploading..." : "Upload"}
        </Button>
      </Form>
    </>
  );
};

export default InputVideo;
