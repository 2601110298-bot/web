import React from "react";
import img1 from "./imgs/1.jpg"
import "./AttendanceCardBook.css"

// const students = [
//     {
//         id:1,
//         name: "Inje",
//         grade: 1,
//         major: "인공지능소프트웨어",
//         avatar:"https://randomuser.me/api/portraits/women/1.jpg"
//     },
//     {
//         id:2,
//         name: "Steve",
//         grade: 2,
//         major: "메카트로닉스",
//         avatar:"https://randomuser.me/api/portraits/women/2.jpg"
//     },
//     {
//         id:3,
//         name: "Bill",
//         grade: 1,
//         major: "인공지능소프트웨어",
//         avatar:"https://randomuser.me/api/portraits/women/3.jpg"
//     },
//     {
//         id:4,
//         name: "Jeff",
//         grade: 3,
//         major: "인공지능소프트웨어",
//         avatar: "https://randomuser.me/api/portraits/women/4.jpg"
//     },
//     {
//         id: 5,
//         name: "안유진",
//         grade: 4,
//         major: "스마트정보통신",
//         avatar: img1
//     },
//     {
//         id:6,
//         name: "김리즈",
//         grade: 1,
//         major: "메타버스콘텐츠",
//         avatar:"https://randomuser.me/api/portraits/women/6.jpg"
//     }
// ];
//
// function AttendanceCardBook() {
//     return(
//       <div>
//           <h2>학생 출석부</h2>
//           <div>
//               {students.map(student => (
//                   <div key={student.id}>
//                       <img src={student.avatar}/>
//                       <div>
//                           <h3>{student.name}</h3>
//                           <p>{student.grade}학년  | {student.major}</p>
//                       </div>
//                   </div>
//                   )
//               )
//               }
//           </div>
//       </div>
//     );
// }
//
// export default AttendanceCardBook;
//


const students = [
    {
        id: 1,
        name: "Inje",
        grade: 1,
        major: "인공지능소프트웨어",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        id: 2,
        name: "Steve",
        grade: 2,
        major: "메카트로닉스",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: "Bill",
        grade: 1,
        major: "인공지능소프트웨어",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
        id: 4,
        name: "Jeff",
        grade: 3,
        major: "인공지능소프트웨어",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        id: 5,
        name: "안유진",
        grade: 4,
        major: "스마트정보통신",
        avatar: img1,
    },
    {
        id: 6,
        name: "김리즈",
        grade: 1,
        major: "메타버스콘텐츠",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

function AttendanceCardBook() {
    return (
        <div className="attendance-container">
            <h2 className="attendance-title">📋 학생 출석부</h2>
            <div className="card-grid">
                {students.map((student) => (
                    <div key={student.id} className="student-card">
                        <img
                            src={student.avatar}
                            alt={`${student.name} 프로필`}
                            className="student-avatar"
                        />
                        <div className="student-info">
                            <h3 className="student-name">{student.name}</h3>
                            <p className="student-meta">
                                {student.grade}학년 | {student.major}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AttendanceCardBook;
