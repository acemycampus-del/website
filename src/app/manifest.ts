import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ace My Campus - College Admissions & Career Discovery',
    short_name: 'Ace My Campus',
    description: 'Explore verified partner colleges, MBA admissions, fee comparisons, and career guidance in India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#071B41',
    theme_color: '#071B41',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
