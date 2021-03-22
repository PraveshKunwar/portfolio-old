import express, { Application, Request, Response } from 'express';
import fetch from 'node-fetch';
import path from 'path';
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();
const api = require('./routes/api');

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '/client', 'build', 'index.html'));
	});
}

app.use('/api', api);

app.listen(PORT, () => {
	console.log(`localhost://${PORT}`);
});
