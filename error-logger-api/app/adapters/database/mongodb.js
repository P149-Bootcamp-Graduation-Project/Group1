const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://username:$[password]@$[hostlist]/db1?authSource=$[authSource]';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {

  assert.equal(null, err);
  client.close();
});

/*
//Alternatively
const mongoose = require('mongoose')

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/deneme", { useUnifiedTopology: true, useNewUrlParser: true})
  console.log('connected')
}

main()


*/