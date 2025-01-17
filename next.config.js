// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // experimental: {
//   //   appDir: true,
//   // },
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.pdf$/,
//       use: [
//         {
//           loader: 'file-loader',
//         } 
//       ]
//     })
//     return config
//   },
//   images: {
//     domains: [
//       "drive.google.com",
//       "i.ibb.co",
//       "https://i.ibb.co/KWJdr26/Administrador.jpg",
//       "https://i.ibb.co/0nYffsW/Agronix-app.jpg",
//       "https://i.ibb.co/61bx4hX/Mauri-app.jpg",
//       "https://i.ibb.co/XLY4YK7/Gastos-app.jpg",
//     ],
//     formats: ['image/webp'],
//     // disable static imports for image files
//     disableStaticImages: false,
//   },
//   i18n: {
//     locales: ['en', 'es'],
//     defaultLocale: 'en',
//     domains: [
//       {
//         domain: 'fgarciadev.com',
//         defaultLocale: 'en-US',
//         http: true,
//       },
//       {
//         domain: 'fgarciadev.com.ar',
//         defaultLocale: 'es',
//         http: true,
//       },
//     ],
//   },
// }

// module.exports = nextConfig

const withNextIntl = require('next-intl/plugin')();
 
module.exports = withNextIntl({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
        } 
      ]
    })
    return config
  },
  images: {
    domains: [
      "drive.google.com",
      "i.ibb.co",
      "https://i.ibb.co/KWJdr26/Administrador.jpg",
      "https://i.ibb.co/0nYffsW/Agronix-app.jpg",
      "https://i.ibb.co/61bx4hX/Mauri-app.jpg",
      "https://i.ibb.co/XLY4YK7/Gastos-app.jpg",
    ],
    formats: ['image/webp'],
    // disable static imports for image files
    disableStaticImages: false,
  },
  // i18n: {
  //   locales: ['en', 'es'],
  //   defaultLocale: 'en',
  //   localeDetection: true,
  //   domains: [
  //     {
  //       domain: 'fgarciadev.com',
  //       defaultLocale: 'en-US',
  //       http: true,
  //     },
  //     {
  //       domain: 'fgarciadev.com.ar',
  //       defaultLocale: 'es',
  //       http: true,
  //     },
  //   ],
  // },
});