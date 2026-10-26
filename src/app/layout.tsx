import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#071B41",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://acemycampus.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ace My Campus | College Admissions & Career Guidance India",
    template: "%s | Ace My Campus",
  },
  description: "Get 100% free career discovery, verified MBA & B.Tech college admissions, fee comparisons, and student guidance across Lucknow, Delhi NCR, and India.",
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: [
    "Ace My Campus",
    "Career Discovery India",
    "College Guidance Lucknow",
    "MBA College Admissions Lucknow",
    "Top MBA Colleges Lucknow",
    "B.Tech Admission Counselling",
    "PGDM Colleges Delhi NCR",
    "Education Marketing Specialists",
    "Amity University Admissions",
    "Jaipuria Institute of Management Lucknow",
    "BBDU Lucknow Admissions",
    "AIMT Lucknow",
    "IILM University Admissions",
    "Goel Institute Lucknow",
    "SRMU Lucknow Admissions",
    "Entrance Exams 2026",
    "Free Career Counselling India"
  ],
  authors: [{ name: "Ace My Campus", url: siteUrl }],
  creator: "Ace My Campus",
  publisher: "Ace My Campus",
  category: "education",
  classification: "College Admissions Guidance & Career Counselling",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Ace My Campus | Right Guidance, Bright Future",
    description: "Discover the right career and secure verified college admissions across top management and tech universities in India with 100% free guidance.",
    url: siteUrl,
    siteName: "Ace My Campus",
    locale: "en_IN",
    type: "website",
    images: [{ url: '/images/hero-graduation-banner.jpg', width: 1200, height: 630, alt: 'Ace My Campus - Career Discovery & College Guidance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ace My Campus | College Admissions & Career Guidance",
    description: "100% Free Career Guidance, Top MBA & B.Tech Institutes, Verified Placement Metrics & Zero Capitation Fees.",
    images: ['/images/hero-graduation-banner.jpg'],
  },
};

import { FAQS } from "@/lib/mock-data";

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Ace My Campus',
      description: 'India premier student-first platform for career discovery, course exploration, and verified college admissions guidance.',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/colleges?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': `${siteUrl}/#organization`,
      name: 'Ace My Campus',
      alternateName: 'AceMyCampus',
      url: siteUrl,
      logo: `${siteUrl}/images/emblem-transparent.png`,
      image: `${siteUrl}/images/hero-graduation-banner.jpg`,
      description: 'Premier student-first career discovery and college admissions guidance platform assisting students with verified cut-offs, fee structures, and course options.',
      email: 'acemycampus@gmail.com',
      telephone: '+91-9793562211',
      priceRange: '₹0 - 100% Free Guidance',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Free Service for Students',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'LDA Colony Ashiyana',
        addressLocality: 'Lucknow',
        addressRegion: 'Uttar Pradesh',
        postalCode: '226012',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 26.8507,
        longitude: 80.9366,
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Uttar Pradesh' },
        { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
        { '@type': 'AdministrativeArea', name: 'Haryana' },
        { '@type': 'AdministrativeArea', name: 'Rajasthan' },
        { '@type': 'Country', name: 'India' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9793562211',
        contactType: 'customer support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
      sameAs: [
        'https://www.linkedin.com/company/acemycampus-edu/',
        'https://www.facebook.com/share/1cZdF1qCxg/?mibextid=wwXIfr',
        'https://www.instagram.com/ace_my_campus',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
