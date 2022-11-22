import { MongoServerError } from "mongodb";
import { DocumentDefinition } from "mongoose";
import MainprojectModel, {
  IMainProjectDocument,
} from "../models/main_Projects.model";
import { errorThrower } from "../utils/helpers/error.handellar.helper";

export async function createProject(
  input: DocumentDefinition<IMainProjectDocument>,
  locale: string
) {
  try {
    return await MainprojectModel.create(input);
  } catch (error) {
    let err = error as MongoServerError;
    console.error("error:", err);
    throw errorThrower({
      err: err,
      dublicationMessage:
        locale == "ar"
          ? `لا يمكن تسجيل هذا المشروع (${input.name}) بسبب تكرار الكود `
          : `Unable to create project  (${input.name}) due duplication `,
      customMessage:
        locale == "ar"
          ? `لا يمكن تسجيل هذا المشروع (${input.name})`
          : `Unable to create project  (${input.name})`,
    });
  }
}
