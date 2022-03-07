import React, { useState } from "react";
import "../assets/css/videoSideBar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
function VideoSideBar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="video_sidebar">
      <div className="video_sidebar_button">
        {liked ? (
          <FavoriteIcon
            fontSize="large"
            className="colorFavoriteIcon"
            onClick={(e) => setLiked(false)}
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="video_sidebar_button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="video_sidebar_button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
