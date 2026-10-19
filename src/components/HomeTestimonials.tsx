'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ShieldCheck, HeartHandshake, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/mock-data';

interface HomeTestimonialsProps {
  onOpenCounselling?: () => void;
}

export const HomeTestimonials: React.FC<HomeTestimonialsProps> = ({ onOpenCounselling }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive items visible per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCards = TESTIMONIALS.length;
  const maxIndex = Math.max(0, totalCards - visibleCount);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="py-section"
      id="student-stories"
      style={{ background: '#FFFFFF', position: 'relative', overflow: 'hidden' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 24px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(250, 100, 0, 0.1)',
              color: 'var(--orange-primary)',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '10px'
            }}
          >
            <Star size={14} fill="var(--orange-primary)" /> Verified Student &amp; Parent Experiences
          </span>

          <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', color: 'var(--navy-primary)', fontWeight: '800', lineHeight: '1.25', marginBottom: '10px', fontFamily: 'var(--font-outfit), sans-serif' }}>
            Stories of Clarity, <span style={{ color: '#FF6F1E' }}>Confidence &amp; Growth</span>
          </h2>

          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.65', margin: 0 }}>
            Discover how verified students across B.Tech, MBA, BBA, BCA, Law, and PGDM made informed admissions with Ace My Campus.
          </p>
        </div>

        {/* Carousel Wrapper with Side Arrows */}
        <div style={{ position: 'relative', margin: '0 auto 24px', maxWidth: '1240px' }}>
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              color: '#0A3871',
              boxShadow: '0 6px 18px rgba(10, 56, 113, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="testimonial-slider-arrow prev"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FF6F1E';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = '#FF6F1E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = '#0A3871';
              e.currentTarget.style.borderColor = '#E2E8F0';
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              color: '#0A3871',
              boxShadow: '0 6px 18px rgba(10, 56, 113, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="testimonial-slider-arrow next"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FF6F1E';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = '#FF6F1E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = '#0A3871';
              e.currentTarget.style.borderColor = '#E2E8F0';
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Overflow Track */}
          <div
            style={{ overflow: 'hidden', padding: '12px 4px 20px' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              style={{
                display: 'flex',
                gap: '24px',
                transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                transform: `translateX(calc(-${currentIndex} * (100% / ${visibleCount} + 24px * ${visibleCount - 1} / ${visibleCount})))`
              }}
            >
              {TESTIMONIALS.map((rev) => (
                <div
                  key={rev.id}
                  style={{
                    flex: `0 0 calc(${100 / visibleCount}% - ${((visibleCount - 1) * 24) / visibleCount}px)`,
                    minWidth: `calc(${100 / visibleCount}% - ${((visibleCount - 1) * 24) / visibleCount}px)`,
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    border: '1px solid #E2E8F0',
                    padding: '30px 26px',
                    boxShadow: '0 6px 24px -4px rgba(10, 56, 113, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  className="testimonial-carousel-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px -4px rgba(10, 56, 113, 0.16)';
                    e.currentTarget.style.borderColor = '#CBD5E1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 24px -4px rgba(10, 56, 113, 0.08)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                >
                  <div>
                    {/* Star Rating & Verified Admit Badge */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                      <div style={{ display: 'flex', gap: '3px' }}>
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={17} fill="#F59E0B" color="#F59E0B" />
                        ))}
                      </div>

                    </div>

                    {/* Main Quote */}
                    <h3
                      style={{
                        fontSize: '1.12rem',
                        color: '#0A3871',
                        fontWeight: '800',
                        marginBottom: '14px',
                        lineHeight: '1.45',
                        fontFamily: 'var(--font-outfit), sans-serif'
                      }}
                    >
                      &ldquo;{rev.quote}&rdquo;
                    </h3>

                    {/* Story Details */}
                    <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.65', marginBottom: '22px' }}>
                      {rev.story}
                    </p>
                  </div>

                  {/* Author Footer Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      paddingTop: '18px',
                      borderTop: '1px solid #F1F5F9',
                      marginTop: 'auto'
                    }}
                  >
                    <img
                      src={rev.image}
                      alt={rev.name}
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2.5px solid var(--orange-primary)',
                        boxShadow: '0 4px 12px rgba(250, 100, 0, 0.22)',
                        flexShrink: 0
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: '800', color: '#0A3871', fontSize: '1.02rem', lineHeight: '1.2' }}>{rev.name}</div>
                      <div style={{ fontSize: '0.84rem', color: '#0A3871', fontWeight: '700', marginTop: '3px' }}>{rev.college}</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px' }}>{rev.course} • {rev.city}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Pagination Indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  height: '8px',
                  width: currentIndex === idx ? '28px' : '8px',
                  borderRadius: '999px',
                  backgroundColor: currentIndex === idx ? '#FF6F1E' : '#CBD5E1',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
