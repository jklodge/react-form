import React, { Component, createRef } from "react";
import "./GoogleMap.scss";
import InputField from "./InputField";
import Markers from "./Markers";
import GoogleMap from "./GoogleMap";
/* global google */

class Container extends Component {
  render() {
    return (
      <div>
        <GoogleMap />
      </div>
    );
  }
}
export default Container;
