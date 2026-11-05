import React from "react";
import "./AttendanceBook.css"

const students = [
    {
        name: "Inje",
    },
    {
        name: "Steve",
    },
    {
        name: "Bill",
    },
    {
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return(
        <ul>
            {students.map((student) => {
              return <li>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;

// const students = [
//     { id: 1, name: "Inje" },
//     { id: 2, name: "Steve" },
//     { id: 3, name: "Bill" },
//     { id: 4, name: "Jeff" },
// ];
//
// function AttendanceBook(props) {
//     return (
//         <div className="attendance-container">
//             <h2 className="attendance-title">📋 출석부</h2>
//             <ul className="attendance-list">
//                 {students.map((student) => {
//                     return (
//                         <li key={student.id} className="attendance-item">
//                             {student.name}
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// }
//
// export default AttendanceBook;