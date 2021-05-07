import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "./formFields";

import axios from "axios";
import history from "../history";

class IdentificateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: "",
      },
      userStatus: "NOT_LOGGED_IN",
      loginError: "NOT_LOGIN_ERROR",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://damoonsongg-focazul-flask-9483.zeet.app/users/logged-users/0"
      )
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    axios
      .get("https://damoonsongg-focazul-flask-9483.zeet.app/users/0")
      .then((response) => {
        if (
          response.data.user.email === this.state.email &&
          response.data.user.password === this.state.password
        ) {
          axios
            .post(
              "https://damoonsongg-focazul-flask-9483.zeet.app/users/logged-users",
              {
                name: response.data.user.name,
                email: response.data.user.email,
              }
            )
            .then((response) => {
              if (response.data.message === "Usuario conectado") {
                axios
                  .get(
                    "https://damoonsongg-focazul-flask-9483.zeet.app/users/logged-users/0"
                  )
                  .then((response) => {
                    if (response.data.user.status === "logged") {
                      this.setState({
                        userStatus: "LOGGED_IN",
                        triedToLogin: "NOT_LOGIN_ERROR",
                      });

                      window.location.reload(true);
                    }
                  });
              } else {
                console.log("Error al conectar");
              }
            });
        } else {
          this.setState({
            userStatus: "NOT_LOGGED_IN",
            loginError: "LOGIN_ERROR",
          });
        }
      });
    event.preventDefault();
  };
  render() {
    const { className } = this.props;
    return (
      <div className="identificate__form-form">
        <div className="login-error-msg">
          {this.state.loginError === "NOT_LOGIN_ERROR" ? null : (
            <div>
              Error en email o contraseña. <br />
              Inténtelo de nuevo o póngase en contacto con el administrador.
            </div>
          )}
        </div>
        <div>
          {this.state.userStatus === "LOGGED_IN" ? (
            <div className="identificate__identificado">
              Te encuentras conectado. <br /> ¿Deseas editar los{" "}
              <a
                className="identificate__identificado__patrocinadores"
                onClick={() => {
                  history.push("/patrocinadores");
                }}
              >
                Patrocinadores
              </a>
              ?
            </div>
          ) : (
            <form
              className={`${className} identificate__form`}
              onSubmit={this.handleSubmit}
            >
              <Field
                className="identificate__form__email"
                type="email"
                title="Email"
                name="email"
                component={FormInput}
                onChange={this.handleChange}
              />
              <Field
                className="identificate__form__password"
                type="password"
                title="Password"
                name="password"
                defaultValue="jeje"
                component={FormInput}
                onChange={this.handleChange}
              />
              <Field
                className="identificate__form__btn"
                name="btn"
                title="Conectar"
                type="submit"
                component={FormButton}
              />
            </form>
          )}
        </div>
      </div>
    );
  }
}

IdentificateForm = reduxForm({
  form: "IdentificateForm",
})(IdentificateForm);

export default IdentificateForm;
