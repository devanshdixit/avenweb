import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import ApplyPage from "./ApplyPage";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/apply" exact component={ApplyPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
