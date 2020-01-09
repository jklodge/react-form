import React, { Component } from "react";
// import "./Form.css";
class Form extends Component {
  state = {
    email: "",
    name: ""
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
            onChange={e => this.handleUserInput(e)}
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
            onChange={e => this.handleUserInput(e)}
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
