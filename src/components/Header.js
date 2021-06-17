import React from "react";

function Header(props) {
    let djText = "";
    console.log(props.showDJs)
    if (props.showDJs) {
        djText = props.showDJs.map((item, i) => {
            let name = item;
            if (i !== 0) {
                name = "/" + name;
            }
            return name;
        });
    }
    return (
        <div className="title">
            <a href="https://www.kexp.org/donate/" alt="Support the music">{props.showTitle ? props.showTitle : ""} {djText ? `with ${djText}` : ""}</a>
        </div>
    )
}

export default Header;
