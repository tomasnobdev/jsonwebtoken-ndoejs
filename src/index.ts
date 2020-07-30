import dotenv from 'dotenv';
dotenv.config();

import './database'
import app from './app';

function main() {
	app.listen(app.get('port'));
	console.log('Server on Port', app.get('port'));
}

main();