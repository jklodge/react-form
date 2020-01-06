import React, { Component, createRef } from "react";
import axios from "axios";
import PickUpBadgeBlank from "../Icons/PickUpBadgeBlank.js";
import DropOffBadgeBlank from "../Icons/DropOffBadgeBlank.js";
import PickUpBadgePresent from "../Icons/PickUpBadgePresent.js";
import DropOffBadgePresent from "../Icons/DropOffBadgePresent.js";
import PickUpBadgeError from "../Icons/PickUpBadgeError.js";
import DropOffBadgeError from "../Icons/DropOffBadgeError.js";
import JobCreated from "./JobCreated.js";
import "./InputField.scss";

class InputField extends Component {
  state = {
    journeyObject: {
      pickup: "",
      dropoff: ""
    },
    pickUpInput: "",
    pickUpSuccess: false,
    dropOffSuccess: false,
    dropOffInput: "",
    address: "",
    errorPickUp: "",
    errorDropOff: "",
    jobSuccess: false,
    createJob: false
  };

  autocompleteInputOne = createRef();
  autocompleteInputTwo = createRef();

  handlePlaceChanged = e => {
    const pickUp = this.autocompleteOne.getPlace();
    const dropOff = this.autocompleteTwo.getPlace();
    if (pickUp) {
      this.setState({ pickUpInput: pickUp.name });
    }
    if (dropOff) {
      this.setState({ dropOffInput: dropOff.name });
    }
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    });
  };

  onFieldBlurPickUp = e => {
    const address = `address: "${[this.state.pickUpInput]}"`;
    axios
      .post(`https://stuart-frontend-challenge.now.sh/geocode`, { address })
      .then(res => this.props.onUpdatePickUp(res.data))
      .then(this.setState({ errorPickUp: "", pickUpSuccess: true }))
      .catch(err => {
        if (err.message) {
          this.setState({
            errorPickUp: "Please enter a valid address",
            dropOffSuccess: false
          });
        }
      });
  };

  onFieldBlurDropOff = e => {
    const address = `address: "${[this.state.dropOffInput]}"`;
    axios
      .post(`https://stuart-frontend-challenge.now.sh/geocode`, { address })
      .then(res => this.props.onUpdateDropOff(res.data))
      .then(this.setState({ errorDropOff: "", dropOffSuccess: true }))
      .catch(err => {
        if (err.message) {
          this.setState({
            errorDropOff: "Please enter a valid address",
            dropOffSuccess: false
          });
        }
      });
  };

  handleSubmit = event => {
    event.persist();
    this.setState(
      Object.assign(this.state.journeyObject, {
        pickup: this.state.pickUpInput,
        dropoff: this.state.dropOffInput
      })
    );

    if (this.state.journeyObject) {
      const journeyObject = { ...this.state.journeyObject };
      this.setState({ createJob: true }, () => {
        setTimeout(() => {
          axios
            .post(
              `https://stuart-frontend-challenge.now.sh/jobs`,
              journeyObject
            )
            .then(
              this.setState({
                jobSuccess: true,
                createJob: false
              })
            )
            .catch(err => {
              if (err.message) {
                this.setState({ jobSuccess: false });
              }
            });
        }, 500);
      });
    }
  };

  reset = () => {
    if (this.state.jobSuccess) {
      this.setState({
        pickUpInput: "",
        dropOffInput: "",
        pickUpSuccess: false,
        dropOffSuccess: false,
        jobSuccess: false,
        createJob: false
      });
    }
  };

  render() {
    return (
      <div className="searchInput">
        <div className="inputContainer">
          <div className="badgeContainer">
            {!this.state.errorPickUp && this.state.pickUpSuccess ? (
              <PickUpBadgePresent width="32px" height="32px" />
            ) : this.state.errorPickUp ? (
              <PickUpBadgeError width="32px" height="32px" />
            ) : (
              <PickUpBadgeBlank width="32px" height="32px" />
            )}
            <input
              ref={this.autocompleteInputOne}
              id="autocomplete-pickup"
              placeholder="Pick up address"
              type="text"
              name="pickUpInput"
              onChange={this.handleChange}
              onBlur={this.onFieldBlurPickUp}
              onFocus={this.reset}
              value={this.state.pickUpInput}
            ></input>
            {this.state.errorPickUp ? (
              <span>{this.state.errorPickUp}</span>
            ) : (
              <span>{this.state.errorPickUp}</span>
            )}
          </div>
          <div className="badgeContainer">
            {!this.state.errorDropOff && this.state.dropOffSuccess ? (
              <DropOffBadgePresent width="32px" height="32px" />
            ) : this.state.errorDropOff ? (
              <DropOffBadgeError width="32px" height="32px" />
            ) : (
              <DropOffBadgeBlank width="32px" height="32px" />
            )}
            <input
              ref={this.autocompleteInputTwo}
              id="autocomplete-dropoff"
              placeholder="Drop off address"
              type="text"
              name="dropOffInput"
              onChange={this.handleChange}
              onBlur={this.onFieldBlurDropOff}
              onFocus={this.reset}
              value={this.state.dropOffInput}
            ></input>
            {this.state.errorDropOff ? (
              <span>{this.state.errorDropOff}</span>
            ) : (
              <span>{this.state.errorDropOff}</span>
            )}
          </div>
          <button
            disabled={!this.state.dropOffSuccess || !this.state.pickUpSuccess}
            onClick={this.handleSubmit}
            style={{
              background:
                this.state.createJob ||
                !this.state.pickUpSuccess ||
                !this.state.dropOffSuccess
                  ? "linear-gradient(90deg, rgba(16, 162, 234, 0.5) 0%, rgba(15, 153, 232, 0.5) 35%)"
                  : !this.state.pickUpSuccess && !this.state.dropOffSuccess
            }}
          >
            {this.state.createJob ? (
              <span>creating...</span>
            ) : (
              <span>Create Job</span>
            )}
          </button>
        </div>
        <JobCreated jobCreated={this.state.jobSuccess} />
      </div>
    );
  }
}
export default InputField;
