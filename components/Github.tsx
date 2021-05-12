import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import { GithubData } from '../interfaces/FetchTypes';
import { AboutMeHeader } from '../styled-components/Header';
import Colors from '../utils/Colors';
import { Box } from '../styled-components/Box';
import moment from 'moment';
const Github: React.FC = () => {
	const [data, setData] = useState<GithubData>();
	useEffect(() => {
		fetch('/api/github')
			.then((res: Response) => res.json())
			.then((data: GithubData) => {
				setData(data);
			});
	});
	return (
		<div className="?github">
			<Box
				width="400px"
				height="250px"
				background={Colors.lighter_navy}
				color={Colors.dark_slate_border_purple}
				size="16px"
				radius="0px"
			></Box>
			<br></br>
			<br></br>
		</div>
	);
};

export default Github;
