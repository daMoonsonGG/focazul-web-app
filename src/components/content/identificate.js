import React, { Component } from "react";

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

export default Identificate;
