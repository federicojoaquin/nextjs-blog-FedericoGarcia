import '../globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ThemeProvider } from './components/providers/ThemeProvider';

const locales = ['en', 'es'];

export const metadata = {
  title: 'Federico Garcia',
  description: 'Federico Garcia - Backend Developer Portfolio',
  icons: { icon: '/favicon.ico' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
