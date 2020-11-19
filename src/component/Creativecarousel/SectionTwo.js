import React, { Component } from "react";
import SplitText from "react-pose-text";
import "./style.scss";

const charPoses = {};

class SectionTwo extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content slider_content_two">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Seguridad</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Consume tranquilidad
                    </SplitText>
                  </h2>
                  {/* <h2 className="bold">
                    <SplitText charPoses={charPoses}>Frelencer</SplitText>
                  </h2> */}
                  <p>
                    Contacta a los mejores cultivadores, con los mejores insumos, para disfrutar el mejor cannabis.
                  </p>
                  <a href="#Contactanos" className="see_btn" data-text="Conoce màs">
                    Conoce màs
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
                    src={require("../../image/paissano/tranquilidad.jpg")}
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

export default SectionTwo;
