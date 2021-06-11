import { NextPage } from 'next';
import { server } from '../checks';
import { LandingHeader as Header } from '../styled-components/Header';
import { AboutMeParagraph as Para } from '../styled-components/Paragraph';
import Colors from '../utils/Colors';
import { List } from '../styled-components/List';
import Link from '../styled-components/Link';
import Profile from '../styled-components/Profile';
import Image from 'next/image';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';

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

interface CommitElements {
	commit: {
		message: string;
	};
}

interface PropTypes {
	data: {
		CURRENTLY_PLAYING: any;
		RECENTLY_PLAYED: {
			items: Array<ItemType>;
		};
	};
	commits: Array<CommitElements>;
}

const Dashboard: NextPage<PropTypes> = ({
	data,
	commits,
}: PropTypes): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<div className="dashboard" style={{ color: Colors.darker_slate }}>
			{loading ? (
				<Loading />
			) : (
				<div className="content">
					<Header
						h1_color={Colors.darker_slate}
						b_color={Colors.gold}
						style={{ marginTop: '5rem' }}
					>
						<b>🚀 </b>
						PraveshK's Dashboard
						<br></br>
						<b style={{ fontSize: '15px' }}>
							This is my personal dashboard that contains my stats for things
							such as Spotify, Github, and more!
						</b>
					</Header>
					<Header
						h1_color={Colors.darker_slate}
						b_color={Colors.pink_main}
						style={{ marginTop: '3rem', fontSize: '25px' }}
					>
						<b>🌌 </b>
						Top tracks
						<br></br>
						<br></br>
						<b style={{ fontSize: '15px' }}>
							My favorite tracks that I've been recently listening to:
						</b>
					</Header>
					<List color={Colors.darker_slate}>
						{data.RECENTLY_PLAYED.items.slice(0, 10).map((item, i) => {
							return (
								<li key={i}>
									<Link
										href={item.track.external_urls.spotify}
										color={Colors.darker_slate}
										rel="noreferrer"
										target="_blank"
									>
										{`${i + 1} - ${item.track.name}`} ||{' '}
										{item.track.artists[0].name}
									</Link>
								</li>
							);
						})}
					</List>

					{
						<div className="currently-playing">
							<Header
								h1_color={Colors.darker_slate}
								b_color={Colors.pink_main}
								style={{ marginTop: '2rem', fontSize: '25px' }}
							>
								<b>🎶 </b>
								Currently playing
								<br></br>
								<br></br>
								<b style={{ fontSize: '15px' }}>
									Music I am currently listening to:
								</b>
							</Header>
							{data.CURRENTLY_PLAYING.item ? (
								<div style={{ marginTop: '-7rem' }}>
									<Profile>
										<img
											src={
												data.CURRENTLY_PLAYING.item.album.images[
													data.CURRENTLY_PLAYING.item.album.images.length > 0
														? 1
														: 0
												].url
											}
											alt="Currently playing image."
											width={256}
											height={256}
											style={{ borderRadius: '10%' }}
										/>
									</Profile>
									<Para color={Colors.darker_slate}>
										<Link
											href={data.CURRENTLY_PLAYING.item.external_urls.spotify}
											color={Colors.darker_slate}
											rel="noreferrer"
											target="_blank"
										>
											Currently playing: ${data.CURRENTLY_PLAYING.item.name}
										</Link>
									</Para>
								</div>
							) : (
								<Para color={Colors.darker_slate} style={{ marginTop: '1rem' }}>
									Currently not playing anything.
								</Para>
							)}
						</div>
					}
					<div className="github-commits">
						<Header
							h1_color={Colors.darker_slate}
							b_color={Colors.pink_main}
							style={{ marginTop: '2rem', fontSize: '25px' }}
						>
							<b>🏆 </b>
							Github commits
							<br></br>
							<br></br>
							<b style={{ fontSize: '15px' }}>
								Latest Github commits for top repositories:
							</b>
						</Header>
						<List color={Colors.darker_slate}>
							{commits.map((element, i) => {
								return <li key={i}>{element.commit.message}</li>;
							})}
						</List>
					</div>
				</div>
			)}
		</div>
	);
};

Dashboard.getInitialProps = async ({ req }) => {
	const res = await fetch(`${server}/api/auth`);
	const github = await fetch(`${server}/api/github`);
	const data = await res.json();
	const commits = await github.json();
	return {
		data,
		commits,
	};
};

export default Dashboard;
