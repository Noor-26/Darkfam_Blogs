import { PortableText } from "@portabletext/react"
import { groq } from "next-sanity"
import Image from "next/image"
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
// *[_type == "post" && author._ref in *[_type=="author" && name=="Darkfam"]._id ]{...}
    const blog : any = await client.fetch(query,{slug})
  return (
    <div className="max-w-6xl mx-auto px-10">
         <div className="relative w-full h-[17rem] md:h-[20rem] my-5  mx-auto">
                    <Image src={imgUrl(blog.mainImage).url()} alt="blog image" className='object-cover rounded-lg' fill  />  
                </div>
      <PortableText value={blog.body} components={RichTextComponents}/>
    </div>
  )
}

export default Posts
