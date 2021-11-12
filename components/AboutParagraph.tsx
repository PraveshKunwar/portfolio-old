import React from 'react';
import { AboutMeParagraph } from '../styled-components/Paragraph';
import Colors from '../utils/Colors';
import { Box } from '../styled-components/Box';
const AboutParagraph: React.FC = () => {
	return (
		<div className="?about_me_text">
			<AboutMeParagraph color={Colors.slate} style={{ marginTop: '1rem' }}>
				Welcome to my personal portfolio. I am Pravesh Kunwar, a rising 17 year
				old web developer who loves to create programs and write code. <br></br>
				I started coding when I was 13, and have never stopped then. Now, its
				become my passion, and something that I look forward to doing everyday.
				<br></br> <br></br>As I was wandering around on my laptop at 13 years
				old, I saw this programming ad on Web Development. <br></br>Curious, I
				clicked on the ad and lead me to the infamous website Codeacademy.com.
				Soon enough, I got into web development. <br></br>Now, with my current
				knowledge, I spend a lot of my time from creating websites with React.JS
				or Discord bots.
			</AboutMeParagraph>
		</div>
	);
};

export default AboutParagraph;
