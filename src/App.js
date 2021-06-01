import React, { useState, useEffect } from "react";
import Thumbnail from "./components/Thumbnail";
import TrackInfo from "./components/TrackInfo";
function App() {
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    fetch("https://api.kexp.org/v2/plays/")
      .then((response) => response.json())
      .then(data => {
        let results = data.results;
        let nowPlaying = results[0];
        setNowPlaying(nowPlaying);
      })

  }, []);

  return (
    <div className="wrapper">
      {nowPlaying &&
        <>
          <div className="left">
           <Thumbnail thumbnailUri={nowPlaying.thumbnail_uri} album={nowPlaying.album} />
          </div>
          <div className="right">
            <TrackInfo 
              artist={nowPlaying.artist}
              song={nowPlaying.song}
              album={nowPlaying.album} 
            />
          </div>
        </>
      }
    </div>
  );
}

export default App;
