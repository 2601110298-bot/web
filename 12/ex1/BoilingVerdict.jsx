
import React from "react";
import "./BoilingVerdict.css"

// function BoilingVerdict(props) {
//     if (props.celsius >= 100){
//         return <p>물이 끓습니다.</p>
//     }
//     return <p>물이 끓지 않습니다.</p>
// }
//
// export default BoilingVerdict;


function BoilingVerdict(props) {
    const isBoiling = props.celsius >= 100;

    return (
        <div className={`verdict-card ${isBoiling ? "boiling" : "not-boiling"}`}>
            <span>{isBoiling ? "🔥" : "🧊"}</span>
            <p>{isBoiling ? "물이 끓습니다." : "물이 끓지 않습니다."}</p>
        </div>
    );
}

export default BoilingVerdict;