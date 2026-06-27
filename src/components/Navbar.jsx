import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#/' },
  { label: 'Solutions', href: '#/services-teaser' },
  { 
    label: 'Services', 
    href: '#/services',
    dropdown: [
      { label: 'All Services', href: '#/services' },
      { label: 'Data Engineering', href: '#/services/data-engineering' },
      { label: 'Data Warehousing', href: '#/services/data-warehousing' },
      { label: 'BI Dashboards', href: '#/services/bi-dashboards' },
      { label: 'AI / ML Engineering', href: '#/services/ai-ml' },
      { label: 'DevOps & Cloud', href: '#/services/devops-cloud' },
      { label: 'Product Development', href: '#/services/product-development' },
    ]
  },
  { 
    label: 'Case Studies', 
    href: '#/case-studies',
    dropdown: [
      { label: 'AI Support: CognitiveOps', href: '#/case-studies/ai-support' },
      { label: 'Healthcare: OmniHealth', href: '#/case-studies/healthcare-data' },
      { label: 'Inventory: StockSens', href: '#/case-studies/retail-inventory' },
      { label: 'Fraud Guard: ShieldLedger', href: '#/case-studies/fintech-fraud' },
      { label: 'Machine Health: AeroForge', href: '#/case-studies/predictive-maintenance' },
      { label: 'Smart Transit: MetroPulse', href: '#/case-studies/smart-city' },
    ]
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleHomeClick = (e) => {
    if (window.location.hash === '#/' || window.location.hash === '') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#/" className="navbar__logo" aria-label="Cubegle Home" onClick={handleHomeClick}>
          <img src="/cubegle_logo.png" alt="Cubegle Logo" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__brand">Cubegle</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.label} className="navbar__dropdown-wrapper">
                  <a href={link.href} className="navbar__link navbar__link--dropdown font-label-md">
                    {link.label} <span className="dropdown-arrow">▼</span>
                  </a>
                  <div className="navbar__dropdown">
                    {link.dropdown.map((sublink) => (
                      <a key={sublink.label} href={sublink.href} className="navbar__dropdown-item">
                        {sublink.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a 
                key={link.label} 
                href={link.href} 
                className="navbar__link font-label-md"
                onClick={link.label === 'Home' ? handleHomeClick : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="navbar__actions">
          <a href="#contact" className="btn btn-primary navbar__cta">
            Book Consultation
          </a>
          <button
            className="navbar__toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`navbar__hamburger${mobileOpen ? ' open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!mobileOpen}>
        <nav className="navbar__mobile-links" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.label} className="navbar__mobile-dropdown-wrapper">
                  <a
                    href={link.href}
                    className="navbar__mobile-link font-headline-sm"
                    style={{ borderBottom: 'none', paddingBottom: '0' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                  <div className="navbar__mobile-dropdown-items">
                    {link.dropdown.map((sublink) => (
                      <a
                        key={sublink.label}
                        href={sublink.href}
                        className="navbar__mobile-dropdown-item"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sublink.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a
                key={link.label}
                href={link.href}
                className="navbar__mobile-link font-headline-sm"
                onClick={(e) => {
                  setMobileOpen(false);
                  if (link.label === 'Home') {
                    handleHomeClick(e);
                  }
                }}
              >
                {link.label}
              </a>
            );
          })}
          <a href="#contact" className="btn btn-primary" onClick={() => setMobileOpen(false)} style={{ marginTop: '16px', width: '100%' }}>
            Book Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
