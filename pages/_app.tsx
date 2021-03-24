import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';

import { Html, Head } from 'next/document';
import AboutHeader from '../components/AboutHeader';
import AboutParagraph from '../components/AboutParagraph';
import Header from '../components/Header';
import ScrollToProjects from '../components/ScrollToProjects';
import Projects from '../components/Projects';
import Sticky from '../components/Sticky';
import { ShowMore } from '../styled-components/Button';
import Hr from '../styled-components/Hr';
import Colors from '../utils/Colors';
import { Box } from '../styled-components/Box';
import Link from 'next/link';

const App = () => {
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
			{loading ? (
				<Loading />
			) : (
				<div className="#home">
					<Sticky />
					<Header />
					<ScrollToProjects />
					<AboutHeader />
					<AboutParagraph />
					<ShowMore color="#FFFFFF" radius="10px">
						<Link href="/about">
							<a>Learn More</a>
						</Link>
					</ShowMore>
					<Box
						width="600px"
						height="325px"
						background={Colors.lighter_navy}
						color={Colors.pink_main}
						size="16px"
						radius="0px"
					>
						<Hr init_color={Colors.slate} hover_color={Colors.pinkish_purp} />
					</Box>
					<Projects />
				</div>
			)}
		</div>
	);
};

export default App;
