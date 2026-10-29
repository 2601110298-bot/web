import React, {useState} from "react";
import Toolbar from "./Toolbar";
import animal2Img from "./animal2.jpg"
import "./LandingPage.css"

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginClick = () => {
        setIsLoggedIn(true);
    }

    const logoutClick = () => {
        setIsLoggedIn(false);
    }

    // return(
    //     <div>
    //         <Toolbar isLoggedIn={isLoggedIn} loginClick={loginClick} logoutClick={logoutClick}/>
    //         <hr width={"50%"}/>
    //         <div>
    //             9장 조건부 렌더링 실습 화면입니다.
    //             <br/>
    //             <img src={animal2Img} width={200}/>
    //         </div>
    //     </div>
    // )
    return(
        <div className="landing-container">
            <Toolbar isLoggedIn={isLoggedIn} loginClick={loginClick} logoutClick={logoutClick}/>
            <hr className="landing-divider"/>
            <div className="landing-content">
                9장 조건부 렌더링 실습 화면입니다.
                <br/>
                <img className="landing-image" src={animal2Img} alt="실습 이미지" />
            </div>
        </div>
    )
}

export default LandingPage;