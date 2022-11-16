import config from "../config/config";
import { Db, MongoClient } from "mongodb";
let dbConnection: Db;
let Client: MongoClient;
export function connectToDb(callback: Function) {
  if (dbConnection) return dbConnection;
  MongoClient.connect(config.dataBaseUrl)
    .then((client) => {
      Client = client;
      dbConnection = client.db();
      return callback();
    })
    .catch((err) => {
      console.error("Unable to establish connection to DB ", err.stack);
      // process.exit(1)
      return callback(err);
    });
}
export function getDb() {
  if (dbConnection) return dbConnection;
  MongoClient.connect(config.dataBaseUrl).then((client) => {
    Client = client;
    dbConnection = client.db();
    return dbConnection;
  });
}
export function client() {
  return Client;
}
