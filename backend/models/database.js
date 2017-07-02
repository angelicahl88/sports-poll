const mongoose = require('mongoose');
const dbPassword = require('../config').dbPassword;

// mongoose.connect('mongodb://localhost:27017/sports-poll');
mongoose.connect('mongodb://admin:' + dbPassword + '@cluster0-shard-00-00-gmtvu.mongodb.net:27017,cluster0-shard-00-01-gmtvu.mongodb.net:27017,cluster0-shard-00-02-gmtvu.mongodb.net:27017/sports-poll?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')

const db = mongoose.connection;


db.on('error', err => console.error('Could not connect to the sports poll database', err));

db.once('open', () => console.log('Successfully connected to the sports poll database'));
