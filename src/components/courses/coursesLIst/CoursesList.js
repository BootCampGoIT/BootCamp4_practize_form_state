import React from "react";
import CoursesListItem from "./coursesListItem/CoursesListItem";

const CoursesList = ({ courseList, deleteCourse }) => {
  return (
    <ul className='list'>
      {courseList.map((course) => (
        <CoursesListItem {...course} key={course.id} deleteCourse={deleteCourse} />
      ))}
    </ul>
  );
};

export default CoursesList;
