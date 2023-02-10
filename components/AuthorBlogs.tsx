

const AuthorBlogs = () => {
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
  <div className="flex justify-between ">

           <div className='flex items-center justify-center'>
           <ClientLink route={`/author/${blog.author.name}`}>
           <div className='flex items-center my-4 mr-4'>
           <div className="avatar placeholder mx-1">
 <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
  <Image  src={imgUrl(blog?.author.image).url()} alt="author photo" className="relative" fill/>
 
 </div>
</div>
 <p className="author_name my-auto mt-2">{blog?.author?.name}</p>

           </div>
           </ClientLink>
           <div className='flex items-center text-[12px]'>
          <AiOutlineFieldTime className='text-[18px] mx-1'/>   {moment(blog?.createdAt).format('MMM DD, YYYY')}
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
  )
}

export default AuthorBlogs
