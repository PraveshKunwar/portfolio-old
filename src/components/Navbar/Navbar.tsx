import React from "react";
import { BrowserRouter as Link, Switch, Router, Route } from "react-router-dom";
import AboutMe from "../main/AboutMe";
import Contact from "../main/Contact";

const Navbar: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutMe />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
