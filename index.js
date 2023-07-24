const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const college = require('./data/college.json');


app.get('/', (req, res) =>{
  res.send('college carts')
});

app.get('/college', (req, res) =>{
  res.send(college);
})

app.get('/college/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  if (id == 0) {
      res.send(college)
  }
  else{
      const selectedCollege = chefs.find(n => n.id == id);
      res.send(selectedCollege)
  }
  
})

// // MongoDB functions
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@nowshinkhan.c8ljhxf.mongodb.net/?retryWrites=true&w=majority`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//     const collegeCollection = client.db('college').collection('carts');


//     app.get('/carts', async (req, res) => {
//         const result = await collegeCollection.find().toArray();
//         res.send(result); 
//     });

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


app.get ('/', (req, res) =>{
    res.send ('simple CURD is running')
})

app.listen(port, () =>{
    console.log(`curd is running on port: ${port}`)
})