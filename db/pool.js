const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

module.exports = new Pool({
  connectionString: isProduction
    ? process.env.DATABASE_URL
    : process.env.LOCAL_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});
