import React, { Component } from "react";
import CoursesList from "./coursesLIst/CoursesList";
import { v4 as uuidv4 } from "uuid";
import CoursesForm from "./coursesForm/CoursesForm";
import axios from "axios";

class Courses extends Component {
  state = {
    courseList: [
      {
        id: "dfjghkjv",
        name: "React",
        modulesCount: 16,
        time: 240,
        price: 1221,
      },
    ],
    isListOpen: false,
  };

  addCourse = (course) => {
    this.setState((prevState) => ({
      courseList: [...prevState.courseList, { ...course, id: uuidv4() }],
    }));
    // axios.post(
    //   `https://helloworld-ddee3-default-rtdb.firebaseio.com/courses1.json`,
    //   course
    // );
  };
  // getCourses = () => {
  //   axios
  //     .get(`https://helloworld-ddee3-default-rtdb.firebaseio.com/courses1.json`)
  //     .then((response) =>
  //       this.setState((prevState) => ({
  //         courseList: [
  //           ...prevState.courseList,
  //           ...Object.keys(response.data).map((key) => ({
  //             id: key,
  //             ...response.data[key],
  //           })),
  //         ],
  //       }))
  //     );
  // };

  render() {
    return (
      <div>
        <CoursesForm addCourse={this.addCourse} />
        <CoursesList courseList={this.state.courseList} />
        <button type='button' onClick={this.getCourses}>
          Get courses
        </button>
      </div>
    );
  }
}

export default Courses;

console.dir(Component);
