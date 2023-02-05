import Header from '../../components/Header';
import '../../styles/globals.css';
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['500','600']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="night">
      <head/>
      
     
      
            <body className={`${poppins.variable} font-sans font-semibold`}>
              <Header/>
              {children}
              </body>
    </html>
  )
}
