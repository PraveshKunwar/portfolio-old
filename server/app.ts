import express, { Application, Request, Response } from 'express';
//@ts-ignore
const PORT = process.env.PORT | 5000;

const app: Application = express();
const api = require('./routes/api');

app.use('/api', api);

app.get('/', (req: Request, res: Response) => {
	res.send('HELLO WORLD');
});

app.listen(PORT, () => {
	console.log(`localhost://${PORT}`);
});
