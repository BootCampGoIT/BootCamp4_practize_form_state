import React, { Component } from "react";
import CoursesList from "./coursesLIst/CoursesList";
import { v4 as uuidv4 } from "uuid";
import CoursesForm from "./coursesForm/CoursesForm";
import axios from "axios";
import {
  getCourses,
  addNewCourse,
  deleteCourseById,
} from "../../services/coursesAPI";

class Courses extends Component {
  state = {
    courseList: [],
    isListOpen: false,
    str: "dfdsfsdgh",
  };

  componentDidMount() {
    getCourses().then((courseList) => this.setState({ courseList }));
  }

  addCourse = (course) => {
    addNewCourse(course).then((id) =>
      this.setState((prevState) => ({
        courseList: [...prevState.courseList, { ...course, id }],
      }))
    );
  };

  onHandleOpen = () => {
    this.setState((prev) => ({ isListOpen: !prev.isListOpen }));
  };

  deleteCourse = (id) => {
    deleteCourseById(id).then(() =>
      this.setState((prev) => ({
        courseList: [...prev.courseList.filter((course) => course.id !== id)],
      }))
    );
  };

  render() {
    console.log("render");
    return (
      <>
        <CoursesForm addCourse={this.addCourse} />

        <CoursesList
          courseList={this.state.courseList}
          deleteCourse={this.deleteCourse}
        />
      </>
    );
  }
}

export default Courses;

// import React, { Component } from "react";

// import React, { useState, useEffect } from "react";

// import CoursesList from "./coursesLIst/CoursesList";
// import { v4 as uuidv4 } from "uuid";
// import CoursesForm from "./coursesForm/CoursesForm";
// // import axios from "axios";

// const initialState = {
//   courseList: [],
//   isListOpen: false,
// };

// const Courses = () => {
//   const [state, setState] = useState({ ...initialState });

//   useEffect(() => {
//     const courses = JSON.parse(localStorage.getItem("courses"));
//     setState((prev) => ({ ...prev, courseList: [...courses] }));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("courses", JSON.stringify(state.courseList));
//   }, [state.courseList]);

//   const addCourse = (course) => {
//     setState((prevState) => ({
//       ...prevState,
//       courseList: [...prevState.courseList, { ...course, id: uuidv4() }],
//     }));
//   };

//   return (
//     <div>
//       <CoursesForm addCourse={addCourse} />
//       <CoursesList courseList={state.courseList} />
//     </div>
//   );
// };

// export default Courses;

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
