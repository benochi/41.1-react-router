import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Cookies from "./Cookies";
import NavBar from "./NavBar";

//handles routes to VendingMachine, Soda, Chips and Cookies and render the appropriate page
//added Switch, allows rendering first child rout or redirect. 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Switch>
          <Route exact path="/">
            <VendingMachine />
          </Route>
          <Route exact path="/soda">
            <Soda />
          </Route>
          <Route exact path="/chips">
            <Chips />
          </Route>
          <Route exact path="/cookies">
            <Cookies />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
