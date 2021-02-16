import React from "react";
import { Route, Switch } from "react-router-dom";
import Favorites from "../components/Favorites/Favorites";
import Shows from "../components/Shows/Shows";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Shows} />
      <Route exact path="/shows" component={Shows} />
      <Route exact path="/favorites" component={Favorites} />
    </Switch>
  );
}

export default Routes;
