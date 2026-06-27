export const SERVICES_DATA = [
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
    realizedCaseStudies: [
      { label: 'Healthcare Mesh Integration', link: '#/case-studies/healthcare-data' },
      { label: 'Real-Time Ingestion', link: '#/case-studies/retail-inventory' },
      { label: 'IoT Edge Sensor Telemetry', link: '#/case-studies/predictive-maintenance' }
    ],
    techStack: ['Apache Kafka', 'Apache Spark', 'Airflow', 'dbt', 'Python', 'AWS Lambda', 'Flink'],
    timeline: [
      { title: 'Source Audit & Profiling', description: 'We scan tables, database write-logs, and API endpoints to catalog schema structures, volumetrics, and data skew parameters.' },
      { title: 'Architecture Drafting', description: 'We outline schema evolution guidelines, ingestion formats (Parquet/Avro), partitions, and orchestration sequences.' },
      { title: 'Transformation & Quality Ingestion', description: 'We write data cleaning and deduplication logic, establishing checkpoint validators to quarantine corrupted payloads automatically.' },
      { title: 'Monitoring & Deploy', description: 'We provision Infrastructure as Code templates and configure pipeline alert integrations using Prometheus and Slack triggers.' }
    ]
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
    realizedCaseStudies: [
      { label: 'Multi-Region Snowflake Data Mesh', link: '#/case-studies/healthcare-data' },
      { label: 'Near-Real-Time Analytics Core', link: '#/case-studies/retail-inventory' },
      { label: 'Flink Microsecond Anomaly Cache', link: '#/case-studies/fintech-fraud' }
    ],
    techStack: ['Snowflake', 'Google BigQuery', 'AWS Redshift', 'dbt (Data Build Tool)', 'Azure Synapse', 'Star Schema'],
    timeline: [
      { title: 'Business Process Mapping', description: 'We interview stakeholders to establish key metrics, grains of measurement, and dimension attributes (Customers, Stores, Dates).' },
      { title: 'Logical & Physical Schema Design', description: 'We structure fact and dimension models, defining surrogate keys, partition patterns, and indexing strategies.' },
      { title: 'DBT Pipeline Setup', description: 'We write incremental dbt models, write schema assertions, configure documentation, and establish historical snapshots.' },
      { title: 'RBAC & Performance Auditing', description: 'We configure row/column-level security models, setup query clusters, and configure warehouse auto-suspend policies.' }
    ]
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
    realizedCaseStudies: [
      { label: 'Supply Chain Sync Dashboard', link: '#/case-studies/retail-inventory' },
      { label: 'Geospatial Transit Monitor', link: '#/case-studies/smart-city' },
      { label: 'HIPAA Analytics Portal', link: '#/case-studies/healthcare-data' }
    ],
    techStack: ['Microsoft Power BI', 'DAX / M Query', 'Tableau', 'Looker Studio', 'SQL Server', 'dbt Semantic Layer'],
    timeline: [
      { title: 'Metric Alignment', description: 'We outline corporate KPI structures and align data definitions across departments to ensure metric consistency.' },
      { title: 'Semantic Modeling', description: 'We design semantic layers in Power BI, writing optimized DAX formulas and preventing slow query folding parameters.' },
      { title: 'UI Wireframing & UX', description: 'We build wireframe mockups to structure screen space, color pallets, and filtering configurations before actual publishing.' },
      { title: 'RLS Auditing & Rollout', description: 'We configure Active Directory role groups, establish Row-Level Security rules, and configure incremental workspaces.' }
    ]
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
    realizedCaseStudies: [
      { label: 'Agentic AI Customer Support', link: '#/case-studies/ai-support' },
      { label: 'IoT Predictive Health Scores', link: '#/case-studies/predictive-maintenance' },
      { label: 'Real-Time Transactional Fraud Anomaly', link: '#/case-studies/fintech-fraud' }
    ],
    techStack: ['PyTorch', 'Qdrant Vector DB', 'scikit-learn', 'MLflow', 'FastAPI', 'HuggingFace'],
    timeline: [
      { title: 'Data Featurization', description: 'We design historical features and setup offline/online feature store queries (Redis/Feast) to prevent data leakage.' },
      { title: 'Model Training & Register', description: 'We tune hyperparameters and log training runs using MLflow, verifying precision/recall boundaries against baseline sets.' },
      { title: 'Endpoint Deployment', description: 'We build containerized inference APIs, utilizing caching mechanisms to resolve batch predictions in <50ms.' },
      { title: 'Drift Observation', description: 'We monitor target scores against actual transaction inputs, triggering automated retraining scripts when deviation thresholds are met.' }
    ]
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud',
    short: 'Fast, reliable cloud infrastructure & automation.',
    long: 'We modernize your deployment and release lifecycle with automated CI/CD, monitoring, containerization, and scalable cloud architecture.',
    icon: 'cloud_done',
    bullets: [
      'CI/CD pipelines (GitHub Actions / Azure DevOps / Jenkins)',
      'Docker & Kubernetes',
      'Monitoring & observability',
      'Infrastructure as Code (Terraform)',
      'Cloud cost optimization',
    ],
    realizedCaseStudies: [
      { label: 'Kubernetes Multi-Sensor Ingestion', link: '#/case-studies/smart-city' },
      { label: 'Microsecond Scala/Flink Deployment', link: '#/case-studies/fintech-fraud' },
      { label: 'Automated EHR Kafka Pipeline', link: '#/case-studies/healthcare-data' }
    ],
    techStack: ['Terraform', 'Kubernetes (EKS/AKS)', 'Docker', 'GitHub Actions', 'Prometheus / Grafana', 'AWS / Azure'],
    timeline: [
      { title: 'Infrastructure Declarations', description: 'We write Terraform code matching your cloud topology, creating subnets, databases, clusters, and access boundaries cleanly.' },
      { title: 'Containerization', description: 'We containerize your data applications, creating multi-stage Docker images to reduce deployment sizing profiles.' },
      { title: 'Pipeline Automation', description: 'We write GitHub actions to compile code, run test scripts, build images, and roll out changes using blue-green strategies.' },
      { title: 'Observability Configuration', description: 'We configure dashboards and configure automated alerting rules to monitor CPU, memory load, and transaction queue latency.' }
    ]
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
    realizedCaseStudies: [
      { label: 'Agentic AI Support Portal', link: '#/case-studies/ai-support' },
      { label: 'Geospatial Transit App', link: '#/case-studies/smart-city' },
      { label: 'Interactive Analytics Dashboard', link: '#/case-studies/healthcare-data' }
    ],
    techStack: ['React / Next.js', 'Node.js', 'FastAPI (Python)', 'PostgreSQL', 'Mapbox API', 'TailwindCSS'],
    timeline: [
      { title: 'UX Mapping & Prototyping', description: 'We outline screen mockups, mapping out main data tables and user interactions to define interface layouts.' },
      { title: 'DB Schema Design & API Development', description: 'We build relational schemas, deploy migration layers, and write secure API endpoints with integrated testing.' },
      { title: 'Frontend Engineering', description: 'We code the application UI in React, configuring state stores and checking that pages render under 1.5 seconds.' },
      { title: 'Launch & Analytics Sync', description: 'We deploy the service to cloud instances, configuring user telemetry tracking to review performance metrics.' }
    ]
  }
];
