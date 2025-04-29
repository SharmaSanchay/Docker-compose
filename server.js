const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;

// MongoDB connection URI
const mongoURL = 'mongodb://admin:super@mongodb:27017'; // from your docker-compose
const dbName = 'my-db';
const collectionName = 'my-collection';

// /getinfo route
app.get('/getinfo', async (req, res) => {
  try {
    const client = new MongoClient(mongoURL);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const data = await collection.find({}).toArray();
    await client.close();
    return res.send(data);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Failed to fetch data');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

