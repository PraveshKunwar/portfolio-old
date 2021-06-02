import { NextApiRequest, NextApiResponse } from 'next';
import {
	accessToken,
	currentlyPlaying,
	recentlyPlayed,
} from '../../lib/spotify';

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const response = await accessToken();
	const recent = await recentlyPlayed(response.access_token);
	const current = await currentlyPlaying(response.access_token);
	return res.json({
		RECENTLY_PLAYED: recent.data,
		CURRENTLY_PLAYING: current.data,
	});
}
