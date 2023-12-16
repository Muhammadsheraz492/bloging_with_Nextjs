import { Navbar } from '@/component/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/component/footer/Footer'
import { ThemeContextprovider } from '@/context/ThemeContext'
import { ThemeProvider } from '@/providers/ThemeProvider'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cybernate Blog',
  description: 'This Service is produced by Tocybernate Solution',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>

          <ThemeContextprovider>
            <ThemeProvider>
              <div className='container'>
                <div className='wrapper'>
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextprovider>
        </AuthProvider>

      </body>
    </html>
  )
}
