import express, { Application, Request, Response } from 'express';
//@ts-ignore
const PORT = process.env.PORT | 5000;

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
	res.send('HELLO WORLD');
});

app.listen(PORT, () => {
	console.log(`localhost:3000/${PORT}`);
});
