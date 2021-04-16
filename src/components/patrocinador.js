import React, { Component } from "react";

import axios from "axios";

class Patrocinador extends Component {
  onClick = () => {
    axios
      .delete(`http://localhost:4000/patrocinadores/${this.props.id}`)
      .then((response) => {
        window.location.reload(true);
      });
  };
  render() {
    const { className, href, src, hoverIcon = "" } = this.props;

    return (
      <div>
        <button className="delete-btn" onClick={this.onClick}>
          {hoverIcon}
        </button>
        <div className={`${className} patrocinador`}>
          <a className="patrocinador__a" href={href} target="_blank">
            <img className="patrocinador__img" src={src} />
          </a>
        </div>
      </div>
    );
  }
}

export default Patrocinador;
