import MainProject from "../types/main_project.type";
import { connectToCluster } from "../database/connect_to.db";
import config from "../config/config";
import { Collection, ObjectId } from "mongodb";

class MainProjectsModel {
  // create
  async create(p: MainProject): Promise<MainProject> {
    let clintMongo;
    try {
      // open connection with DB
      let { clint, db } = await connectToCluster(config.dataBaseUrl);
      clintMongo = clint;
      // run query
      let projectCollection = db.collection("mianProjects");
      const session = clintMongo.startSession();
      session.startTransaction();

      let doc = await projectCollection.insertOne({ ...p });
      console.log(`doc id = ${doc.insertedId}`);
      let newProject = await this.findByID(
        doc.insertedId.toString(),
        projectCollection
      );
      if (newProject == null) throw new Error();
      session.commitTransaction();
      return newProject;
      // close connection
    } catch (error) {
      if (clintMongo) clintMongo.close();
      throw new Error(`Unable to create (${p.name})`);
    }
  }

  // get all
  // get spacific Project
  async getById(id: string): Promise<MainProject | null> {
    let clintMongo;
    try {
      // open connection with DB
      let { clint, db } = await connectToCluster(config.dataBaseUrl);
      clintMongo = clint;
      // run query
      let projectCollection = db.collection("mianProjects");

      let newProject = await projectCollection.findOne<MainProject>({
        _id: new ObjectId(id),
      });
      // close connection
      clint.close();
      return newProject;
    } catch (error) {
      if (clintMongo) clintMongo.close();
      throw new Error(`Unable to find project with id:(${id})`);
    }
  }

  async findByID(
    id: string,
    collection: Collection
  ): Promise<MainProject | null> {
    let newProject = await collection.findOne<MainProject>({
      _id: new ObjectId(id),
    });
    return newProject;
  }
  // update Project
  // delete Project
}

export default MainProjectsModel;
