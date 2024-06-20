import { pool } from "@utils/database";

export const GET = async (req, res) =>{
    try {
        const userClient = await pool.connect();
        const dbRes = await userClient.query(`SELECT p.prompt, p.tag ,u.image, u.username, u.email FROM Prompts p INNER JOIN Users u ON CAST(u.id AS VARCHAR) = p.userId  WHERE CAST(u.id AS VARCHAR) = p.userId`);
        const data = dbRes.rows;
        userClient.release();
        return new Response(JSON.stringify(data), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch posts", {status: 500});
    }
}