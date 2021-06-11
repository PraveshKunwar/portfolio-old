import React from 'react';
import { LandingHeader } from '../styled-components/Header';
import Color from '../utils/Colors';
import Profile from '../styled-components/Profile';
import Image from 'next/image';

const Header: React.FC = () => {
	return (
		<div className="#header">
			<Profile>
				<img
					src="/profile.jpg"
					alt="Picture of the author"
					width={256}
					height={256}
					style={{ borderRadius: '50%' }}
				/>
			</Profile>
			<LandingHeader h1_color={Color.slate} b_color={Color.pink_main}>
				Hi, my name is Pravesh Kunwar. <br></br>
				<b>I create things with code.</b>
			</LandingHeader>
		</div>
	);
};

export default Header;
