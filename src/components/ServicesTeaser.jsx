import { useRef } from 'react';
import { useInView } from './useInView';
import './ServicesTeaser.css';

const TEASER_SERVICES = [
  {
    icon: 'hub',
    title: 'Data Engineering',
    desc: 'High-quality, reliable batch and real-time ETL pipelines powering your entire analytics ecosystem.',
  },
  {
    icon: 'layers',
    title: 'Data Warehousing',
    desc: 'Durable, star-schema modeled cloud data warehouses supporting deep analytics and ML workloads.',
  },
  {
    icon: 'speed',
    title: 'BI Dashboards',
    desc: 'Pixel-perfect, performance-optimized executive dashboards and verified semantic layers.',
  },
  {
    icon: 'rocket_launch',
    title: 'AI / ML Engineering',
    desc: 'Adopt forecasting, predictive scoring, and MLOps workflows to make your applications intelligent.',
  },
  {
    icon: 'cloud_done',
    title: 'DevOps & Cloud',
    desc: 'Modern, automated release lifecycles and cost-optimized cloud infrastructure scaling.',
  },
  {
    icon: 'devices',
    title: 'Product Development',
    desc: 'Rapid MVP deployment, enterprise tools, and full-stack software products built to scale.',
  },
];

export default function ServicesTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="services-teaser" className="section services-teaser" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className={`services-teaser__header reveal${isInView ? ' visible' : ''}`}>
          <div className="services-teaser__eyebrow">
            <span className="services-teaser__eyebrow-dot" />
            <span className="font-label-caps">What We Do</span>
          </div>
          <h2 className="font-headline-md section-title">
            Expertise Across the Data Lifecycle
          </h2>
          <p className="font-body-lg section-subtitle">
            We design, build, and optimize high-throughput data platforms, cloud architectures, and intelligence systems that drive growth.
          </p>
        </div>

        {/* Grid */}
        <div className="services-teaser__grid">
          {TEASER_SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`services-teaser__card reveal${isInView ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="services-teaser__icon-wrapper">
                <span className="material-symbols-outlined services-teaser__icon" aria-hidden="true">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline-sm services-teaser__card-title">{service.title}</h3>
              <p className="font-body-md services-teaser__card-desc">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className={`services-teaser__action reveal${isInView ? ' visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          <a href="#/services" className="btn btn-primary btn-explore">
            Explore Detailed Capabilities & Architecture
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
