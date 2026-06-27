import { useState, useRef } from 'react';
import { useInView } from './useInView';
import './Services.css';

// ── SVG Diagram Components ──

function DataEngineeringDiagram() {
  return (
    <svg viewBox="0 0 400 240" fill="none" className="service-diagram__svg" aria-label="Data Engineering Diagram">
      <defs>
        <linearGradient id="deGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--secondary)" />
          <stop offset="50%" stopColor="var(--data-teal)" />
          <stop offset="100%" stopColor="var(--inverse-primary)" />
        </linearGradient>
      </defs>
      {/* Grid background */}
      <pattern id="diagGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14, 30, 91, 0.03)" strokeWidth="1" />
      </pattern>
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
        <rect x="30" y="30" width="90" height="32" rx="4" fill="rgba(14, 30, 91, 0.04)" stroke="var(--outline-variant)" strokeWidth="1" />
        <text x="75" y="50" textAnchor="middle" fill="var(--on-surface-variant)" fontSize="9" fontWeight="600">DIM_CUSTOMER</text>
      </g>
      <g className="diagram-node-dim">
        <rect x="280" y="30" width="90" height="32" rx="4" fill="rgba(14, 30, 91, 0.04)" stroke="var(--outline-variant)" strokeWidth="1" />
        <text x="325" y="50" textAnchor="middle" fill="var(--on-surface-variant)" fontSize="9" fontWeight="600">DIM_PRODUCT</text>
      </g>
      <g className="diagram-node-dim">
        <rect x="30" y="178" width="90" height="32" rx="4" fill="rgba(14, 30, 91, 0.04)" stroke="var(--outline-variant)" strokeWidth="1" />
        <text x="75" y="198" textAnchor="middle" fill="var(--on-surface-variant)" fontSize="9" fontWeight="600">DIM_DATE</text>
      </g>
      <g className="diagram-node-dim">
        <rect x="280" y="178" width="90" height="32" rx="4" fill="rgba(14, 30, 91, 0.04)" stroke="var(--outline-variant)" strokeWidth="1" />
        <text x="325" y="198" textAnchor="middle" fill="var(--on-surface-variant)" fontSize="9" fontWeight="600">DIM_STORE</text>
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
      <rect x="40" y="20" width="320" height="200" rx="10" fill="#ffffff" stroke="var(--outline-variant)" strokeWidth="1.5" />
      {/* Header bar */}
      <path d="M 40 30 C 40 25 45 20 50 20 L 350 20 C 355 20 360 25 360 30 L 360 45 L 40 45 Z" fill="rgba(14, 30, 91, 0.05)" />
      <circle cx="60" cy="32" r="4" fill="#ff5f56" />
      <circle cx="72" cy="32" r="4" fill="#ffbd2e" />
      <circle cx="84" cy="32" r="4" fill="#27c93f" />
      <text x="200" y="36" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="600">Enterprise BI Portal</text>

      {/* Grid dashboard items */}
      {/* KPI Cards */}
      <rect x="56" y="60" width="80" height="46" rx="6" fill="rgba(14, 30, 91, 0.02)" stroke="var(--border-subtle)" strokeWidth="1" />
      <text x="66" y="74" fill="var(--outline)" fontSize="8" fontWeight="600">REVENUE</text>
      <text x="66" y="94" fill="var(--primary)" fontSize="14" fontWeight="700">$1.45M</text>

      <rect x="148" y="60" width="80" height="46" rx="6" fill="rgba(14, 30, 91, 0.02)" stroke="var(--border-subtle)" strokeWidth="1" />
      <text x="158" y="74" fill="var(--outline)" fontSize="8" fontWeight="600">ROI METRIC</text>
      <text x="158" y="94" fill="var(--secondary)" fontSize="14" fontWeight="700">4.5x</text>

      <rect x="240" y="60" width="104" height="46" rx="6" fill="rgba(14, 30, 91, 0.02)" stroke="var(--border-subtle)" strokeWidth="1" />
      <text x="250" y="74" fill="var(--outline)" fontSize="8" fontWeight="600">PIPELINE UPTIME</text>
      <text x="250" y="94" fill="var(--data-teal)" fontSize="14" fontWeight="700">99.9%</text>

      {/* Main visualization - Line Chart */}
      <rect x="56" y="120" width="288" height="84" rx="6" fill="rgba(14, 30, 91, 0.02)" stroke="var(--border-subtle)" strokeWidth="1" />
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

      <text x="200" y="210" textAnchor="middle" fill="var(--outline)" fontSize="9" fontWeight="600">CI/CD Automated Lifecycle</text>
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
        <text x="60" y="158" textAnchor="middle" fill="var(--on-surface-variant)" fontSize="9" fontWeight="600">Wireframes</text>
      </g>

      {/* Arrow 1 */}
      <path d="M 90 120 L 120 120" stroke="var(--outline-variant)" strokeWidth="2" />

      {/* Step 2 */}
      <g className="diagram-step">
        <circle cx="160" cy="120" r="20" fill="rgba(245, 158, 11, 0.1)" stroke="var(--secondary)" strokeWidth="1.5" />
        <text x="160" y="124" textAnchor="middle" fill="var(--primary)" fontSize="12" fontWeight="700">02</text>
        <text x="160" y="158" textAnchor="middle" fill="var(--on-surface-variant)" fontSize="9" fontWeight="600">Full-Stack</text>
      </g>

      {/* Arrow 2 */}
      <path d="M 190 120 L 220 120" stroke="var(--outline-variant)" strokeWidth="2" />

      {/* Step 3 */}
      <g className="diagram-step">
        <circle cx="260" cy="120" r="20" fill="rgba(0, 208, 132, 0.05)" stroke="var(--data-teal)" strokeWidth="1.5" />
        <text x="260" y="124" textAnchor="middle" fill="var(--primary)" fontSize="12" fontWeight="700">03</text>
        <text x="260" y="158" textAnchor="middle" fill="var(--on-surface-variant)" fontSize="9" fontWeight="600">APIs & Apps</text>
      </g>

      {/* Arrow 3 */}
      <path d="M 290 120 L 320 120" stroke="var(--outline-variant)" strokeWidth="2" />

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

// ── Services Configurations ──

const SERVICES_DATA = [
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    short: 'High-quality, reliable data pipelines powering your entire analytics ecosystem.',
    long: 'We design and build robust ETL/ELT architectures that ensure your data flows seamlessly from source systems into analytical destinations. Our approach prioritizes reliability, cost-efficiency, and fault tolerance.',
    icon: 'hub',
    bullets: [
      'API / DB ingestion pipelines',
      'Batch + real-time pipelines',
      'Orchestration & automation',
      'Data quality & validation frameworks',
      'Metadata, lineage & monitoring',
    ],
    diagramComponent: <DataEngineeringDiagram />,
  },
  {
    id: 'data-warehousing',
    title: 'Data Warehousing',
    short: 'Modern, scalable cloud data warehouses for analytical excellence.',
    long: 'A strong warehouse is the foundation of a modern analytics stack. We build durable, well-modeled cloud data warehouses that support deep analytics, fast dashboards, and ML workloads.',
    icon: 'layers',
    bullets: [
      'Snowflake / Redshift / BigQuery / Azure SQL',
      'Star schema modeling',
      'SCDs, snapshots, data versioning',
      'Partitioning, incremental strategies',
      'DWH governance & access control',
    ],
    diagramComponent: <DataWarehousingDiagram />,
  },
  {
    id: 'bi-dashboards',
    title: 'BI Dashboards',
    short: 'Pixel-perfect dashboards that drive action and business clarity.',
    long: 'We build scalable BI semantic models and enterprise dashboards with performance-focused design. Every metric is modeled, validated, and aligned with business stakeholders.',
    icon: 'speed',
    bullets: [
      'Power BI semantic models',
      'Optimized DAX & query folding',
      'Composite models, incremental refresh',
      'RLS, governance, workspace mgmt',
      'Executive KPI dashboards',
    ],
    diagramComponent: <BIDashboardsDiagram />,
  },
  {
    id: 'ai-ml',
    title: 'AI / ML Engineering',
    short: 'Bring intelligence into your data — forecasting, NLP, scoring models, automation.',
    long: 'We help your business adopt AI responsibly and effectively — from fast MVP models to production-grade ML pipelines and automated insight systems.',
    icon: 'rocket_launch',
    bullets: [
      'Predictive scoring',
      'Forecasting models',
      'NLP & classification',
      'ML Ops & monitoring',
      'AI-powered insights (AutoInsights)',
    ],
    diagramComponent: <AIMLEngineeringDiagram />,
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud',
    short: 'Fast, reliable cloud infrastructure & automation.',
    long: 'We modernize your deployment and release lifecycle with automated CI/CD, monitoring, containerization, and scalable cloud architecture.',
    icon: 'cloud_done',
    bullets: [
      'CI/CD pipelines (GitHub / Azure DevOps / Jenkins)',
      'Docker & Kubernetes',
      'Monitoring & observability',
      'Infrastructure as Code (Terraform)',
      'Cloud cost optimization',
    ],
    diagramComponent: <DevOpsCloudDiagram />,
  },
  {
    id: 'product-development',
    title: 'Product Development',
    short: 'Build fast, iterate faster — MVPs, internal tools, data products.',
    long: 'We develop complete software products — from early wireframes to production deployment — with strong engineering standards and data-driven design.',
    icon: 'devices',
    bullets: [
      'MVP development (rapid)',
      'Full-stack engineering',
      'Internal enterprise tools',
      'Custom dashboards & data apps',
      'API development & integrations',
    ],
    diagramComponent: <ProductDevelopmentDiagram />,
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.05 });

  const activeService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section id="services" className="section services" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className={`services__header reveal${isInView ? ' visible' : ''}`}>
          <div className="services__eyebrow">
            <span className="services__eyebrow-dot" />
            <span className="font-label-caps">What We Offer</span>
          </div>
          <h2 className="font-headline-md section-title">
            End-to-End Data, AI & Cloud Engineering Services
          </h2>
          <p className="font-body-lg section-subtitle">
            Cubegle delivers enterprise-grade data platforms, BI solutions, DevOps systems, and AI innovations — built to scale, cost-optimized, and aligned with your business goals.
          </p>
        </div>

        {/* Interactive Interactive Showcases */}
        <div className="services__interactive-showcase">
          
          {/* Navigation Menu (Left/Top) */}
          <div className="services__tabs-list">
            {SERVICES_DATA.map((service) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  className={`services__tab-button ${isActive ? 'services__tab-button--active' : ''}`}
                  onClick={() => setActiveTab(service.id)}
                  aria-selected={isActive}
                  role="tab"
                >
                  <div className="services__tab-icon-wrapper">
                    <span className="material-symbols-outlined services__tab-icon">
                      {service.icon}
                    </span>
                  </div>
                  <div className="services__tab-text">
                    <h3 className="services__tab-title font-headline-sm">{service.title}</h3>
                    <p className="services__tab-desc-short font-body-md">{service.short}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Detail Panel (Right/Bottom) */}
          <div className="services__content-panel">
            <div className="services__content-details">
              <h3 className="services__content-title font-headline-md">{activeService.title}</h3>
              <p className="services__content-long font-body-lg">{activeService.long}</p>
              
              <div className="services__bullets-container">
                <h4 className="services__bullets-header font-label-caps">Capabilities</h4>
                <ul className="services__bullets-list">
                  {activeService.bullets.map((bullet, idx) => (
                    <li key={idx} className="services__bullet-item font-body-md">
                      <span className="material-symbols-outlined services__bullet-icon" aria-hidden="true">
                        check_circle
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Active Diagram Viewer */}
            <div className="services__diagram-viewer">
              <div className="services__diagram-header font-label-caps">Architecture & Workflow</div>
              <div className="services__diagram-body">
                {activeService.diagramComponent}
              </div>
            </div>

          </div>

        </div>

        {/* Section Footer / CTA */}
        <div className="services__cta-footer">
          <div className="services__cta-box">
            <div className="services__cta-text-wrapper">
              <h3 className="font-headline-sm services__cta-title">Let's Build Your Data Platform</h3>
              <p className="font-body-md services__cta-desc">
                Reach out to us for a free consultation — we'll help you understand your architecture, find your bottlenecks, and show you how to scale your systems efficiently.
              </p>
            </div>
            <a href="#contact" className="btn btn-primary btn-cta-arrow">
              Contact Us <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
