'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CoreServicesProps {
  onOpenCounselling: (serviceName?: string) => void;
  onOpenCollegeFilter: () => void;
  onOpenInstitutionModal?: () => void;
}

export const CoreServices: React.FC<CoreServicesProps> = ({ 
  onOpenCounselling, 
  onOpenCollegeFilter,
  onOpenInstitutionModal 
}) => {
  const allCards = [
    // 1. Career & Admissions Pillar (Row 1)
    {
      id: 'career-guidance',
      title: 'Personalized Career Guidance',
      image: '/images/what-we-do-career-guidance.jpg',
      points: [
        'Profile-based program and college selection',
        'Stream & specialization clarity tailored to your strengths',
        'ROI & fee structure comparative analysis',
      ],
      action: 'counselling',
      actionText: 'Get Career Guidance',
    },
    {
      id: 'college-shortlisting',
      title: 'College Shortlisting',
      image: '/images/what-we-do-colleges.jpg',
      points: [
        '200+ partner institutions across India',
        'Evaluation based on faculty, campus & placement records',
        'Transparent, 100% unbiased recommendations',
      ],
      action: 'filter',
      actionText: 'Explore Partner Colleges',
    },
    {
      id: 'admission-support',
      title: 'Admission Support',
      image: '/images/what-we-do-counselling.jpg',
      points: [
        'Application & documentation assistance',
        'GD & Personal interview preparation',
        'Direct institutional liaison & scholarship guidance',
      ],
      action: 'counselling',
      actionText: 'Get Admission Support',
    },

    // 2. Placement, Parent & Institutional Ecosystem (Row 2)
    {
      id: 'placement-readiness',
      title: 'Placement Readiness Support',
      image: '/images/what-we-do-placement-readiness.jpg',
      points: [
        'Career mentoring during MBA/PGDM',
        'Placement strategy guidance',
        'Industry connect support',
      ],
      action: 'counselling',
      actionText: 'Get Placement Mentoring',
    },
    {
      id: 'parent-counselling',
      title: 'Parent Counselling',
      image: '/images/what-we-do-parent-counselling.jpg',
      points: [
        'Transparent ROI discussions',
        'Ethical & pressure-free guidance',
        'Clear placement insights',
      ],
      action: 'counselling',
      actionText: 'Book Parent Session',
    },
    {
      id: 'institutional-partnerships',
      title: 'Institutional Partnerships',
      image: '/images/what-we-do-institutional-partnerships.jpg',
      points: [
        'Quality admissions support',
        'Right-fit student matching',
        'Long-term academic collaborations',
      ],
      action: 'institution',
      actionText: 'Explore Partnerships',
    },
  ];

  const handleCardClick = (card: typeof allCards[0]) => {
    if (card.action === 'institution') {
      if (onOpenInstitutionModal) {
        onOpenInstitutionModal();
      } else {
        onOpenCounselling('Institutional Partnerships');
      }
    } else if (card.action === 'filter') {
      onOpenCollegeFilter();
    } else {
      onOpenCounselling(card.title);
    }
  };

  return (
    <section className="py-section" id="what-we-do" style={{ background: '#F8FAFC' }}>
      <div className="container">
        {/* Section Heading */}
        <div className="text-center" style={{ marginBottom: '26px' }}>
          <span className="section-tag orange">OUR CORE EXPERTISE</span>
          <h2 className="section-title" style={{ textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '10px' }}>
            WHAT WE <span style={{ color: '#FF6F1E' }}>DO</span>
          </h2>
          <p className="section-subtitle center-block" style={{ maxWidth: '680px', marginBottom: 0 }}>
            Clear, cluster-free guidance tailored to help you navigate college admissions, career paths, and placements with absolute confidence.
          </p>
        </div>

        {/* 3-Column Luxury Cards Grid Showing All 6 Services */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '24px',
            marginBottom: '32px'
          }}
        >
          {allCards.map((card) => (
            <div 
              key={card.id}
              style={{
                background: '#092F60',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 36px -8px rgba(4, 22, 48, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              className="what-we-do-card"
            >
              {/* Card Photo Header */}
              <div style={{ height: '225px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Card Deep Midnight Navy Content Panel */}
              <div 
                style={{ 
                  background: '#092F60', 
                  color: '#ffffff', 
                  padding: '28px 24px 24px 24px', 
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '270px'
                }}
              >
                <div>
                  {/* Title with Subtle Orange Underline */}
                  <h3 
                    style={{ 
                      fontSize: '1.35rem', 
                      fontWeight: '800', 
                      color: '#ffffff', 
                      margin: 0,
                      paddingBottom: '14px',
                      borderBottom: '1.5px solid rgba(231, 105, 37, 0.45)',
                      fontFamily: 'var(--font-outfit), sans-serif',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.25'
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Bullet Points with Orange Check Circle Icon */}
                  <ul 
                    style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: '20px 0 26px 0', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '14px' 
                    }}
                  >
                    {card.points.map((pt, idx) => (
                      <li 
                        key={idx} 
                        style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: '10px', 
                          fontSize: '0.94rem', 
                          color: '#E2E8F0', 
                          lineHeight: '1.45',
                          fontWeight: '500'
                        }}
                      >
                        <CheckCircle2 
                          size={18} 
                          color="#FF7426" 
                          style={{ flexShrink: 0, marginTop: '2px' }} 
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full-Width Orange Action Button with Right Arrow */}
                <div>
                  <button 
                    onClick={() => handleCardClick(card)}
                    style={{ 
                      width: '100%',
                      background: '#FF7426',
                      color: '#ffffff',
                      border: 'none',
                      padding: '13px 20px',
                      borderRadius: '10px',
                      fontWeight: '700',
                      fontSize: '0.98rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 14px rgba(255, 116, 38, 0.35)',
                      transition: 'all 0.2s ease',
                    }}
                    className="what-we-do-action-btn"
                  >
                    <span>{card.actionText}</span>
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guaranteed Guidance Callout Banner */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #041630 0%, #0A3871 60%, #082852 100%)',
            borderRadius: '20px',
            padding: '38px 40px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 16px 40px -10px rgba(4, 22, 48, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <span 
              style={{ 
                color: 'var(--orange-primary)', 
                fontSize: '0.8rem', 
                fontWeight: '800', 
                textTransform: 'uppercase', 
                letterSpacing: '0.08em',
                background: 'rgba(250, 100, 0, 0.15)',
                padding: '4px 12px',
                borderRadius: '6px',
                display: 'inline-block',
                marginBottom: '10px'
              }}
            >
              CONFUSED ABOUT CHOOSING THE RIGHT COLLEGE OR PROGRAM?
            </span>
            <h3 
              style={{ 
                fontSize: 'clamp(1.4rem, 2.4vw, 1.85rem)', 
                color: '#ffffff', 
                fontWeight: '800',
                marginBottom: '8px',
                fontFamily: 'var(--font-outfit), sans-serif'
              }}
            >
              Not sure which college is <span style={{ color: '#FF6F1E' }}>right for you?</span>
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
              You&apos;re not alone. We&apos;re here to help you make the right choice with confidence.
            </p>
          </div>

          <button 
            onClick={() => onOpenCounselling("College Counselling Session")}
            className="btn btn-primary btn-lg"
            style={{ 
              whiteSpace: 'nowrap',
              padding: '14px 28px',
              borderRadius: '10px',
              fontWeight: '800',
              boxShadow: '0 8px 24px rgba(250, 100, 0, 0.4)'
            }}
          >
            <span>Get Free Counselling Session</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
};
