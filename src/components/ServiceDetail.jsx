import { useEffect } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import './ServiceDetail.css';

// ── SVG Diagram Components ──

function DataEngineeringDiagram() {
  return (
    <svg viewBox="0 0 400 240" fill="none" className="service-diagram__svg" aria-label="Data Engineering Diagram">
      <defs>
        <linearGradient id="deGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--secondary)" />
          <stop offset="50%" stopColor="var(--data-teal)" />
          <stop offset="100%" stopColor="var(--primary-container)" />
        </linearGradient>
        <pattern id="diagGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14, 30, 91, 0.03)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagGrid)" rx="16" />

      {/* Nodes (Left - Sources) */}
      <g className="diagram-node">
        <rect x="20" y="30" width="80" height="36" rx="6" fill="rgba(14, 30, 91, 0.05)" stroke="var(--primary)" strokeWidth="1" />
        <text x="60" y="52" textAnchor="middle" fill="var(--primary)" fontSize="10" fontWeight="600">APIs & Logs</text>
      </g>
      <g className="diagram-node">
        <rect x="20" y="100" width="80" height="36" rx="6" fill="rgba(14, 30, 91, 0.05)" stroke="var(--primary)" strokeWidth="1" />
        <text x="60" y="122" textAnchor="middle" fill="var(--primary)" fontSize="10" fontWeight="600">Databases</text>
      </g>
      <g className="diagram-node">
        <rect x="20" y="170" width="80" height="36" rx="6" fill="rgba(14, 30, 91, 0.05)" stroke="var(--primary)" strokeWidth="1" />
        <text x="60" y="192" textAnchor="middle" fill="var(--primary)" fontSize="10" fontWeight="600">Files / S3</text>
      </g>

      {/* Central Orchestrator & Processing Hub */}
      <g className="diagram-node">
        <rect x="160" y="90" width="80" height="56" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="var(--secondary)" strokeWidth="1.5" />
        <text x="200" y="115" textAnchor="middle" fill="var(--primary)" fontSize="11" fontWeight="700">ETL / Kafka</text>
        <text x="200" y="132" textAnchor="middle" fill="var(--secondary)" fontSize="9" fontWeight="600">Orchestrator</text>
      </g>

      {/* Nodes (Right - Destinations) */}
      <g className="diagram-node">
        <rect x="300" y="50" width="80" height="40" rx="6" fill="rgba(0, 208, 132, 0.05)" stroke="var(--data-teal)" strokeWidth="1.5" />
        <text x="340" y="74" textAnchor="middle" fill="var(--primary)" fontSize="10" fontWeight="600">Data Warehouse</text>
      </g>
      <g className="diagram-node">
        <rect x="300" y="140" width="80" height="40" rx="6" fill="rgba(0, 208, 132, 0.05)" stroke="var(--data-teal)" strokeWidth="1.5" />
        <text x="340" y="164" textAnchor="middle" fill="var(--primary)" fontSize="10" fontWeight="600">Data Lake</text>
      </g>

      {/* Connecting Flows */}
      <path d="M 100 48 L 160 118" stroke="url(#deGrad)" strokeWidth="1.5" strokeDasharray="4 4" className="flow-path-anim" />
      <path d="M 100 118 L 160 118" stroke="url(#deGrad)" strokeWidth="1.5" className="flow-path-anim" />
      <path d="M 100 188 L 160 118" stroke="url(#deGrad)" strokeWidth="1.5" strokeDasharray="4 4" className="flow-path-anim" />

      <path d="M 240 118 L 300 70" stroke="url(#deGrad)" strokeWidth="1.5" className="flow-path-anim" />
      <path d="M 240 118 L 300 160" stroke="url(#deGrad)" strokeWidth="1.5" className="flow-path-anim" />
    </svg>
  );
}

