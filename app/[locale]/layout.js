import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import '../globals.css'

const locales = ['en', 'de'];

export default function RootLayout({children, params: {locale}}) {
  
  // Validate that the incoming `locale` parameter is valid
  // if (!locales.includes(locale)) notFound();

  return (
    <html lang={locales}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
