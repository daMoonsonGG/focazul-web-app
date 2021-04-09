import React, { Component } from "react";

import OpcionColabora from "../opcionColabora";

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
          <OpcionColabora
            className="colabora__option"
            src="https://i.imgur.com/dz1bDc4.png"
            title="Teaming"
            description="Actualmente colaboramos con 13 familias y lideramos 2 grupos en la
              plataforma independiente Teaming.Puedes colaborar con nosotros de manera directa aportando
              1€ al mes. Solos no podemos hacer mucho, pero si nos unimos,
              podemos conseguir grandes cosas."
            linkClassName="colabora__option__link"
            href="https://www.teaming.net/artesaniafocazul"
            linkTitle="Dona"
          />
          <OpcionColabora
            className="colabora__option"
            src="https://i.imgur.com/1YmGWQL.png"
            title="Artesanía"
            description="
            La principal fuente de ingresos en Asociación Focazul llega de la
            venta de productos artesanos, donde el 100% de los beneficios van
            destinados a la causa. Entra en nuestro Pinterest y no dudes en ponerte en
            contacto si cualquier producto llama tu atención."
            linkClassName="colabora__option__link"
            href="https://www.pinterest.es/davidperezmartorell/"
            linkTitle="Pinterest"
          />
          <OpcionColabora
            className="colabora__option"
            src="https://i.imgur.com/UQTWdEl.png"
            title="The Best Sport"
            description="Nuestro patrocinador especializado en ropa deportiva y calzado de
            primeras marcas. Toda compra realizada con nuestro código obtiene un 5% de
            descuento y otro 5% que se destina a las causas de Asociación
            Focazul."
            code="Código: FOCAZUL19BO"
            linkClassName="colabora__option__link"
            href="https://thebestsport.es/"
            linkTitle="The Best Sport"
          />
        </div>
      </div>
    );
  }
}

export default Colabora;
