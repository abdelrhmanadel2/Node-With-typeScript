import { MongoServerError } from "mongodb";
export function errorThrower(e: {
  err: MongoServerError;
  dublicationMessage?: string;
  customMessage?: string;
}): never {
  if (e.err.message == "Document failed validation") {
    let error = new Error();
    error.message = e.err.message;
    error.name = "ValidationError";
    throw error;
    // Inside this block, err is known to be a ValidationError
  } else if (e.err.code == "11000" || e.err.code == 11000) {
    throw new Error(e.dublicationMessage ?? "Duplication");
  } else throw new Error(e.customMessage);
}
