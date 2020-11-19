import React, { Component } from "react";
import SplitText from "react-pose-text";
import "./style.scss";
import { Link } from "react-router-dom";

const charPoses = {};
class SectionFive extends Component {
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
                    <SplitText charPoses={charPoses}>Activismo</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                    Unete al carnaval cannabico
                    </SplitText>
                  </h2>
                   <h2 className="bold">
                    <SplitText charPoses={charPoses}>2020</SplitText>
                  </h2>
                  <p>
                    El cannabis es amor, y el amor es un derecho de todos; este año marcaremos historia, únete a nosotros este 12 de diciembre en el teatro pablo tobón uribe.
                  </p>


                  <Link to="/activismo" className="see_btn" data-text="Registrate">
                  Registrate
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
                    src={require("../../image/paissano/seguridad_2.jpg")}
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

export default SectionFive;
