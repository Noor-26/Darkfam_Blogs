import { groq } from 'next-sanity'
import React from 'react'

import { client } from "../../../../lib/sanity.client"

type Props = {
params:{
    category:string
}
}
const category = async ({params:{category}} : Props) => {
    // *[_type == 'category']{
    //     title,
    //    'id':*[defined(categories) && _type == 'post' && references(^._id)][0]{
    //    _id
    //   }
    //   }[defined(id)]
    const query = groq `
    *[_type == 'post' && slug.current == $slug ][0]{
  ...,
  author->,
  categories[]->,
} 
    `

    const blog : any = await client.fetch(query,{category})
  return (
    <div>
      
    </div>
  )
}

export default category
