import express, { Request, Response, Router } from 'express';
import { GITHUB } from '../secrets';
import fetch from 'node-fetch';
const router: Router = express.Router();
require('dotenv').config();

const token = process.env.GITHUB_TOKEN || GITHUB;
const query = `
query {
	repository(name: "linux", owner: "torvalds") {
	  defaultBranchRef {
		target {
		  ... on Commit {
			history(first: 1) {
			  nodes {
				message
				committedDate
				authoredDate
				oid
				author {
				  email
				  name
				}
			  \}
			}
		  }
		}
	  }
	}
  }
`;
router.get('/dummy', (req: Request, res: Response) => {
	res.send('hello world');
});
router.get('/github', (req: Request, res: Response) => {});

module.exports = router;
