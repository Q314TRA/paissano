import React, { Component } from 'react';
import SectionTitleTwo from '../Banner/SectionTitleTwo';
import SplitText from "react-pose-text";
const charPoses = {};
class Registro extends Component {
    render() {
        return (
            <div className="clients_logo_area_two bg_color">
                <div className="c_round"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="clients_content_two">
                                <SectionTitleTwo stitle="Carnabal" btitle="Acompañanos y hagamos historia" />
                                {/* <h2 className="bold">
                                    <SplitText charPoses={charPoses}>
                                        
                                    </SplitText>
                                    <br />
                                    <SplitText charPoses={charPoses} >
                                        
                                    </SplitText>
                                </h2> */}

                                <p>
                                    El cannabis es amor, y el amor es un derecho de todos; <br/> 
                                    este año trascenderemos como seres y comunidad, seremos mas que una marcha; este año 
                                    los esfuerzos de todo el colectivo, convergeran en el primer CARNABAL CANNABICO DE COLOMBIA. 
                                    <br/>
                                    <br/>
                                    Unete a nosotros este <span style={{color:"#3A9A50"}}>12 de diciembre al media dia</span> en el <span style={{color:"#3A9A50"}}>Teatro pablo tobón uribe</span> y hagamos historia.
                                </p>

                                {/* <div className="clients_item">
                                    <h2>1K</h2>
                                    <h6>Total Clients</h6>
                                </div>
                                <div className="clients_item">
                                    <h2>50</h2>
                                    <h6>Sponsers</h6>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6" style={{ minHeight: "400px" }}>
                            <img src={require('../../image/paissano/carnabal_2.jpg')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ClientslogoTwo;