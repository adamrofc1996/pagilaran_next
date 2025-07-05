import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ChatWidget } from '@/components/chat/ChatWidget'
import { I18nProvider } from '@/components/I18nProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PT Pagilaran - Premium Tea Exports from Java | From the Highlands of Java to the World\'s Teacups',
  description: 'PT Pagilaran - Premium tea exports from Java, Indonesia. Backed by Universitas Gadjah Mada with over a century of heritage. Orthodox Black Tea, CTC, and Green Tea for global markets.',
  keywords: 'PT Pagilaran, Java tea, premium tea exports, Indonesian tea, UGM, orthodox black tea, CTC tea, green tea',
  openGraph: {
    title: 'PT Pagilaran - Premium Tea Exports from Java',
    description: 'From the Highlands of Java to the World\'s Teacups. Enjoyed Around the World. Premium tea exports backed by a century of heritage and academic excellence.',
    type: 'website',
    url: 'https://ptpagilaran.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} loading`}>
        <I18nProvider>
          <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-white to-primary-50">
            <Header />
            <main>{children}</main>
            <Footer />
            <ChatWidget />
          </div>
        </I18nProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.fonts.ready.then(() => {
                document.body.classList.remove('loading');
                document.body.classList.add('loaded');
              });
            `,
          }}
        />
      </body>
    </html>
  )
}