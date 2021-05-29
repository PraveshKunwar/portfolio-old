import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ScrollTo from '../styled-components/ScrollTo';
import Link from '../styled-components/Link';
import Colors from '../utils/Colors';
import Hr from '../styled-components/Hr';
import { useRouter } from 'next/router';

const ScrollToProjects: React.FC = () => {
	const router = useRouter();
	return (
		<div>
			<div>
				<ScrollTo className="?scroll_to">
					<Link data-scroll color={Colors.slate}>
						<ArrowRightIcon
							fontSize="large"
							onClick={() => {
								router.push('/dashboard');
							}}
						/>
						<br></br>
						<p>Dashboard</p>
					</Link>
				</ScrollTo>
			</div>
			<ScrollTo className="?scroll_to">
				<Link data-scroll color={Colors.slate}>
					<ArrowDownwardIcon
						fontSize="large"
						onClick={() => {
							router.push('/about');
						}}
					/>
					<br></br>
					<p>Projects</p>
				</Link>
				<Hr init_color={Colors.slate} hover_color={Colors.pinkish_purp} />
			</ScrollTo>
		</div>
	);
};

export default ScrollToProjects;
