import { pool } from "@utils/database"

export const POST = async (req)=>{
    try {
        const userClient = await pool.connect();
        const {userId, prompt, tag} = await req.json();
        const dbRes = await userClient.query(`INSERT INTO Prompts(userId, prompt, tag) VALUES($1, $2, $3) RETURNING *;`,[userId, prompt, tag]);
        const res = await dbRes.rows[0]
        console.log(res);
        userClient.release();
        return new Response(JSON.stringify(res), {status: 201});
    } catch (error) {
        console.log(error)
        return new Response("Failed to create a prompt", {status: 500});
    }
}