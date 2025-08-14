import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

const uri = process.env.MONGODB_URI;

//singleton
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise;
