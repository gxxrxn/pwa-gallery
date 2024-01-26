"use client";

import { ChangeEventHandler, useState } from "react";

const VideoInputCard = () => {
  const [file, setFile] = useState<string>();

  const uploadFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) {
      return;
    }

    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <label
      className="flex items-center justify-center w-[12rem] h-[16rem] bg-zinc-400 rounded-md cursor-pointer"
      htmlFor="upload"
    >
      {file ? (
        <video src={file} controls className="w-full h-full" />
      ) : (
        <span className=" text-md text-slate-100">add video</span>
      )}
      <input
        id="upload"
        type="file"
        accept="video/*"
        onChange={uploadFile}
        hidden
      />
    </label>
  );
};

export default VideoInputCard;