function DataWarehousingDiagram() {
  return (
    <svg viewBox="0 0 400 240" fill="none" className="service-diagram__svg" aria-label="Data Warehouse Diagram">
      <defs>
        <pattern id="diagGrid2" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14, 30, 91, 0.03)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagGrid2)" rx="16" />

      {/* Dimension Tables */}
      <g className="diagram-node-dim">
        <rect x="30" y="30" width="90" height="32" rx="4" fill="rgba(14, 30, 91, 0.04)" stroke="var(--primary)" strokeWidth="1" />
        <text x="75" y="49" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="600">DIM_CUSTOMER</text>
      </g>
      <g className="diagram-node-dim">
        <rect x="280" y="30" width="90" height="32" rx="4" fill="rgba(14, 30, 91, 0.04)" stroke="var(--primary)" strokeWidth="1" />
        <text x="325" y="49" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="600">DIM_PRODUCT</text>
      </g>
      <g className="diagram-node-dim">
        <rect x="30" y="178" width="90" height="32" rx="4" fill="rgba(14, 30, 91, 0.04)" stroke="var(--primary)" strokeWidth="1" />
        <text x="75" y="197" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="600">DIM_DATE</text>
      </g>
      <g className="diagram-node-dim">
        <rect x="280" y="178" width="90" height="32" rx="4" fill="rgba(14, 30, 91, 0.04)" stroke="var(--primary)" strokeWidth="1" />
        <text x="325" y="197" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="600">DIM_STORE</text>
      </g>

      {/* Central Fact Table */}
      <g className="diagram-node-fact">
        <rect x="150" y="90" width="100" height="60" rx="8" fill="rgba(14, 30, 91, 0.08)" stroke="var(--primary)" strokeWidth="2" />
        <rect x="150" y="90" width="100" height="20" rx="8" fill="var(--primary)" />
        <text x="200" y="104" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">FACT_SALES</text>
        <text x="200" y="126" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="600">Keys & Metrics</text>
        <text x="200" y="140" textAnchor="middle" fill="var(--secondary)" fontSize="8" fontWeight="600">Snowflake / BQ</text>
      </g>

      {/* Relations */}
      <line x1="120" y1="46" x2="160" y2="90" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="3 3" className="diagram-line-pulse" />
      <line x1="280" y1="46" x2="240" y2="90" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="3 3" className="diagram-line-pulse" />
      <line x1="120" y1="194" x2="160" y2="140" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="3 3" className="diagram-line-pulse" />
      <line x1="280" y1="194" x2="240" y2="140" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="3 3" className="diagram-line-pulse" />
    </svg>
  );
}

function BIDashboardsDiagram() {
  return (
    <svg viewBox="0 0 400 240" fill="none" className="service-diagram__svg" aria-label="BI Dashboards Diagram">
      <defs>
        <pattern id="diagGrid3" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14, 30, 91, 0.03)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagGrid3)" rx="16" />

      {/* Dashboard frame */}
      <rect x="40" y="20" width="320" height="200" rx="10" fill="#ffffff" stroke="var(--primary)" strokeWidth="1.5" />
      {/* Header bar */}
      <path d="M 40 30 C 40 25 45 20 50 20 L 350 20 C 355 20 360 25 360 30 L 360 45 L 40 45 Z" fill="rgba(14, 30, 91, 0.05)" />
      <circle cx="60" cy="32" r="4" fill="#ff5f56" />
      <circle cx="72" cy="32" r="4" fill="#ffbd2e" />
      <circle cx="84" cy="32" r="4" fill="#27c93f" />
      <text x="200" y="36" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="600">Enterprise BI Portal</text>

      {/* Grid dashboard items */}
      {/* KPI Cards */}
      <rect x="56" y="60" width="80" height="46" rx="6" fill="rgba(14, 30, 91, 0.02)" stroke="var(--primary)" strokeOpacity="0.1" strokeWidth="1" />
      <text x="66" y="74" fill="var(--primary)" fillOpacity="0.6" fontSize="8" fontWeight="600">REVENUE</text>
      <text x="66" y="94" fill="var(--primary)" fontSize="14" fontWeight="700">$1.45M</text>

      <rect x="148" y="60" width="80" height="46" rx="6" fill="rgba(14, 30, 91, 0.02)" stroke="var(--primary)" strokeOpacity="0.1" strokeWidth="1" />
      <text x="158" y="74" fill="var(--primary)" fill-opacity="0.6" fontSize="8" fontWeight="600">ROI METRIC</text>
      <text x="158" y="94" fill="var(--secondary)" fontSize="14" fontWeight="700">4.5x</text>

      <rect x="240" y="60" width="104" height="46" rx="6" fill="rgba(14, 30, 91, 0.02)" stroke="var(--primary)" stroke-opacity="0.1" stroke-width="1" />
      <text x="250" y="74" fill="var(--primary)" fill-opacity="0.6" fontSize="8" fontWeight="600">PIPELINE UPTIME</text>
      <text x="250" y="94" fill="var(--data-teal)" fontSize="14" fontWeight="700">99.9%</text>

      {/* Main visualization - Line Chart */}
      <rect x="56" y="120" width="288" height="84" rx="6" fill="rgba(14, 30, 91, 0.02)" stroke="var(--primary)" strokeOpacity="0.1" strokeWidth="1" />
      <path d="M 70 184 L 110 160 L 150 170 L 190 140 L 230 155 L 270 135 L 310 150" fill="none" stroke="var(--primary)" strokeWidth="2.5" className="chart-line-anim" />
      <path d="M 70 184 L 110 160 L 150 170 L 190 140 L 230 155 L 270 135 L 310 150 L 310 195 L 70 195 Z" fill="rgba(14, 30, 91, 0.04)" />
    </svg>
  );
}

