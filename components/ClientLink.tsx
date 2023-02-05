'use client'
import Link from "next/link"

const ClientLink =({
    children,
    route,
  }: {
    children: React.ReactNode,
    route:string
  })=> {
  return <Link href={route}>{children}</Link>
}

export default ClientLink
