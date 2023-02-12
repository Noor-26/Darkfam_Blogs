import Header from '../../components/Header';
import '../../styles/globals.css';


export default async function RootLayout({
  children
}: {
  children: React.ReactNode,
 
}) { 


  return (
    <html >
   <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link href="https://fonts.googleapis.com/css2?family=Lobster+Two&family=Noto+Serif+Ahom&family=Poppins:wght@500&family=Satisfy&family=Yeon+Sung&display=swap" rel="stylesheet"></link>
</head>
      
     
      
            <body >
              <Header />
              {children}
              </body>
    </html>
  )
}
