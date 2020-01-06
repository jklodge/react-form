import React, { Component, createRef } from "react";
import "./GoogleMap.scss";
import InputField from "./InputField";
import Markers from "./Markers";
/* global google */

class GoogleMap extends Component {
  state = { pickUpObject: {}, dropOffObject: {}, jobCreated: false };

  googleMapRef = createRef();

  componentDidMount() {
    this.addGoogleMap();
  }

  addGoogleMap = () => {
    this.googleMap = this.createGoogleMap();
    this.setState({ map: this.googleMap });
  };

  updatePickUpMarker = pickUpObject => {
    this.setState({ pickUpObject: pickUpObject });
  };

  updateDropOffMarker = dropOffObject => {
    this.setState({ dropOffObject: dropOffObject });
  };

  jobCreated = jobSuccess => {
    this.setState({ jobCreated: jobSuccess });
  };

  createGoogleMap = () =>
    new google.maps.Map(this.googleMapRef.current, {
      zoom: 12,
      center: {
        lat: 48.8566,
        lng: 2.3522
      },
      disableDefaultUI: true
    });

  render() {
    return (
      <div>
        <div className="google-map" ref={this.googleMapRef}></div>
        <InputField
          onUpdatePickUp={this.updatePickUpMarker}
          onUpdateDropOff={this.updateDropOffMarker}
          jobCreated={this.jobCreated}
        />
        <Markers pos={this.state} />
      </div>
    );
  }
}
export default GoogleMap;
