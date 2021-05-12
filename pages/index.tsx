import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';

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
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';

export const Index: NextPage = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
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
					<ShowMore
						color={Colors.dark_slate_border_purple}
						radius="10px"
						onClick={() => {
							router.push('/about');
						}}
					>
						Learn More
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

export default Index;
