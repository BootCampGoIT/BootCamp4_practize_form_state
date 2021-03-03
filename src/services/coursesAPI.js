import axios from "axios";
import { transformData } from "../utils/utils";

const getCourses = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_DATABASE_URL}/courses.json`
    );
    return response.data ? transformData(response.data) : [];
  } catch (error) {
    console.log(error);
  }
};

const addNewCourse = async (course) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_DATABASE_URL}/courses.json`,
      course
    );
    return response.data.name;
  } catch (error) {
    console.log(error);
  }
};

const deleteCourseById = async (id) => {
  try {
    return await axios.delete(
      `${process.env.REACT_APP_DATABASE_URL}/courses/${id}.json`
    );
  } catch (error) {
    console.log(error);
  }
};

export { getCourses, addNewCourse, deleteCourseById };
