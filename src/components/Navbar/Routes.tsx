import { BrowserRouter as Switch, Route } from "react-router-dom";
import AboutMe from "../../pages/AboutMe";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <AboutMe />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
    </Switch>
  );
};

export default Routes;
