import React from "react";
import emailjs from "emailjs-com";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        name: "",
        subject: "",
        phone: "",
        email: "",
      },
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = value.length === 0 ? "Nombre es requerido" : "";
        break;
      case "subject":
        errors.subject = value.length < 5 ? "Asuton de tener minimo 5 caracteres" : "";
        break;
      case "phone":
        errors.phone = value.length < 5 ? "Telefono es requerido" : "";
        break;
      case "email":
        errors.email = value.length < 5 ? "Correo es requerido" : "";
        let appos = value.indexOf("@");
        let dots = value.lastIndexOf(".");

        if (appos < 1 || dots - appos < 2) {
          errors.email = "Ingrese un correo valido.";
        }

        break;

      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // if (
    //   this.state.errors.name.length === 0 &&
    //   this.state.errors.subject.length === 0 &&
    //   this.state.errors.phone.length === 0 &&
    //   this.state.errors.email.length === 0
    // ) {
    //   alert("form is valid");
    // } else {
    //   alert("form is invalid");
    // }
    emailjs
      .sendForm(
        "service_38zyq5x",
        "template_4vd1a85",
        e.target,
        "user_uiswcwSc1becI9SrZMsou"
      )
      .then(
        (result) => {
          // console.log(result.text);
          // alert("form is valid");
        },
        (error) => {
          // console.log(error.text);
          // alert("form is invalid");
        }
      );
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.submitHandler.bind(this)} className="form_class">
        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Nombre *"
              required
              onChange={this.handleChange}
            />
            <p>{errors.name}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Correo *"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
              onChange={this.handleChange}
            />
            <p>{errors.email}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              placeholder="Asunto *"
              onChange={this.handleChange}
              required
              value="Quiero conocer mas"
            />
            <p>{errors.subject}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="tel"
              pattern="[0-9]{10}"
              maxLength="10"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Celular *"
              required
              onChange={this.handleChange}
            />
            <p>{errors.phone}</p>
          </div>
        </div>
        <textarea
          name="message"
          id="message"
          className="form-control"
          rows="6"
          placeholder="Escribe tu pregunta ..."
          onChange={this.handleChange}
          value="Quiero recibir más información sobre Paissano."
          required
        ></textarea>
        <button type="submit" className="btn send_btn theme_btn">
          Enviar
        </button>
      </form>
    );
  }
}

export default Form;
