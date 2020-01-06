import React, { Component } from "react";
import "./GoogleMap.scss";
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
