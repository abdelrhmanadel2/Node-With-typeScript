import mongoose from "mongoose";

export async function connectToCluster(uri: string) {
  console.log("Connecting to MongoDB Atlas cluster...");
  return mongoose.connect(uri, (err) => {
    if (err) {
      console.error("Connection to MongoDB Atlas failed!", err), process.exit();
    } else console.log("mongdb is connected");
  });
}
