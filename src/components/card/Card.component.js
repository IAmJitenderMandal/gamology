import React from "react";
import "./card.styles.scss";
import "./card.styles.scss";

export default function Card({ game }) {
  return (
    <div className="card">
      <div
        className="img"
        style={{
          backgroundImage: `url("${game.background_image}")`,
        }}
      ></div>
      <h3 className="title">{game.name}</h3>
      <h4 className="creator">Rovie store</h4>
      <p className="ratings">{game.released}</p>
    </div>
  );
}
