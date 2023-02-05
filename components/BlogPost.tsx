import moment from "moment"
import {AiOutlineFieldTime} from 'react-icons/ai';
import imgUrl from "../lib/imgUrl";
import Image from "next/image"

const BlogPost = ({blog}:any) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
            <div className='w-[50%] h-80 relative'>
                <Image src={imgUrl(blog?.mainImage).url()} alt="blog images" className='w-[100%] object-cover relative mx-auto rounded-xl' 
    fill  />  
            </div>
            <div className="card-body w-[50%]">
              <h2 className="card-title text-3xl ">{blog?.title}</h2>
              <p className='text-[14px] line-clamp-5 font-semibold'>{blog?.description}</p>
            <div className='flex items-center'>

            <div className='flex items-center ml-2 mr-4'>
            <div className="avatar placeholder mx-1">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
   <Image  src={imgUrl(blog?.author.image).url()} alt="author photo" className="relative" fill/>
   
  </div>
</div>
  <p>{blog?.author?.name}</p>

            </div>

            <div className='flex items-center'>
           <AiOutlineFieldTime className='text-[20px] mx-1'/>   {moment(blog?.createdAt).format('MMM DD, YYYY')}
            </div>

            </div>

            </div>

            {/* <p>hello</p> */}
          </div>
  )
}

export default BlogPost
