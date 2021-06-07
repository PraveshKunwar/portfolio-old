import type { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
import { Octokit } from '@octokit/core';

dotenv.config();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
	const owner = 'PraveshKunwar',
		repo = 'portfolio',
		perPage = 5;

	const commits = await octokit.request(`GET /repos/{owner}/{repo}/commits`, {
		owner,
		repo,
		per_page: perPage,
	});
	res.send(commits.data);
};
