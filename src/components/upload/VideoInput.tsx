"use client";

import { ChangeEventHandler, useState } from "react";

const VideoInput = () => {
  const [file, setFile] = useState<string>();

  const uploadFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) {
      return;
    }

    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <input type="file" accept="video/*" onChange={uploadFile} />
      <video src={file} controls />
    </>
  );
};

export default VideoInput;
