"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";


const PromptCardList = ({data, handleTagClick})=>{
  return(
    <div className="mt-16 prompt_layout">
      {data.map((post)=>(
        <PromptCard 
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      const response = await fetch("/api/prompts");
      const data = await response.json();
      setPosts(data);
    }
    fetchData();
  },[])

  const handleChange = (e)=>{
    setSearchText(e.target.value) 
  }
  return (
    <section>
      <form className="relative flex-center w-full my-5">
        <input 
          type="text"
          placeholder="search for a tag or username"
          className="search_input peer"
          required
          onChange={handleChange}
          value={searchText}
        />
      </form>
      <PromptCardList 
        data={posts}
        handleTagClick={()=>{}}
      />
    </section>
  )
}

export default Feed