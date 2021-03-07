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
} from '../assets/svg/SVG_Icons';
import Hr from '../styled-components/Hr';
const Personal: React.FC = () => {
	return (
		<div className="?work">
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
				radius="0px"
			>
				<div className="?work_box">
					{[
						'Kroger | 2019 - Present',
						'Ultimatum | 2021 - Present',
						'AccelerateKID | Soon...',
					].map((work: string, i) => {
						return (
							<ul style={{ marginTop: '3rem' }}>
								<li style={{ listStyleType: 'none' }} key={i}>
									<b style={{ color: Colors.pink_main }}>▹ </b>
									{work}
								</li>
							</ul>
						);
					})}
				</div>
				<div className="?work_ec's">
					<p style={{ marginTop: '10px' }}>
						{[
							'National Honors Society',
							'Marching Band',
							'Tennis',
							'Robotics Club',
							'Gaming Club',
							'Martial Arts',
						].map((ec, i) => {
							return (
								<p>
									<b style={{ color: Colors.pink_main }}>▹ </b> {ec}
								</p>
							);
						})}
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
				width="400px"
				height="300px"
				background={Colors.lighter_navy}
				color={Colors.dark_slate_border_purple}
				size="16px"
				radius="0px"
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
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Info: </b>I am quite comfortable with HTML, first language I ever
						learned as a programmer!
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
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Info: </b>CSS, a language I am experienced in as well, with a
						slight love hate relationship.
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
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Info: </b>JavaScript, my favorite language! I love this language
						a lot and use it everyday, a language I am heavily experienced in.
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
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Info: </b>TypeScript, a language that has grown on me, and has
						quickly been one of my favorites. Still learning, but an amazing
						language!
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
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Info: </b>React, an amazing JavaScript framework that makes web
						dev a lot easier! I am quite experienced in this sweet framework.
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
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Info: </b>Node.JS, my main backend language that I use. Quite
						familiar with frameworks such as Express.JS as well.
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
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Info: </b>Bootstrap, a cool JS framework. I use this often, but
						still learning, and not quite too experienced.
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
					<p>
						<b style={{ color: Colors.pink_main }}>▹ </b>
						<b>Info: </b>MongoDB, my only database that I use. I am quite
						experienced in making models, schemas, collections, etc, with
						MongoDB.
					</p>
				</div>
				<Hr init_color={Colors.slate} hover_color={Colors.pinkish_purp} />
			</Box>
		</div>
	);
};

export default Personal;
