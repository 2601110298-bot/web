import React, {useState} from "react";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";
import Greeting from "../ex1/Greeting";
import "./LogInControl.css"

function LogInControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const lodInClickListener = () => {
        setIsLoggedIn(true);
    }

    const lodOutClickListener = () => {
        setIsLoggedIn(false);
    }

    let button;

    if (isLoggedIn){
        button = <LogOutButton onClick={lodOutClickListener}/>;
    }else {
        button = <LogInButton onClick={lodInClickListener}/>;
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );
}

export default LogInControl;