import React, { Component } from "react";
import ErrorValidation from "./ErrorValidation";
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
    this.setState({ [name]: value });
    console.log(this.state);
  };

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
