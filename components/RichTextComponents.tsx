import Image from "next/image"
import Link from "next/link"
import imgUrl from "../lib/imgUrl"


export const RichTextComponents = {
    types: {
        image: ({value}: any) => {
            return (
                <div className="relative w-full  h-96 m-10 mx-auto">
                    <Image src={imgUrl(value).url()} alt="blog image" className='object-contain' fill  />  
                </div>
            )
        }
    },
    list: {
      
        bullet: ({children}:any) => <ul className="mt-xl py-3 ml-8 list-disc space-y-3">{children}</ul>,
        number: ({children}:any) => <ol className="mt-lg list-decimal">{children}</ol>,
    
        
        checkmarks: ({children}:any) => <ol className="m-auto text-lg">{children}</ol>,
      },
      block : {
        h1: ({children}:any) => <h1 className="text-5xl py-8 font-bold">{children}</h1>,
        h2: ({children}:any) => <h2 className="text-4xl py-8 font-bold">{children}</h2>,
        h3: ({children}:any) => <h3 className="text-3xl py-8 font-bold">{children}</h3>,
        h4: ({children}:any) => <h4 className="text-2xl py-8 font-bold">{children}</h4>,
        
      },
      blockquote: ({children}: any) => <blockquote className="border-l border-primary p-5 my-4">{children}</blockquote>,
      marks: {
        link: ({children, value}:any) => {
          const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
          return (
            <Link href={value.href} rel={rel} className="underline decoration-primary hover:decoration-teal-500">
              {children}
            </Link>
          )
        },
    }
}