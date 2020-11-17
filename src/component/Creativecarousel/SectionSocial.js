import React, { Component } from "react";
import SplitText from "react-pose-text";
import "./style.scss";
import { Link } from "react-router-dom";

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
                    <SplitText charPoses={charPoses}>Impacto</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                    Ayuda a una familia
                      {/* Queremos generar el mayor bienestar posible a la communidad */}
                    </SplitText>
                  </h2>
                  {/* <h2 className="bold">
                    <SplitText charPoses={charPoses}>Frelencer</SplitText>
                  </h2> */}
                  <p>
                  Tu planta sera cultivada por manos campesinas capacitadas en los mejores metodos de cultivo, con la mejor trazabilidad y el mejor control de caliad.
                  </p>
                  <Link to="/impacto" className="see_btn" data-text="Conoce màs">
                    Conoce màs
                    <span className="arrow">
                      <span className="line"></span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider_image_inner">
                  <span></span>
                  <img
                    src={require("../../image/new-page/slider_img2.jpg")}
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
