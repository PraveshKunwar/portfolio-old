import React from 'react';
import { AboutMeHeader } from '../../styled-components/Header';
import Colors from '../../utils/Colors';
const AboutHeader: React.FC = () => {
	return (
		<div className="#aboutme_header">
			<AboutMeHeader
				color={Colors.dark_slate_border_purple}
				size="30px"
				top="2rem"
				weight={700}
			>
				1a. About Me
			</AboutMeHeader>
		</div>
	);
};

export default AboutHeader;
