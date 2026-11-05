import React, {useState} from "react";
import "./FruitSelect.css"

// function FruitSelect(props) {
//     const [value, setValue] = useState('');
//
//     const handleChange = (event) => {
//         setValue(event.target.value);
//     }
//
//     const handleSubmit = (event) => {
//         alert('입력한 이름: ' + value);
//         event.preventDefault();
//     }
//
//     return(
//         <form onSubmit={handleSubmit}>
//             <label>
//                 과일을 선택하세요:
//                 <select value={value} onChange={handleChange}>
//                     <option value={"apple"}>사과</option>
//                     <option value={"banana"}>바나나</option>
//                     <option value={"grapes"}>포도</option>
//                     <option value={"melon"}>참외</option>
//                 </select>
//             </label>
//             <br/><br/>
//             <button type="submit">제출</button>
//         </form>
//     )
// }
//
// export default FruitSelect;


function FruitSelect(props) {
    const [value, setValue] = useState("apple");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        alert("선택한 과일: " + value);
        event.preventDefault();
    };

    return (
        <div className="fruit-form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fruit-select" className="form-label">
                         과일을 선택하세요
                    </label>
                    <select
                        id="fruit-select"
                        className="fruit-select"
                        value={value}
                        onChange={handleChange}
                    >
                        <option value="apple">사과</option>
                        <option value="banana">바나나</option>
                        <option value="grapes">포도</option>
                        <option value="melon">참외</option>
                    </select>
                </div>
                <button type="submit" className="submit-button">
                    제출
                </button>
            </form>
        </div>
    );
}

export default FruitSelect;