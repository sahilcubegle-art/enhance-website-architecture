export const CASE_STUDIES_DATA = [
  {
    id: 'ai-support',
    category: 'AI & Machine Learning',
    title: 'CognitiveOps: Scaling Support with Agentic AI Orchestration',
    subtitle: 'How we built and integrated a high-performance, real-time ticket triage and agentic routing mesh to deflect redundant customer support queries for a growing SaaS leader.',
    client: 'ScaleFlow Tech',
    bgImage: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1200&auto=format&fit=crop',
    meta: [
      { label: 'Client Industry', value: 'B2B SaaS' },
      { label: 'Scale Factor', value: '1.8M Monthly Tickets' },
      { label: 'Primary Stack', value: 'Qdrant, Kafka, LLMs' }
    ],
    overviewTitle: 'Project Overview',
    overviewP1: 'Our client, ScaleFlow Tech, was experiencing an exponential rise in customer support tickets following a global launch. Their human tier-1 support agents were overwhelmed by repetitive queries regarding billing cycles, password resets, and account setups, driving response times to over 4 hours.',
    overviewP2: 'Cubegle was tasked with designing a self-learning agentic triage system that could parse, validate, and autonomously resolve standard user inquiries while maintaining a human-in-the-loop fallback mechanism.',
    timeline: '12 Weeks',
    teamSize: '4 Engineers',
    technologies: ['Qdrant DB', 'Apache Kafka', 'FastAPI', 'LlamaIndex', 'OpenAI API', 'React'],
    challenges: [
      {
        title: 'Intent Ambiguity & Semantic Drift',
        description: 'Traditional keyword routing failed on complex customer messages containing multiple overlapping concerns, leading to wrong classification and loops.'
      },
      {
        title: 'PII Filtering Requirements',
        description: 'Strictest compliance laws prevented sending unredacted credit card information, addresses, or private api keys directly to external LLM endpoints.'
      }
    ],
    solutions: [
      {
        num: '01',
        title: 'Vector Embedding Triage Mesh',
        description: 'We mapped input queries into a multi-layer Qdrant vector index. Queries are first matched against high-confidence known resolutions before triggering agentic tool routes.'
      },
      {
        num: '02',
        title: 'PII Scrubbing Middleware',
        description: 'Engineered an in-memory Kafka filter using Named Entity Recognition (NER) models to dynamically anonymize customer identifiers in <10ms before routing to LLM nodes.'
      },
      {
        num: '03',
        title: 'Agentic Tool Routing Grid',
        description: 'Designed a ReAct (Reasoning and Action) loop that safely triggers internal system functions (like resetting subscription cycles or syncing tokens) under pre-approved constraints.'
      }
    ],
    architecture: {
      columns: [
        {
          title: '1. Ingestion & Validation',
          nodes: [
            { icon: 'dns', label: 'Zendesk Webhook' },
            { icon: 'filter_alt', label: 'PII Scrubbing Filter' },
            { icon: 'sync_alt', label: 'Kafka Ingestion Queue' }
          ]
        },
        {
          title: '2. Processing & Memory',
          nodes: [
            { icon: 'hub', label: 'Semantic Triage Router', highlight: true },
            { icon: 'memory', label: 'Qdrant Vector Index' },
            { icon: 'flash_on', label: 'Redis Cache Store' }
          ]
        },
        {
          title: '3. Execution & Action',
          nodes: [
            { icon: 'smart_toy', label: 'Agent Tool Invoker' },
            { icon: 'api', label: 'Stripe & Auth APIs' },
            { icon: 'support_agent', label: 'Zendesk Fallback' }
          ]
        }
      ]
    },
    process: [
      { title: 'Weeks 1-2: Intent Profiling', description: 'Analyzed 100k historic Zendesk tickets to build vector embeddings and identify primary agent query patterns.' },
      { title: 'Weeks 3-5: Engine Core & PII Filter', description: 'Built the FastAPI semantic router and integrated the PII scrubbing service using SpaCy NER models.' },
      { title: 'Weeks 6-9: Tool Integration & Cache', description: 'Connected Stripe, SendGrid, and Okta APIs to the agent tool invoker, enabling automated action execution.' },
      { title: 'Weeks 10-12: Guardrails & Go-Live', description: 'Configured moderation filters, deployed on AWS EKS, and gradually rolled out traffic over 2 weeks.' }
    ],
    results: [
      { label: 'Deflection Rate', value: '68% Resolved' },
      { label: 'Avg. Latency', value: '<1.8s Response' },
      { label: 'Cost Reduction', value: '75% Support Savings' }
    ],
    testimonial: {
      quote: "Cubegle transformed our customer operations. Our response speeds dropped from hours to seconds overnight, and our human agents can now focus on high-value client issues rather than routine password resets.",
      author: "Sarah Jenkins",
      role: "VP of Customer Success, ScaleFlow Tech"
    },
    relatedLinks: ['healthcare-data', 'retail-inventory']
  },
  {
    id: 'healthcare-data',
    category: 'Data Platforms',
    title: 'OmniHealth: Unified Multi-Region Clinical Data Mesh',
    subtitle: 'How we engineered a federated analytics layer across hybrid EHR regions, featuring 100% automated column-level HIPAA masking and zero compliance leaks.',
    client: 'Aegis Healthcare',
    bgImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    meta: [
      { label: 'Client Industry', value: 'Healthcare Networks' },
      { label: 'Scale Factor', value: '14 Clinics Unified' },
      { label: 'Primary Stack', value: 'Snowflake, DBT, dask' }
    ],
    overviewTitle: 'Project Overview',
    overviewP1: 'Aegis Healthcare operated across multiple clinics, each storing patient records on isolated electronic health record (EHR) databases. To run operational reports or train clinical diagnostics models, data engineers had to run slow, manual exports that violated modern compliance standards.',
    overviewP2: 'We built a HIPAA-compliant clinical data mesh on Snowflake that aggregates patient records in real-time, matching patients across clinic borders using federated entity matching.',
    timeline: '16 Weeks',
    teamSize: '5 Engineers',
    technologies: ['Snowflake', 'dbt', 'AWS Glue', 'Great Expectations', 'Dask', 'Terraform'],
    challenges: [
      {
        title: 'HIPAA & Compliance Isolation',
        description: 'Exposing patient records directly violated HIPAA requirements. We needed a system that masked patient identifiers automatically based on active query roles.'
      },
      {
        title: 'EHR Schema Mismatches',
        description: 'Different clinics logged diagnoses under varying formats, making global clinical analytics queries impossible without standard mapping.'
      }
    ],
    solutions: [
      {
        num: '01',
        title: 'Federated Data Mesh',
        description: 'We structured separate clinic databases into Snowflake read-only shares, mapping schemas to a unified clinical data model.'
      },
      {
        num: '02',
        title: 'Dynamic Column Masking',
        description: 'Configured role-based access controls and masking policies on patient identifiers, hiding social numbers and names from non-clinical users.'
      },
      {
        num: '03',
        title: 'Real-Time EHR Sync',
        description: 'Built AWS Glue streaming pipelines that detect database changes and feed delta records into clinic tables under 5 minutes.'
      }
    ],
    architecture: {
      columns: [
        {
          title: '1. Clinic EHR Ingestion',
          nodes: [
            { icon: 'database', label: 'Clinic SQL Servers' },
            { icon: 'sync', label: 'AWS DMS Change Capture' },
            { icon: 'folder_zip', label: 'S3 Encrypted Parquet' }
          ]
        },
        {
          title: '2. Mesh Processing Layer',
          nodes: [
            { icon: 'shuffle', label: 'Snowflake Integration', highlight: true },
            { icon: 'settings_suggest', label: 'dbt Clinical Normalizer' },
            { icon: 'gpp_good', label: 'HIPAA Masking Policies' }
          ]
        },
        {
          title: '3. Analytics Access',
          nodes: [
            { icon: 'clinical_research', label: 'Clinical Researchers' },
            { icon: 'leaderboard', label: 'Operations Dashboards' },
            { icon: 'security', label: 'Compliance Audit Logs' }
          ]
        }
      ]
    },
    process: [
      { title: 'Weeks 1-3: Security Mapping', description: 'Mapped clinic access requirements and established HIPAA cell-level masking boundaries.' },
      { title: 'Weeks 4-8: Ingestion Design', description: 'Deployed AWS DMS tasks and configured AWS Glue streaming jobs to parse EHR logs.' },
      { title: 'Weeks 9-12: Schema Normalizer', description: 'Wrote dbt mapping models matching HL7 clinical standards and configured data validation tests.' },
      { title: 'Weeks 13-16: Audit Trail & Launch', description: 'Completed independent security audits and deployed Snowflake dynamic shares.' }
    ],
    results: [
      { label: 'Query Latency', value: '22x Acceleration' },
      { label: 'Compliance Audit', value: 'Zero Violations' },
      { label: 'Patient Sync Speed', value: '<5 Min Latency' }
    ],
    testimonial: {
      quote: "Cubegle's data mesh architecture solved a multi-year blocker for us. We can now run clinical reports securely across all our clinic locations in seconds rather than days, fully maintaining HIPAA compliance.",
      author: "Dr. Marcus Vance",
      role: "Chief Medical Information Officer, Aegis Healthcare"
    },
    relatedLinks: ['ai-support', 'smart-city']
  },
  {
    id: 'retail-inventory',
    category: 'Data Platforms',
    title: 'StockSens: Real-Time Inventory & Predictive Supply Chain',
    subtitle: 'How we migrated daily batch reporting to a sub-5-minute Kafka-to-BigQuery streaming ingestion model to dynamically optimize supply chain routing.',
    client: 'Apex Retailers',
    bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    meta: [
      { label: 'Client Industry', value: 'Global Retail' },
      { label: 'Scale Factor', value: '1,200 Stores Synced' },
      { label: 'Primary Stack', value: 'Kafka, BigQuery, dbt' }
    ],
    overviewTitle: 'Project Overview',
    overviewP1: 'Apex Retailers relied on overnight batch uploads to calculate store stock levels. This delay caused frequent checkout errors, online order cancellations, and shipping mismatches due to stock differences.',
    overviewP2: 'We built StockSens: a real-time event-streaming inventory optimization platform that streams checkout records and warehouse shipments directly into Google BigQuery to keep inventory levels synchronized under 5 minutes.',
    timeline: '14 Weeks',
    teamSize: '4 Engineers',
    technologies: ['Apache Kafka', 'Google BigQuery', 'dbt Cloud', 'Kubernetes', 'Python', 'Airflow'],
    challenges: [
      {
        title: 'High Transaction Spikes',
        description: 'During promotions or holiday seasons, checkout transactions spiked to 10,000 events per second, causing database lag and data loss.'
      },
      {
        title: 'Out-of-Order Transactions',
        description: 'Network drops caused checkout events to arrive out of order, leading to incorrect subtraction and addition of store stock counts.'
      }
    ],
    solutions: [
      {
        num: '01',
        title: 'Kafka Event Backbone',
        description: 'Deployed a multi-broker Apache Kafka cluster on Google Cloud GKE to buffer checkout transactions and ensure delivery guarantees.'
      },
      {
        num: '02',
        title: 'Transactional Event Sync',
        description: 'Engineered an event-deduplication layer that uses transaction timestamps to reconstruct historical transaction sequences.'
      },
      {
        num: '03',
        title: 'BigQuery Incremental Model',
        description: 'Deployed dbt models that incrementally load new checkouts every 2 minutes, avoiding slow full-table scans.'
      }
    ],
    architecture: {
      columns: [
        {
          title: '1. Store Transactions',
          nodes: [
            { icon: 'shopping_basket', label: 'POS Registers' },
            { icon: 'rss_feed', label: 'Kafka Event Producer' },
            { icon: 'security', label: 'Cloud Gateway Auth' }
          ]
        },
        {
          title: '2. Streaming Stream',
          nodes: [
            { icon: 'view_cozy', label: 'Kafka Broker Node', highlight: true },
            { icon: 'settings_input_composite', label: 'Spark Stream Processor' },
            { icon: 'output', label: 'BigQuery Write API' }
          ]
        },
        {
          title: '3. Analytics Core',
          nodes: [
            { icon: 'speed', label: 'Real-time stock dashboard' },
            { icon: 'autostart', label: 'Reorder alerts API' },
            { icon: 'query_stats', label: 'Predictive Demand Models' }
          ]
        }
      ]
    },
    process: [
      { title: 'Weeks 1-3: Load Profiling', description: 'Tested store network latency and calculated Peak transactions per second bounds.' },
      { title: 'Weeks 4-7: Kafka Grid Setup', description: 'Deployed GKE Kafka brokers and configured topic partitioning rules.' },
      { title: 'Weeks 8-11: dbt Cloud Normalization', description: 'Wrote the deduplication and star-schema views inside BigQuery.' },
      { title: 'Weeks 12-14: Deployment & Tests', description: 'Gradually connected store registers to the producer API and monitored lag.' }
    ],
    results: [
      { label: 'ETL Frequency', value: 'Daily to <5m' },
      { label: 'Inventory Shrink', value: '14% Reduction' },
      { label: 'Inventory Accuracy', value: '99.8% Sync' }
    ],
    testimonial: {
      quote: "StockSens completely resolved our inventory blind spots. We can now identify product shortages in real-time, helping us optimize supply chain routing and reduce order cancellations.",
      author: "Elena Rostov",
      role: "VP of Logistics, Apex Retailers"
    },
    relatedLinks: ['healthcare-data', 'predictive-maintenance']
  },
  {
    id: 'fintech-fraud',
    category: 'Cloud & Infrastructure',
    title: 'ShieldLedger: Microsecond-Scale Fraud Guard Platform',
    subtitle: 'How we built a high-throughput transaction evaluation platform that scans card swipes for fraud anomalies in under 15 milliseconds using Flink and Redis.',
    client: 'Aura Card Services',
    bgImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    meta: [
      { label: 'Client Industry', value: 'FinTech Providers' },
      { label: 'Scale Factor', value: '8.5k Transactions/Sec' },
      { label: 'Primary Stack', value: 'Apache Flink, Redis, Scala' }
    ],
    overviewTitle: 'Project Overview',
    overviewP1: 'Aura Card Services processed millions of credit card transactions daily. Their legacy fraud verification logic ran post-transaction, meaning fraud was only detected after payment authorization, resulting in high chargeback costs.',
    overviewP2: 'Cubegle designed ShieldLedger: a real-time transaction scoring platform that evaluates card transactions for geographic anomalies and spending patterns in <15ms, blocking fraudulent approvals at the point of sale.',
    timeline: '18 Weeks',
    teamSize: '6 Engineers',
    technologies: ['Apache Flink', 'Scala', 'Redis Cluster', 'AWS Kinesis', 'Terraform', 'Datadog'],
    challenges: [
      {
        title: 'Ultra-Low Latency Budget',
        description: 'Payment processors enforce a strict 20ms limit for fraud scoring. Any query taking longer is auto-approved to prevent register delays.'
      },
      {
        title: 'Large Customer Memory State',
        description: 'To calculate geographic anomalies, the system needed quick access to the customer\'s last 5 transactions, requiring massive in-memory storage.'
      }
    ],
    solutions: [
      {
        num: '01',
        title: 'Apache Flink Stateful Stream',
        description: 'Deployed a Flink cluster that keeps customer transaction histories directly in-memory, updating transaction windows in real-time.'
      },
      {
        num: '02',
        title: 'Redis Cluster Memory Cache',
        description: 'Engineered a highly optimized Redis Cluster on AWS, utilizing custom hashes to resolve patient customer history queries in under 2ms.'
      },
      {
        num: '03',
        title: 'Scala Evaluation Logic',
        description: 'Compiled core fraud models into high-performance Scala binaries, avoiding heavy serialization loops during payload parsing.'
      }
    ],
    architecture: {
      columns: [
        {
          title: '1. POS swipe request',
          nodes: [
            { icon: 'credit_card', label: 'Payment Terminals' },
            { icon: 'router', label: 'AWS Kinesis Stream' },
            { icon: 'verified_user', label: 'Gateway Decryption' }
          ]
        },
        {
          title: '2. Real-Time Evaluation',
          nodes: [
            { icon: 'network_node', label: 'Flink Scala Engine', highlight: true },
            { icon: 'speed', label: 'Redis Cluster History' },
            { icon: 'psychology', label: 'Fraud Scoring Model' }
          ]
        },
        {
          title: '3. Payment Authorization',
          nodes: [
            { icon: 'done_all', label: 'Auth Decider API' },
            { icon: 'block', label: 'Decline Trigger' },
            { icon: 'storage', label: 'Cold Audit Storage' }
          ]
        }
      ]
    },
    process: [
      { title: 'Weeks 1-4: Latency Profiling', description: 'Calculated baseline database roundtrip latency and tested Redis cluster read/write speeds.' },
      { title: 'Weeks 5-9: Flink Code Layout', description: 'Coded the Flink windowing logic in Scala and configured memory state recovery rules.' },
      { title: 'Weeks 10-14: Redis Memory Tweak', description: 'Optimized Redis cluster partitioning rules to avoid node cross-chatter during queries.' },
      { title: 'Weeks 15-18: Load Testing & Go-live', description: 'Ran simulated peak-holiday load runs and deployed the auth decider safely.' }
    ],
    results: [
      { label: 'Evaluation Latency', value: '<15ms Response' },
      { label: 'Fraud Deflection', value: '42% Reduction' },
      { label: 'Throughput Peak', value: '12.5k events/sec' }
    ],
    testimonial: {
      quote: "ShieldLedger allowed us to block fraud at checkout before authorization happens. Our chargeback costs dropped by 42% in the first quarter alone, without causing any register delays.",
      author: "David Chen",
      role: "VP of Risk Operations, Aura Card Services"
    },
    relatedLinks: ['predictive-maintenance', 'retail-inventory']
  },
  {
    id: 'predictive-maintenance',
    category: 'Cloud & Infrastructure',
    title: 'AeroForge: IoT Edge Telemetry & Machine Health Platform',
    subtitle: 'How we deployed edge telemetry aggregators and real-time anomaly models to predict equipment failures for a leading aerospace manufacturer.',
    client: 'AeroForge Parts',
    bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    meta: [
      { label: 'Client Industry', value: 'Aerospace Mfg' },
      { label: 'Scale Factor', value: '1.2M Edge Metrics/Sec' },
      { label: 'Primary Stack', value: 'OPC-UA, Azure IoT, Spark' }
    ],
    overviewTitle: 'Project Overview',
    overviewP1: 'AeroForge operated heavy milling machines that suffered frequent, unexpected motor failures, costing up to $80,000 per hour in idle labor and lost production output.',
    overviewP2: 'Cubegle deployed OPC-UA telemetry adapters that capture sensor readings (vibration, heat, voltage) at 100Hz, streaming them to Databricks Delta Lake where predictive models run continuously to spot machine wear.',
    timeline: '20 Weeks',
    teamSize: '5 Engineers',
    technologies: ['Azure IoT Hub', 'Databricks', 'Apache Spark', 'OPC-UA Bridge', 'Delta Lake', 'Grafana'],
    challenges: [
      {
        title: 'Sensor Frequency Load',
        description: 'Vibration sensors generated 1.2 million readings per second. Storing this raw telemetry directly in database tables created massive storage bills.'
      },
      {
        title: 'Harsh Edge Environments',
        description: 'Factory network drops caused data backpressure, requiring edge buffers to prevent telemetry loss during network drops.'
      }
    ],
    solutions: [
      {
        num: '01',
        title: 'OPC-UA Gateway Bridge',
        description: 'Deployed local edge gateways that pre-aggregate vibration readings every 1 second, reducing telemetry volume by 90% before cloud upload.'
      },
      {
        num: '02',
        title: 'Azure IoT Hub Buffer',
        description: 'Configured Azure IoT Hub as an ingestion queue, utilizing built-in buffering to store sensor metrics during network outages.'
      },
      {
        num: '03',
        title: 'Spark Streaming Anomaly Model',
        description: 'Built a Spark Streaming job that runs sensor readings against predictive maintenance models, sending warning triggers when anomalies are detected.'
      }
    ],
    architecture: {
      columns: [
        {
          title: '1. Edge Telemetry',
          nodes: [
            { icon: 'precision_manufacturing', label: 'Factory Sensors' },
            { icon: 'router', label: 'Edge Gateway Buffer' },
            { icon: 'cloud_upload', label: 'Azure IoT Hub Queue' }
          ]
        },
        {
          title: '2. Streaming Analytics',
          nodes: [
            { icon: 'settings_input_composite', label: 'Spark Streaming', highlight: true },
            { icon: 'storage', label: 'Databricks Delta Lake' },
            { icon: 'psychology', label: 'ML Health Scorer' }
          ]
        },
        {
          title: '3. Alerts & Dashboard',
          nodes: [
            { icon: 'warning', label: 'Slack Alert Trigger' },
            { icon: 'query_stats', label: 'Grafana Telemetry View' },
            { icon: 'assignment', label: 'Maintenance System' }
          ]
        }
      ]
    },
    process: [
      { title: 'Weeks 1-4: Edge Audit', description: 'Cataloged sensor protocols (OPC-UA/Modbus) and measured network packet drop rates.' },
      { title: 'Weeks 5-9: Edge Gateway Deploy', description: 'Provisioned edge gateway units with local database cache configurations.' },
      { title: 'Weeks 10-15: Databricks Pipeline', description: 'Wrote Spark ingestion scripts and configured Delta Lake partitioning rules.' },
      { title: 'Weeks 16-20: ML Model Sync & Tuning', description: 'Deployed machine health model binaries and built operational Grafana dashboard tabs.' }
    ],
    results: [
      { label: 'Unplanned DownTime', value: '34% Reduction' },
      { label: 'Data Compression', value: '92% Storage Saved' },
      { label: 'Telemetry Accuracy', value: '99.99% Delivered' }
    ],
    testimonial: {
      quote: "Cubegle's IoT solution allowed us to catch spindle failures hours before they happened. We have completely eliminated surprise production shutdowns, saving us hundreds of thousands in idle operational costs.",
      author: "Garrison Vance",
      role: "Director of Manufacturing, AeroForge Parts"
    },
    relatedLinks: ['fintech-fraud', 'retail-inventory']
  },
  {
    id: 'smart-city',
    category: 'Cloud & Infrastructure',
    title: 'MetroPulse: Unified Urban Transit & Environmental Analytics Hub',
    subtitle: 'How we integrated siloed GPS coordinate logs, air quality metrics, and transit schedules into a geospatial analytics platform processing 3.2 billion events daily.',
    client: 'Metro Transit Authority',
    bgImage: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop',
    meta: [
      { label: 'Client Industry', value: 'Municipal Transit' },
      { label: 'Scale Factor', value: '3.2B Daily Events' },
      { label: 'Primary Stack', value: 'Kubernetes, PostGIS' }
    ],
    overviewTitle: 'Project Overview',
    overviewP1: 'Metro Transit Authority operated siloed databases for bus GPS locations, train schedules, and city air-quality sensors. Planners could not run queries to identify how bus delays impacted localized air pollution.',
    overviewP2: 'Cubegle built MetroPulse: a unified geospatial analytics platform deployed on Kubernetes that ingests GPS logs and sensor metrics, calculating transit delay correlations in real-time.',
    timeline: '16 Weeks',
    teamSize: '4 Engineers',
    technologies: ['Kubernetes', 'PostgreSQL', 'PostGIS', 'Apache Kafka', 'Mapbox GL', 'Argo CD'],
    challenges: [
      {
        title: 'Geospatial Join Speeds',
        description: 'Joining high-frequency GPS coordinate points with city spatial polygons in real-time caused standard database queries to timeout.'
      },
      {
        title: 'System Deployment Scaling',
        description: 'Siloed database structures created configuration issues during updates, requiring a unified deployment pipeline.'
      }
    ],
    solutions: [
      {
        num: '01',
        title: 'PostGIS Quadtree Indexes',
        description: 'Implemented quadtree geospatial indexing on transit tables, accelerating location-join queries by 140x.'
      },
      {
        num: '02',
        title: 'Kubernetes Scaling Grid',
        description: 'Deployed the ingestion APIs across a Kubernetes cluster, utilizing auto-scaling rules to handle morning/evening rush hour spikes.'
      },
      {
        num: '03',
        title: 'GitOps Argo CD Pipeline',
        description: 'Configured GitOps deployment workflows using Argo CD, managing code configurations in unified repositories.'
      }
    ],
    architecture: {
      columns: [
        {
          title: '1. Spatial Ingestion',
          nodes: [
            { icon: 'directions_bus', label: 'Transit Bus GPS' },
            { icon: 'sensors', label: 'Pollution Sensors' },
            { icon: 'publish', label: 'Kafka Ingress Broker' }
          ]
        },
        {
          title: '2. Spatial Processing',
          nodes: [
            { icon: 'hub', label: 'K8s API Ingest' },
            { icon: 'public', label: 'PostGIS Spatial DB', highlight: true },
            { icon: 'settings_backup_restore', label: 'Transit Join Engine' }
          ]
        },
        {
          title: '3. Analytics Output',
          nodes: [
            { icon: 'map', label: 'Planners Map Interface' },
            { icon: 'analytics', label: 'Transit Delay Engine' },
            { icon: 'cloud_sync', label: 'Open Data Export' }
          ]
        }
      ]
    },
    process: [
      { title: 'Weeks 1-3: Spatial Audit', description: 'Cataloged Transit schedule schemas and mapped spatial polygon files.' },
      { title: 'Weeks 4-7: K8s Infrastructure', description: 'Provisioned the Kubernetes cluster and configured Kafka topics.' },
      { title: 'Weeks 8-11: PostGIS Setup', description: 'Built spatial indexes and optimized location-join queries.' },
      { title: 'Weeks 12-16: Map Integration & Go-live', description: 'Connected transit location feeds and rolled out spatial Mapbox dashboards.' }
    ],
    results: [
      { label: 'Spatial Join Acceleration', value: '140x Faster' },
      { label: 'Uptime Reliability', value: '99.98% Available' },
      { label: 'Daily GPS Events', value: '3.2 Billion Events' }
    ],
    testimonial: {
      quote: "MetroPulse provided our transit planning team with a unified view of city transit operations. We can now map and analyze air quality correlations in real-time, helping us optimize transit routing.",
      author: "Director of Transit Systems",
      role: "Metro Transit Authority"
    },
    relatedLinks: ['healthcare-data', 'retail-inventory']
  }
];
