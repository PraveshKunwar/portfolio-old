import React from 'react';
import { LandingHeader } from '../styled-components/Header';
import Color from '../utils/Colors';
import Profile from '../styled-components/Profile';
import Image from 'next/image';
//@ts-ignore\

const Header: React.FC = () => {
	return (
		<div className="#header">
			<Profile src={require('/profile.jpg')} />
			<LandingHeader h1_color={Color.slate} b_color={Color.pink_main}>
				Hi, my name is Pravesh Kunwar. <br></br>
				<b>I create things with code.</b>
			</LandingHeader>
		</div>
	);
};

export default Header;
