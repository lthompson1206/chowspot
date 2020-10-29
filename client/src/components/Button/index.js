import React, { Component } from "react";
// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

// class Button extends Component {
//   render() {
//     return (
//       <button id="roundButton"
//               onMouseDown={this.props.handleMouseDown}></button>
//     );
//   }
// }

export default Button;
