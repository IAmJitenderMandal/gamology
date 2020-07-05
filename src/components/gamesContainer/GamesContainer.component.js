import React, { useContext } from "react";
import Card from "../card/Card.component";
import dataContext from "../../context/dataContext";
import "./gameContainer.styles.scss";

export default function GamesContainer() {
  const { data, dispatch } = useContext(dataContext);
  console.log(data);
  
  return (
    <div className="gamesContainer">
      
    </div>
  );
}
