import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "./formFields";

import history from "../history";

class IdentificateForm extends Component {
  handleClick = () => {
    history.push("/");
  };
  render() {
    const { className } = this.props;
    return (
      <form className={`${className} identificate__form`}>
        <Field
          className="identificate__form__email"
          type="email"
          title="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="identificate__form__password"
          type="password"
          title="Password"
          name="password"
          component={FormInput}
        />
        <Field
          className="identificate__form__btn"
          name="btn"
          title="Conectar"
          type="submit"
          onClick={this.handleClick}
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
