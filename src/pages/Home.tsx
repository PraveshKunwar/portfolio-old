import React from 'react';
import Header from '../components/section_1/Header';
import ScrollToProjects from '../components/section_1/ScrollToProjects';
import Projects from '../components/section_1/Projects';
import Sticky from '../components/Sticky';
import AboutMe from './AboutMe';

const Home: React.FC = () => {
	return (
		<div className="#home">
			<Sticky />
			<Header />
			<ScrollToProjects />
			<AboutMe />
			<Projects />
		</div>
	);
};
export default Home;
