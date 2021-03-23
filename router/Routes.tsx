import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Resume from '../components/Resume';

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
				<Route path="/resume">
					<Resume />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
