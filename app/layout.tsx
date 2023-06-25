import './globals.css'
import { Kanit } from 'next/font/google'
import Header from '../components/Header/Header'
import Popup from '@/components/ui/Popup/Popup'

const kanit = Kanit({ subsets: ['latin'], weight:'400' })

export const metadata = {
  title: 'Toqyzqumalaq',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Header />
        <main>
          {children}
        </main>
        </body>
    </html>
  )
}
