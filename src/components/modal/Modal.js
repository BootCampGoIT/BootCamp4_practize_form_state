import React, { useState, useEffect } from "react";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onHandleClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {});

  return (
    <div>
      {isModalOpen && <h2>Hello</h2>}
      <button onClick={onHandleClick}>{isModalOpen ? "Hide" : "Show"}</button>
    </div>
  );
};

export default Modal;

// import React, { Component } from "react";

// class Modal extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   onHandleClick = () => {
//     this.setState((prev) => ({
//       isModalOpen: !prev.isModalOpen,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         {this.state.isModalOpen && <h2>Hello</h2>}
//         <button onClick={this.onHandleClick}>
//           {this.state.isModalOpen ? "Hide" : "Show"}
//         </button>
//       </div>
//     );
//   }
// }

// export default Modal;
