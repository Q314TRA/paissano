import React, { Component } from 'react';
import SectionTitleTwo from '../../component/Banner/SectionTitleTwo';
// import TestimonialSliderTwo from './TestimonialSliderTwo';

class TestimonialTwo extends Component {
    render() {
        const { openModal } = this.props;
        return (
            <div className="testimonial_area_two" id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="testimonial_img">
                                <img style={{maxWidth:"100%"}} src={require('../../image/paissano/marcha_3.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial_slider_info clients_content_two">
                                <SectionTitleTwo stitle="Cuida tu humo" btitle="Parte de la tribu" />
                                <p>El amor se comparte mejor entre pocas personas, por eso te invitamos a que disfrutes con tu parche, evita compartir tu planta con personas que no sean de tu circulo de confianza y manten la distancia con otros grupos.</p>
                                {/* <TestimonialSliderTwo/> */}


                                {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLScQHnlG1P962D8UGYSlwMZxPkO1uNnvR0V0OvsoAvxK93xBwg/viewform?usp=sf_link" className="link_register" data-text="Registrate en el carnaval"> */}
                                <a onClick={() => openModal()} className="link_register" data-text="Registrate en el carnaval">
                                    Registrate en el carnaval
                                    <span className="arrow">
                                        <span className="line"></span>
                                    </span>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestimonialTwo;