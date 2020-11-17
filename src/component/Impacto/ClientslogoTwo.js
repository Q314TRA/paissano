import React, { Component } from 'react';
import SectionTitleTwo from '../Banner/SectionTitleTwo';
class ClientslogoTwo extends Component {
    render() {
        return (
            <div className="clients_logo_area_two bg_color">
                <div className="c_round"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="clients_content_two">
                                <SectionTitleTwo stitle="Familias" btitle="Impacto, igualdad, dignidad y comercio justo" />
                                <p>Queremos generar impacto, igualdad, dignidad y comercio justo, actualmente contamos con mas de 40 familias campesinas que se han vinculado a nuestra plataforma; las hemos dotado con todo lo necesario para producir cannabis de la mejor calidad, solo faltas tu; separa tu cupo para auto cultivo y ayúdanos a mejorar la calidad de vida de muchas mas familias.</p>
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
                        <div className="col-lg-6">
                                <img src={require('../../image/paissano/cann_1.png')} alt="" />
                            {/* <div className="service_img">
                            </div> */}
                            {/* <div className="clients_intrigration">
                                <a href=".#" className="c_items"><img src={require('../../image/asan.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../../image/slack.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../../image/Avast.png')} alt=""/></a>
                                <a href=".#" className="c_items middle"><img src={require('../../image/h_pijom1.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../../image/torrent.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../../image/cool.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../../image/twitter.png')} alt=""/></a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ClientslogoTwo;