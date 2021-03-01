import React from 'react';
import { ProjectHeader } from '../../styled-components/Header';
import { Box } from '../../styled-components/Box';
import Link from '../../styled-components/Link';
import Colors from '../../utils/Colors';
import GithubProjects from '../../utils/GithubProjects';
import { Git } from '../../assets/svg/SVG_Icons';

const Projects: React.FC = () => {
	return (
		<div className="?projects">
			<ProjectHeader
				id="projects"
				color={Colors.dark_slate_border_purple}
				size="30px"
				top="2rem"
				weight={700}
				bottom="2rem"
			>
				2. Projects
			</ProjectHeader>
			<Box
				width="400px"
				height="300px"
				background={Colors.pink_main}
				color={Colors.dark_slate_border_purple}
				size="16px"
				bottom="4rem"
				radius="0px"
			>
				<div className="?projects_socialistic">
					<Link
						color=""
						href={GithubProjects.socialistic.link}
						rel="noreferrer"
						target="_blank"
					>
						<Git />
					</Link>
					<ProjectHeader
						id="projects"
						color={Colors.gold}
						size="20px"
						top="-1.5rem"
						weight={700}
						bottom="2rem"
					>
						Socialistic
					</ProjectHeader>
					<p style={{ color: Colors.lighter_pink }}>
						<b style={{ color: Colors.slate }}>▹ </b>
						{GithubProjects.socialistic.description} (Coming Soon!)
					</p>
					<p style={{ color: Colors.lighter_pink }}>
						<b style={{ color: Colors.slate }}>▹ </b>
						<b>Languages: </b>
						{GithubProjects.socialistic.languages}
					</p>
				</div>
				<div className="?projects_ultimatum">
					<Link
						color=""
						href={GithubProjects.ultimatum.link}
						rel="noreferrer"
						target="_blank"
					>
						<Git />
					</Link>
					<ProjectHeader
						id="projects"
						color={Colors.gold}
						size="20px"
						top="-1.5rem"
						weight={700}
						bottom="2rem"
					>
						Ultimatum
					</ProjectHeader>
					<p style={{ color: Colors.lighter_pink }}>
						<b style={{ color: Colors.slate }}>▹ </b>
						{GithubProjects.ultimatum.description} (Coming Soon!)
					</p>
					<p style={{ color: Colors.lighter_pink }}>
						<b style={{ color: Colors.slate }}>▹ </b>
						<b>Languages: </b>
						{GithubProjects.ultimatum.languages}
					</p>
				</div>
				<div className="?projects_statistify">
					<Link
						color=""
						href={GithubProjects.statistify.link}
						rel="noreferrer"
						target="_blank"
					>
						<Git />
					</Link>
					<ProjectHeader
						id="projects"
						color={Colors.gold}
						size="20px"
						top="-1.5rem"
						weight={700}
						bottom="2rem"
					>
						Statistify
					</ProjectHeader>
					<p style={{ color: Colors.lighter_pink }}>
						<b style={{ color: Colors.slate }}>▹ </b>
						{GithubProjects.statistify.description} (Coming Soon!)
					</p>
					<p style={{ color: Colors.lighter_pink }}>
						<b style={{ color: Colors.slate }}>▹ </b>
						<b>Languages: </b>
						{GithubProjects.statistify.languages}
					</p>
				</div>
				<div className="?projects_spotifibe">
					<Link
						color=""
						href={GithubProjects.spotifibe.link}
						rel="noreferrer"
						target="_blank"
					>
						<Git />
					</Link>
					<ProjectHeader
						id="projects"
						color={Colors.gold}
						size="20px"
						top="-1.5rem"
						weight={700}
						bottom="2rem"
					>
						SpotiFibe
					</ProjectHeader>
					<p style={{ color: Colors.lighter_pink }}>
						<b style={{ color: Colors.slate }}>▹ </b>
						{GithubProjects.spotifibe.description} (Coming Soon!)
					</p>
					<p style={{ color: Colors.lighter_pink }}>
						<b style={{ color: Colors.slate }}>▹ </b>
						<b>Languages: </b>
						{GithubProjects.spotifibe.languages}
					</p>
				</div>
			</Box>
		</div>
	);
};

export default Projects;
