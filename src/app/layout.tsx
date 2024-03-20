import '../styles/globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Nav } from '@/elements/navbar/nav'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/theme-provider'
import { Roboto as FontSans, Bai_Jamjuree as FontTitle } from 'next/font/google'

const roboto = FontSans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

const bai = FontTitle({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-bai',
})

export const metadata: Metadata = {
  title: 'Donatto Dev - Transformando sonhos em negocios!',
  description: 'Seja bem-vindo ao meu site. Desenvolvedor Front-end',
  authors: [{ name: 'Felippe Donatto', url: 'https://donattodev.com.br' }],
  category: 'Desenvolvedor front-end',
  creator: 'Felippe Donatto',
  keywords: [
    'Dev front-end',
    'Development',
    'HTML5',
    'CSS',
    'Music Relax',
    'NEXTJS',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${bai.variable} flash font-sans tracking-wider antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
