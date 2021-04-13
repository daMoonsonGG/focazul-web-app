import React, { Component } from "react";

import history from "../../history";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img
          className="header__logo"
          src="https://i.imgur.com/KLZ5dsD.png"
          onClick={() => history.push("/")}
        />
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
          onClick={() => history.push("/identificate")}
        >
          Identifícate
        </a>
      </div>
    );
  }
}

export default Header;
