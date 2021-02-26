import React from 'react';
import { AboutMeHeader } from '../../styled-components/Header';
import Colors from '../../utils/Colors';

const Work: React.FC = () => {
	return (
		<div className="?work">
			<AboutMeHeader
				color={Colors.dark_slate_border_purple}
				size="30px"
				top="2rem"
				weight={700}
			>
				1b. Work
			</AboutMeHeader>
		</div>
	);
};

export default Work;
