import React, { Component, createRef } from "react";
import axios from "axios";
import "./InputField.scss";

/* global google */

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
    errorDropOff: ""
  };
  autocompleteInputOne = createRef();
  autocompleteInputTwo = createRef();

  componentDidMount() {
    // this.autocompleteOne = new google.maps.places.Autocomplete(
    //   this.autocompleteInputOne.current,
    //   { types: ["geocode"] }
    // );
    // this.autocompleteTwo = new google.maps.places.Autocomplete(
    //   this.autocompleteInputTwo.current,
    //   { types: ["geocode"] }
    // );
    // this.autocompleteOne.addListener("place_changed", this.handlePlaceChanged);
    // this.autocompleteTwo.addListener("place_changed", this.handlePlaceChanged);
  }

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
          this.setState({ errorPickUp: "error", dropOffSuccess: false });
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
          this.setState({ errorDropOff: "error", dropOffSuccess: false });
        }
      });
  };

  handleSubmit = event => {
    this.setState({
      journey: {
        ...this.state.journey,
        pickup: this.state.pickUpInput,
        dropoff: this.state.dropOffInput
      }
    });
    if (this.state.journey) {
      const journey = { ...this.state.journey };
      event.preventDefault();
      axios.post(`https://stuart-frontend-challenge.now.sh/jobs`, journey);
    }
  };

  render() {
    return (
      <div className="searchInput">
        <input
          ref={this.autocompleteInputOne}
          id="autocomplete-pickup"
          placeholder="Pick up address"
          type="text"
          name="pickUpInput"
          onChange={this.handleChange}
          onBlur={this.onFieldBlurPickUp}
        ></input>
        {this.state.errorPickUp ? (
          <span>Please enter a valid address</span>
        ) : (
          <span></span>
        )}
        <input
          ref={this.autocompleteInputTwo}
          id="autocomplete-dropoff"
          placeholder="Drop off address"
          type="text"
          name="dropOffInput"
          onChange={this.handleChange}
          onBlur={this.onFieldBlurDropOff}
        ></input>
        {this.state.errorDropOff ? (
          <span>Please enter a valid address</span>
        ) : (
          <span></span>
        )}
        <button
          disabled={!this.state.dropOffSuccess || !this.state.pickUpSuccess}
          onClick={this.handleSubmit}
        >
          Create job
        </button>
      </div>
    );
  }
}
export default InputField;
