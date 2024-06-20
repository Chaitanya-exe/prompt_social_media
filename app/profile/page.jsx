"use client";

import {useState, useEffect} from 'react';
import Profile from '@components/Profile';
import { useSession } from 'next-auth/react';

const MyProfile = () => {
    const {data: session} = useSession();
    const [posts, setPosts] = useState([]);
    const handleEdit = ()=>{}
    
    const handleDelete = async ()=>{}

    useEffect(()=>{
        const fetchData = async () =>{
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
          console.log(data)
          setPosts(data);
        }
        if(session?.user.id) fetchData();
    },[])
    return (
        <Profile 
            name='My'
            desc="This is your personal profile page."
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile