const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
});

const MONGODB_HOSTNAME = process.env.MONGODB_HOSTNAME;

const MONGODB_PORT = process.env.MONGODB_PORT;

const MONGODB_DATABASE = process.env.MONGODB_DATABASE;

const MONGODB_USERNAME = process.env.MONGODB_USERNAME;

const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = {
    MONGODB_HOSTNAME,
    MONGODB_PORT,
    MONGODB_DATABASE,
    MONGODB_USERNAME,
    MONGODB_PASSWORD,
    JWT_SECRET_KEY
  };