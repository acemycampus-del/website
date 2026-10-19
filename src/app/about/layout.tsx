import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us: Mission & Advisory Philosophy',
  description: 'Learn about Ace My Campus, our student-first mentoring, university partnerships, and mission to deliver unbiased career guidance with zero capitation fees.',
  keywords: [
    'About Ace My Campus',
    'Education Advisory Lucknow',
    'College Mentorship India',
    'Career Guidance Mission',
    'Higher Education Advisory',
    'Student Counselling Experts',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Ace My Campus | Mission & Advisory Philosophy',
    description: 'Empowering students and parents with authentic guidance, verified ROI, and zero capitation fees.',
    url: 'https://acemycampus.com/about',
    siteName: 'Ace My Campus',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/banner-about.jpg', width: 1200, height: 630, alt: 'About Ace My Campus' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ace My Campus | Mission & Advisory Philosophy',
    description: 'Empowering students and parents with authentic guidance, verified ROI, and zero capitation fees.',
    images: ['/images/banner-about.jpg'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Ace My Campus',
    url: 'https://acemycampus.com/about',
    description: 'India trusted student-first career discovery and college admissions guidance platform.',
    mainEntity: {
      '@type': 'EducationalOrganization',
      name: 'Ace My Campus',
      url: 'https://acemycampus.com',
      logo: 'https://acemycampus.com/images/emblem-transparent.png',
      telephone: '+91-7054545455',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lucknow',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN',
      },
    },
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
        name: 'About Us',
        item: 'https://acemycampus.com/about',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      {children}
    </>
  );
}

