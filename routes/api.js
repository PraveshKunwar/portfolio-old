import express, { Request, Response, Router } from 'express';
import fetch from 'node-fetch';
const router = express.Router();
require('dotenv').config();

router.get('/github', async (req, res) => {
	await fetch(
		'https://api.github.com/repos/PraveshKunwar/Ultimatum/commits/master'
	)
		.then((resp) => resp.json())
		.then((data) => res.send(data));
});

module.exports = router;
