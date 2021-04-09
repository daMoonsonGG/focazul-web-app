import React, { Component } from "react";

import Link from "./link";

class OpcionColabora extends Component {
  render() {
    const {
      className,
      src,
      title,
      description,
      code,
      linkClassName,
      href,
      linkTitle,
    } = this.props;
    return (
      <div className={`${className} opcion-colabora`}>
        <div className="opcion-colabora__img">
          <img src={src} />
        </div>
        <div className="opcion-colabora__title" title={title}>
          {title}
        </div>
        <div className="opcion-colabora__description" description={description}>
          {description}
        </div>
        <div className="opcion-colabora__code" code={code || ""}>
          {code}
        </div>
        <Link
          className={`${linkClassName} opcion-colabora__link`}
          href={href}
          title={linkTitle}
        />
      </div>
    );
  }
}

export default OpcionColabora;
