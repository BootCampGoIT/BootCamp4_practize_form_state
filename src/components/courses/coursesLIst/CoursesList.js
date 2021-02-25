import React from "react";
import CoursesListItem from "./coursesListItem/CoursesListItem";

const CoursesList = ({ courseList }) => {
  return (
    <ul className='list'>
      {courseList.map((course) => (
        <CoursesListItem {...course} key={course.id} />
      ))}
    </ul>
  );
};

export default CoursesList;