function AIMLEngineeringDiagram() {
  return (
    <svg viewBox="0 0 400 240" fill="none" className="service-diagram__svg" aria-label="AI/ML Diagram">
      <defs>
        <pattern id="diagGrid4" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14, 30, 91, 0.03)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagGrid4)" rx="16" />

      {/* Neural Network Nodes */}
      {/* Left Layer */}
      <circle cx="60" cy="60" r="12" fill="rgba(14, 30, 91, 0.1)" stroke="var(--primary)" strokeWidth="1.5" />
      <circle cx="60" cy="120" r="12" fill="rgba(14, 30, 91, 0.1)" stroke="var(--primary)" strokeWidth="1.5" />
      <circle cx="60" cy="180" r="12" fill="rgba(14, 30, 91, 0.1)" stroke="var(--primary)" strokeWidth="1.5" />

      {/* Hidden Layer */}
      <circle cx="180" cy="50" r="12" fill="rgba(245, 158, 11, 0.1)" stroke="var(--secondary)" strokeWidth="1.5" />
      <circle cx="180" cy="100" r="12" fill="rgba(245, 158, 11, 0.1)" stroke="var(--secondary)" strokeWidth="1.5" />
      <circle cx="180" cy="150" r="12" fill="rgba(245, 158, 11, 0.1)" stroke="var(--secondary)" strokeWidth="1.5" />
      <circle cx="180" cy="200" r="12" fill="rgba(245, 158, 11, 0.1)" stroke="var(--secondary)" strokeWidth="1.5" />

      {/* Output Layer */}
      <circle cx="300" cy="90" r="14" fill="rgba(0, 208, 132, 0.1)" stroke="var(--data-teal)" strokeWidth="2" />
      <circle cx="300" cy="160" r="14" fill="rgba(0, 208, 132, 0.1)" stroke="var(--data-teal)" strokeWidth="2" />

      {/* Dynamic line connections */}
      <line x1="72" y1="60" x2="168" y2="50" stroke="rgba(14,30,91,0.2)" strokeWidth="1" />
      <line x1="72" y1="60" x2="168" y2="100" stroke="rgba(14,30,91,0.2)" strokeWidth="1" />
      <line x1="72" y1="120" x2="168" y2="100" stroke="rgba(14,30,91,0.2)" strokeWidth="1" />
      <line x1="72" y1="120" x2="168" y2="150" stroke="rgba(14,30,91,0.2)" strokeWidth="1" />
      <line x1="72" y1="180" x2="168" y2="150" stroke="rgba(14,30,91,0.2)" strokeWidth="1" />
      <line x1="72" y1="180" x2="168" y2="200" stroke="rgba(14,30,91,0.2)" strokeWidth="1" />

      <line x1="192" y1="50" x2="288" y2="90" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5" className="diagram-line-pulse" />
      <line x1="192" y1="100" x2="288" y2="90" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5" />
      <line x1="192" y1="100" x2="288" y2="160" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5" />
      <line x1="192" y1="150" x2="288" y2="160" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5" className="diagram-line-pulse" />
      <line x1="192" y1="200" x2="288" y2="160" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5" />

      {/* Labels */}
      <text x="60" y="124" textAnchor="middle" fill="var(--primary)" fontSize="8" fontWeight="700">Data</text>
      <text x="180" y="104" textAnchor="middle" fill="var(--primary)" fontSize="8" fontWeight="700">Model</text>
      <text x="300" y="94" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="700">Insights</text>
      <text x="300" y="164" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="700">Scores</text>
    </svg>
  );
}

