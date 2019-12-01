import React from "react";
import { useStateValue } from "../store";
import "./SideBar.scss";

const SideBar = () => {
  const [teams, dispatch] = useStateValue();
  const handleClick = () => {
    if (teams.chosenTeam.id === 1) {
      dispatch(
        {
          type: "chooseTeam",
          chosenTeam: teams.teamB
        },
        removeFromChosen(teams.teamA)
      );
    } else if (teams.chosenTeam.id === 2) {
      dispatch(
        {
          type: "chooseTeam",
          chosenTeam: teams.teamA
        },
        removeFromChosen(teams.teamB)
      );
    } else {
      dispatch(
        {
          type: "chooseTeam",
          chosenTeam: teams.teamA
        },
        removeFromChosen(teams.teamB)
      );
    }
  };

  const removeFromChosen = team => {
    dispatch({
      type: "unchooseTeam",
      unchosenTeam: team
    });
  };

  return (
    <div className="SideBar">
      <h3>Choose your team</h3>
      <div className="toggleContainer">
        <div className="active-team">
          <div className="circle"></div>
          {teams.chosenTeam.name ? (
            <h3>{teams.chosenTeam.name}</h3>
          ) : (
            <h3>Women in History</h3>
          )}
        </div>
        <div onClick={handleClick} className="inactive-team">
          <div className="inactive-circle"></div>
          {teams.unchosenTeam ? (
            <h3>{teams.unchosenTeam.name}</h3>
          ) : (
            <h3>Men in History</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
