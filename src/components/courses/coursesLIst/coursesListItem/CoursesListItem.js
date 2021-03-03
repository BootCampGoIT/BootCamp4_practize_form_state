import React from "react";

const CoursesListItem = ({
  id,
  name,
  modulesCount,
  time,
  price,
  deleteCourse,
  avatar,
}) => {
  const deleteItem = () => {
    deleteCourse(id);
  };
  return (
    <li>
      <h2>{name}</h2>
      <img src={avatar} alt='avatar' />
      <p>Modules count: {modulesCount}</p>
      <p>Total time: {time}</p>
      <p>Price: {price}</p>
      <button type='button' onClick={deleteItem}>
        Delete
      </button>
    </li>
  );
};

export default CoursesListItem;
