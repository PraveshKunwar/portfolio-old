import React from 'react';
import { ProjectHeader } from '../../styled-components/Header';
import { Box } from '../../styled-components/Box';
import Colors from '../../utils/Colors';
import GithubProjects from '../../utils/GithubProjects';
import { Git } from '../../assets/svg/SVG_Icons';

const Projects: React.FC = () => {
	return (
		<div className="?projects">
			<ProjectHeader
				id="projects"
				color={Colors.pink_main}
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
				background={Colors.lighter_navy}
				color={Colors.dark_slate_border_purple}
				size="16px"
				bottom="4rem"
			>
				<div>
					<Git />
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
				</div>
			</Box>
		</div>
	);
};

export default Projects;
