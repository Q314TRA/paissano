import React, { Component } from 'react';
import Sticky from 'react-stickynode';
// import { Link } from 'react-scroll';

import { Link } from "react-router-dom";

import fullpageOptions from "../Creativecarousel/fullpageConfig";

// import logo from '../../image/paissano/logo.png'


class NavbarTwo extends Component {

    render() {
        const { anchorsDeatil } = fullpageOptions;

        let anchors = Object.keys(anchorsDeatil).map(key => ({
            key,
            item: anchorsDeatil[key]
        }))

        var { mClass, mContainer, mainlogo, stickylogo } = this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <nav className={`navbar navbar-expand-lg navbar-light ${mClass}`}>
                    <div className={`container ${mContainer}`}>
                        <a className="navbar-brand logo_h" href="https://paissano.app/">
                            <img style={{ width: "auto", height: "90px", maxWidth: "unset" }} src={require("../../image/paissano/logo.png")} alt="" />
                            <img style={{ width: "auto", height: "90px", maxWidth: "unset" }} src={require("../../image/paissano/logo.png")} alt="" />
                        </a>
                        <a href="./" className="btn get-btn get-btn-two d-lg-none d-md-block login">Login</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav m-auto">

                                {anchors.map(({ item, key }) =>
                                    <li className="nav-item">
                                        <Link className="nav-link" activeClass="active" to={`/#${item}`} >{key}</Link>
                                    </li>
                                )}

                                {/* <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="contacts" spy={true} smooth={true} offset={-86} duration={500}>
                                        Contact
                                    </Link>
                                </li> */}

                            </ul>
                        </div>
                    </div>
                </nav>
            </Sticky>
        );
    }
}

export default NavbarTwo;