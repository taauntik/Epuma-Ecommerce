import React from "react";

// internal imports
import { Banner as Container } from "../../../styles/Home/Banner/Banner.styles";
import { ComponentWrapper } from "../../common/ComponentWrapper";

function Banner() {
  return (
    <ComponentWrapper>
      <Container>
        <div className="banner">
          <div className="banner-info">
            <h1 className="title">Xbox Series X & S</h1>
            <br />
            <h2 className="subtitle">Pre-order Now</h2>
            <p className="description">Quantity of goods is limited!</p>
            <button className="explore-btn">Explore More</button>
          </div>
          <img
            src="https://tech-demo.scandipwa.com/media/scandiweb/slider/s/l/slider-xbox.png"
            className="banner-image"
            alt=""
          />
        </div>
      </Container>
    </ComponentWrapper>
  );
}

export default Banner;
