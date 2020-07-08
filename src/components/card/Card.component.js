import React from "react";
import "./card.styles.scss";
import "./card.styles.scss";
import { Link } from "react-router-dom";

export default function Card({ game }) {
  return (
    <div className="card">
      <div
        className="img"
        style={{
          backgroundImage: `url("${game.background_image}")`,
        }}
      ></div>
      <Link to={`/view-game/${game.id}`} className="view-game-link">
        <h3 className="title">{game.name}</h3>
      </Link>
      <p className="ratings">{`${game.rating} / ${game.rating_top}`}</p>
      <p className="release-date">{game.released}</p>
    </div>
  );
}
