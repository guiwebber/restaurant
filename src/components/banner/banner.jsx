import React from "react";
import './banner.css'
function banner() {
  return (
    <div className="banner maxWidth">
      <div className="textoBanner">
        <h1 className="h1Banner">Restaurant</h1>
        <p className="pBanner">
          De pratos clássicos a criações surpreendentes,
          <br /> nosso cardápio é um requinte de sabores <br />
          refinados.
        </p>
      </div>
    </div>
  );
}

export default banner;
