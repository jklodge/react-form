import React, { Component } from "react";
import "./Form.scss";
class Form extends Component {
  state = {
    email: "",
    name: "",
    notes: "",
    errorValidation: { email: "", name: "", notes: "" },
    emailValid: false,
    nameValid: false,
    notesValid: false,
    formValid: false
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    });
    console.log(this.state);
  };

  characterCount = e => {};

  validateField = e => {
    const value = e.target.value;
    const name = e.target.name;

    let fieldValidationErrors = this.state.errorValidation;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let notesValid = this.state.notesValid;

    switch (name) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "name":
        console.log("n", value.length);
        nameValid = value.length >= 2;
        fieldValidationErrors.name = nameValid ? "" : " is too short";
        break;
      case "notes":
        console.log("n", value.length);
        notesValid = value.length >= 20;
        fieldValidationErrors.notes = notesValid ? "" : " is too short";
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
    console.log("2", this.state);
  };

  validateForm = () => {
    this.setState({
      formValid: this.state.emailValid && this.state.nameValid
    });
  };

  errorClass = error => {
    return error.length === 0 ? "" : "is-invalid";
  };

  render() {
    return (
      <div className="adzuna-form">
        <form className="form-container">
          <h2>Sign up</h2>
          <div className={`form-group `}>
            <label htmlFor="text">First Name</label>
            <input
              type="text"
              className={`form-control ${this.errorClass(
                this.state.errorValidation.name
              )}`}
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              onBlur={this.validateField}
              required
            />
          </div>
          <p>{this.state.errorValidation.name ? "is too short" : ""}</p>

          <div className={`form-group `}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className={`form-control ${this.errorClass(
                this.state.errorValidation.email
              )}`}
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              onBlur={this.validateField}
              required
            />
            <p>{this.state.errorValidation.email ? "Is invalid" : ""}</p>
          </div>
          <div className={`form-group `}>
            <label htmlFor="comment">Notes</label>
            <textarea
              type="text"
              className="form-control"
              name="notes"
              value={this.state.notes}
              onChange={this.handleChange}
              onBlur={this.validateField}
              required
            />
            <span>Characters</span>
            <span>{this.state.notes.length}</span>
            <p>
              {this.state.errorValidation.notes
                ? "Needs to be more than 20 characters"
                : ""}
            </p>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.state.formValid}
          >
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
