import React, { Component } from "react";
// import "./Form.css";
class Form extends Component {
  state = {
    email: "",
    name: ""
  };

  state = {
    email: {
      ...txtFieldState,
      fieldName: "Email",
      required: true,
      requiredTxt: "Email is required",
      formatErrorTxt: "Incorrect email format"
    },
    firstname: {
      ...txtFieldState,
      fieldName: "First Name",
      required: true,
      requiredTxt: "First Name is required"
    },
    lastname: {
      ...txtFieldState,
      fieldName: "Last Name",
      required: false,
      requiredTxt: "Last Name is required"
    },
    allFieldsValid: false
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
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
    );
  }
}
export default Form;
