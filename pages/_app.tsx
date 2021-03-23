import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Routes from '../router/Routes';
import SmoothScroll from 'smooth-scroll';
import { Html, Head } from 'next/document';

const App: React.FC = () => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		new SmoothScroll('a[href*="#"]', { speed: 1000, speedAsDuration: true });
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
		document.body.style.backgroundColor = '#0a192f';
	}, []);
	return (
		<div className="#personal-portfolio">
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta
						name="description"
						content="Personal portfolio for Pravesh Kunwar."
					/>
					<meta name="keywords" content="PraveshK, Pravesh Kunwar" />
					<meta name="author" content="Pravesh Kunwar" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
					/>
					<link
						rel="stylesheet"
						href="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css"
						integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
						crossOrigin="anonymous"
					/>
					<link
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
						rel="stylesheet"
						integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
						crossOrigin="anonymous"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
						rel="stylesheet"
					/>
				</Head>
			</Html>
			{loading ? <Loading /> : <Routes />}
		</div>
	);
};

export default App;
