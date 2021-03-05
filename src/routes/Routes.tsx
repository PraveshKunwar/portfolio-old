import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about_me">
					<AboutMe />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
