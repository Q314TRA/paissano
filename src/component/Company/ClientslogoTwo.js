import React, {Component} from 'react';
import SectionTitleTwo from '../Banner/SectionTitleTwo';
class ClientslogoTwo extends Component {
    render(){
        return(
            <div className="clients_logo_area_two bg_color">
                <div className="c_round"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="clients_content_two">
                                <SectionTitleTwo stitle="Somos" btitle="Un ecosistema."/>
                                <p>La marca PAISSANO busca cambiar los paradigmas que giran en torno al consumo de cannabis, buscando generar un ecosistema de dignidad y trato justo tanto para consumidores como cultivadores y demás proveedores.</p>
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
                        <div className="col-lg-6" style={{minHeight:"400px"}}>
                            <div className="clients_intrigration">
                                <a className="c_items"><img width="50" src={require('../../image/paissano/icons/shield.png')} alt=""/></a>
                                <a className="c_items"><img width="50" src={require('../../image/paissano/icons/hospital.png')} alt=""/></a>
                                <a className="c_items"><img width="50" src={require('../../image/paissano/icons/farmer.png')} alt=""/></a>
                                
                                <a className="c_items middle"><img width="50" src={require('../../image/paissano/logo_color.png')} alt=""/></a>

                                <a className="c_items"><img width="50" src={require('../../image/paissano/icons/fertilizante.png')} alt=""/></a>
                                <a className="c_items"><img width="50" src={require('../../image/paissano/icons/delivery-truck.png')} alt=""/></a>
                                <a className="c_items"><img width="50" src={require('../../image/paissano/icons/certificate.png')} alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ClientslogoTwo;