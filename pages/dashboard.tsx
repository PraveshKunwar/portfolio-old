import axios, { AxiosResponse } from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';
import { server } from '../checks';
import { recentlyPlayed, TokenData } from '../lib/spotify';

interface PropTypes {
	data: {
		CURRENTLY_PLAYING: any;
		RECENTLY_PLAYED: any;
	};
}

const Dashboard: NextPage<PropTypes> = ({ data }: PropTypes): JSX.Element => {
	return <div className="dashboard">{data.CURRENTLY_PLAYING.item.name}</div>;
};

Dashboard.getInitialProps = async ({ req }) => {
	const res = await fetch(`${server}/api/auth`);
	const data = await res.json();
	return {
		data,
	};
};

export default Dashboard;
