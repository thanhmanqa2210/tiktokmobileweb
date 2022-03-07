import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import "./assets/css/App.css";
import Video from "./components/Video";
import db from "./config/firebaseConfig";
function App() {
  const [videos, setVideos] = useState([]);
  async function getVideos(db) {
    const videoCol = collection(db, "video");
    const videoSnapshot = await getDocs(videoCol);
    const videoList = videoSnapshot.docs.map((doc) => doc.data());
    return videoList;
  }
  useEffect(() => {
    getVideos(db).then((result) => setVideos(result));
  }, []);
  return (
    <div className="App">
      {/* <center> */}
      <div className="app_videos">
        {videos.map(
          ({ url, chanel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              chanel={chanel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
      {/* </center> */}
    </div>
  );
}

export default App;
