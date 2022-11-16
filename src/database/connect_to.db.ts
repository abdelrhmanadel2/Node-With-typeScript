import { MongoClient, Db } from "mongodb";

export async function connectToCluster(uri: string) {
  let mongoClient: MongoClient;
  let db: Db;
  try {
    mongoClient = new MongoClient(uri);
    console.log("Connecting to MongoDB Atlas cluster...");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");
    db = mongoClient.db();
    return { clint: mongoClient, db };
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
}
