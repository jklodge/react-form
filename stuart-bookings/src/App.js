import React from "react";
import "./App.scss";
import GoogleMap from "./Components/GoogleMap";
import { StateProvider } from "./store";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PICKUP":
      return {
        ...state,
        pickUpObject: action.pickUpObject
      };

    default:
      return state;
  }
};

export default () => (
  <StateProvider reducer={reducer}>
    <GoogleMap />
  </StateProvider>
);
