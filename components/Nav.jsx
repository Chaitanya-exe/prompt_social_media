"use client";

import Link from "next/link";
import {useState, useEffect} from "react";
import Image from "next/image";
import {signIn, signOut, useSession, getProviders} from "next-auth/react";

const Nav = () => {
    const {data: session} = useSession();
    

    const [providers, setProviders ] = useState(null);
    const [toggleDown, setToggleDown] = useState(false);

    useEffect(()=>{
        const setUpProviders = async () =>{
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();

    },[])
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image 
                src="/assets/images/logo.svg"
                alt="Promptia logo"
                width={30}
                height={30}
                className="object-contain"
            />
            <p className="logo_text">Promtopia</p>
        </Link>

        <div className="sm:flex hidden">
            {session?.user ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt" className="black_btn">
                        Create Post
                    </Link>
                    <button type="button" className="outline_btn" onClick={()=> signOut()}>
                        sign out
                    </button>
                    <Link href="/profile">
                        <Image 
                            src={session?.user.image}
                            alt="profile"
                            width={37}
                            height={37}
                            className="rounded-full"
                        />
                    </Link>
                </div>
            ):(<>{providers && Object.values(providers).map((provider)=>{
                return (
                    <button 
                    className="black_btn"
                    type="button"
                    key={provider.name}
                    onClick={()=> signIn(provider.id)}> Sign In</button>
                )
            })}</>)}
        </div>

        {/*mobile navigtion*/}
        <div className="sm:hidden flex relative">
            {session?.user ?(
                <div className="flex">
                
                <Image 
                        src={session?.user.image}
                        alt="profile"
                        width={37}
                        height={37}
                        className="rounded-full"
                        onClick={()=>{ setToggleDown((prev)=> !prev)}}
                    />
                    {toggleDown && (
                        <div className="dropdown">
                            <Link href="/profile" className="dropdown_link"
                            onClick={()=> setToggleDown(false)}>Profile</Link>
                            <Link href="/create-prompt" className="dropdown_link"
                            onClick={()=> setToggleDown(false)}>create Prompt</Link>
                            <button type="button" onClick={()=>{
                                setToggleDown(false);
                                signOut();
                            }}
                            className="w-full mt-5 black_btn">
                                sign out
                            </button>
                        </div>
                    )}    
                </div>
            ):(
                <>{providers && Object.values(providers).map((provider)=>{
                    return (
                        <button 
                        className="black_btn"
                        type="button"
                        key={provider.name}
                        onClick={()=> signIn(provider.id)}> Sign In</button>
                    )
                })}</>  
            )}
        </div>
    </nav>
    
  )
}

export default Nav

