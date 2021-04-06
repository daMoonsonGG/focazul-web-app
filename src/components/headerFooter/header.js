import React, { Component } from "react";

import history from "../../history";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo" src="http://via.placeholder.com/60x60" />
        <div className="header__middle-links">
          <a className="header__middle-link" onClick={() => history.push("/")}>
            Qué hacemos
          </a>
          <a
            className="header__middle-link"
            onClick={() => history.push("/colabora")}
          >
            Colabora
          </a>
          <a
            className="header__middle-link"
            onClick={() => history.push("/teatro")}
          >
            Teatro
          </a>
          <a
            className="header__middle-link"
            onClick={() => history.push("/patrocinadores")}
          >
            Patrocinadores
          </a>
        </div>
        <a
          className="header__right-link"
          onClick={() => history.push("/patrocinadores")}
        >
          Blog
        </a>
      </div>
    );
  }
}

export default Header;
