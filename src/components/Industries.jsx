import { useRef } from 'react';
import { useInView } from './useInView';
import './Industries.css';

const INDUSTRIES = [
  {
    icon: 'payments',
    title: 'Finance & Banking',
    desc: 'Real-time transaction scoring, high-frequency fraud detection, and regulatory compliance storage.',
  },
  {
    icon: 'local_hospital',
    title: 'Healthcare & Life Sciences',
    desc: 'HIPAA-compliant data pipelines, secure patient metrics storage, and genomic data processing systems.',
  },
  {
    icon: 'shopping_bag',
    title: 'Retail & E-commerce',
    desc: 'Customer 360 platforms, dynamic inventory routing, and personalized recommender system integration.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Manufacturing & IoT',
    desc: 'Predictive maintenance pipelines, multi-sensor stream processing, and supply chain telemetry hubs.',
  },
  {
    icon: 'bolt',
    title: 'Energy & Utilities',
    desc: 'Grid load forecasting engines, smart meter event processing, and geological modeling storage structures.',
  },
  {
    icon: 'local_shipping',
    title: 'Logistics & Supply Chain',
    desc: 'Optimal fleet routing databases, real-time tracking streams, and multi-node warehouse supply models.',
  },
];

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="industries" className="section section-alt industries" ref={ref}>
      <div className="container">
        <div className={`industries__header reveal${isInView ? ' visible' : ''}`}>
          <h2 className="font-headline-md section-title">
            Tailored Industry Solutions
          </h2>
          <p className="font-body-lg section-subtitle">
            Every sector faces unique data hurdles. We construct customized frameworks engineered specifically for your domain's challenges and compliance standards.
          </p>
        </div>

        <div className="industries__grid">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.title}
              className={`industries__card card reveal${isInView ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="industries__icon-wrapper">
                <span className="material-symbols-outlined industries__icon" aria-hidden="true">
                  {ind.icon}
                </span>
              </div>
              <h3 className="font-headline-sm industries__card-title">{ind.title}</h3>
              <p className="font-body-md industries__card-desc">{ind.desc}</p>
            </div>
          ))}
        </div>

        <div className={`industries__footer reveal${isInView ? ' visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          <a href="#contact" className="btn btn-outline" id="btn-industries-cta">
            Request Domain Briefing
            <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
