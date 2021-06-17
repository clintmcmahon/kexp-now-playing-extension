import React from "react";

function Comment(props) {
    
    return (
        <div className="text">
            {props.comment ? props.comment : ""}
        </div>
    )
}

export default Comment;
