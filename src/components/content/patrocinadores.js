import React, { Component } from "react";

import axios from "axios";

import Patrocinador from "../patrocinador";

class Patrocinadores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patrocinadores: [],
      userStatus: "NOT_LOGGED_IN",
    };
  }
  componentDidMount() {
    axios.get("http://localhost:4000/patrocinadores").then((res) => {
      const patrocinadores = res.data;
      this.setState(patrocinadores);
    });
    axios.get("http://localhost:4000/users/logged-users/0").then((response) => {
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
  clickToDelete() {}

  render() {
    return (
      <div className="patrocinadores">
        <div className="patrocinadores__title">Patrocinadores</div>
        <div className="patrocinadores__comment">
          Múltiples empresas y profesionales han colaborado y/o colaboran con la
          misión de Asociación Focazul.
          <br /> Desde aquí queremos agradecer todo el apoyo recibido e
          invitaros a explorar su trabajo.
          <br /> Si tienes un negocio y quieres ser partícipe, no dudes en
          ponerte en{" "}
          <a className="contacto" href="#">
            contacto
          </a>{" "}
          con nosotros.
        </div>
        <div className="patrocinadores__patrocinadores">
          <div className="patrocinadores__sponsored-patrocinador">
            <a href="https://thebestsport.es/" target="_blank">
              <img
                className="sponsored-img"
                src="https://i.imgur.com/mInulVS.png"
              />
            </a>
            <div className="sponsored-code">Código: FOCAZUL19BO</div>
            <div className="sponsored-description">
              Un 5% de descuento y otro 5% destinado a la Asociación.
            </div>
          </div>
          <div className="patrocinadores__grupo">
            {this.state.patrocinadores.map((patrocinador) => (
              <Patrocinador
                key={patrocinador._id}
                id={patrocinador._id}
                className="patrocinadores__patrocinador"
                href={patrocinador.href}
                src={patrocinador.img_src}
                hoverIcon={
                  this.state.userStatus === "LOGGED_IN" ? (
                    <i className="fas fa-trash"></i>
                  ) : null
                }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Patrocinadores;
