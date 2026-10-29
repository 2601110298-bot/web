import React, {useState} from "react";
import LogInButton from "../ex2/LogInButton";
import LogOutButton from "../ex2/LogOutButton";
import Greeting from "../ex1/Greeting";

function LogInControl2(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const lodInClickListener = () => {
        setIsLoggedIn(true);
    }

    const lodOutClickListener = () => {
        setIsLoggedIn(false);
    }

    let button;

    button = isLoggedIn ? <LogOutButton onClick={lodOutClickListener}/> : <LogInButton onClick={lodInClickListener}/>

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );
}

export default LogInControl2;