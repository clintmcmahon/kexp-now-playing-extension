import React, { useState, useEffect } from "react";

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
            <img src={nowPlaying.thumbnail_uri} alt={nowPlaying.album} />
          </div>
          <div className="right">
            <div className="block">
              NOW PLAYING
            </div>
            <div className="block">
              <div className="label">
                Song:
            </div>
              <div className="text">
                {nowPlaying.song}
              </div>
            </div>
            <div className="block">
              <div className="label">
                Artist:
        </div>
              <div className="text">
                {nowPlaying.artist}
              </div>
            </div>
            <div className="block">
              <div className="label">
                Album:
            </div>
              <div className="text">
                {nowPlaying.album}
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default App;
