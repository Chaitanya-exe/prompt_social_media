"use client";
import {Buffer} from 'buffer';
import { useState } from "react";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import { useSession } from "next-auth/react";

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  const [copied, setCopied] = useState("");

  const handleCopy = ()=>{
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(()=>setCopied(""), 3000);
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 justify-start flex item-center gap-2 cursor-pointer">
          <Image 
            src={post.image}
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
        <div className="flex-col flex">
          <h3 className="font-satoshi font-semibold text-gray-900">{post.username}</h3>
          <p className="font-inter text-sm text-gray-500  ">{post.email}</p>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image 
            src={copied === post.prompt 
            ? '/assets/icons/tick.svg'
            : '/assets/icons/copy.svg'}
            width={12}
            height={12}
          />
        </div>
      </div>
      <div>
        <p className="my-4 font-satoshi text-gray-600">{post.prompt}</p>
        <p className="font-inter text-sm blue_gradient cursor-pointer" onClick={()=>{handleTagClick && handleTagClick(post.tag)}}>{post.tag}</p>
      </div>
    </div>
  )
}

export default PromptCard