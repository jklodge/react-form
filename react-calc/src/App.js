import React from "react";
import CalculatorLayout from "./CalculatorLayout/CalculatorLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { StateProvider } from "./store";
import initialState from "./store/initialState";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_INPUT":
      return {
        ...state,
        input: action.input
      };
    case "ADD_BL_TABLE":
      return {
        ...state,
        tableBLObject: action.tableBLObject
      };
    case "ADD_RCF_TABLE":
      return {
        ...state,
        tableRCFObject: action.tableRCFObject
      };
    default:
      return state;
  }
};

export default () => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <CalculatorLayout />
  </StateProvider>
);
