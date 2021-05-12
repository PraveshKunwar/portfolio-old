import React from 'react';
import { AboutMeHeader } from '../styled-components/Header';
import Colors from '../utils/Colors';
import { Box } from '../styled-components/Box';
import {
	Html,
	Css,
	Js,
	ReactJS,
	Ts,
	Mongo,
	Node,
	Bss,
	Rust,
} from '../assets/svg/SVG_Icons';
import Hr from '../styled-components/Hr';
import Github from './Github';
const Personal: React.FC = () => {
	return (
		<div className="?work">
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<AboutMeHeader
				color={Colors.dark_slate_border_purple}
				size="30px"
				top="2rem"
				weight={700}
			>
				Work and Extracirriculars
			</AboutMeHeader>
			<Box
				width="400px"
				height="250px"
				background={Colors.lighter_navy}
				color={Colors.dark_slate_border_purple}
				size="16px"
			>
				<div className="?work_box_1">
					<p style={{ marginTop: '1rem' }}>
						<b style={{ color: Colors.pink_main }}>▹ </b>Ultimatum | 2021 -
						Present
					</p>
					<p>
						My personal Discord Bot. Worked with a group of contributors on this
						project, planned out commands and events to make this Discord Bot!
						(In the works!)
					</p>
				</div>
				<div className="?work_box_2">
					<p style={{ marginTop: '1rem' }}>
						<b style={{ color: Colors.pink_main }}>▹ </b>Socialistic | 2020 -
						Present
					</p>
					<p>
						Socialistic is a group project to allow people to give a description
						about themselves with their social medias, with one click of a link!
						(Not started yet, but coming soon!)
					</p>
				</div>
				<div className="?work_box_3">
					<p style={{ marginTop: '1rem' }}>
						<b style={{ color: Colors.pink_main }}>▹ </b> The Worlds Front Page
					</p>
					<p>
						A website that is in the works. Offers real time updates on latest
						global politics news, stock market, forex, and much more, including
						a future website currency system where users can cash out prizes on
						the website.
					</p>
				</div>
				<div className="?work_ec's">
					<p style={{ marginTop: '1rem' }}>
						<b style={{ color: Colors.pink_main }}>▹ </b> Extracirriculars
					</p>
					<p>
						National Honors Society, Marching Band, Tennis', Robotics Club,
						Gaming Club, Martial Arts, Business (Socialistic and Ultimatum).
					</p>
				</div>
			</Box>
			<AboutMeHeader
				color={Colors.dark_slate_border_purple}
				size="30px"
				top="2rem"
				weight={700}
			>
				Programming Languages
			</AboutMeHeader>
			<Box
				width="200px"
				height="200px"
				background={Colors.lighter_navy}
				color={Colors.dark_slate_border_purple}
				size="16px"
			>
				<div className="?lang_html">
					<Html />
					<p>
						<b style={{ color: Colors.blue_main }}>HTML</b>
					</p>
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Experience</b> - 100%
					</p>
				</div>
				<div className="?lang_css">
					<Css />
					<p>
						<b style={{ color: Colors.blue_main }}>CSS</b>
					</p>
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Experience</b> - 80%
					</p>
				</div>
				<div className="?lang_js">
					<Js />
					<p>
						<b style={{ color: Colors.blue_main }}>JavaScript</b>
					</p>
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Experience</b> - 85%
					</p>
				</div>
				<div className="?lang_ts">
					<Ts />
					<p>
						<b style={{ color: Colors.blue_main }}>TypeScript</b>
					</p>
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Experience</b> - 55%
					</p>
				</div>
				<div className="?lang_react">
					<ReactJS />
					<p>
						<b style={{ color: Colors.blue_main }}>React.JS</b>
					</p>
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Experience</b> - 75%
					</p>
				</div>
				<div className="?lang_node">
					<Node />
					<p>
						<b style={{ color: Colors.blue_main }}>Node.JS</b>
					</p>
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Experience</b> - 80%
					</p>
				</div>
				<div className="?lang_bss">
					<Bss />
					<p>
						<b style={{ color: Colors.blue_main }}>Bootstrap</b>
					</p>
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Experience</b> - 45%
					</p>
				</div>
				<div className="?lang_mongo">
					<Mongo />
					<p>
						<b style={{ color: Colors.blue_main }}>MongoDB</b>
					</p>
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Experience</b> - 65%
					</p>
				</div>
				<div className="?lang_rust">
					<Rust />
					<p>
						<b style={{ color: Colors.blue_main }}>Rust</b>
					</p>
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Experience</b> - 35%
					</p>
				</div>
			</Box>
			<AboutMeHeader
				color={Colors.dark_slate_border_purple}
				size="30px"
				top="2rem"
				weight={700}
			>
				Github: Latest Commits
			</AboutMeHeader>
			<Github />
		</div>
	);
};

export default Personal;
