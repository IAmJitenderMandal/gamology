import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useParams } from "react-router-dom";
import dataContext from "../../context/dataContext";
import "./view-game.styles.scss";
import Axios from "axios";

export default function View_game() {
  let [game, setGame] = useState({});
  let { gameId } = useParams();
  let [gameRatings, SetGameRatings] = useState([]);
  let [ratingLabel, setRatingLabel] = useState([]);

  let gameChart = {
    series: gameRatings,

    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function(val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  };


  useEffect(() => {
    Axios.get(`https://api.rawg.io/api/games/${gameId}`).then((response) => {
      setGame(response.data);
      SetGameRatings(response.data.ratings.map(rating => rating.percent));
      setRatingLabel(response.data.ratings.map(rating => rating.title));
    });
  }, []);

  return (
    <div
      className="view_Game"
      style={
        game !== undefined
          ? {
              backgroundImage: `linear-gradient(180deg, rgba(28,49,70,0.6) 0%, rgba(7,29,52,0.8519782913165266) 87%), 
              url(${game.background_image})`,
            }
          : ""
      }
    >
      <div className="main-info">
        <h1 className="title">{game.name}</h1>
        <div className="realese-info-etc">
          <div className="bold-title">
            Release Year: <span className="year-value">{game.released}</span>
          </div>
          <div className="bold-title">
            Play Time:{" "}
            <span className="playtime-value">{game.playtime} Hours</span>
          </div>
          <div className="bold-title">
            Platforms:{" "}
            <span className="platforms-value">
              {Object.keys(game).length > 0
                ? game.parent_platforms.map(
                    ({ platform }) => platform.name + " "
                  )
                : ""}
            </span>
          </div>
        </div>
      </div>
      <div className="summery">
        <div className="img-and-text">
          <img
            src={game.background_image}
            alt=""
            className="img"
            height={300}
          />
          <div className="text">{game.description}</div>
        </div>
      </div>

      <div className="other-info">
        <div className="rating-map">
          <h3>Game Ratings Map</h3>
          <Chart options={gameChart.options} series={gameChart.series} type="radialBar" height={350} />
        </div>
      </div>
    </div>
  );
}
