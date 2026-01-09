const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'forumdb';

let db;

async function connect() {
  if (!db) {
    await client.connect();
    db = client.db(dbName);
  }else{
    console.log("Test")
  }
  return db;
}

module.exports = connect;
