import { NextApiRequest, NextApiResponse } from 'next';
import { accessToken, recentlyPlayed } from '../../lib/spotify';
import nookies from 'nookies';

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const response = await accessToken();
	const data = await recentlyPlayed(response.access_token);
	res.json({
		RECENTLY_PLAYED: data.data,
	});
}
