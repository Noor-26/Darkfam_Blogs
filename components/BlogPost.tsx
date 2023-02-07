import moment from "moment"
import {AiOutlineFieldTime} from 'react-icons/ai';
import imgUrl from "../lib/imgUrl";
import Image from "next/image"
import ClientLink from "./ClientLink";
import {IoIosArrowForward} from 'react-icons/io'

const BlogPost = ({blog}:any) => {
  return (
    <div className="card w-[28rem] bg-secondary card-compact shadow-xl">
      <div className='w-full h-52 relative'>

  <Image src={imgUrl(blog?.mainImage).url()} alt="blog images" className='w-[100%] h-52 object-cover relative mx-auto rounded-xl '  fill  />  
      </div>
  <div className="card-body">
    <h2 className="card-title">
    {blog?.title}

    </h2>
    <text className='text-[14px] line-clamp-3 '>{blog?.description}</text>
    <div className="flex justify-between ">

             <div className='flex items-center justify-center'>

             <div className='flex items-center my-4 mr-4'>
             <div className="avatar placeholder mx-1">
   <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
    <Image  src={imgUrl(blog?.author.image).url()} alt="author photo" className="relative" fill/>
   
   </div>
 </div>
   <p className="author_name my-auto mt-2">{blog?.author?.name}</p>

             </div>

             <div className='flex items-center'>
            <AiOutlineFieldTime className='text-[20px] mx-1'/>   {moment(blog?.createdAt).format('MMM DD, YYYY')}
             </div>

             </div>
            </div>
    <div className="flex flex-nowrap justify-between">
    <div>
    {
                blog.categories.slice(0,2).map((category:any) => <div className="badge  gap-2 ml-1">
                <div className="badge badge-xs bg-[#fb5607] border-[#fb5607]"></div>
               <p className="text-[12px] inline text-white">{category.title}</p> 
              </div>
               )
              }
    </div>
      <ClientLink route={`/posts/${blog.slug.current}`}>
           <button className="page_btn flex items-center w-full">
   <span className="hover-underline-animation"> read more </span>
 <IoIosArrowForward className="my-auto"/>
 </button>
           </ClientLink>
    </div>
  </div>
</div>
//     <div className="card lg:card-side bg-secondary shadow-xl">
//             <div className='w-[50%] h-80 relative'>
//                 <Image src={imgUrl(blog?.mainImage).url()} alt="blog images" className='w-[100%] object-cover relative mx-auto rounded-xl' 
//     fill  />  
//             </div> 
//             <div className="card-body w-[50%]  my-auto">
//               <h2 className="card-title text-3xl ">{blog?.title}</h2>
//               <text className='text-[14px] line-clamp-5 '>{blog?.description}</text>
//               <div className="flex justify-between ">

//             <div className='flex items-center justify-center'>

//             <div className='flex items-center my-4 mr-4'>
//             <div className="avatar placeholder mx-1">
//   <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
//    <Image  src={imgUrl(blog?.author.image).url()} alt="author photo" className="relative" fill/>
   
//   </div>
// </div>
//   <p className="author_name my-auto mt-2">{blog?.author?.name}</p>

//             </div>

//             <div className='flex items-center'>
//            <AiOutlineFieldTime className='text-[20px] mx-1'/>   {moment(blog?.createdAt).format('MMM DD, YYYY')}
//             </div>

//             </div>
//               </div>
//               <div className="flex justify-between ">
 
//             <ClientLink route={`/posts/${blog.slug.current}`}>
//             <button className="page_btn flex items-center w-full">
//     <span className="hover-underline-animation"> read more </span>
//   <IoIosArrowForward className="my-auto"/>
// </button>
//             </ClientLink>
//             <div className=" text-end line-clamp-1">
//               {
//                 blog.categories.slice(0,2).map((category:any) => <div className="badge  gap-2 ml-1">
//                 <div className="badge badge-xs bg-[#fb5607] border-[#fb5607]"></div>
//                <p className="text-[12px] inline text-white">{category.title}</p> 
//               </div>
//                )
//               }
//             </div>
//               </div>

//             </div>

//           </div>
  )
}

export default BlogPost
