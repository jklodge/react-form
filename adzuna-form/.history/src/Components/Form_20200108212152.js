import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  render() {
    constructor (props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      }
    }
    return (
      <form className="formContainer">
        <h2>Sign up</h2>
        <div className="form">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="form">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    );
  }
}
export default Form;
