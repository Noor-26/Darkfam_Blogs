'use client'
import { usePreview } from "../lib/sanity.preview"
import BlogPosts from "./BlogPosts"



const PreviewBlogList = ({query}:any) => {
    const blogs = usePreview(null, query)
  return <BlogPosts blogs={blogs}/>
}

export default PreviewBlogList
