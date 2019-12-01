import React from "react";
import { StateProvider } from "./store";
import Header from "./Components/Header";
import initialState from "./store/initialState";

const reducer = (state, action) => {
  switch (action.type) {
    case "chooseTeam":
      return {
        ...state,
        chosenTeam: action.chosenTeam
      };
    case "unchooseTeam":
      return {
        ...state,
        unchosenTeam: action.unchosenTeam
      };
    default:
      return state;
  }
};

export default () => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <Header />
  </StateProvider>
);
