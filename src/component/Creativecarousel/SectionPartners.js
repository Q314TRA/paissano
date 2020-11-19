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
                    <SplitText charPoses={charPoses}>Aliados</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Nuestro 
                    </SplitText>
                  </h2>
                  <h2 className="bold">
                    <SplitText charPoses={charPoses}>ECOSISTEMA</SplitText>
                  </h2>
                  <p> 
                  Hacemos parte del CLUSTER HEMP COLOMBIA, que corresponde a la gremiacion de iniciativas y empresas avocadas a transformar la percepcion y las dinamicas economicas y legales  del cannabis en Colombia, generando bienestar
                  </p>
                  <a href="#Contáctanos" className="see_btn" data-text="Conoce màs">
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
                    src={require("../../image/paissano/partners_3.png")}
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
