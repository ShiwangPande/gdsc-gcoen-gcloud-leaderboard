import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "GDSC GCOEN",
  image: "https://i.postimg.cc/mgZrZwwd/image.png",
  type: "website",
  description: "This is the leaderboard for the GDSC GCOEN GCCP Jams.",
  keywords: ["gccp", "jams", "uvpce", "gdscuvpce"],
  robots: "index,follow",


}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <head>
        
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        
      </body>
    </html>
  )
}