function DevOpsCloudDiagram() {
  return (
    <svg viewBox="0 0 400 240" fill="none" className="service-diagram__svg" aria-label="DevOps Pipeline Diagram">
      <defs>
        <pattern id="diagGrid5" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14, 30, 91, 0.03)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagGrid5)" rx="16" />

      {/* CI/CD Loop */}
      <path
        d="M 120 120 C 120 70, 180 70, 200 120 C 220 170, 280 170, 280 120 C 280 70, 220 70, 200 120 C 180 170, 120 170, 120 120 Z"
        stroke="var(--outline-variant)"
        strokeOpacity="0.3"
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      {/* Animated progress over the path */}
      <path
        d="M 120 120 C 120 70, 180 70, 200 120 C 220 170, 280 170, 280 120 C 280 70, 220 70, 200 120 C 180 170, 120 170, 120 120 Z"
        stroke="var(--secondary)"
        strokeWidth="4"
        strokeDasharray="60 300"
        strokeLinecap="round"
        className="devops-path-anim"
      />

      {/* Stage labels along the loop */}
      <g className="stage-group">
        <circle cx="120" cy="120" r="5" fill="var(--primary)" />
        <text x="120" y="105" textAnchor="middle" fill="var(--primary)" fontSize="8" fontWeight="700">BUILD</text>
      </g>
      <g className="stage-group">
        <circle cx="160" cy="85" r="5" fill="var(--primary)" />
        <text x="160" y="75" textAnchor="middle" fill="var(--primary)" fontSize="8" fontWeight="700">TEST</text>
      </g>
      <g className="stage-group">
        <circle cx="240" cy="155" r="5" fill="var(--primary)" />
        <text x="240" y="175" textAnchor="middle" fill="var(--primary)" fontSize="8" fontWeight="700">DEPLOY</text>
      </g>
      <g className="stage-group">
        <circle cx="280" cy="120" r="5" fill="var(--primary)" />
        <text x="280" y="105" textAnchor="middle" fill="var(--primary)" fontSize="8" fontWeight="700">MONITOR</text>
      </g>

      <text x="200" y="210" textAnchor="middle" fill="var(--primary)" fillOpacity="0.6" fontSize="9" fontWeight="600">CI/CD Automated Lifecycle</text>
    </svg>
  );
}

function ProductDevelopmentDiagram() {
  return (
    <svg viewBox="0 0 400 240" fill="none" className="service-diagram__svg" aria-label="Product Development Diagram">
      <defs>
        <pattern id="diagGrid6" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14, 30, 91, 0.03)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagGrid6)" rx="16" />

      {/* Step progression */}
      {/* Step 1 */}
      <g className="diagram-step">
        <circle cx="60" cy="120" r="20" fill="rgba(14, 30, 91, 0.05)" stroke="var(--primary)" strokeWidth="1.5" />
        <text x="60" y="124" textAnchor="middle" fill="var(--primary)" fontSize="12" fontWeight="700">01</text>
        <text x="60" y="158" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="600">Wireframes</text>
      </g>

      {/* Arrow 1 */}
      <path d="M 90 120 L 120 120" stroke="var(--primary)" strokeOpacity="0.2" strokeWidth="2" />

      {/* Step 2 */}
      <g className="diagram-step">
        <circle cx="160" cy="120" r="20" fill="rgba(245, 158, 11, 0.1)" stroke="var(--secondary)" strokeWidth="1.5" />
        <text x="160" y="124" textAnchor="middle" fill="var(--primary)" fontSize="12" fontWeight="700">02</text>
        <text x="160" y="158" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="600">Full-Stack</text>
      </g>

      {/* Arrow 2 */}
      <path d="M 190 120 L 220 120" stroke="var(--primary)" strokeOpacity="0.2" strokeWidth="2" />

      {/* Step 3 */}
      <g className="diagram-step">
        <circle cx="260" cy="120" r="20" fill="rgba(0, 208, 132, 0.05)" stroke="var(--data-teal)" stroke-width="1.5" />
        <text x="260" y="124" textAnchor="middle" fill="var(--primary)" fontSize="12" fontWeight="700">03</text>
        <text x="260" y="158" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="600">APIs & Apps</text>
      </g>

      {/* Arrow 3 */}
      <path d="M 290 120 L 320 120" stroke="var(--primary)" strokeOpacity="0.2" strokeWidth="2" />

      {/* Step 4 */}
      <g className="diagram-step">
        <circle cx="340" cy="120" r="20" fill="rgba(14, 30, 91, 0.08)" stroke="var(--primary)" strokeWidth="2" />
        <text x="340" y="124" textAnchor="middle" fill="var(--primary)" fontSize="12" fontWeight="700">✓</text>
        <text x="340" y="158" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="700">Launch</text>
      </g>

      {/* Loopback line */}
      <path d="M 340 100 C 340 50, 60 50, 60 100" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="4 4" className="flow-path-anim" />
      <text x="200" y="70" textAnchor="middle" fill="var(--secondary)" fontSize="9" fontWeight="600">Iterative Feedback Loop</text>
    </svg>
  );
}

