import React, { Component } from "react";
import { ErrorValidation } from "./ErrorValidation";
// import "./Form.css";
class Form extends Component {
  state = {
    email: "",
    name: "",
    errorValidation: { email: "", name: "" },
    emailValid: false,
    nameValid: false,
    formValid: false
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
    console.log(this.state);
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.errorValidation;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  render() {
    return (
      <div className="adzuna-form">
        <form className="formContainer">
          <h2>Sign up</h2>
          <div className="form">
            <label htmlFor="text">First Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
        <div className="panel panel-default">
          <ErrorValidation errorValidation={this.state.errorValidation} />
        </div>
      </div>
    );
  }
}
export default Form;
