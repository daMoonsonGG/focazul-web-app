import React, { Component } from "react";

import Header from "./headerFooter/header";
import Footer from "./headerFooter/footer";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
