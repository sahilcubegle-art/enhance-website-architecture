import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__container">
        
        {/* Col 1: Brand Info */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/cubegle_logo.png" alt="" className="footer__logo-img" />
            <span className="font-headline-sm footer__logo-text">Cubegle</span>
          </div>
          <p className="font-body-md footer__desc">
            Designing and constructing modern enterprise data platforms, robust streaming pipelines, and integrated MLOps environments.
          </p>
          <div className="footer__socials">
            <a href="https://github.com" aria-label="Github" target="_blank" rel="noopener noreferrer">
              <svg className="footer__social-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg className="footer__social-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Solutions */}
        <div className="footer__col">
          <h4 className="font-label-caps footer__title">Solutions</h4>
          <ul className="footer__links">
            <li><a href="#/services" className="footer__link">Data Platform Design</a></li>
            <li><a href="#/services" className="footer__link">MLOps & Orchestration</a></li>
            <li><a href="#/services" className="footer__link">Streaming Pipelines</a></li>
            <li><a href="#/services" className="footer__link">Modern Data Mesh</a></li>
          </ul>
        </div>

        {/* Col 3: Company */}
        <div className="footer__col">
          <h4 className="font-label-caps footer__title">Company</h4>
          <ul className="footer__links">
            <li><a href="#/architecture" className="footer__link">Architecture</a></li>
            <li><a href="#/case-studies" className="footer__link">Case Studies</a></li>
            <li><a href="#/industries" className="footer__link">Industries</a></li>
            <li><a href="#contact" className="footer__link">Book Consultation</a></li>
          </ul>
        </div>

        {/* Col 4: Resources */}
        <div className="footer__col">
          <h4 className="font-label-caps footer__title">Resources</h4>
          <ul className="footer__links">
            <li><a href="#" className="footer__link">System Status</a></li>
            <li><a href="#" className="footer__link">Security Standards</a></li>
            <li><a href="#" className="footer__link">Open Source Contribution</a></li>
            <li><a href="#" className="footer__link">Privacy Policy</a></li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom container">
        <hr className="footer__divider" />
        <div className="footer__meta">
          <p className="footer__copyright">
            © {currentYear} Cubegle Technologies. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Terms of Service</a>
            <span className="footer__dot" aria-hidden="true">•</span>
            <a href="#" className="footer__bottom-link">SLA Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
