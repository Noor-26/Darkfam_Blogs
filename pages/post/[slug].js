import {useRouter} from 'next/router'

const Post = () => {
  const Router = useRouter()
  const {slug} = Router.query
  return (
    <div>
      <p>post : {slug}  </p>
    </div>
  )
}

export default Post
