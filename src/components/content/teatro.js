import React, { Component } from "react";

import Link from "../link";

class Teatro extends Component {
  render() {
    return (
      <div className="teatro">
        <div className="teatro__text-group">
          <div className="teatro__text-group__title">
            Teatro: <br />
            El Cafetín de Oro
          </div>
          <div className="teatro__text-group__content">
            El cafetín de oro nace de la idea de publicar una obra de teatro de
            humor con 1 solo artista y varios personajes en el escenario. <br />
            <br />
            Podréis ver como es una cafetería desde el punto de vista de los
            camareros, esos misteriosos habitantes que no escuchan nuestras
            llamadas de atención.
            <br />
            <br /> Un mundo oculto y distante se abrirá paso ante vosotros
            caminado con una retahíla de chistes.
            <br />
            <br /> ¡Espero que os lo paséis muy bien!
            <br />
            <br /> Todos los beneficios son para Asociación Focazul. Los
            principales destinatarios son familias con enfermedades raras, lucha
            por el ecologismo y empoderamiento de las personas. Defiende los
            derechos humanos.
          </div>
          <div className="teatro__text-group__buttons">
            <Link
              className="teatro__text-group__button"
              href="https://www.youtube.com/channel/UCb2J_KAggnkiAvbsDZRMI7w"
              title="Funciones"
            />
            <Link
              className="teatro__text-group__button"
              href="https://www.asociacionfocazul.com/elcafetindeoro/"
              title="Web"
            />
          </div>
        </div>
        <div className="teatro__img-group">
          <img
            className="teatro__img"
            src="https://i.imgur.com/g4yqKYd.jpg"
          ></img>
        </div>
      </div>
    );
  }
}

export default Teatro;
