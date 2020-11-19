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
                    <SplitText charPoses={charPoses}>Paissano</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Consume sano
                       {/* al entregar un ecosistema justo, licito y trazable  */}
                      {/* Creamos bienestar al entregar un ecosistema justo, licito y trazable  */}
                      {/* Legalidad & Cannabis
                      tranquilidad
                      bienestar

                      igualdad */}
                    </SplitText>
                  </h2>
                  {/* <h2 className="bold">
                    <SplitText charPoses={charPoses}>Frelencer</SplitText>
                  </h2> */}
                  <p>
                    {/* Somos una alternativa al consumo responsable de cannabis, a través del ejercicio de la tercerización del autocultivo. */}
                    Paissano es una aplicacion que busca promover el consumo responsable de cannabis, a través del ejercicio del autocultivo local o tercerizado.
                    {/* Creamos bienestar al entregar un ecosistema justo, licito y trazable  */}
                  </p>

                  <Link to="/nosotros" className="see_btn" data-text="Conoce màs">
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
                    src={require("../../image/paissano/weed_3.jpg")}
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
