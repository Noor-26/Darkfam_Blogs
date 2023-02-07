import { PortableText } from "@portabletext/react"
import { groq } from "next-sanity"
import { RichTextComponents } from "../../../../components/RichTextComponents"

import { client } from "../../../../lib/sanity.client"

type Props = {
params:{
    slug:string
}
}

export const generateStaticParams = async () => {
const query = groq ` 
*[_type == 'post']{
    slug
}
`
const slugs: any = await client.fetch(query);
const slugRoutes = slugs.map((slug: { slug: { current: any } }) => slug.slug.current)
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
    <div>
      <PortableText value={blog.body} components={RichTextComponents}/>
    </div>
  )
}

export default Posts
