import axios, { AxiosResponse } from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';
import { recentlyPlayed, TokenData } from '../lib/spotify';

interface PropTypes {
	req: AxiosResponse<any>;
}

const Dashboard: NextPage<PropTypes> = ({ req }: PropTypes): JSX.Element => {
	useEffect(() => {
		console.log(req);
	}, []);
	return <div className="dashboard">Dashboard</div>;
};

/*export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const data: AxiosResponse<TokenData> = await axios.get('/api/auth');
	const myRecentlyPlayed = await recentlyPlayed(data.data.access_token);
	return {
		props: {
			req: myRecentlyPlayed,
		},
	};
};*/

export default Dashboard;
