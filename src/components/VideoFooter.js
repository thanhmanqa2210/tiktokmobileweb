import React from "react";
import "../assets/css/videoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
function VideoFooter({chanel,description,song}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{chanel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon  className="videoFooter_icon" />
          <Ticker mode="smooth" className="ticker">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-cd-line-black-icon-png-image_4066903.jpg"
        className="videoFooter_record"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
