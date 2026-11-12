import React from "react";

const unitName = {
    km: "킬로미터",
    mile: "마일"
};

function DistanceInIut(props) {
    const handleChange = (event) => {
        props.onDistanceChange(event.target.value);
    };

    return(
        <div>
            <legend>
                {unitName[props.unit]} 입력:
            </legend>
            <input
                value={props.distance}
                onChange={handleChange}
                placeholder={`${unitName[props.unit]}를 입력하세요`}
            />
        </div>
    );
}

export default DistanceInIut;