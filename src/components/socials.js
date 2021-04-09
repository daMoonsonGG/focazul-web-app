import React, { Component } from "react";

class Socials extends Component {
  render() {
    const { className, icon, href } = this.props;
    return (
      <a
        className={`${className} socials`}
        href={href}
        target="_blank"
        icon={icon}
      >
        <i className={icon}></i>
      </a>
    );
  }
}

export default Socials;
