import React, { Component } from "react";

class Button extends Component {
  render() {
    const { className, onClick, title } = this.props;
    return (
      <button className={`${className} button`} onClick={onClick} title={title}>
        {title}
      </button>
    );
  }
}

export default Button;
