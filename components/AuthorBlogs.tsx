import imgUrl from "../lib/imgUrl";
import Image from "next/image"
import ClientLink from "./ClientLink";
import {IoIosArrowForward} from 'react-icons/io'


const AuthorBlogs = ({blog}:any) => {
  return (
    <div className="card hover:-translate-y-6 transition ease-linear duration-150 bg-secondary card-compact shadow-xl">
    <div className='w-full h-52 relative'>

<Image src={imgUrl(blog?.mainImage).url()} alt="blog images" className='w-[100%] h-52 object-cover relative mx-auto rounded-xl '  fill  />  
    </div>
<div className="card-body">
  <h2 className="card-title line-clamp-1">
  {blog?.title}

  </h2>
  <text className='text-[14px] line-clamp-3 '>{blog?.description}</text>
  
  <div className="flex flex-nowrap justify-end">
  
    <ClientLink route={`/posts/${blog.slug.current}`}>
         <button className="page_btn flex items-center w-full">
 <span className="hover-underline-animation"> read more </span>
<IoIosArrowForward className="my-auto"/>
</button>
         </ClientLink>
  </div>
</div>
</div>
  )
}

export default AuthorBlogs
