import { PortableText } from "@portabletext/react"
import { groq } from "next-sanity"
import Head from "next/head"
import Image from "next/image"
import ClientLink from "../../../../components/ClientLink"
import { RichTextComponents } from "../../../../components/RichTextComponents"
import imgUrl from "../../../../lib/imgUrl"

import { client } from "../../../../lib/sanity.client"

type Props = {
params:{
    slug:string
}
}
export const revalidate = 60; // revalidating site after 60 seconds
export const generateStaticParams = async () => {
const query = groq ` 
*[_type == 'post']{
    slug
}
`
const slugs: any = await client.fetch(query);
const slugRoutes = slugs.map((slug: { slug: { current: any } }) => slug.slug.current)
return slugRoutes.map((slug:any) => ({slug}))
}


const Posts = async ({params:{slug}} : Props) => {
    const query = groq `
    *[_type == 'post' && slug.current == $slug ][0]{
  ...,
  author->,
  categories[]->,
} 
    `
  
    const blog : any = await client.fetch(query,{slug})
  return (
    <div className="max-w-6xl mx-auto px-10" key={blog.title}>
      <Head>
    <title>{blog.title}</title>
      </Head>
         <div className="relative w-full h-[17rem] md:h-[25rem] mt-5  mx-auto">
                    <Image src={imgUrl(blog.mainImage).url()} alt="blog image" className='object-cover rounded-lg' fill  /> 
                </div>
                    <div className="w-full glass_background relative bottom-[3rem] flex justify-between h-12 px-4">
                    <div className='flex items-center justify-center'>
             <ClientLink route={`/author/${blog.author.name}`}>
             <div className='flex items-center my-4 mr-4'>
             <div className="avatar placeholder mx-1">
   <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
    <Image  src={imgUrl(blog?.author.image).url()} alt="author photo" className="relative rounded-full" fill/>
   
   </div>
 </div>
   <p className="author_name my-auto mt-[0.6rem]">{blog?.author?.name}</p>

             </div>
             </ClientLink>
           

             </div>
             <div className="hidden md:flex items-center my-auto justify-center">
    {
                blog.categories.slice(0,2).map((category:any) => <div className="badge  gap-2  m-1 ">
                <div className="badge badge-xs bg-[#fb5607] border-[#fb5607]"></div>
               <p className="text-[12px] inline text-white">{category.title}</p> 
              </div>
               )
              }
    </div>
                      
                      </div> 
             
                  
      <PortableText value={blog.body} components={RichTextComponents}/>
    </div>
  )
}

export default Posts
