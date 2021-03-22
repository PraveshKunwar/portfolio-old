import express, { Request, Response, Router } from 'express';
import fetch from 'node-fetch';
const router: Router = express.Router();
require('dotenv').config();

// from src/interfaces/FetchTypes;
interface GithubTypes {
	author: object;
	comments_url: string;
	commit: object;
	commiter: object;
	files: Array<object>;
	html_url: string;
	node_id: string;
	parents: Array<object>;
	sha: string;
	stats: object;
	url: string;
}

router.get('/github', async (req: Request, res: Response) => {
	await fetch(
		'https://api.github.com/repos/PraveshKunwar/Ultimatum/commits/master'
	)
		.then((resp) => resp.json())
		.then((data: GithubTypes) => res.send(data));
});

module.exports = router;
