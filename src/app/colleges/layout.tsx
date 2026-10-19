import type { Metadata } from 'next';
import { COLLEGES } from '@/lib/mock-data';

export const metadata: Metadata = {
  title: 'Top Colleges in Lucknow, Noida & NCR',
  description: 'Explore verified partner universities in Lucknow, Noida & NCR. Compare official MBA & B.Tech fees, NAAC ratings, and placement records with free guidance.',
  keywords: [
    'Top Colleges in Lucknow',
    'Best MBA Colleges Lucknow',
    'Jaipuria Institute of Management Lucknow',
    'Amity University Lucknow Noida',
    'BBDU Lucknow Admissions',
    'AIMT Lucknow',
    'Goel Institute Lucknow',
    'IILM University PGDM',
    'Maharishi University MUIT',
    'SRMU Lucknow Admissions',
    'MBA Admission Lucknow',
    'Direct Admission Guidance Lucknow'
  ],
  alternates: {
    canonical: '/colleges',
  },
  openGraph: {
    title: 'Top Verified Colleges in Lucknow, Noida & NCR | Ace My Campus',
    description: 'Compare official fees, NAAC accreditations, and placement packages across verified universities. 100% free counseling.',
    url: 'https://acemycampus.com/colleges',
    siteName: 'Ace My Campus',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/banner-colleges.jpg', width: 1200, height: 630, alt: 'Verified Colleges Directory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Verified Colleges Directory | Ace My Campus',
    description: 'Compare top colleges in Lucknow and Delhi NCR on fee structures, placements, and campus amenities.',
    images: ['/images/banner-colleges.jpg'],
  },
};

export default function CollegesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collegesItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Partner Colleges & Universities in Lucknow & NCR',
    description: 'List of verified partner colleges for MBA, B.Tech, Law and Management admissions.',
    numberOfItems: COLLEGES.length,
    itemListElement: COLLEGES.map((college, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CollegeOrUniversity',
        name: college.name,
        description: college.tagline,
        address: {
          '@type': 'PostalAddress',
          addressLocality: college.city,
          addressRegion: college.state,
          addressCountry: 'IN',
        },
      },
    })),
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://acemycampus.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Colleges',
        item: 'https://acemycampus.com/colleges',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collegesItemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      {children}
    </>
  );
}
