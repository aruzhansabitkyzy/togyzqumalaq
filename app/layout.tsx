import './globals.css'
import { Kanit } from 'next/font/google'
import Header from '../components/Header/Header'
import { ReduxProvider } from '@/store/provider'

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
            <ReduxProvider>
              <Header />
              <main>
                {children}
              </main>
            </ReduxProvider>
           
            </body>
        </html>
  )
}