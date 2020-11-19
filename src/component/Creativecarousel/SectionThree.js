import React, { Component } from "react";
import SplitText from "react-pose-text";
import "./style.scss";

const charPoses = {};
class SectionThree extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble section_one">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content slider_content_three">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Bienestar</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Consume bienestar
                    </SplitText>
                  </h2>
                  <p>
                    {/* Trazamos todo el proceso de cultivo, para brindar, la mayor tranquilidad posible sobre tu planta. */}
                    
                    Brindamos acceso a un equipo de doctores especialistas, expertos en tratamientos con cannabis.

                    {/* Trazamos todo el proceso de cultivo, para brindar, la mayor tranquilidad posible sobre tu planta. */}
                  </p>
                  <a href="#Contactanos" className="see_btn" data-text="Conoce más">
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
                    src={require("../../image/paissano/bienestar.jpg")}
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

export default SectionThree;
