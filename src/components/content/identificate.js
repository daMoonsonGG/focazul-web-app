import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "../formFields";

class Identificate extends Component {
  handleSubmit = () => {
    console.log("jsajdasd");
  };
  render() {
    return (
      <div className="identificate">
        <div className="identificate__title">Identifícate</div>
        <div className="identificate__credentials">
          <form onSubmit={this.handleSubmit} className="identificate__form">
            <Field
              className="identificate__form__email"
              name="email"
              title="Email"
              type="email"
              placeholder=""
              component={FormInput}
            />
            <Field
              className="identificate__form__password"
              name="password"
              title="Contraseña"
              type="password"
              placeholder=""
              component={FormInput}
            />
            <Field
              className="identificate__form__btn"
              name="conectar"
              title="Conectar"
              type="submit"
              component={FormButton}
            />
          </form>
        </div>
        <div className="identificate__credentials__password"></div>
      </div>
    );
  }
}

Identificate = reduxForm({
  form: "Identificate",
})(Identificate);

export default Identificate;
