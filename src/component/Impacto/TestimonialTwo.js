import React, {Component} from 'react';
import SectionTitleTwo from '../../component/Banner/SectionTitleTwo';
// import TestimonialSliderTwo from './TestimonialSliderTwo';

class TestimonialTwo extends Component{
    render(){
        return(
            <div className="testimonial_area_two" id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="testimonial_img">
                                <img src={require('../../image/testimonial.svg')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial_slider_info">
                                <SectionTitleTwo stitle="Vision" btitle="Generaremos dignidad"/>
                                <p>Siendo el ecosistema líder para el encuentro de las partes involucradas en el intercambio lícito, justo y trazable del cannabis y sus derivados, a través de procesos tecnológicos que los vinculan de forma segura, legal y responsable..</p>
                                {/* <TestimonialSliderTwo/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestimonialTwo;