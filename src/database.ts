import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/test', {
	useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})
.then (db => console.log('DB is connected'))
.catch(err => console.log(err));