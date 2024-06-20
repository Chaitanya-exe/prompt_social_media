import { makeUsersTable, makePromptTable } from './model.database';
const Pool = require('pg').Pool;

export const pool = new Pool({
    connectionString: `${process.env.DATABASE}?ssl=true`
})

try {
    const userClient = await pool.connect();
    console.log("Connected to databases");
    makeUsersTable(userClient);
    makePromptTable(userClient);
    userClient.release();
} catch (error) {
    console.log(error);
}