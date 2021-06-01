import React from "react";

function TrackInfo(props) {
    return (
        <>
            <div className="block">
                NOW PLAYING
            </div>
            <div className="block">
                <div className="label">
                    Song:
            </div>
                <div className="text">
                    {props.song}
                </div>
            </div>
            <div className="block">
                <div className="label">
                    Artist:
        </div>
                <div className="text">
                    {props.artist}
                </div>
            </div>
            <div className="block">
                <div className="label">
                    Album:
            </div>
                <div className="text">
                    {props.album}
                </div>
            </div>
        </>
    )
}

export default TrackInfo;
