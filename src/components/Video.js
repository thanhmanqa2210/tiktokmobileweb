import React, { useRef, useState } from "react";
import "../assets/css/video.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";
function Video({ url, chanel, description, song, likes, messages, shares }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        src={url}
        className="video_player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
      ></video>
      <VideoFooter chanel={chanel} description={description} song={song} />
      <VideoSideBar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
