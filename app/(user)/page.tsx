import Banner from "../../components/Banner"
import {previewData} from 'next/headers'
import {groq} from 'next-sanity'
import { client } from "../../lib/sanity.client"
import { PreviewSuspense } from "next-sanity/preview"
import PreviewBlogList from "../../components/PreviewBlogList"
import imgUrl from "../../lib/imgUrl"
import BlogPost from "../../components/BlogPost"


export const query = groq`
*[_type == 'post']{
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)
`
const page = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense fallback="Loading...">
       <PreviewBlogList query={query}/>
      </PreviewSuspense>
    )
  }

  const blogs = await client.fetch(query)
  console.log("blogs",blogs)
  return (
    <div>
      <Banner/>
     
      <div  className='w-full md:w-[70%] py-10'>

      {
    
    blogs.map((blog:any) => <BlogPost blog={blog}/>)
      }
      </div>
    </div>
  )
}

export default page
