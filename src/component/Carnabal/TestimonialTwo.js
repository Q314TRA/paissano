import React, { Component } from 'react';
import SectionTitleTwo from '../../component/Banner/SectionTitleTwo';
// import TestimonialSliderTwo from './TestimonialSliderTwo';

class TestimonialTwo extends Component {
    render() {
        return (
            <div className="testimonial_area_two" id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="testimonial_img">
                                <img src={require('../../image/testimonial.svg')} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial_slider_info clients_content_two">
                                <SectionTitleTwo stitle="Cuida tu humo" btitle="Parte de la tribu" />
                                <p>El amor se comparte mejor entre pocas personas, por eso te invitamos a que disfrutes con tu parche, evita compartir tu planta con personas que no sean de tu circulo de confianza y manten la distancia con otros grupos.</p>
                                {/* <TestimonialSliderTwo/> */}
                                

                                <a href="https://forms.gle/Akacs7HydeYtQHZ17" className="link_register" data-text="Registrate en el carnabal">
                                    Registrate en el carnabal
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