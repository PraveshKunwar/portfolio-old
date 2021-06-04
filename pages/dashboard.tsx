import { NextPage } from 'next';
import { server } from '../checks';
import { LandingHeader as Header } from '../styled-components/Header';
import { AboutMeParagraph as Para } from '../styled-components/Paragraph';
import Colors from '../utils/Colors';
import { List } from '../styled-components/List';
import Link from '../styled-components/Link';
import Profile from '../styled-components/Profile';
import Image from 'next/image';

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
	console.log(data.CURRENTLY_PLAYING.item);
	return (
		<div className="dashboard" style={{ color: Colors.darker_slate }}>
			<Header
				h1_color={Colors.darker_slate}
				b_color={Colors.pink_main}
				style={{ marginTop: '3rem' }}
			>
				<b>🚀 </b>
				PraveshK's Dashboard
				<br></br>
				<br></br>
			</Header>

			{data.CURRENTLY_PLAYING.item ? (
				<div className="currently-playing">
					<img
						src={
							data.CURRENTLY_PLAYING.item.album.images[
								data.CURRENTLY_PLAYING.item.album.images.length > 0 ? 1 : 0
							].url
						}
						alt="Currently playing image."
						width={256}
						height={256}
					/>
					<Para color={Colors.darker_slate} style={{ marginTop: '4rem' }}>
						<Link
							href={data.CURRENTLY_PLAYING.item.external_urls.spotify}
							color={Colors.darker_slate}
							rel="noreferrer"
							target="_blank"
						>
							{' '}
							Currently playing: {data.CURRENTLY_PLAYING.item.name}
						</Link>
					</Para>
				</div>
			) : (
				'Currently not playing anything!'
			)}
			<List color={Colors.darker_slate}>
				{data.RECENTLY_PLAYED.items.map((item, i) => {
					return (
						<li key={i}>
							<Link
								href={item.track.external_urls.spotify}
								color={Colors.pink_main}
								rel="noreferrer"
								target="_blank"
							>{`${i} - ${item.track.name}`}</Link>
						</li>
					);
				})}
			</List>
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
