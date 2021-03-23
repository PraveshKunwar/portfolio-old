import React from 'react';
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

const Home: React.FC = () => {
	return (
		<div className="#home">
			<Sticky />
			<Header />
			<ScrollToProjects />
			<AboutHeader />
			<AboutParagraph />
			<ShowMore color="#FFFFFF" radius="10px">
				<Link href="/about_me/AboutMe.tsx">
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
	);
};
export default Home;
