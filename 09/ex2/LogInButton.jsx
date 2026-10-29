import React from "react";
import "./LogInButton.css"

function LogInButton(props) {
    return(
        <button onClick={props.onClick}>로그인</button>
    );
}

export default LogInButton;