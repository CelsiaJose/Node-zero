import 'dotenv/config';
//require("dotenv").config();Existem dois imports Um o de cima e o ouro este Outro import mas que nao funcione
import postgres from 'postgres' // Importando o postgres 
//Configurando as variaveis de ambiente
//Do curso########
const  {PGHOST,PGDATABASE,PGUSER,PGPASSWORD,Endpoint} =process.env;
// O que vou fazer 
/*onst client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });*/
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;
console.log(URL)

export const sql = postgres(URL,{ssl:'require'});
