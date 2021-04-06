import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__aviso-legal"> Aviso Legal</div>
        <div className="footer__rights">Asociación Focazul</div>
        <div className="footer__redes">
          <div className="footer__redes-siguenos">Síguenos: </div>
          <a
            className="footer__redes-twitter"
            href="https://twitter.com/davidpiura"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="footer__redes-facebook"
            href="https://www.facebook.com/DavidPerezMartorell/"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="footer__redes-pinterest"
            href="https://www.pinterest.es/davidperezmartorell/"
            target="_blank"
          >
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a
            className="footer__redes-youtube"
            href="https://www.youtube.com/channel/UCb2J_KAggnkiAvbsDZRMI7w"
            target="_blank"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
