import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entrance Exams 2026: Dates, Syllabus & Cutoffs',
  description: 'Complete guide to 2026 entrance exams for MBA, B.Tech & MCA. Check JEE Main, CAT, CMAT, GATE & CUET dates, syllabus, cutoffs, and eligible colleges.',
  keywords: [
    'Entrance Exams 2026',
    'JEE Main 2026 Dates',
    'CAT 2026 MBA Exam',
    'CMAT MAT Cutoffs',
    'CUET 2026 Lucknow',
    'GATE Engineering Exam',
    'NIMCET MCA Admission',
    'College Cutoffs 2026'
  ],
  alternates: {
    canonical: '/exams',
  },
  openGraph: {
    title: 'All India Entrance Exams 2026: Dates & Cutoffs | Ace My Campus',
    description: 'Verified information on exam eligibility, deadlines, cutoffs, and top participating colleges for Engineering, Management & Computer Applications.',
    url: 'https://acemycampus.com/exams',
    siteName: 'Ace My Campus',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/banner-testimonials.jpg', width: 1200, height: 630, alt: 'Entrance Exams Guide 2026 - Ace My Campus' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrance Exams 2026 Guide | Ace My Campus',
    description: 'Check dates, eligibility, and cutoffs for JEE, CAT, CMAT, NIMCET & CUET with free expert guidance.',
    images: ['/images/banner-testimonials.jpg'],
  },
};

export default function EntranceExamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const examsBreadcrumbSchema = {
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
        name: 'Entrance Exams',
        item: 'https://acemycampus.com/exams',
      },
    ],
  };

  const examsItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'National & State Entrance Exams 2026',
    description: 'Key entrance exams for B.Tech, MBA, MCA, and Law admissions in India with syllabus, cutoffs, and participating institutes.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'CAT (Common Admission Test)',
        description: 'Premier national entrance exam for admission into top IIMs and premier MBA/PGDM colleges in India.',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'JEE Main (Joint Entrance Examination)',
        description: 'National entrance examination for admission into B.Tech/B.E. engineering programs across NITs, IIITs, and universities.',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'CMAT (Common Management Admission Test)',
        description: 'National level computer-based MBA admission test conducted by NTA for AICTE approved institutions.',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'CUET PG / UG (Common University Entrance Test)',
        description: 'Centralized all-India admission test for central, state, and private universities across India.',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'NIMCET (NIT MCA Common Entrance Test)',
        description: 'National level entrance examination conducted for admissions to Master of Computer Applications (MCA) programs.',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(examsBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(examsItemListSchema) }}
      />
      {children}
    </>
  );
}
