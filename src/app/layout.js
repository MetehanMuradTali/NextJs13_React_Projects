import Header from '@/components/header'
import { Inter } from 'next/font/google'
import '@/styles/reset.css'
import '@/styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="main_container">
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
