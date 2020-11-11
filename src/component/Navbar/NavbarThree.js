import React, { Component } from "react";
// logo_blanco.png
import logo_blanco from '../../image/paissano/logo_blanco.png'


class NavbarThree extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
    };
  }

  handleToggle() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  render() {
    var { mainlogo } = this.props;
    return (
      <React.Fragment>
        <header className="header_area_one p_absoulte">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-9 col-7">
                <div className="menu_left">
                  <a href="/#" className="logo">
                    <img src={logo_blanco} alt="" width="60" height="60" />
                  </a>
                </div>
              </div>
              <div className="col-sm-3 col-5">
                <div className="menu_right">
                  <div className="burger_menu">
                    <span className="text" data-text="menu"></span>
                    <div
                      id="nav-icon2"
                      className={this.state.isExpanded ? "open" : ""}
                      onClick={() => this.handleToggle()}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div
          className={
            this.state.isExpanded ? "offcanvas_menu open" : "offcanvas_menu"
          }
        >
          <div className="closer_icon" onClick={() => this.handleToggle()}>
            <i className="icon_close"></i>
          </div>
          <div className="menu_body">
            <div className="menu_title">
              <h2>Bienvenide a paissano</h2>
              <p>
                El mejor ecosistema cannabico de colombia.
              </p>
            </div>
            <div className="off_menu">
              <ul id="menu" className="nav">
                <li data-menuanchor="Paissano" className="">
                  <a href="#Paissano">Paissano</a>
                </li>
                <li data-menuanchor="Tranquilidad" className="">
                  <a href="#Tranquilidad">Tranquilidad</a>
                </li>
                <li data-menuanchor="Bienestar" className="">
                  <a href="#Bienestar">Bienestar</a>
                </li>
                <li data-menuanchor="Carnabal" className="">
                  <a href="#Carnabal">Carnabal</a>
                </li>
                <li data-menuanchor="Contactanos" className="">
                  <a href="#Contactanos">Contactanos</a>
                </li>
              </ul>
            </div>
            <div className="copy_right_menu">
              <p>
                © <a href="/#">PAISSANO</a> 2020. All Rights Reseverd
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default NavbarThree;
