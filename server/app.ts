import express, { Application, Request, Response } from 'express';
import fetch from 'node-fetch';
import path from 'path';
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app: Application = express();
const api = require('./routes/api');

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req: Request, res: Response) => {
		console.log(path.join(__dirname));
	});
}

app.use('/api', api);

app.get('/', (req: Request, res: Response) => {
	res.send('HELLO WORLD');
	console.log(
		path.join(__dirname, '../', '../', '../client', 'build', 'index.html')
	);
});

app.listen(PORT, () => {
	console.log(`localhost://${PORT}`);
});
