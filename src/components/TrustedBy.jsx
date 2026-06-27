import './TrustedBy.css';

const TECHS = [
  {
    name: 'Snowflake',
    logo: 'https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg',
  },
  {
    name: 'Databricks',
    logo: 'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg',
  },
  {
    name: 'Apache Kafka',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg',
  },
  {
    name: 'dbt Core',
    logo: 'https://cdn.simpleicons.org/dbt',
  },
  {
    name: 'Apache Airflow',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg',
  },
  {
    name: 'Tableau',
    logo: 'https://www.vectorlogo.zone/logos/tableau/tableau-icon.svg',
  },
  {
    name: 'Power BI',
    logo: 'https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg',
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  {
    name: 'Apache Spark',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg',
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  },
  {
    name: 'Kubernetes',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
  },
  {
    name: 'Terraform',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg',
  },
  {
    name: 'AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    name: 'Azure',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  },
  {
    name: 'GCP',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
  },
];

export default function TrustedBy() {
  const doubled = [...TECHS, ...TECHS];

  return (
    <section className="trusted section-alt" aria-label="Modern Data Stack Technologies">
      <div className="trusted__ticker">
        <div className="trusted__track">
          {doubled.map((tech, i) => (
            <div key={i} className="trusted__item">
              <img
                src={tech.logo}
                alt={tech.name}
                className="trusted__logo"
                loading="lazy"
              />
              <span className="trusted__name font-headline-sm">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

