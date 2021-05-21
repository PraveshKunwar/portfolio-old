import React from 'react';
import Personal from '../components/Personal';
import Sticky from '../components/Sticky';

import { NextPage } from "next"
const AboutMe: NextPage = (): JSX.Element => {
	return (
		<div id="?about-me">
			<Sticky />
			<Personal />
			<div className="#projects">YOOTY</div>
		</div>
	);
}

export default AboutMe;
