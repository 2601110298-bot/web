import React, {useState} from "react";
import "./Reservation.css"

// function Reservation() {
//     const [haveBreakfast, setHaveBreakfast] = useState(true);
//     const [numberOfGuest, setNumberOfGuest] = useState(1);
//
//     const handleSubmit = (event) => {
//       alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}명`);
//       event.preventDefault();
//     }
//
//     return(
//         <form onSubmit={handleSubmit}>
//             <label>
//                 아침식사 여부:
//                 <input type={"checkbox"} checked={haveBreakfast} onChange={(event) => {
//                     setHaveBreakfast(event.target.checked);
//                 }}/>
//             </label>
//             <br/>
//             <label>
//                 방문자 수:
//                 <input type={"number"} value={numberOfGuest} onChange={(event) => {
//                     setNumberOfGuest(event.target.value);
//                 }}/>
//             </label>
//             <br/>
//             <button type={"submit"}>제출</button>
//         </form>
//     );
// }
//
// export default Reservation;

function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(1);

    const handleSubmit = (event) => {
        alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}명`);
        event.preventDefault();
    };

    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <h2 className="form-title">예약 신청</h2>

            <div className="form-group checkbox-group">
                <label htmlFor="breakfast">아침식사 여부</label>
                <input
                    id="breakfast"
                    type="checkbox"
                    checked={haveBreakfast}
                    onChange={(event) => setHaveBreakfast(event.target.checked)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="guests">방문자 수</label>
                <input
                    id="guests"
                    type="number"
                    min="1"
                    value={numberOfGuest}
                    onChange={(event) => setNumberOfGuest(Number(event.target.value))}
                />
            </div>

            <button type="submit" className="submit-btn">
                제출
            </button>
        </form>
    );
}

export default Reservation;