import { PortableText } from '@portabletext/react'
import { groq } from 'next-sanity'
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
    *[_type == "post" && author._ref in *[_type =="author" && name == $name]._id ]{...,author->,  categories[]->,}
    `
    const details : any = await client.fetch(query,{name})

  return (
    <div>
        <div className="hero min-h-[80vh] max-w-6xl mx-auto  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-[55%] md:w-[35%]'>

  <img src={imgUrl(details[0].author.image).url()}alt="blog image" className='object-contain blob w-[100%] '   />  
    </div>
    <div className='w-[100%] md:w-[70%] px-4'>
      <h1 className="text-5xl heading_text text-[#fb5607] font-bold"> About {details[0].author.name}</h1>
      <div className='border-l-[#fb5607] border-l-2 pl-[10px] ml-[5px] mt-3 author_descrioptions'>

      <PortableText  value={details[0].author.bio}  components={RichTextComponents} />
      </div>
    </div> 
  </div>
</div>
<div className='mt-[10%]'>
<p className='text-center text-6xl heading_text'>Featured Blogs</p>
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
