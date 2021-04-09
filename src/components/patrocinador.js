import React, { Component } from "react";

class Patrocinador extends Component {
  render() {
    const { className, href, src } = this.props;
    return (
      <div className={`${className} patrocinador`}>
        <a className="patrocinador__a" href={href} target="_blank">
          <img className="patrocinador__img" src={src} />
        </a>
      </div>
    );
  }
}

export default Patrocinador;
