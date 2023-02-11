"use client"

import React, { useContext } from 'react'
import { client } from "../lib/sanity.client";


const SanityContext = React.createContext()

export function SanityProvider({ children }) {
  const value = useSanityData()
  return <SanityContext.Provider value={value}>{children}</SanityContext.Provider>
}

export function useSanityData() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {  
    client
      .fetch(`
      *[_type == 'post']{
        ...,
        author->,
        categories[]->,
      } | order(_createdAt desc)
      `)
      .then(pageData => setData(pageData))
      .catch(error => console.error(error))
  }, [])

  return data
}

export function useSanity() {
  return useContext(SanityContext)
}