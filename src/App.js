import React, {
  useEffect,
  useContext,
  useState,
  useReducer,
  Fragment,
} from "react";
import axios from "axios";
import Search from "./components/search/Search.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./app.styles.scss";

// context with reducer and actions
import dataContext from "./context/dataContext";
import reducer from "./context/reducer";
import { ADD_DATA } from "./context/action.types";
import LoadMore from "./components/loadMoreBtn/LoadMore.component";
import GamesContainer from "./components/gamesContainer/GamesContainer.component";
import View_game from "./components/view-game/View-game.component";

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

  return (
    <dataContext.Provider
      value={{ data: { gamesData, setUrlFunc: setUrl }, dispatch }}
    >
      <Router>
        <div className="app">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div className="container">
                  <Search />
                  <GamesContainer />
                  <LoadMore />
                </div>
              )}
            />
            <Route path="/view-game/:gameId" exact component={View_game} />
          </Switch>
        </div>
      </Router>
    </dataContext.Provider>
  );
}
