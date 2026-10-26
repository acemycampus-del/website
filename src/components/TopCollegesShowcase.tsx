'use client';

import React from 'react';

interface TopCollegesShowcaseProps {
  onOpenCounselling?: (collegeName?: string) => void;
}

export const TopCollegesShowcase: React.FC<TopCollegesShowcaseProps> = ({ onOpenCounselling }) => {
  const partnerLogos = [
    {
      id: 'amity',
      name: 'Amity University',
      src: '/images/colleges/logos/amity.jpg',
      alt: 'Amity University',
      maxWidth: '155px',
      mixBlend: true
    },
    {
      id: 'iilm',
      name: 'IILM University',
      src: '/images/colleges/logos/iilm.png',
      alt: 'IILM University',
      maxWidth: '155px',
      mixBlend: true
    },
    {
      id: 'jaipuria',
      name: 'Jaipuria Institute of Management',
      src: '/images/colleges/logos/jaipuria.jpg',
      alt: 'Jaipuria Institute of Management',
      maxWidth: '155px',
      mixBlend: true
    },
    {
      id: 'maharishi',
      name: 'Maharishi University of Information Technology (MUIT)',
      src: '/images/colleges/logos/maharishi.png',
      alt: 'Maharishi University',
      maxWidth: '150px'
    },
    {
      id: 'aimt',
      name: 'Ambalika Institute of Management & Technology (AIMT)',
      src: '/images/colleges/logos/aimt.png',
      alt: 'AIMT Lucknow',
      maxWidth: '150px'
    },
    {
      id: 'TECHO ',
      name: 'Techno Group of Institutions',
      src: '/images/colleges/logos/logo-techno.webp',
      alt: 'TECHO  Lucknow',
      maxWidth: '150px'
    }
  ];

  return (
    <section
      id="top-colleges"
      style={{
        background: '#F8FAFC',
        padding: '36px 0 32px',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto 18px', textAlign: 'center', padding: '0 20px' }}>
        {/* Title */}
        <h2
          style={{
            fontSize: 'clamp(1.4rem, 2.3vw, 1.85rem)',
            color: '#1E293B',
            fontWeight: '800',
            margin: '0 0 6px 0',
            fontFamily: 'var(--font-outfit), sans-serif',
            letterSpacing: '-0.01em'
          }}
        >
          Top Colleges &amp; <span style={{ color: '#FF6F1E' }}>Universities</span>
        </h2>
        <p style={{ color: '#64748B', fontSize: '0.92rem', margin: 0, fontWeight: 500 }}>
          Partnered with leading accredited universities &amp; premier institutions
        </p>
      </div>

      {/* Infinite Logo Slider Container */}
      <div
        className="top-colleges-slider-wrapper"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          padding: '10px 0'
        }}
      >
        {/* Left and Right Fade Gradients */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '80px',
            background: 'linear-gradient(to right, #F8FAFC 20%, rgba(248, 250, 252, 0))',
            zIndex: 3,
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '80px',
            background: 'linear-gradient(to left, #F8FAFC 20%, rgba(248, 250, 252, 0))',
            zIndex: 3,
            pointerEvents: 'none'
          }}
        />

        {/* Continuous Track (Doubled items for infinite seamless loop) */}
        <div className="colleges-track">
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((college, idx) => (
            <div
              key={`${college.id}-${idx}`}
              onClick={() => onOpenCounselling && onOpenCounselling(college.name)}
              className="college-logo-card"
              title={college.name}
            >
              <img
                src={college.src}
                alt={college.alt}
                style={{
                  maxHeight: '48px',
                  maxWidth: college.maxWidth || '140px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  ...(college.mixBlend ? { mixBlendMode: 'multiply' } : {})
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CSS for seamless continuous animation and hover pause */}
      <style jsx>{`
        .colleges-track {
          display: flex;
          align-items: center;
          gap: 24px;
          width: max-content;
          animation: marqueeScroll 24s linear infinite;
        }

        .top-colleges-slider-wrapper:hover .colleges-track {
          animation-play-state: paused;
        }

        .college-logo-card {
          flex: 0 0 210px;
          width: 210px;
          height: 100px;
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #eef2f6;
          box-shadow: 0 4px 16px rgba(10, 56, 113, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 22px;
          cursor: pointer;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          user-select: none;
        }

        .college-logo-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 12px 24px -4px rgba(10, 56, 113, 0.14);
          border-color: #cbd5e1;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* 1/3 since we repeated the array 3 times */
            transform: translateX(calc(-100% / 3));
          }
        }

        @media (max-width: 768px) {
          .college-logo-card {
            flex: 0 0 170px;
            width: 170px;
            height: 86px;
            padding: 12px 16px;
          }
          .colleges-track {
            gap: 16px;
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};
