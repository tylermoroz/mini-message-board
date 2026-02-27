const { Client } = require("pg");

const connectionString =
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_URL
    : process.env.LOCAL_URL;

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      text VARCHAR ( 255 ) NOT NULL,
      username VARCHAR ( 50 ) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );
`;

async function init() {
  const client = new Client({
    connectionString,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
  });
  await client.connect();
  await client.query(SQL);
  console.log("Table created or already exists!");
  await client.end();
}

init();
