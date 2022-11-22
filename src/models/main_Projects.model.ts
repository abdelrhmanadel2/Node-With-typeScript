import mongoose, { Document, Schema } from "mongoose";

// export interface IMainProject {
//   id?: string;
//   name: string;
//   code: string;
//   type: string;
//   line: string;
//   contract: string;
//   material_url?: string;
//   asPlan_url?: string;
// }
export enum ProjectType {
  frame = "Frame",
  frameless = "Frameless",
}
type MainProject = {
  // id?: string;
  name: string;
  code: string;
  type: ProjectType;
  line: string;
  contract: string;
  material_url?: string;
  asPlan_url?: string;
};
export interface IMainProjectDocument extends MainProject, Document {}
const MainProjectSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  type: { type: String, enume: Object.values(ProjectType) },
  line: { type: String, required: true },
  contract: { type: String, required: true },
  material_url: { type: String, required: false },
  asPlan_url: { type: String, required: false },
});
export default mongoose.model<IMainProjectDocument>(
  "Mainproject",
  MainProjectSchema
);

// class MainProjectsModel {
//   // create
//   async create(p: MainProject, locale: string): Promise<MainProject> {
//     let clintMongo;
//     try {
//       // open connection with DB
//       let { clint, db } = await connectToCluster(config.dataBaseUrl);
//       clintMongo = clint;
//       // run query
//       let projectCollection = db.collection("mainprojects");
//       const session = clintMongo.startSession();
//       session.startTransaction();
//       // add project with keys ex{"name":p.name}
//       let doc = await this.insertOne(p, projectCollection);
//       // console.log(`doc id = ${doc.insertedId}`);
//       let newProject = await this.findByID(
//         doc!.insertedId.toString(),
//         projectCollection
//       );
//       if (newProject == null) throw new Error();
//       session.commitTransaction();
//       return newProject;
//       // close connection
//     } catch (error) {
//       if (clintMongo) clintMongo.close();
//       errorThrower({
//         err: error as MongoServerError,
//         dublicationMessage:
//           locale == "ar"
//             ? `لا يمكن تسجيل هذا المشروع (${p.name}) بسبب تكرار الكود `
//             : `Unable to create project  (${p.name}) due project code duplication`,
//         customMessage:
//           locale == "ar"
//             ? `لا يمكن تسجيل هذا المشروع (${p.name})`
//             : `Unable to create project  (${p.name})`,
//       });
//     }
//   }

//   // get all
//   // get spacific Project
//   async getById(id: string): Promise<MainProject | null> {
//     let clintMongo;
//     try {
//       // open connection with DB
//       let { clint, db } = await connectToCluster(config.dataBaseUrl);
//       clintMongo = clint;
//       // run query
//       let projectCollection = db.collection("mainprojects");

//       let newProject = await projectCollection.findOne<MainProject>({
//         _id: new ObjectId(id),
//       });
//       // close connection
//       clint.close();
//       return newProject;
//     } catch (error) {
//       if (clintMongo) clintMongo.close();
//       errorThrower({
//         err: error as MongoServerError,
//         customMessage: `Unable to find project with id:(${id})`,
//       });
//     }
//   }

//   async insertOne(
//     p: MainProject,
//     collection: Collection
//   ): Promise<InsertOneResult<Document> | null> {
//     let newProject = await collection.insertOne({ ...p });
//     return newProject;
//   }
//   // update Project
//   // delete Project

//   async findByID(
//     id: string,
//     collection: Collection
//   ): Promise<MainProject | null> {
//     let newProject = await collection.findOne<MainProject>({
//       _id: new ObjectId(id),
//     });
//     return newProject;
//   }
//   // update Project
//   // delete Project
// }

// export default MainProjectsModel;
