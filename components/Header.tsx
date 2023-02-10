import Head from "next/head"
import Link from "next/link"

const Header:any = () => {
  const categorys = [
    {
      name : "React",
      slug:"react",
    },
    {
      name : "Web Development",
      slug:"webdev",
    },
  ]
  return (
    <div>
      
     <div className="navbar bg-base-100">
  <div className="navbar-start">
   
    <Link href="/" className="btn btn-ghost normal-case text-2xl nav_head">Darkfam Blogs</Link>
  </div>
 
</div>
    </div>
  )
}

export default Header
