import React, { Component } from "react";
import SplitText from "react-pose-text";
const charPoses = {};

class SectionOne extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble section_one">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Paissano</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Consume recreativo
                    </SplitText>
                  </h2>
                  <p>
                    Somos una alternativa al consumo recreativo responsable.
                  </p>
                  <a href="#Contactanos" className="see_btn" data-text="Conoce màs">
                    Conoce más
                    <span className="arrow">
                      <span className="line"></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider_image_inner">
                  <span></span>
                  <img
                    src={require("../../image/new-page/slider_img1.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionOne;
