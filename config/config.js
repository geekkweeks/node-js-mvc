const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    migrationStorageTableName: "migrations",
    logging:
      process.env.NODE_EN === "development"
        ? (...msg) => console.log(msg)
        : false,
    dialectOptions: {
      requestTimeout: 30000,
      encrypt: true,
    },
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    migrationStorageTableName: "migrations",
    dialectOptions: {
      requestTimeout: 30000,
      encrypt: true,
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    migrationStorageTableName: "migrations",
    dialectOptions: {
      requestTimeout: 30000,
      encrypt: true,
    },
  },
};
