import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {pool} from "@/utils/database";
import { imageToByteArray } from "@utils/imageProcessor";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
        })
    ],
    callbacks:{

        async session({session}){
            const userClient = await pool.connect();
            const sessionUser = await userClient.query(`SELECT * FROM Users WHERE email=$1`,[session.user.email]);
    
            session.user.id = sessionUser.rows[0].id.toString();
            return session
        },
        async signIn({profile}){
            try {
                const userClient = pool.connect();
                const dbRes = (await userClient).query(`SELECT * FROM Users WHERE email=$1`,[profile.email]);
                console.log(profile.picture)
                if((await dbRes).rowCount === 0){
                    const res = await (await userClient).query(`INSERT INTO Users(username, email, image) VALUES($1, $2, $3) RETURNING *;`,[profile.name, profile.email, `${profile.picture}`]);
                    console.log(res.rows[0]);
                }
                (await userClient).release();
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    },
});

export {handler as GET, handler as POST};