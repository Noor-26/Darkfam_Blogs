"use client"
import { groq } from "next-sanity";
import Head from "next/head"
import Image from "next/image";
import Link from "next/link"
import React, { useEffect, useState } from "react";
import imgUrl from "../lib/imgUrl";
import ClientLink from "./ClientLink";

import { client } from "../lib/sanity.client";
import { useSanity } from "../hooks/SanityContext";
async function fetchHeaderData(): Promise<any | null> {
  try {
    const headerData = await client.fetch(`*[_type == "header"][0]`)
    return headerData
  } catch (error) {
    console.error(error)
    return null
  }
}

const Header =  () => {
  const [searchQuery, setQuery] = useState<string>('');
  const [sanityData, setSanityData] = useState([]);
  
  useEffect(() => {
    const storedSanityData:any = localStorage.getItem('sanityData');
    if (storedSanityData) {
      setSanityData(JSON.parse(storedSanityData));
    }
  }, []);
 
    // //Applying our search filter function to our array of countries recieved from the API
    const filtered = sanityData.filter(
      (el:any) => el.title.toLowerCase().includes(searchQuery))


// Handling the input on our search bar
const handleChange = (e:any) => {
setQuery(e.target.value)
}
  return (
    <div>
      
     <div className="navbar bg-base-100">
  <div className="navbar-start">
   
    <Link href="/" className="btn btn-ghost normal-case text-2xl nav_head">Darkfam Blogs</Link>
  </div>
  <div className="navbar-end relative">
  <div className="w-full max-w-screen-xl mx-auto px-6 absolute top-[-30px] z-[999]">
        <div className="flex justify-center pt-4 px-3 ">
            <div className="w-full max-w-md">
                <div className="bg-secondary shadow-md rounded-lg px-3 py-2 mb-4">
                   
                    <div className="flex items-center bg-gray-200 rounded-md">
                        <div className="pl-2">
                            <svg className="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path className="heroicon-ui"
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                            </svg>
                        </div>
                        <input
                            className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                             onChange={handleChange}
                            id="search" type="text" placeholder="Search Blogs"/>
                    </div>
                   {searchQuery.length>0 && sanityData && filtered.map((blog:any) =>    <ClientLink route={`/posts/${blog.slug.current}`}><div onClick={() => setQuery("")}  className="py-2 text-sm">
                    <div className="flex justify-start items-center cursor-pointer text-gray-700 rounded-md hover:bg-[#1c1c1c] px-2 py-2 my-2">
                    <div className="avatar placeholder mx-1">
   <div className="rounded-full h-[40px]">
    <Image  src={imgUrl(blog?.mainImage).url()} alt="author photo" className="relative rounded-full" fill/>
   
   </div>
 </div>
                            <div className="flex-grow text-white line-clamp-2 font-medium px-2">{blog.title}</div>
                           
                        </div>
                     
                        
                    </div>
                    </ClientLink>)  } 
                    
                </div>
            </div>
        </div>
    </div>
  </div>
 
</div>
    </div>
  )
}

export default Header
