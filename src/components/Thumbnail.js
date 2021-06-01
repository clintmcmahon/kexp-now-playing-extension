import React from "react";
import placeHolder from "../images/placeholder.png";

function Thumbnail(props) {
    if (props.thumbnailUri) {
      return <img src={props.thumbnailUri} alt={props.album} />
    }

    return <img src={placeHolder} alt="Now playing placeholder" />
}

export default Thumbnail;
