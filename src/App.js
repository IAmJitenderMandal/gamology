import React, { useEffect, useContext, useState, useReducer } from "react";
import axios from "axios";
import Search from "./components/search/Search.component";
import "./app.styles.scss";

// context with reducer and actions
import dataContext from "./context/dataContext";
import reducer from "./context/reducer";
import { ADD_DATA } from "./context/action.types";
import LoadMore from "./components/loadMoreBtn/LoadMore.component";

export default function App() {
  let [gamesData, dispatch] = useReducer(reducer, { data: [] });
  let [url, setUrl] = useState(
    "https://api.rawg.io/api/games?genres=action,shooter"
  );

  useEffect(() => {
    axios.get(url).then((response) => {
      dispatch({
        type: ADD_DATA,
        payload: response.data,
      });
    });
  }, [url]);
  console.log(gamesData.data);
  return (
    <dataContext.Provider
      value={{ data: { gamesData, setUrlFunc: setUrl }, dispatch }}
    >
      <div className="app">
        <Search />
        <LoadMore />
      </div>
    </dataContext.Provider>
  );
}
