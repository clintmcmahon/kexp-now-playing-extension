import React from "react";
import Thumbnail from "./Thumbnail";
import TrackInfo from "./TrackInfo";
import Comment from "./Comment";
import Header from "./Header";
import Skeleton from "react-loading-skeleton";

function NowPlaying(props) {
    let nowPlaying = props.nowPlaying;
    if (nowPlaying) {
        return (
            <>
                <div className="header">
                    <Header showTitle={nowPlaying.showTitle} showDJs={nowPlaying.showDJs} />
                </div>
                <div className="content">
                    <div className="left">
                        <Thumbnail
                            thumbnailUri={nowPlaying.thumbnailUri}
                            album={nowPlaying.album}
                        />
                    </div>
                    <div className="right">
                        <TrackInfo
                            artist={nowPlaying.artist}
                            song={nowPlaying.song}
                            album={nowPlaying.album}
                            playType={nowPlaying.playType}
                        />
                    </div>
                </div>
                <div className="comment">
                    <Comment
                        comment={nowPlaying.comment}
                    />
                </div>
            </>
        )
    }

    return (
        <>
            <div className="header">
                <Skeleton width={400} color={"#222222"} />
            </div>
            <div className="content">
                <div className="left">
                    <Thumbnail
                        thumbnailUri={null}
                        album={null}
                    />
                </div>
                <div className="right">
                    <div className="block">
                        <Skeleton width={100} />
                    </div>
                    <div className="block">
                        <div className="label">
                            <Skeleton width={100} />
                        </div>

                    </div>
                    <div className="block">
                        <div className="label">
                            <Skeleton width={100} />
                        </div>

                    </div>
                    <div className="block">
                        <div className="label">
                            <Skeleton width={100} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment">
                <Skeleton width={400} />
            </div>
        </>
    )
}

export default NowPlaying;