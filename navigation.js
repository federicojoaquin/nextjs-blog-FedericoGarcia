import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'es'];
export const defaultLocale = 'en';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({ locales, defaultLocale });