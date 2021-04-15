import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "./formFields";

import history from "../history";
import axios from "axios";

class IdentificateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      status: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    axios.get("http://localhost:4000/users/0").then((response) => {
      if (
        response.data.user.email === this.state.email &&
        response.data.user.password === this.state.password
      ) {
        this.setState({
          status: true,
        });
        history.push("/patrocinadores");
      } else {
        this.setState({
          status: false,
        });
        console.log(this.state.status);
      }
    });
    event.preventDefault();
  };
  render() {
    const { className } = this.props;
    return (
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
    );
  }
}

IdentificateForm = reduxForm({
  form: "IdentificateForm",
})(IdentificateForm);

export default IdentificateForm;
