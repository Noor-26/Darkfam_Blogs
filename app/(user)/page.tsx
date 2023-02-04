import Banner from "../../components/Banner"
import {previewData} from 'next/headers'
import {groq} from 'next-sanity'
import { client } from "../../lib/sanity.client"
import { PreviewSuspense } from "next-sanity/preview"
import PreviewBlogList from "../../components/PreviewBlogList"

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

  return (
    <div>
      <Banner/>
      <h1>hello world</h1>
    </div>
  )
}

export default page
