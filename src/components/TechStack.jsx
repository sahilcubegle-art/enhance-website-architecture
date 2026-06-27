import { useRef } from 'react';
import { useInView } from './useInView';
import './TechStack.css';

const TECHS = [
  {
    name: 'Snowflake',
    category: 'Storage',
    logo: 'https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg',
    desc: 'Cloud Data Warehousing',
  },
  {
    name: 'Databricks',
    category: 'Lakehouse',
    logo: 'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg',
    desc: 'Unified Data & AI Platform',
  },
  {
    name: 'Apache Kafka',
    category: 'Streaming',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg',
    desc: 'Distributed Event Streaming',
  },
  {
    name: 'dbt Core',
    category: 'Transformation',
    logo: 'https://cdn.simpleicons.org/dbt',
    desc: 'SQL Transformation Workflow',
  },
  {
    name: 'Apache Airflow',
    category: 'Orchestration',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg',
    desc: 'Workflow Management Platform',
  },
  {
    name: 'Pentaho PDI',
    category: 'Integration',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Pentho_logo_-1.jpg',
    desc: 'Enterprise ETL & Data Integration',
  },
  {
    name: 'Tableau',
    category: 'Analytics',
    logo: 'https://www.vectorlogo.zone/logos/tableau/tableau-icon.svg',
    desc: 'Business Intelligence',
  },
  {
    name: 'Power BI',
    category: 'Analytics',
    logo: 'https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg',
    desc: 'Data Visualization & Insights',
  },
  {
    name: 'Python',
    category: 'Development',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    desc: 'Standard Data Engineering',
  },
  {
    name: 'Apache Spark',
    category: 'Processing',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg',
    desc: 'Large-scale Analytics Engine',
  },
  {
    name: 'Docker',
    category: 'Infrastructure',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    desc: 'Containerization Standards',
  },
  {
    name: 'Kubernetes',
    category: 'Infrastructure',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
    desc: 'Container Orchestration',
  },
  {
    name: 'Terraform',
    category: 'Infrastructure',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg',
    desc: 'Infrastructure as Code',
  },
  {
    name: 'AWS',
    category: 'Cloud',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    desc: 'Amazon Web Services',
  },
  {
    name: 'Azure',
    category: 'Cloud',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    desc: 'Microsoft Cloud Platform',
  },
  {
    name: 'GCP',
    category: 'Cloud',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
    desc: 'Google Cloud Platform',
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="tech-stack" className="section section-alt tech-stack" ref={ref}>
      <div className="container">
        <div className={`tech-stack__header reveal${isInView ? ' visible' : ''}`}>
          <h2 className="font-headline-md section-title">
            The Modern Data Stack
          </h2>
          <p className="font-body-lg section-subtitle">
            We build platforms using elite, industry-standard technologies to ensure modularity, durability, and high throughput.
          </p>
        </div>

        <div className="tech-stack__grid">
          {TECHS.map((tech, i) => (
            <div
              key={tech.name}
              className={`tech-stack__card card reveal${isInView ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="tech-stack__logo-container">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="tech-stack__logo"
                  loading="lazy"
                />
              </div>
              <span className="font-label-caps tech-stack__category">{tech.category}</span>
              <h3 className="font-label-md tech-stack__name">{tech.name}</h3>
              <p className="tech-stack__desc">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
