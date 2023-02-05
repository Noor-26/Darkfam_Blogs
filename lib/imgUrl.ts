import createImageUrlBuilder from '@sanity/image-url'

import { client } from './sanity.client'

const buildImg = createImageUrlBuilder(client)
const imgUrl = (source:any) => {
  return buildImg.image(source)
}

export default imgUrl
