import { MongoServerError } from "mongodb";
export function errorThrower(e: {
  err: any;
  dublicationMessage?: string;
  customMessage?: string;
}): Error {
  if (e.err.message == "Document failed validation") {
    let error = new Error();
    error.message = e.err.message;
    error.name = "ValidationError";
    return error;
    // Inside this block, err is known to be a ValidationError
  } else if (e.err.code == "11000" || e.err.code == 11000) {
    return new Error(e.dublicationMessage ?? "Duplication");
  } else return new Error(e.customMessage);
}
