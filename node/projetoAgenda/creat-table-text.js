const sql = require('./db');

sql`
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT
);
`.then(()=>{
    console.log('tabela criada!')
})