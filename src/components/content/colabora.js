import React, { Component } from "react";

class Colabora extends Component {
  render() {
    return (
      <div className="colabora">
        <div className="colabora__title">Colabora</div>
        <div className="colabora__comment">
          En Asociación Focazul hacemos de altavoz para ayudar a familias con
          enfermedades raras.
          <br />
          Todos los beneficios se donan a las causas a las que apoyamos.
          <br /> Colabora con nosotros para aportar tu granito de arena.
        </div>
        <div className="colabora__options">
          <div className="colabora__option">
            <div className="colabora__option__img">
              <img
                className="teaming-img"
                src="https://i.imgur.com/dz1bDc4.png"
              />
            </div>
            <div className="colabora__option__title">Teaming</div>
            <div className="colabora__option__description">
              Actualmente colaboramos con 13 familias y lideramos 2 grupos en la
              plataforma independiente Teaming.
              <br />
              <br /> Puedes colaborar con nosotros de manera directa aportando
              1€ al mes. Solos no podemos hacer mucho, pero si nos unimos,
              podemos conseguir grandes cosas.
            </div>
            <div className="colabora__option__link">
              <a
                className="colabora__option__button"
                href="https://www.teaming.net/artesaniafocazul"
                target="_blank"
              >
                Dona
              </a>
            </div>
          </div>
          <div className="colabora__option">
            <div className="colabora__option__img">
              <img
                className="artesania-img"
                src="https://i.imgur.com/1YmGWQL.png"
              />
            </div>
            <div className="colabora__option__title">Artesanía</div>
            <div className="colabora__option__description">
              La principal fuente de ingresos en Asociación Focazul llega de la
              venta de productos artesanos, donde el 100% de los beneficios van
              destinados a la causa.
              <br />
              <br /> Entra en nuestro Pinterest y no dudes en ponerte en
              contacto si cualquier producto llama tu atención.
            </div>
            <div className="colabora__option__link">
              <a
                className="colabora__option__button"
                href="https://www.pinterest.es/davidperezmartorell/"
                target="_blank"
              >
                Pinterest
              </a>
            </div>
          </div>
          <div className="colabora__option">
            <div className="colabora__option__img">
              <img className="tbs-img" src="https://i.imgur.com/UQTWdEl.png" />
            </div>
            <div className="colabora__option__title">The Best Sport</div>
            <div className="colabora__option__description">
              Nuestro patrocinador especializado en ropa deportiva y calzado de
              primeras marcas.
              <br />
              <br /> Toda compra realizada con nuestro código obtiene un 5% de
              descuento y otro 5% que se destina a las causas de Asociación
              Focazul.
              <div className="colabora__option__code">Código: FOCAZUL19BO</div>
            </div>

            <div className="colabora__option__link">
              <a
                className="colabora__option__button"
                href="https://thebestsport.es/"
                target="_blank"
              >
                The Best Sport
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Colabora;
