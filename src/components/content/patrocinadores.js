import React, { Component } from "react";

import Patrocinador from "../patrocinador";

class Patrocinadores extends Component {
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
            <Patrocinador
              className="patrocinadores__patrocinador"
              href="#"
              src="https://i.imgur.com/1h1Snmk.jpg"
            />
            <Patrocinador
              className="patrocinadores__patrocinador"
              href="https://vypgestion.es/"
              src="https://i.imgur.com/fAaVaQH.png"
            />
            <Patrocinador
              className="patrocinadores__patrocinador"
              href="#"
              src="https://i.imgur.com/1h1Snmk.jpg"
            />
            <Patrocinador
              className="patrocinadores__patrocinador"
              href="https://vypgestion.es/"
              src="https://i.imgur.com/fAaVaQH.png"
            />
            <Patrocinador
              className="patrocinadores__patrocinador"
              href="#"
              src="https://i.imgur.com/1h1Snmk.jpg"
            />
            <Patrocinador
              className="patrocinadores__patrocinador"
              href="https://vypgestion.es/"
              src="https://i.imgur.com/fAaVaQH.png"
            />
            <Patrocinador
              className="patrocinadores__patrocinador"
              href="#"
              src="https://i.imgur.com/1h1Snmk.jpg"
            />
            <Patrocinador
              className="patrocinadores__patrocinador"
              href="https://vypgestion.es/"
              src="https://i.imgur.com/fAaVaQH.png"
            />
            <Patrocinador
              className="patrocinadores__patrocinador"
              href="#"
              src="https://i.imgur.com/1h1Snmk.jpg"
            />
            <Patrocinador
              className="patrocinadores__patrocinador"
              href="https://vypgestion.es/"
              src="https://i.imgur.com/fAaVaQH.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Patrocinadores;
