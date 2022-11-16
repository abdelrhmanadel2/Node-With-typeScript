import dotenv from "dotenv";
dotenv.config();
const {
  DB_URI,
  DB_NS,
  secret,
  PORT,
  GOOGLE_APPLICATION_CREDENTIALS,
  SENDGRID_API_KEY,
  MAIL_EMAIL,
} = process.env;
export default {
  dataBaseUrl: DB_URI!,
  dataBaseName: DB_NS,
  secret,
  port: PORT,
  googlrCreds: GOOGLE_APPLICATION_CREDENTIALS,
  emailKey: SENDGRID_API_KEY,
  email: MAIL_EMAIL,
};
