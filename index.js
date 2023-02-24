const express = require('express')
const cors = require('cors')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000

require('dotenv').config()

// middleware
app.use(cors())
app.use(express.json())

// Mongodb

const uri = "mongodb+srv://cycleGuru:BOGLIBqy71Zpj8J2@cluster0.hhjg5g4.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("product-list").collection("products");
  // perform actions on the collection object
  // client.close();
  console.log('db Connected');
});



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
