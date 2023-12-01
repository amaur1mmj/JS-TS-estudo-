const { Pool, Client} = require('pg');
require('dotenv').config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const client = new Client({
  host: PGHOST,
  port: 5432,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  
});

const pool = new Pool({
  host: PGHOST,
  user: PGDATABASE,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports =  client, pool;