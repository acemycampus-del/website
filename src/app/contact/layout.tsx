import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Free Guidance Centres',
  description: 'Connect with senior education counsellors at Ace My Campus in Lucknow & Delhi NCR. Get free 1-on-1 career guidance, college admissions, and helpline support.',
  keywords: [
    'Contact Ace My Campus',
    'Career Counselling Centre Lucknow',
    'Admission Guidance Phone Number',
    'College Advisory Helpdesk Lucknow',
    'Institutional Partnership Contact',
    'Free Career Counselling Helpline',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Ace My Campus | Free Student Advisory Centres',
    description: 'Schedule free 1-on-1 career guidance via helpline, WhatsApp, or at our centers in Lucknow & Delhi NCR.',
    url: 'https://acemycampus.com/contact',
    siteName: 'Ace My Campus',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/banner-contact.jpg', width: 1200, height: 630, alt: 'Contact Ace My Campus' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Ace My Campus | Free Student Advisory Centres',
    description: 'Schedule free 1-on-1 career guidance via helpline, WhatsApp, or at our centers in Lucknow & Delhi NCR.',
    images: ['/images/banner-contact.jpg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Ace My Campus',
    url: 'https://acemycampus.com/contact',
    description: 'Connect with senior admissions advisors and career counsellors at Ace My Campus.',
    mainEntity: {
      '@type': 'EducationalOrganization',
      name: 'Ace My Campus',
      telephone: '+91-9793562211',
      email: 'acemycampus@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'LDA Colony Ashiyana',
        addressLocality: 'Lucknow',
        addressRegion: 'Uttar Pradesh',
        postalCode: '226012',
        addressCountry: 'IN',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-9793562211',
          contactType: 'admissions counselling',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
      ],
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
        name: 'Contact Us',
        item: 'https://acemycampus.com/contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      {children}
    </>
  );
}

