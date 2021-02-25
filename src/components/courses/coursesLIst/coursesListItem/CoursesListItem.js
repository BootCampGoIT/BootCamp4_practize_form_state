import React from "react";

const CoursesListItem = ({ id, name, modulesCount, time, price }) => {
  return (
    <li>
      <h2>{name}</h2>
      <p>Modules count: {modulesCount}</p>
      <p>Total time: {time}</p>
      <p>Price: {price}</p>
    </li>
  );
};

export default CoursesListItem;
