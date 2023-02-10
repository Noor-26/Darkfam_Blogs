import { PortableText } from '@portabletext/react'
import { groq } from 'next-sanity'
import Image from 'next/image'
import React from 'react'
import BlogPost from '../../../../components/BlogPost'
import { RichTextComponents } from '../../../../components/RichTextComponents'
import imgUrl from '../../../../lib/imgUrl'
import { client } from '../../../../lib/sanity.client'

type Props = {
    params:{
        name:string
    }
    }

const Author = async ({params:{name}} : Props) => {
    const query = groq `
    *[_type == "post" && author._ref in *[_type =="author" && name =="Darkfam"]._id ]{...,author->,}
    `
    const details : any = await client.fetch(query,{name})

  return (
    <div>
        <div className="hero max-w-6xl mx-auto px-10 bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div>

  <img src="https://darkfam-portfolio-1.netlify.app/naruto.png" alt="blog image" className='object-contain blob w-[80%] '   />  
    </div>
    <div>
      <h1 className="text-5xl heading_text text-[#fb5607] font-bold"> About {details[0].author.name}</h1>
      <PortableText  value={details[0].author.bio}  components={RichTextComponents} />
    </div> 
  </div>
</div>
<div>
<p>Featured Blogs</p>
<div  className='w-full md:w-[70%] mx-auto grid gap-3 justify-center lg:grid-cols-2 px-4 py-10'>

{

details.map((blog:any) => <BlogPost blog={blog}/>)
}
</div>
</div>
    </div>
  )
}

export default Author
