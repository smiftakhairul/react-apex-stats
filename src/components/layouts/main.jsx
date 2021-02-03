import React from "react";
import Navbar from "../navbar/navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //   Link,
  //   NavLink,
  //   useLocation,
  //   matchPath,
} from "react-router-dom";
import Home from "../home/home";
import Stats from "../stats/stats";
import ConfigUser from "../settings/config-user/configUser";
import Legends from "../legends/legends";

const Main = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <main className="container mt-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
            <Route path="/legends">
              <Legends />
            </Route>
            <Route path="/settings/config-user">
              <ConfigUser />
            </Route>
          </Switch>
        </main>
      </Router>
    </React.Fragment>
  );
};

export default Main;
