"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const createPrompt = () => {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();
    const {data: session} = useSession();
    const [post, setPost] = useState({
        prompt:'',
        tag:''
    });

    const createPrompt = async (e)=>{
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch('http://localhost:3000/api/prompts/create',{
                method:"POST",
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            });
            if(response.ok){
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally{
            setSubmitting(false);
        }
    }

    return (
        <Form 
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}
        />
    )
}

export default createPrompt