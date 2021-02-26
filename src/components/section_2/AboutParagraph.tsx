import React from 'react';
import { AboutMeParagraph } from '../../styled-components/Paragraph';
import Colors from '../../utils/Colors';
const AboutParagraph: React.FC = () => {
	return (
		<div className="?about_me_text">
			<AboutMeParagraph color={Colors.dark_slate_border_purple}>
				<b>▹</b>Welcome to my personal portfolio. I am Pravesh Kunwar, a rising
				17 year old web developer who loves to create programs and write code.{' '}
				<br></br>
				<br></br>
				<b>▹</b>I started coding when I was 13, and have never stopped then.{' '}
				<br></br>
				<br></br>
				<b>▹</b>Now, its become my passion, and something that I look forward to
				doing everyday.
			</AboutMeParagraph>
		</div>
	);
};

export default AboutParagraph;
