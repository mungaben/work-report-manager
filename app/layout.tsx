import './globals.css'
import { Inter } from 'next/font/google'
import AuthContext from './lib/Context/AuthContext'
import ToasterContext from './lib/Context/ToasterContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'REPORT',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
