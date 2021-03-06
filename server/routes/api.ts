import express, { Request, Response, Router } from 'express';
const router: Router = express.Router();

router.get('/dummy', (req: Request, res: Response) => {});

module.exports = router;
