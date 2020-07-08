import React, { useContext } from "react";
import Card from "../card/Card.component";
import dataContext from "../../context/dataContext";
import "./gameContainer.styles.scss";

export default function GamesContainer() {
  const { data, dispatch } = useContext(dataContext);
  
  return (
    <div className="gamesContainer">
      {
        data.gamesData.data.map((game, index) => {
          return <Card  game={game} key={index} />
        })
      }
    </div>
  );
}
