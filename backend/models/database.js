const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sports-poll');

const db = mongoose.connection;


db.on('error', err => console.error('Could not connect to the sports poll database', err));

db.once('open', () => console.log('Successfully connected to the sports poll database'));
