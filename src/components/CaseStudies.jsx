import { useRef } from 'react';
import { useInView } from './useInView';
import './CaseStudies.css';

const STUDIES = [
  {
    category: 'AI & ML',
    title: 'CognitiveOps: Scaling Support with Agentic AI Orchestration',
    client: 'ScaleFlow Tech',
    link: '#/case-studies/ai-support',
    stats: [
      { label: 'Deflection Rate', value: '68% Resolved' },
      { label: 'Avg. Latency', value: '<1.8s Response' },
      { label: 'Cost Reduction', value: '75% Support Savings' },
    ],
    summary: 'Replaced rigid decision-tree bots with an agentic LLM routing mesh that dynamically resolves multi-leg user queries securely.',
  },
  {
    category: 'Data Platform',
    title: 'OmniHealth: Unified Multi-Region Clinical Data Mesh',
    client: 'Aegis Healthcare',
    link: '#/case-studies/healthcare-data',
    stats: [
      { label: 'Query Latency', value: '22x Acceleration' },
      { label: 'Compliance Audit', value: '100% Automated' },
      { label: 'Integrated Sites', value: '14 Clinics Unified' },
    ],
    summary: 'Engineered a federated analytics layer across hybrid EHR regions, featuring automated column-level HIPAA masking and zero compliance leaks.',
  },
  {
    category: 'Data Platform',
    title: 'StockSens: Real-Time Inventory & Predictive Supply Chain',
    client: 'Apex Retailers',
    link: '#/case-studies/retail-inventory',
    stats: [
      { label: 'ETL Frequency', value: 'Daily to <5m' },
      { label: 'Inventory Shrink', value: '14% Reduction' },
      { label: 'Inventory Accuracy', value: '99.8% Perfect Sync' },
    ],
    summary: 'Migrated daily batch reporting to a sub-5-minute Kafka-to-BigQuery streaming ingestion model to dynamically optimize supply chain routing.',
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="case-studies" className="section case-studies" ref={ref}>
      <div className="container">
        <div className={`case-studies__header reveal${isInView ? ' visible' : ''}`}>
          <h2 className="font-headline-md section-title">
            Proven Architecture, Real Impact
          </h2>
          <p class="font-body-lg section-subtitle">
            See how Cubegle partner architectures solve complex scale and latency issues for industry-leading organizations.
          </p>
        </div>

        <div className="case-studies__grid">
          {STUDIES.map((study, i) => (
            <article
              key={study.title}
              className={`case-studies__card card reveal${isInView ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="case-studies__card-header">
                <span className="case-studies__badge">{study.category}</span>
                <span className="case-studies__client">{study.client}</span>
              </div>
              
              <h3 className="font-headline-sm case-studies__card-title">
                {study.title}
              </h3>
              
              <p className="font-body-md case-studies__card-summary">
                {study.summary}
              </p>

              <div className="case-studies__metrics">
                <table className="case-studies__table">
                  <thead>
                    <tr>
                      <th className="font-label-caps">Metric Type</th>
                      <th className="font-label-caps">Recorded Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    {study.stats.map((stat, idx) => (
                      <tr key={idx}>
                        <td className="case-studies__metric-label">{stat.label}</td>
                        <td className="case-studies__metric-value">{stat.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="case-studies__cta-wrapper">
                <a href={study.link} className="case-studies__cta-link" id={`case-study-cta-${i}`}>
                  <span>Read Full Technical Report</span>
                  <span className="material-symbols-outlined case-studies__cta-icon" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
