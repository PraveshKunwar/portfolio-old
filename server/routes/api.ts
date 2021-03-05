import express, { Request, Response, Router } from 'express';
import { resolve } from 'path';
const router: Router = express.Router();

router.get('/resume', (req: Request, res: Response) => {
	res.sendFile(resolve(__dirname, '../static', 'resume.pdf'));
});

router.get('/dummy', (req: Request, res: Response) => {
	const obj = {
		key: 'value',
		key2: 'val',
	};
	res.json(obj);
});

module.exports = router;
