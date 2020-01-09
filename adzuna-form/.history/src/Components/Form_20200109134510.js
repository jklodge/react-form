import React, { Component } from "react";
import "./Form.scss";
import { SuccessPage } from "./SuccessPage";
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

  //manage user input change and set value to state of input name
  handleChange = e => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    });
  };

  //Check inputs are valid against the conditions and then set these to the
  //errorValidation object. Set whether inputs are valid to state
  checkInput = e => {
    const value = e.target.value;
    const name = e.target.name;

    let inputValidationErrors = this.state.errorValidation;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let notesValid = this.state.notesValid;

    switch (name) {
      case "email":
        if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
          emailValid = true;
        inputValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "name":
        nameValid = value.length >= 2;
        inputValidationErrors.name = nameValid ? "" : " is too short";
        break;
      case "notes":
        notesValid = value.length >= 20;
        inputValidationErrors.notes = notesValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        errorValidation: inputValidationErrors,
        emailValid: emailValid,
        nameValid: nameValid,
        notesValid: notesValid
      },
      this.checkFormValidation
    );
  };

  //Validate whether form is valid by checking all state inputs are true
  checkFormValidation = () => {
    this.setState({
      formValid:
        this.state.emailValid && this.state.nameValid && this.state.notesValid
    });
  };

  //Handle the submission of the form add prevent default and
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.formValid) this.setState({ isSubmitted: true });
  };

  handleSignUpClick = () => {
    console.log("f");
    return !this.state.formValid ? (
      ""
    ) : (
      <p>Your form is incomplete, please fill in all the field correctly.</p>
    );
  };

  render() {
    return (
      <div className="adzuna-form">
        {!this.state.isSubmitted && (
          <form onSubmit={this.handleSubmit} className="form-container">
            <h2>Sign up</h2>
            <div className={`form-group `}>
              <label htmlFor="text">First Name</label>
              <input
                type="text"
                className={`form-control ${
                  this.state.errorValidation.name
                    ? "is-invalid"
                    : this.state.nameValid
                    ? "is-valid"
                    : ""
                }`}
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                onBlur={this.checkInput}
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
                className={`form-control ${
                  this.state.errorValidation.email
                    ? "is-invalid"
                    : this.state.emailValid
                    ? "is-valid"
                    : ""
                }`}
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                onBlur={this.checkInput}
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
                className={`form-control ${
                  this.state.errorValidation.notes
                    ? "is-invalid"
                    : this.state.notesValid
                    ? "is-valid"
                    : ""
                }`}
                name="notes"
                value={this.state.notes}
                onChange={this.handleChange}
                onBlur={this.checkInput}
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
        )}
        {this.state.isSubmitted && <SuccessPage name={this.state.name} />}
      </div>
    );
  }
}
export default Form;
