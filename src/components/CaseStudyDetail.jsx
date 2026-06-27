import { useEffect } from 'react';
import { CASE_STUDIES_DATA } from '../data/caseStudiesData';
import './CaseStudyDetail.css';

export default function CaseStudyDetail({ caseStudyId }) {
  const study = CASE_STUDIES_DATA.find((s) => s.id === caseStudyId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [caseStudyId]);

  if (!study) {
    return (
      <div style={{ padding: '160px 0', textAlign: 'center' }}>
        <h2 className="font-headline-md">Case Study Not Found</h2>
        <a href="#/" className="btn btn-outline" style={{ marginTop: '20px' }}>Back to Home</a>
      </div>
    );
  }

  // Find related studies from their IDs
  const relatedStudies = study.relatedLinks
    ? CASE_STUDIES_DATA.filter((cs) => study.relatedLinks.includes(cs.id))
    : [];

  return (
    <>
      {/* ── Hero Banner Section ── */}
      <section 
        className="detail-hero" 
        style={{ backgroundImage: `url(${study.bgImage})` }}
      >
        <div className="container">
          <span className="hero-eyebrow">Case Study &bull; {study.category}</span>
          <h1 className="hero-title">{study.title}</h1>
          <p className="hero-subtitle">{study.subtitle}</p>

          <div className="hero-meta-grid">
            {study.meta.map((item, idx) => (
              <div key={idx} className="hero-meta-item">
                <span className="hero-meta-label">{item.label}</span>
                <span className="hero-meta-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Overview & Quick Facts ── */}
      <section className="bg-alt" style={{ padding: 'var(--space-16) 0' }}>
        <div className="container grid-2">
          {/* Overview text */}
          <div>
            <h2 className="font-headline-md" style={{ marginBottom: 'var(--space-4)' }}>
              {study.overviewTitle || 'Project Overview'}
            </h2>
            <p className="font-body-md" style={{ marginBottom: 'var(--space-4)' }}>
              {study.overviewP1}
            </p>
            {study.overviewP2 && (
              <p className="font-body-md">
                {study.overviewP2}
              </p>
            )}
          </div>

          {/* Quick Facts Card */}
          <div className="overview-card">
            <h3 className="font-headline-sm" style={{ marginBottom: 'var(--space-4)' }}>
              Project Information
            </h3>
            <div className="overview-list">
              <div className="overview-item">
                <span className="overview-lbl">Client</span>
                <span className="overview-val">{study.client}</span>
              </div>
              <div className="overview-item">
                <span className="overview-lbl">Timeline</span>
                <span className="overview-val">{study.timeline}</span>
              </div>
              {study.teamSize && (
                <div className="overview-item">
                  <span className="overview-lbl">Team Size</span>
                  <span className="overview-val">{study.teamSize}</span>
                </div>
              )}
              <div className="overview-item">
                <span className="overview-lbl">Services Rendered</span>
                <span className="overview-val">{study.category}</span>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-6)' }}>
              <h4 className="font-label-caps" style={{ color: 'var(--primary)', marginBottom: 'var(--space-2)' }}>
                Tech Stack
              </h4>
              <div className="badge-row">
                {study.technologies.map((tech, idx) => (
                  <span key={idx} className="badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Challenges (Warning Cards) ── */}
      <section style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="font-headline-md">Key Challenges</h2>
            <p className="font-body-lg">The structural hurdles and scalability roadblocks we set out to resolve.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: '800px', margin: '0 auto' }}>
            {study.challenges.map((challenge, idx) => (
              <div key={idx} className="challenge-card">
                <span className="material-symbols-outlined challenge-icon">warning</span>
                <div>
                  <h4 className="font-headline-sm" style={{ fontSize: '18px' }}>{challenge.title}</h4>
                  <p className="font-body-md" style={{ marginTop: '4px' }}>{challenge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions (Solution Workflows) ── */}
      <section className="bg-alt" style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="font-headline-md">Engineered Solutions</h2>
            <p className="font-body-lg">How we built and integrated micro-services, streaming partitions, and validation rules to solve the blockers.</p>
          </div>

          <div className="solution-steps">
            {study.solutions.map((solution, idx) => (
              <div key={idx} className="solution-step-card">
                <div className="solution-step-num">{solution.num || `0${idx + 1}`}</div>
                <h3 className="font-headline-sm" style={{ fontSize: '18px', marginBottom: 'var(--space-2)' }}>{solution.title}</h3>
                <p className="font-body-md" style={{ fontSize: '14px', lineHeight: '22px' }}>{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture Flow Column Layout ── */}
      {study.architecture && study.architecture.columns && (
        <section style={{ padding: 'var(--space-16) 0' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="font-headline-md">Architecture & Data Pipeline</h2>
              <p className="font-body-lg">The end-to-end data flow and infrastructure topology designed for this implementation.</p>
            </div>

            <div className="arch-box">
              <div className="arch-header">
                <span className="font-label-caps" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Data Flow Blueprint</span>
                <span className="font-label-caps" style={{ color: 'var(--secondary)' }}>Active State</span>
              </div>

              <div className="arch-flow-grid">
                {study.architecture.columns.map((column, colIdx) => (
                  <div key={colIdx} className="arch-column">
                    <div className="arch-column-title">{column.title}</div>
                    {column.nodes.map((node, nodeIdx) => (
                      <div key={nodeIdx} className="arch-node">
                        <span className={`material-symbols-outlined arch-node-icon ${node.highlight ? 'teal' : ''}`}>
                          {node.icon || 'hub'}
                        </span>
                        <span className="arch-node-label">{node.label}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Process Timeline ── */}
      {study.process && study.process.length > 0 && (
        <section className="bg-alt" style={{ padding: 'var(--space-16) 0' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="font-headline-md">Operational Walkthrough</h2>
              <p className="font-body-lg">Phase-by-phase breakdown of our execution strategy, from intent mapping to final go-live.</p>
            </div>

            <div className="timeline" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {study.process.map((step, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h3 className="timeline-title font-headline-sm">{step.title}</h3>
                  <p className="font-body-md">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Outcomes Metrics ── */}
      {study.results && study.results.length > 0 && (
        <section style={{ padding: 'var(--space-16) 0' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="font-headline-md">Measurable Outcomes</h2>
              <p className="font-body-lg">The business and infrastructure results achieved after project deployment.</p>
            </div>

            <div className="metrics-row" style={{ maxWidth: '960px', margin: '0 auto' }}>
              {study.results.map((result, idx) => (
                <div key={idx} className="metric-card">
                  <div className="metric-num">{result.value}</div>
                  <div className="metric-lbl">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Client Testimonial ── */}
      {study.testimonial && (
        <section className="bg-alt" style={{ padding: 'var(--space-16) 0' }}>
          <div className="container">
            <div className="testimonial-block">
              <span className="material-symbols-outlined testimonial-quote-icon">format_quote</span>
              <p className="testimonial-text">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <div className="testimonial-author-name">{study.testimonial.author}</div>
              <div className="testimonial-author-title">{study.testimonial.role}</div>
            </div>
          </div>
        </section>
      )}

      {/* ── Related Reports Section ── */}
      {relatedStudies.length > 0 && (
        <section style={{ padding: 'var(--space-16) 0' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="font-headline-md">Related Case Studies</h2>
              <p className="font-body-lg">Explore more implementations from our engineering teams.</p>
            </div>

            <div className="card-grid-3">
              {relatedStudies.map((rel, idx) => (
                <a 
                  key={idx} 
                  href={`#/case-studies/${rel.id}`} 
                  className="portfolio-card"
                >
                  <img 
                    src={rel.bgImage} 
                    alt={rel.title} 
                    className="portfolio-card__img" 
                  />
                  <div className="portfolio-card__body">
                    <div className="portfolio-card__header">
                      <span className="portfolio-card__badge">{rel.category}</span>
                      <span className="portfolio-card__client">{rel.client}</span>
                    </div>
                    <h3 className="portfolio-card__title">{rel.title}</h3>
                    <p className="portfolio-card__summary">{rel.subtitle}</p>
                    
                    <div className="portfolio-card__metrics">
                      <table className="portfolio-card__table">
                        <tbody>
                          {rel.results.slice(0, 2).map((res, ridx) => (
                            <tr key={ridx}>
                              <td className="portfolio-card__lbl">{res.label}</td>
                              <td className="portfolio-card__val">{res.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="portfolio-card__cta">
                      <span>Read Technical Report</span>
                      <span className="material-symbols-outlined portfolio-card__arrow">arrow_forward</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
