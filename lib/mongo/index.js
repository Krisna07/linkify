const MongoClient = require("mongodb");

async function connect() {
  const MONGODB_URI = process.env.MONGODB_URI;
  const options = {};

  let client = new MongoClient(MONGODB_URI, options);
  if (!MONGODB_URI) {
    throw new Error("MongoDB connection string missing");
  }

  try {
    await client.connect();
    console.log("Connected to database");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connect;
