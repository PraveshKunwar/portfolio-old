import React, { useEffect, useState } from 'react';
import Loading from './components/loader/Loading';
import Home from './pages/Home';
import SmoothScroll from 'smooth-scroll';
const App: React.FC = () => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		new SmoothScroll('a[href*="#"]', { speed: 1000, speedAsDuration: true });
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 5000);
		document.body.style.backgroundColor = '#0a192f';
	}, []);
	return (
		<div className="#personal-portfolio">
			{loading ? <Loading /> : <Home />}
		</div>
	);
};

export default App;
