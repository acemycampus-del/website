import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Degree Courses, Eligibility & Fees in India',
  description: 'Compare MBA, B.Tech, BCA, MCA & Law programs in India. Check eligibility criteria, fee structures, specialization paths, and placement salary outcomes.',
  keywords: [
    'MBA vs PGDM India',
    'B.Tech Specializations',
    'BCA MCA Career Opportunities',
    'MBA Eligibility Fees Lucknow',
    'Highest Placement Packages',
    'Average Salary MBA B.Tech',
    'Best Degree Programs 2026',
    'Law Degree BA LLB India'
  ],
  alternates: {
    canonical: '/courses',
  },
  openGraph: {
    title: 'Top Degree Courses, Eligibility & Fees in India | Ace My Campus',
    description: 'Compare duration, eligibility, fees, packages, and career paths across MBA, B.Tech, BCA, MCA and Law with free expert guidance.',
    url: 'https://acemycampus.com/courses',
    siteName: 'Ace My Campus',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/hero-students.jpg', width: 1200, height: 630, alt: 'Course & Career Guidance - Ace My Campus' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Degree Courses & Career Outcomes | Ace My Campus',
    description: 'Compare duration, eligibility, fees & packages across MBA, B.Tech, BCA, MCA and Law.',
    images: ['/images/hero-students.jpg'],
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const coursesBreadcrumbSchema = {
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
        name: 'Courses',
        item: 'https://acemycampus.com/courses',
      },
    ],
  };

  const coursesItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Degree Courses & Programs in India',
    description: 'Explore eligibility, fee ranges, duration, and placement outcomes for leading undergraduate and postgraduate programs.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Course',
          name: 'Master of Business Administration (MBA)',
          description: 'A 2-year leadership degree in corporate management, finance, marketing, and business strategy.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Ace My Campus',
            url: 'https://acemycampus.com',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Course',
          name: 'Post Graduate Diploma in Management (PGDM)',
          description: 'An industry-centric AICTE approved 2-year management diploma with dual specializations.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Ace My Campus',
            url: 'https://acemycampus.com',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Course',
          name: 'Bachelor of Technology (B.Tech)',
          description: 'A 4-year engineering program in Computer Science, AI/ML, Data Science, and Electronics.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Ace My Campus',
            url: 'https://acemycampus.com',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Course',
          name: 'Bachelor & Master of Computer Applications (BCA / MCA)',
          description: 'Professional computing degrees focusing on enterprise software systems, cloud computing, and full-stack development.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Ace My Campus',
            url: 'https://acemycampus.com',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Course',
          name: 'Integrated Law (BA LLB / BBA LLB)',
          description: '5-year professional legal education in corporate jurisprudence, cyber law, and constitutional law.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Ace My Campus',
            url: 'https://acemycampus.com',
          },
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesItemListSchema) }}
      />
      {children}
    </>
  );
}
