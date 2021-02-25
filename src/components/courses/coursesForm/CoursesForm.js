import React, { Component } from "react";

const initialState = {
  name: "",
  modulesCount: 0,
  time: 0,
  price: 0,
};

class CoursesForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addCourse(this.state);
    this.setState({ ...initialState });
  };

  render() {
    const { name, modulesCount, time, price } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Modules count:
          <input
            type='number'
            name='modulesCount'
            value={modulesCount}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Total time:
          <input
            type='number'
            name='time'
            value={time}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Price:
          <input
            type='number'
            name='price'
            value={price}
            onChange={this.onHandleChange}
          />
        </label>
        <button type='submit'>Add course</button>
      </form>
    );
  }
}

export default CoursesForm;
