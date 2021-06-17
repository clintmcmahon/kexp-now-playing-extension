import React, { useState, useEffect } from "react";
import NowPlaying from "./components/NowPlaying";
function App() {
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    fetch("https://api.kexp.org/v2/plays/")
      .then((response) => response.json())
      .then(data => {

        if (data.results && data.results.length > 0) {
          let results = data.results;
          let trackData = results[0];
          let nowPlaying = {
            thumbnailUri: trackData.thumbnail_uri,
            album: trackData.album,
            artist: trackData.artist,
            song: trackData.song,
            playType: trackData.play_type,
            comment: trackData.comment,
            showTitle: "",
            showDJs:[]
          };

          let showUri = trackData.show_uri;
          fetch(showUri)
            .then(response => response.json())
            .then((showData => {
              nowPlaying.showTitle = showData.program_name;
              nowPlaying.showDJs = showData.host_names;
              setNowPlaying(nowPlaying);
            }));
        };
      })

  }, []);

  return (
    <div className="wrapper">
      <NowPlaying nowPlaying={nowPlaying} />
    </div>
  );
}

export default App;
