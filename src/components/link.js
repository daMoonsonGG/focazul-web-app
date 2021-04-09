import React, { Component } from "react";

class Link extends Component {
  render() {
    const { className, href, title } = this.props;
    return (
      <a
        className={`${className} link`}
        href={href}
        target="_blank"
        title={title}
      >
        {title}
      </a>
    );
  }
}

export default Link;
