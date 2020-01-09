import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  render() {
    state = {
      email: "",
      password: ""
    };

    return (
      <form className="formContainer">
        <h2>Sign up</h2>
        <div className="form">
          <label htmlFor="text">First Name</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="form">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" name="email" />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    );
  }
}
export default Form;
