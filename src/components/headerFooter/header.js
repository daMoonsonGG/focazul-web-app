import React, { Component } from "react";

import axios from "axios";

import history from "../../history";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userStatus: "NOT_LOGGED_IN",
    };
  }
  componentDidMount() {
    axios
      .get("https://damoonsongg.pythonanywhere.com/users/logged-users/0")
      .then((response) => {
        if (response.data.message === "Usuario conectado") {
          if (response.data.user.status === "logged") {
            this.setState({
              userStatus: "LOGGED_IN",
            });
          } else {
            this.setState({
              userStatus: "NOT_LOGGED_IN",
            });
          }
        }
      });
  }
  handleLogOut() {
    axios
      .delete("https://damoonsongg.pythonanywhere.com/users/logged-users/0")
      .then((response) => {
        window.location.reload(true);
      });
  }
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
        <div className="header__right-link">
          {this.state.userStatus === "LOGGED_IN" ? (
            <a className="header__right-link" onClick={this.handleLogOut}>
              <i className="fas fa-sign-out-alt"></i>
              Desconectar
            </a>
          ) : (
            <a
              className="header__right-link"
              onClick={() => history.push("/identificate")}
            >
              Identifícate
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
