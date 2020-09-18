import React from 'react';
import './App.css';
import {Route, Switch} from "react-router"
import { public_routes } from "./config/routes";

function App() {
  return (
      <div className="App">
        <Switch>
          {public_routes.map(route => {
            return <Route key={route.path} exact path={route.path} component={route.component}  />
          })}
        </Switch>
      </div>
  );
}

export default App;
