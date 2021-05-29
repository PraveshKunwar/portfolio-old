import { NextApiRequest, NextApiResponse } from 'next';
import { accessToken } from '../../lib/spotify';

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const response = await accessToken();
	res.send(response);
}