const DIAGRAMS = {
  'data-engineering': <DataEngineeringDiagram />,
  'data-warehousing': <DataWarehousingDiagram />,
  'bi-dashboards': <BIDashboardsDiagram />,
  'ai-ml': <AIMLEngineeringDiagram />,
  'devops-cloud': <DevOpsCloudDiagram />,
  'product-development': <ProductDevelopmentDiagram />
};

export default function ServiceDetail({ serviceId }) {
  const service = SERVICES_DATA.find((s) => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div style={{ padding: '160px 0', textAlign: 'center' }}>
        <h2 className="font-headline-md">Service Not Found</h2>
        <a href="#/" className="btn btn-outline" style={{ marginTop: '20px' }}>Back to Home</a>
      </div>
    );
  }

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="services-detail-hero">
        <div className="container">
          <span className="hero-eyebrow">Services & Solutions</span>
          <h1 className="hero-title">{service.title}</h1>
          <p className="hero-subtitle">{service.subtitle || service.short}</p>
        </div>
      </section>

      {/* ── Core Content Section ── */}
      <section className="bg-alt" style={{ padding: 'var(--space-16) 0' }}>
        <div className="container grid-2">
          {/* Capabilities & Description */}
          <div>
            <h2 className="font-headline-md" style={{ marginBottom: 'var(--space-4)' }}>Our Capabilities</h2>
            <ul className="services__bullets-list" style={{ marginBottom: 'var(--space-6)' }}>
              {service.bullets.map((bullet, idx) => (
                <li key={idx} className="services__bullet-item font-body-md" style={{ marginBottom: 'var(--space-2)' }}>
                  <span className="material-symbols-outlined services__bullet-icon">check_circle</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <h3 className="font-headline-sm" style={{ marginBottom: 'var(--space-3)', color: 'var(--primary)' }}>
              Professional Deliverables
            </h3>
            <p className="font-body-md" style={{ marginBottom: 'var(--space-4)' }}>
              {service.long}
            </p>
            <p className="font-body-md">
              By working with our principal engineers, your organization gains secure configurations, automated performance validations, and cost-optimized operations mapped exactly to business goals.
            </p>
          </div>

          {/* Diagram & Sidebar */}
          <div>
            {/* SVG Ingestion Diagram */}
            <div className="services__diagram-viewer" style={{ marginBottom: 'var(--space-6)' }}>
              <div className="services__diagram-header">Architecture & Process Workflow</div>
              <div className="services__diagram-body">
                {DIAGRAMS[service.id]}
              </div>
            </div>

            {/* Related Case Studies Card */}
            {service.realizedCaseStudies && service.realizedCaseStudies.length > 0 && (
              <div className="overview-card" style={{ marginBottom: 'var(--space-6)' }}>
                <h3 className="font-headline-sm" style={{ marginBottom: 'var(--space-4)' }}>Realized Implementations</h3>
                <div className="overview-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {service.realizedCaseStudies.map((study, idx) => (
                    <div key={idx} className="overview-item">
                      <span className="overview-lbl">{study.label}</span>
                      <a href={study.link} style={{ fontSize: '14.5px', fontWeight: '600', color: 'var(--secondary)', textDecoration: 'none' }}>
                        Read Case Study &rarr;
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div>
              <h4 className="font-label-caps" style={{ color: 'var(--primary)', marginBottom: 'var(--space-2)' }}>Technology Stack</h4>
              <div className="badge-row">
                {service.techStack.map((tech, idx) => (
                  <span key={idx} className="badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Methodology Timeline ── */}
      <section style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Operational Lifecycle</h2>
            <p className="font-body-lg">How we design, develop, test, and continuously deploy robust platform solutions.</p>
          </div>

          <div className="timeline" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {service.timeline.map((step, idx) => (
              <div key={idx} className="timeline-block">
                <div className="timeline-dot">{idx + 1}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title font-headline-sm">{step.title}</h3>
                  <p className="font-body-md">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

