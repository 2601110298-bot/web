import React, { useState } from "react";
import "./DistanceConverter.css"

// const scaleNames = {
//     km: "킬로미터(km)",
//     mile: "마일(mile)",
// };
//
// function DistanceInput(props) {
//     const handleChange = (event) => {
//         props.onDistanceChange(event.target.value);
//     };
//
//     return (
//         <fieldset>
//             <legend>거리를 입력해주세요 (단위: {scaleNames[props.scale]}):</legend>
//             <input value={props.distance} onChange={handleChange} />
//         </fieldset>
//     );
// }
//
// function DistanceConverter(props) {
//     const [distance, setDistance] = useState("");
//     const [scale, setScale] = useState("km");
//
//     const handleKmChange = (distance) => {
//         setDistance(distance);
//         setScale("km");
//     };
//
//     const handleMileChange = (distance) => {
//         setDistance(distance);
//         setScale("mile");
//     };
//
//     const km = scale === "mile" ? tryConvert(distance, toKm) : distance;
//     const mile = scale === "km" ? tryConvert(distance, toMile) : distance;
//
//     return (
//         <div>
//             <DistanceInput
//                 scale="km"
//                 distance={km}
//                 onDistanceChange={handleKmChange}
//             />
//             <DistanceInput
//                 scale="mile"
//                 distance={mile}
//                 onDistanceChange={handleMileChange}
//             />
//         </div>
//     );
// }
//
// function toKm(mile) {
//     return mile * 1.609344;
// }
//
// function toMile(km) {
//     return km / 1.609344;
// }
//
// function tryConvert(distance, convert) {
//     const input = parseFloat(distance);
//     if (Number.isNaN(input)) {
//         return "";
//     }
//
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }


const scaleNames = {
    km: "킬로미터",
    mile: "마일",
};

function DistanceInput(props) {
    const handleChange = (event) => {
        props.onDistanceChange(event.target.value);
    };

    return (
        <div className="input-group">
            <label className="input-label">
                {scaleNames[props.scale]} ({props.scale})
            </label>
            <div className="input-wrapper">
                <input
                    className="distance-input"
                    type="text"
                    inputMode="decimal"
                    placeholder="0"
                    value={props.distance}
                    onChange={handleChange}
                />
                <span className="unit-badge">{props.scale}</span>
            </div>
        </div>
    );
}

function DistanceConverter() {
    const [distance, setDistance] = useState("");
    const [scale, setScale] = useState("km");

    const handleKmChange = (distance) => {
        setDistance(distance);
        setScale("km");
    };

    const handleMileChange = (distance) => {
        setDistance(distance);
        setScale("mile");
    };

    const km = scale === "mile" ? tryConvert(distance, toKm) : distance;
    const mile = scale === "km" ? tryConvert(distance, toMile) : distance;

    return (
        <div className="converter-container">
            <h2 className="converter-title">거리 단위 변환기</h2>
            <p className="converter-subtitle">값을 입력하면 자동으로 변환됩니다</p>

            <DistanceInput
                scale="km"
                distance={km}
                onDistanceChange={handleKmChange}
            />

            <div className="converter-divider" aria-hidden="true">
                ⇅
            </div>

            <DistanceInput
                scale="mile"
                distance={mile}
                onDistanceChange={handleMileChange}
            />
        </div>
    );
}

function toKm(mile) {
    return mile * 1.609344;
}

function toMile(km) {
    return km / 1.609344;
}

function tryConvert(distance, convert) {
    const input = parseFloat(distance);
    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default DistanceConverter;
