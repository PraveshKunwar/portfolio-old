import React from 'react';
import StickyLinks from '../styled-components/StickyLinks';
import Link from '../styled-components/Link';
import Colors from '../utils/Colors';
import Socials from '../utils/Socials';

import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import DescriptionIcon from '@material-ui/icons/Description';

const Sticky: React.FC = () => {
	return (
		<StickyLinks color={Colors.pink_main} className="?stick_links">
			<div>
				<Link
					href={Socials.github}
					color={Colors.pink_main}
					rel="noreferrer"
					target="_blank"
				>
					<GitHubIcon fontSize="inherit" />
				</Link>
			</div>
			<div>
				<Link
					href={Socials.instagram}
					color={Colors.pink_main}
					rel="noreferrer"
					target="_blank"
				>
					<InstagramIcon fontSize="inherit" />
				</Link>
			</div>
			<div>
				<Link
					href={Socials.youtube}
					color={Colors.pink_main}
					rel="noreferrer"
					target="_blank"
				>
					<YouTubeIcon fontSize="inherit" />
				</Link>
			</div>
			<div>
				<Link
					href={Socials.twitter}
					color={Colors.pink_main}
					rel="noreferrer"
					target="_blank"
				>
					<TwitterIcon fontSize="inherit" />
				</Link>
			</div>
		</StickyLinks>
	);
};

export default Sticky;
