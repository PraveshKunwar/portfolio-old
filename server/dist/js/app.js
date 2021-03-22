'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const path_1 = __importDefault(require('path'));
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express_1.default();
const api = require('./routes/api');
if (process.env.NODE_ENV === 'production') {
	app.use(express_1.default.static('client/build'));
	app.get('*', (req, res) => {
		console.log(path_1.default.join(__dirname));
	});
}
app.use('/api', api);
app.get('/', (req, res) => {
	res.send('HELLO WORLD');
	console.log(
		path_1.default.join(
			__dirname,
			'../',
			'../',
			'../client',
			'build',
			'index.html'
		)
	);
});
app.listen(PORT, () => {
	console.log(`localhost://${PORT}`);
});
