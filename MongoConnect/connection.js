const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';

const database = 'firstDB';      //  Database name
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();        // Connecting to mongo
    let DB = result.db(database);               // Connecting to database
    let collection = DB.collection('products');     // Connecting to collection (i.e. table in RDMBS)
    return collection;
}

module.exports = dbConnect;