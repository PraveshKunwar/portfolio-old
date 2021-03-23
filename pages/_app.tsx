import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';

import { Html, Head } from 'next/document';
import Home from './Home';

const App: React.FC = () => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
		document.body.style.backgroundColor = '#0a192f';
	}, []);
	return (
		<div className="#personal-portfolio">
			{loading ? <Loading /> : <Home />}
		</div>
	);
};

export default App;
