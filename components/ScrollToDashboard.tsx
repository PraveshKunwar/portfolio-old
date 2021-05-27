import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ScrollTo from '../styled-components/ScrollTo';
import Link from '../styled-components/Link';
import Colors from '../utils/Colors';
import Hr from '../styled-components/Hr';
import { useRouter } from 'next/router';

const ScrollToDashboard: React.FC = () => {
	const router = useRouter();
	return (
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
	);
};

export default ScrollToDashboard;
