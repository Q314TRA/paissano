import React, { Component } from "react";
import SplitText from "react-pose-text";
import "./style.scss";

import { Link } from "react-router-dom";

import weed_1 from '../../assets/weed_1.png'
import weed_2 from '../../assets/weed_2.png'
import weed_3 from '../../assets/weed_3.png'
import weed_4 from '../../assets/weed_4.png'

const charPoses = {};

class SectionBanner extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center ">

              <div className="col-lg-7 slider_content slider_content_banner" >

                <h3>
                  <SplitText charPoses={charPoses}>Carnaval cannabico 2020</SplitText>
                </h3>
                <h2> <SplitText charPoses={charPoses}>Participa en el sorteo</SplitText></h2>
                <p>
                  <ul>
                    <li>70 kits de Auto cultivo</li>
                    <li>100 tapabocas cannabicos</li>
                  </ul>
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScQHnlG1P962D8UGYSlwMZxPkO1uNnvR0V0OvsoAvxK93xBwg/viewform?usp=sf_link">
                  Inscribete
                </a>


              </div>

              <div className="col-lg-5" style={{ position: "relative", height: "500px" }} >
                <img alt="weed_1" style={{ width: "230px", position: "absolute", left: "2rem", top: "2rem" }} src={weed_1}></img>
                <img alt="weed_2" style={{ width: "150px", position: "absolute", right: "2rem", top: "200px" }} src={weed_2}></img>
                <img alt="weed_3" style={{ width: "120px", position: "absolute", left: "125px", bottom: "2rem" }} src={weed_3}></img>
                {/* <img alt="weed_4" style={{width:"130px", position:"absolute", right: "0", bottom:"0"}} src={weed_4}></img> */}
              </div>

              {/* <div className="col-lg-6">
                <div className="slider_content slider_content_two">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Paissano</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Consume sano
                    </SplitText>
                  </h2>
                  
                  <p>
                    Paissano es una aplicacion que busca promover el consumo responsable de cannabis, a través del ejercicio del autocultivo local o tercerizado.
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
              </div> */}


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionBanner;
