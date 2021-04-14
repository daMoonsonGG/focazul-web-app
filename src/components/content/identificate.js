import React, { Component } from "react";

import { reduxForm } from "redux-form";

import IdentificateForm from "../identificateForm";

class Identificate extends Component {
  render() {
    return (
      <div className="identificate">
        <div className="identificate__title">Identifícate</div>
        <IdentificateForm className="identificate__form" />
      </div>
    );
  }
}

Identificate = reduxForm({
  form: "Identificate",
})(Identificate);

export default Identificate;
