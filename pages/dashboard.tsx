import axios, { AxiosResponse } from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { server } from '../checks';
import { recentlyPlayed, TokenData } from '../lib/spotify';
import Colors from '../utils/Colors';

interface AlbumType {
	album_type: string;
	artists: any;
	available_markets: Array<string>;
	external_urls: {
		spotify: string;
	};
	href: string;
	id: string;
	images: any;
	name: string;
	release_date: string;
	release_date_precision: string;
	total_tracks: number;
	type: string;
	uri: string;
}

interface ItemType {
	played_at: string;
	track: {
		album: AlbumType;
		artists: any;
		available_markets: Array<string>;
		disc_number: number;
		duration_ms: number;
		explicit: boolean;
		external_ids: any;
		external_urls: any;
		href: string;
		id: string;
		is_local: boolean;
		name: string;
		popularity: number;
		preview_url: any;
		track_number: number;
		type: string;
		uri: string;
	};
}

interface PropTypes {
	data: {
		CURRENTLY_PLAYING: any;
		RECENTLY_PLAYED: {
			items: Array<ItemType>;
		};
	};
}

const Dashboard: NextPage<PropTypes> = ({ data }: PropTypes): JSX.Element => {
	console.log(data.RECENTLY_PLAYED.items);
	return (
		<div className="dashboard" style={{ color: Colors.darker_slate }}>
			{data.CURRENTLY_PLAYING.item
				? data.CURRENTLY_PLAYING.item.name
				: 'Currently not playing anything!'}

			{data.RECENTLY_PLAYED.items.map((item, i) => {
				return (
					<ul>
						<li key={i}>
							{item.track.name} - {item.track.popularity}
						</li>
					</ul>
				);
			})}
		</div>
	);
};

Dashboard.getInitialProps = async ({ req }) => {
	const res = await fetch(`${server}/api/auth`);
	const data = await res.json();
	return {
		data,
	};
};

export default Dashboard;
