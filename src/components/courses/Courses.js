// import React, { Component } from "react";
// import CoursesList from "./coursesLIst/CoursesList";
// import { v4 as uuidv4 } from "uuid";
// import CoursesForm from "./coursesForm/CoursesForm";
// import axios from "axios";

// class Courses extends Component {
//   state = {
//     courseList: [],
//     isListOpen: false,
//   };

//   componentDidMount() {
//     if (localStorage.getItem("courses")) {
//       const courses = JSON.parse(localStorage.getItem("courses"));
//       this.setState({ courseList: [...courses] });
//     }
//     return;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     localStorage.setItem("courses", JSON.stringify(this.state.courseList));
//   }

//   componentWillUnmount() {

//   }

//   addCourse = (course) => {
//     this.setState((prevState) => ({
//       courseList: [...prevState.courseList, { ...course, id: uuidv4() }],
//     }));
//   };
//   onHandleOpen = () => {
//     this.setState((prev) => ({ isListOpen: !prev.isListOpen }));
//   };

//   // componentWillMount() {
//   //   console.log("before render");
//   //   this.setState({ courseList: [] });
//   // }

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <CoursesForm addCourse={this.addCourse} />
//         <button type='button' onClick={this.onHandleOpen}>
//           Show list
//         </button>
//         {this.state.isListOpen && (
//           <CoursesList courseList={this.state.courseList} />
//         )}
//       </div>
//     );
//   }
// }

// export default Courses;

// import React, { Component } from "react";

import React, { useState, useEffect } from "react";

import CoursesList from "./coursesLIst/CoursesList";
import { v4 as uuidv4 } from "uuid";
import CoursesForm from "./coursesForm/CoursesForm";
// import axios from "axios";

const initialState = {
  courseList: [],
  isListOpen: false,
};

const Courses = () => {
  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem("courses"));
    setState((prev) => ({ ...prev, courseList: [...courses] }));
  }, []);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(state.courseList));
  }, [state.courseList]);

  const addCourse = (course) => {
    setState((prevState) => ({
      ...prevState,
      courseList: [...prevState.courseList, { ...course, id: uuidv4() }],
    }));
  };

  return (
    <div>
      <CoursesForm addCourse={addCourse} />
      <CoursesList courseList={state.courseList} />
    </div>
  );
};

export default Courses;

// // console.dir(Component);

// // const arr = [1, 25, 3, 4, 1, 2, 3, 1, 2, 2];
// // const strArr = ["dfghjk", "fghjk", "rtdfyguh", "rtfyguh", "dfghjk"];
// // const set = [...new Set(strArr)];

// // console.log("set", set);

// const arr = [1, 2, 3, 4];
// const newArr = [...arr];
// console.log("newArr === arr", newArr === arr);
// arr[0] = 5;
// console.log("newArr", newArr);
// console.log("arr", arr);
