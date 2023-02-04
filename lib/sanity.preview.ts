import {definePreview} from 'next-sanity/preview'
import {projectId, dataset} from './sanity.client'

function onPublicAccessOnly(){
    throw new Error("login for previewing the website");
    
}


export const usePreview = definePreview({
    projectId,
     dataset,
    onPublicAccessOnly
})

