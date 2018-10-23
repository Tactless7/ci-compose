const express = require('express');
const app = express();

var MongoClient = require('mongodb').MongoClient;
(async () => {
  await connect();

  app.get('/', function(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(`Hello copain`);
  });

  app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });
})();

async function connect() {
  try {
    console.log('try to connect');
    await MongoClient.connect('mongodb://database:27017/animals');
    console.log('connected');
  } catch (e) {
    setTimeout(async () => {
      await connect();
    }, 3000);
  }
}
