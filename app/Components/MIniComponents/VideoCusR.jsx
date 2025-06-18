"use client";
import React, { useRef } from "react";

const Video = ({ src, title, autoPlay = false, onPlay, lazy = false, poster }) => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (onPlay) onPlay();
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="mb-4">
      <h3 className="text-md font-semibold mb-2">{title}</h3>
      <video
        ref={videoRef}
        className="w-full rounded shadow"
        controls
        autoPlay={autoPlay}
        muted
        preload={lazy ? "none" : "metadata"}
        onClick={!autoPlay ? handlePlay : undefined}
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
