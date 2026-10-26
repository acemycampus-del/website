'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin, Mail, ShieldCheck, ArrowRight, Clock
} from 'lucide-react';
import { LinkedinIcon, FacebookIcon, InstagramIcon } from '@/components/SocialIcons';

interface FooterProps {
  onOpenCounselling: () => void;
  onOpenInstitutionModal: () => void;
  hidePreFooter?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCounselling,
  onOpenInstitutionModal,
  hidePreFooter = false
}) => {
  return (
    <footer className="site-footer" id="contact" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(10, 56, 113, 0.4) 0%, transparent 65%), linear-gradient(180deg, #041630 0%, #020C1C 100%)', color: '#94A3B8', borderTop: '1px solid rgba(255, 255, 255, 0.1)', position: 'relative' }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid" style={{ marginBottom: '40px', paddingTop: '40px' }}>
          {/* Column 1: Brand Info & Mission */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <Link href="/" style={{ display: 'inline-block', textDecoration: 'none' }}>
                {/* Official Brand Logo */}
                <div
                  style={{
                    background: '#ffffff',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    boxShadow: '0 4px 18px rgba(0, 0, 0, 0.28)'
                  }}
                >
                  <img
                    src="/images/logo-official-trans.png"
                    alt="Ace My Campus"
                    style={{ height: '42px', width: 'auto', display: 'block' }}
                  />
                </div>
              </Link>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: '1.65', marginBottom: '18px', maxWidth: '340px' }}>
              India&apos;s premier student-first platform for career discovery, course exploration, verified college admissions, and strategic education marketing.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.06)', padding: '6px 14px', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.8rem', color: '#E2E8F0', marginBottom: '20px' }}>
              <ShieldCheck size={15} color="var(--orange-primary)" />
              <span>100% Free &amp; Unbiased Guidance</span>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
              <a
                href="https://www.linkedin.com/company/acemycampus-edu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: '#CBD5E1', background: 'rgba(255, 255, 255, 0.08)', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://www.facebook.com/share/1cZdF1qCxg/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: '#CBD5E1', background: 'rgba(255, 255, 255, 0.08)', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://www.instagram.com/ace_my_campus?dlrf=MmpzaW43cHM1OXM5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: '#CBD5E1', background: 'rgba(255, 255, 255, 0.08)', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
              >
                <InstagramIcon size={16} />
              </a>
            </div>

            <div>
              <button
                onClick={onOpenCounselling}
                className="btn btn-primary btn-sm"
              >
                <span>Get Free Counselling</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/courses">Course Explorer</Link></li>
              <li><Link href="/colleges">Colleges Directory</Link></li>
              <li><Link href="/exams">Entrance Exams</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Academic Pathways */}
          <div>
            <h4 className="footer-col-title">Academic Courses</h4>
            <ul className="footer-links">
              <li><Link href="/courses">MBA &amp; PGDM Programs</Link></li>
              <li><Link href="/courses">BBA &amp; B.Com Studies</Link></li>
              <li><Link href="/courses">B.Tech &amp; M.Tech (CSE, AI, ECE)</Link></li>
              <li><Link href="/courses">BCA &amp; MCA (Computer Apps)</Link></li>
              <li><Link href="/exams">All India Entrance Exams</Link></li>
              <li><Link href="/colleges">Top Colleges Directory</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Lucknow HQ (Clean Admissions Desk - No Phone Numbers) */}
          <div>
            <h4 className="footer-col-title">Admissions &amp; Advisory</h4>

            <div className="footer-contact-item">
              <MapPin size={18} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontWeight: '600', color: '#ffffff', display: 'block' }}>Central Headquarters</span>
                <span style={{ fontSize: '0.875rem' }}>LDA Colony Ashiyana, Lucknow, Uttar Pradesh, India - 226012</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontWeight: '600', color: '#ffffff', display: 'block' }}>Email Enquiries</span>
                <a href="mailto:acemycampus@gmail.com" style={{ color: 'var(--orange-primary)', fontSize: '0.875rem', fontWeight: '700' }}>
                  acemycampus@gmail.com
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontWeight: '600', color: '#ffffff', display: 'block' }}>Counselling Desk Hours</span>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Mon – Sat: 9:30 AM – 7:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div suppressHydrationWarning style={{ color: '#94A3B8' }}>
            © {new Date().getFullYear()} <strong style={{ color: '#ffffff' }}>Ace My Campus</strong>. All Rights Reserved. Lucknow | India
          </div>
        </div>
      </div>
    </footer>
  );
};
