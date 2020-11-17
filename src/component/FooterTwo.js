import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
class FooterTwo extends Component{
    render(){
        let jhonData = this.props.jhonData;
        return(
            <section className="footer-area-two">
                <div className="container">
                    <div className="row footer-content">
                        <div className="col-sm-4">
                            {/* <Fade top cascade>
                                <ul className="list_style">
                                    {
                                        jhonData.socialLinks.map(item =>{
                                            return(
                                                <li key={item.name}>
                                                    <a  href={item.url}><i className={item.className}></i></a> 
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </Fade> */}
                            <p>© 2020 PAISSANO - All Rights Reserved</p>
                        </div>
                        <div className="col-sm-8 text-right">
                            <h6 style={{marginBottom:"0"}} ><a href="mailto:contacto@grupopineal.com">Trabaja con nosotros</a></h6>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default FooterTwo;