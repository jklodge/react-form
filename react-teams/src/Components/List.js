import React from "react";
import { useStateValue } from "../store";
import "./List.scss";

const List = () => {
  const [teams] = useStateValue();
  console.log(teams.chosenTeam.team);
  const teamsList = Object.values(teams).map(val => {
    return val.team;
  });
  const chosenTeam = Object.values(teamsList[3]).map(value => {
    return value;
  });
  return (
    <ul className="List">
      {teams.chosenTeam.team.map(team => {
        console.log(team);
        return (
          <li key={team}>
            <h3>{team}</h3>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
