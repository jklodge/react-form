import React, { Component } from "react";
import "./Form.scss";
import SuccessPage from "./SuccessPage";
import { thisExpression } from "@babel/types";
class Form extends Component {
  state = {
    email: "",
    name: "",
    notes: "",
    errorValidation: { email: "", name: "", notes: "" },
    emailValid: false,
    nameValid: false,
    notesValid: false,
    formValid: false,
    isSubmitted: false
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
        nameValid = value.length >= 2;
        fieldValidationErrors.name = nameValid ? "" : " is too short";
        break;
      case "notes":
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
      formValid:
        this.state.emailValid && this.state.nameValid && this.state.notesValid
    });
    console.log("form valid", this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.formValid) this.setState({ isSubmitted: true });
  };

  errorClass = error => {
    return error.length === 0 ? "" : "is-invalid";
  };

  render() {
    return (
      <div className="adzuna-form">
        <form onSubmit={this.handleSubmit} className="form-container">
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
          <p>
            {this.state.errorValidation.name
              ? "This name needs to be more than one character"
              : ""}
          </p>

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
            <p>
              {this.state.errorValidation.email
                ? "This email is not recognised"
                : ""}
            </p>
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
            <span>Characters </span>
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
        {this.state.isSubmitted && <SuccessPage name={this.state.name} />}
      </div>
    );
  }
}
export default Form;
