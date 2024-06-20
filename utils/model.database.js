
export async function makeUsersTable(client){
    try {
        await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        await client.query(`CREATE TABLE IF NOT EXISTS Users(
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        image TEXT
        );`);
        console.log("Users table created.");
    } catch (error) {
        console.log(error)
    }
}

export async function makePromptTable(client){
    try {
        await client.query(`CREATE TABLE IF NOT EXISTS Prompts(
            userId VARCHAR(255),
            prompt TEXT,
            tag VARCHAR(255)
        );`);
        console.log("Prompt table connected")
    } catch (error) {
        console.log(error);
    }
}