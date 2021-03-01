import React, { useState } from "react";

const initialState = {
  name: "",
  modulesCount: 0,
  time: 0,
  price: 0,
};

const CoursesForm = ({ addCourse }) => {
  const [values, setValues] = useState({ ...initialState });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addCourse(values);
    setValues({ ...initialState });
  };

  const onHandleClick = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <form onSubmit={onHandleSubmit}>
      {/* <div>
        {isModalOpen && <h2>Hello</h2>}
        <button type="button" onClick={onHandleClick}>{isModalOpen ? "Hide" : "Show"}</button>
      </div> */}
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={values.name}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Modules count:
        <input
          type='number'
          name='modulesCount'
          value={values.modulesCount}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Total time:
        <input
          type='number'
          name='time'
          value={values.time}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Price:
        <input
          type='number'
          name='price'
          value={values.price}
          onChange={onHandleChange}
        />
      </label>
      <button type='submit'>Add course</button>
    </form>
  );
};

export default CoursesForm;

// import React, { Component } from "react";

// const initialState = {
//   name: "",
//   modulesCount: 0,
//   time: 0,
//   price: 0,
// };

// class CoursesForm extends Component {
//   state = { ...initialState };

//   onHandleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   onHandleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addCourse(this.state);
//     this.setState({ ...initialState });
//   };

//   render() {
//     const { name, modulesCount, time, price } = this.state;
//     return (
//       <form onSubmit={this.onHandleSubmit}>
//         <label>
//           Name:
//           <input
//             type='text'
//             name='name'
//             value={name}
//             onChange={this.onHandleChange}
//           />
//         </label>
//         <label>
//           Modules count:
//           <input
//             type='number'
//             name='modulesCount'
//             value={modulesCount}
//             onChange={this.onHandleChange}
//           />
//         </label>
//         <label>
//           Total time:
//           <input
//             type='number'
//             name='time'
//             value={time}
//             onChange={this.onHandleChange}
//           />
//         </label>
//         <label>
//           Price:
//           <input
//             type='number'
//             name='price'
//             value={price}
//             onChange={this.onHandleChange}
//           />
//         </label>
//         <button type='submit'>Add course</button>
//       </form>
//     );
//   }
// }

// export default CoursesForm;
