import React from 'react';
import { AboutMeParagraph } from '../../styled-components/Paragraph';
import Colors from '../../utils/Colors';
import { Box } from '../../styled-components/Box';
const AboutParagraph: React.FC = () => {
	return (
		<div className="?about_me_text">
			<Box
				width="600px"
				height="300px"
				background={Colors.lighter_navy}
				color={Colors.pink_main}
				size="16px"
			>
				<div className="?about_me_box">
					<AboutMeParagraph
						color={Colors.dark_slate_border_purple}
						style={{ marginTop: '4rem' }}
					>
						<b style={{ color: Colors.pink_main }}>▹</b>Welcome to my personal
						portfolio. I am Pravesh Kunwar, a rising 17 year old web developer
						who loves to create programs and write code. <br></br>
						<br></br>
						<b style={{ color: Colors.pink_main }}>▹</b>I started coding when I
						was 13, and have never stopped then. <br></br>
						<br></br>
						<b style={{ color: Colors.pink_main }}>▹</b>Now, its become my
						passion, and something that I look forward to doing everyday.
					</AboutMeParagraph>
				</div>
			</Box>
		</div>
	);
};

export default AboutParagraph;
