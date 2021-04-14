import React, { Component } from "react";

import Socials from "../socials";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__aviso-legal">Aviso Legal</div>
        <div className="footer__rights">Asociación Focazul</div>
        <div className="footer__redes">
          <Socials
            className="footer__redes-twitter"
            href="https://twitter.com/davidpiura"
            icon="fab fa-twitter"
          />
          <Socials
            className="footer__redes-facebook"
            href="https://www.facebook.com/DavidPerezMartorell/"
            icon="fab fa-facebook-f"
          />
          <Socials
            className="footer__redes-pinterest"
            href="https://www.pinterest.es/davidperezmartorell/"
            icon="fab fa-pinterest-p"
          />
          <Socials
            className="footer__redes-youtube"
            href="https://www.youtube.com/channel/UCb2J_KAggnkiAvbsDZRMI7w"
            icon="fab fa-youtube"
          />
        </div>
      </div>
    );
  }
}

export default Footer;
