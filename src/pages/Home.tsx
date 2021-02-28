import React, { Suspense, lazy } from 'react';

const Header = lazy(() => import('../components/section_1/Header'));
const ScrollToProjects = lazy(
	() => import('../components/section_1/ScrollToProjects')
);
const Projects = lazy(() => import('../components/section_3/Projects'));
const Sticky = lazy(() => import('../components/Sticky'));
const AboutMe = lazy(() => import('./AboutMe'));

const Home: React.FC = () => {
	return (
		<div className="#home">
			<Suspense fallback={<div>Loading...</div>}>
				{' '}
				<Sticky />
				<Header />
				<ScrollToProjects />
				<AboutMe />
				<Projects />
			</Suspense>
		</div>
	);
};
export default Home;
