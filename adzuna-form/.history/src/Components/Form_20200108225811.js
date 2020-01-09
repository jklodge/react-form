import React, { Component } from "react";
import { ErrorValidation } from "./ErrorValidation";
import "./Form.scss";
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
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      ...this.state,
      [e.target.name]: value
    });
    console.log(this.state);
  };

  validateField = (e, fieldName) => {
    const value = e.target.value;
    console.log(e.target);
    let fieldValidationErrors = this.state.errorValidation;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "name":
        nameValid = value.length >= 1;
        fieldValidationErrors.name = nameValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        errorValidation: fieldValidationErrors,
        emailValid: emailValid,
        nameValid: nameValid
      },
      this.validateForm
    );
  };

  validateForm = () => {
    this.setState({
      formValid: this.state.emailValid && this.state.nameValid
    });
  };

  errorClass = error => {
    return error.length === 0 ? "" : "has-error";
  };

  render() {
    return (
      <div className="adzuna-form">
        <form className="form-container">
          <h2>Sign up</h2>
          <div
            className={`form
                 ${this.errorClass(this.state.errorValidation.name)}`}
          >
            <label htmlFor="text">First Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div
            className={`form
                 ${this.errorClass(this.state.errorValidation.email)}`}
          >
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              onBlur={name => {
                this.validateField(name);
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.state.formValid}
          >
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
