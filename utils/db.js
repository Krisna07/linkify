// const MongoClient = require("mongodb");

// async function connect() {
//   const MONGODB_URI = process.env.MONGODB_URI;
//   const options = {};

//   let client = new MongoClient(MONGODB_URI, options);
//   if (!MONGODB_URI) {
//     throw new Error("MongoDB connection string missing");
//   }

//   try {
//     await client.connect();
//     console.log("Connected to database");
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// }

// export default connect;

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
