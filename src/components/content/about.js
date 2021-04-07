import React, { Component } from "react";

import history from "../../history";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about__img-btn">
          <img className="about__img" src="https://i.imgur.com/NVIKiOZ.png" />
          <button
            className="colabora-btn"
            onClick={() => history.push("/colabora")}
          >
            Colabora
          </button>
        </div>
        <span className="about__info">
          ¡Hola amigos! Asociación Focazul es una asociación declarada sin ánimo
          de lucro. En sus estatutos se define como donante de familias con
          enfermedades raras financiándose con artesanías, actividades
          artísticas o cualquier otra relacionada con el ecologismo. Además,
          recibe aportaciones de sus socios afiliados. En la actualidad estamos
          realizando donaciones a 12 familias a través de la plataforma
          Teaming.net. <br />
          <br />
          Asociación Focazul publica sus cuentas en la página web oficial y es
          abierta a cualquier propuesta y petición que se le haga. Está dada de
          alta como Asociación sin ánimo de lucro en el estado español y tiene
          NIF con el que poder realizar facturas.
        </span>
      </div>
    );
  }
}

export default About;
