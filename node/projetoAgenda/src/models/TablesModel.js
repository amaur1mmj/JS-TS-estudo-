const client = require('../../db');

const createSessionTable = async () => {
  const usersSchema = `
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL
    );
  `;

  const sessionSchema = `
    CREATE TABLE "session" (
      "sid" varchar NOT NULL COLLATE "default",
      "sess" json NOT NULL,
      "expire" timestamp(6) NOT NULL
    )
    WITH (OIDS=FALSE);

    ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

    CREATE INDEX "IDX_session_expire" ON "session" ("expire");
  `;

  try {
    await client.connect();

    await client.query(usersSchema);
    console.log('Tabela "users" criada com sucesso!');

    await client.query(sessionSchema);
    console.log('Tabela "session" criada com sucesso!');

  } catch (error) {
    console.error('Erro durante a criação das tabelas:', error);
  } finally {
    // Close the database connection
    await client.end();
  }
};

createSessionTable();

module.exports = createSessionTable;
