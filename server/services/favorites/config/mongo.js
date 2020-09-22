const MongoURI = 'mongodb://localhost:27017';

const MongoClient = require('mongodb').MongoClient;
const db_name = 'InstaPin';
const client = new MongoClient(MongoURI, { useUnifiedTopology: true });
client.connect();
const db = client.db(db_name);
module.exports = db;