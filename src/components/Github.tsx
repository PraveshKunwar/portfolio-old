import React, { useEffect } from 'react';
import fetch from 'node-fetch';
import { GithubData } from '../interfaces/FetchTypes';
const Github: React.FC = () => {
	useEffect(() => {
		fetch('/api/github')
			.then((res: Response) => res.json())
			.then((data: GithubData) => console.log(data));
	});
	return <div className="?github"></div>;
};

export default Github;
