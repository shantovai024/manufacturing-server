const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// Mongodb

const uri = "mongodb+srv://cycleGuru:BOGLIBqy71Zpj8J2@cluster0.hhjg5g4.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {

    const productCollection = client.db('product-list').collection('products')
    console.log("Connected to DataBase");

    // await client.connect()

    // (Read) Find Multiple Documents
    app.get('/purchase', async (req, res) => {
      const query = {}
      const cursor = productCollection.find(query)
      const products = await cursor.toArray()
      res.send(products)
    })

    // (Read) Find Single Document
    app.get('/purchase/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: ObjectId(id) }
      const parts = await productCollection.findOne(query)
      res.send(parts)
    })
  }

  finally {
  }

}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
