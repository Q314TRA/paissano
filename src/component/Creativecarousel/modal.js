import React, { Component } from "react";
import SplitText from "react-pose-text";
import "./style_modal.scss";

import { Link } from "react-router-dom";


import ModalPolicy from './modalPolicy'
import backgroundMap from '../../image/paissano/backgroundMap.png'

import firebase from "firebase";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const charPoses = {};

class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      telefono: "",
      error: [],
      allowSend: false,
      step: 0
    }
    /**
     * step: 0
     * step: 1 policy
     * step: 2 congratulation
     */


    this.clickClose = this.clickClose.bind(this);
    this.enviarData = this.enviarData.bind(this);
    this.timmerClose = this.timmerClose.bind(this);
    this.db = null;

  }
  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyCscHyB7RaU7lObBnEKxfMVgTzq5Cbd3l8",
      authDomain: "paissano-801fb.firebaseapp.com",
      projectId: "paissano-801fb",
      storageBucket: "paissano-801fb.appspot.com",
      messagingSenderId: "827927270388",
      appId: "1:827927270388:web:f8857ff7e554be003c1fa1",
      measurementId: "G-HTT4S1HH9Z"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.db = firebase.firestore();
  }

  timmerClose() {
    const { closeModalFn } = this.props;
    window.setTimeout(closeModalFn, 1500)
  }


  enviarData() {

    this.setState({ error: [] })

    if (!this.state.allowSend)
      return;

    let error = [];

    if (!this.state.name) {
      error.push("name")
    }

    if (!this.state.telefono) {
      error.push("telefono")
    }
    if (this.state.telefono && this.state.telefono.length < 10) {
      error.push("telefono_length")
    }

    this.setState({ error })
    if (error.length > 0)
      return;




    console.log(
      this.state.name,
      this.state.telefono
    )


    this.db.collection("personas").add({
      name: this.state.name,
      telefono: this.state.telefono
    })
      .then((docRef) => {
        this.changeStep(2);
      })
      .catch(function (error) {
        // setMessage("Ah ocurrido un error, intentalo de nuevo mas tarde, Gracias!");
        console.error("Error adding document: ", error);
      });


  }

  clickClose(e) {
    const { closeModalFn } = this.props;
    e.stopPropagation();
    closeModalFn();
  }

  changeStep(step) {
    this.setState({ step })

    if (step === 2) {
      this.timmerClose()
    }
  }


  render() {



    return (
      <div className="modal-form">
        <div className="modal-fade" onClick={this.clickClose}>
        </div>

        {this.state.step === 0 &&
          <div className="modal-content" style={{ backgroundImage: `url(${backgroundMap})` }}>
            <h2>Registro</h2>
            <span onClick={this.clickClose} className="icon_close"></span>


            <div className="form-content">
              <div className="input-content">
                <input type="text" placeholder="Nombres"
                  onChange={(e) =>
                    this.setState({
                      name: e.currentTarget.value
                    })
                  }>
                </input>
                {this.state.error.indexOf('name') > -1 &&
                  <p>requerido</p>
                }
              </div>
              <div className="input-content">
                <input type="phone" placeholder="Whatsapp"
                  onChange={(e) =>
                    this.setState({
                      telefono: e.currentTarget.value
                    })
                  }>
                </input>
                {this.state.error.indexOf('telefono') > -1 &&
                  <p>requerido</p>
                }
                {this.state.error.indexOf('telefono_length') > -1 &&
                  <p>Telefono invalido</p>
                }
              </div>

            </div>
            <div className="input-content-check">
              <label>
                <input type="checkbox" onChange={() => this.setState({ allowSend: !this.state.allowSend })} />
                <span>
                  Autorizo a Paissano para que el número de celular, sean tratados para contactarme y/o enviarme la información relacionada al cannabis.
              </span>
              </label>
              <a onClick={() => this.changeStep(1)} >Términos, Condiciones y Políticas de Privacidad para la solicitud de productos.</a>
            </div>

            <div className="content-button">
              <a className={`${this.state.allowSend ? 'allow' : ''}`} onClick={this.enviarData}>Enviar</a>
              {/* <a style={{ display: "none" }}></a> */}
            </div>
          </div>
        }

        {this.state.step === 1 &&
          <ModalPolicy clickClose={this.clickClose} changeStep={() => this.changeStep(0)} />
        }

        {this.state.step === 2 &&
          <div className="modal-content " style={{ backgroundImage: `url(${backgroundMap})` }}>
            <h2 className="success-message" >!Registro exitoso¡</h2>
            <p>Te esperamos en el carnaval</p>
          </div>
        }

      </div>
    );
  }
}

export default Modal
  ;
