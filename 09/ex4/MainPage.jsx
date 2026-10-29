import React, {useState} from "react";
import WarningBanner from "./WarningBanner";
import "./MainPage.css"

function MainPage(props) {
    const [showWarning, setShowWarning] = useState(false);

    const btnListener = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    // return(
    //     <div>
    //         <WarningBanner warning = {showWarning}/>
    //         <button onClick={btnListener}>
    //             {showWarning?"감추기" : "보이기"}
    //         </button>
    //     </div>
    // )

    return(
        <div className="main-page-container">
            <WarningBanner warning = {showWarning}/>
            <button className="toggle-btn" onClick={btnListener}>
                {showWarning?"🤦‍♂️감추기" : "👀보이기"}
            </button>
        </div>
    )
}

export default MainPage;