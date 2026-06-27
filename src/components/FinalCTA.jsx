import { useRef, useState } from 'react';
import { useInView } from './useInView';
import './FinalCTA.css';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="section section-dark cta" ref={ref}>
      <div className="cta__glow" aria-hidden="true" />
      <div className="container cta__container">
        
        {/* Left Side: Text Details */}
        <div className={`cta__text reveal${isInView ? ' visible' : ''}`}>
          <h2 className="font-display-lg cta__heading">
            Ready to Build a Future-Proof Data Platform?
          </h2>
          <p className="font-body-lg cta__subtitle">
            Book a 30-minute architecture strategy session with our principal engineers. Let's mapping your bottlenecks and explore scaling paths.
          </p>

          <div className="cta__benefits">
            <div className="cta__benefit">
              <span className="material-symbols-outlined cta__benefit-icon" aria-hidden="true">check_circle</span>
              <span className="font-label-md">Detailed Architecture Assessment</span>
            </div>
            <div className="cta__benefit">
              <span className="material-symbols-outlined cta__benefit-icon" aria-hidden="true">check_circle</span>
              <span className="font-label-md">Cost Optimization Estimates</span>
            </div>
            <div className="cta__benefit">
              <span className="material-symbols-outlined cta__benefit-icon" aria-hidden="true">check_circle</span>
              <span className="font-label-md">No Obligations, Just Hard Engineering</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className={`cta__form-box reveal${isInView ? ' visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="cta__form" id="contact-form">
              <div className="cta__form-row">
                <div className="cta__form-group">
                  <label htmlFor="cta-name" className="font-label-caps cta__label">Full Name</label>
                  <input
                    type="text"
                    id="cta-name"
                    className="cta__input"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div className="cta__form-group">
                  <label htmlFor="cta-email" className="font-label-caps cta__label">Work Email</label>
                  <input
                    type="email"
                    id="cta-email"
                    className="cta__input"
                    placeholder="jane@company.com"
                    required
                  />
                </div>
              </div>

              <div className="cta__form-group">
                <label htmlFor="cta-domain" className="font-label-caps cta__label">Primary Focus Area</label>
                <select id="cta-domain" className="cta__select">
                  <option value="migration">Cloud Warehouse Migration</option>
                  <option value="mlops">MLOps & AI Infrastructure</option>
                  <option value="streaming">Real-time Event Streaming</option>
                  <option value="governance">Data Mesh & Governance</option>
                  <option value="other">General Consultation</option>
                </select>
              </div>

              <div className="cta__form-group">
                <label htmlFor="cta-message" className="font-label-caps cta__label">Brief Project Summary</label>
                <textarea
                  id="cta-message"
                  className="cta__textarea"
                  rows="3"
                  placeholder="Tell us about your current stack and scale constraints..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg cta__submit"
                disabled={isSubmitting}
                id="btn-submit-contact"
              >
                {isSubmitting ? (
                  <span className="cta__spinner" />
                ) : (
                  <>
                    <span>Schedule Session</span>
                    <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="cta__success" role="alert">
              <span className="material-symbols-outlined cta__success-icon">task_alt</span>
              <h3 className="font-headline-sm cta__success-title">Strategy Session Requested</h3>
              <p className="font-body-md cta__success-text">
                Thank you! One of our lead platform engineers will reach out to you within 1 business day to confirm your calendar booking.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
