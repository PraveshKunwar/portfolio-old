import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ScrollTo from '../../styled-components/ScrollTo';
import Link from '../../styled-components/Link';
import Colors from '../../utils/Colors';
import Hr from '../../styled-components/Hr';
const ScrollToProjects: React.FC = () => {
	return (
		<div>
			<ScrollTo className="?scroll_to">
				<Link data-scroll color={Colors.slate} href="#projects">
					<ArrowDownwardIcon fontSize="large" />
					<br></br>
					<p>Projects</p>
				</Link>
				<Hr init_color={Colors.slate} hover_color={Colors.gold} />
			</ScrollTo>
		</div>
	);
};

export default ScrollToProjects;
