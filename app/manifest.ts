import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'kikimorita.com',
    short_name: 'kikimorita',
    description: 'UI, Web & App Design | UX Audit & Usability Consultation',
    start_url: '/',
    display: 'standalone',
    background_color: '#1F2141',
    theme_color: '#1F2141',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
