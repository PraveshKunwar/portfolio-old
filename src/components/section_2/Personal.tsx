import React from 'react';
import { AboutMeHeader } from '../../styled-components/Header';
import Colors from '../../utils/Colors';
import Box from '../../styled-components/Box';
const Personal: React.FC = () => {
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
			<Box
				width="400px"
				height="250px"
				background={Colors.lighter_navy}
				color={Colors.dark_slate_border_purple}
				size="16px"
			>
				<div className="?work_box">
					{[
						'▹ Kroger | 2019 - Present',
						'▹ Ultimatum | 2021 - Present',
						'▹ AccelerateKID | Soon...',
					].map((work: string, i) => {
						return (
							<ul style={{ marginTop: '3rem' }}>
								<li style={{ listStyleType: 'none' }} key={i}>
									{work}
								</li>
							</ul>
						);
					})}
				</div>
			</Box>
		</div>
	);
};

export default Personal;
