import { useRef } from 'react';
import { useInView, useCountUp } from './useInView';
import './Outcomes.css';

const STATS = [
  {
    value: 80,
    suffix: '%',
    label: 'Time-to-Insight Reduction',
    icon: 'insights',
    description: 'Drastically decrease query latency and speed up real-time analytics dashboards.',
  },
  {
    value: 60,
    suffix: '%',
    label: 'Infrastructure Efficiency',
    icon: 'memory',
    description: 'Optimize compute cluster sizing, resource allocation, and cloud spend.',
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Data Pipeline Uptime',
    decimals: 1,
    icon: 'settings_backup_restore',
    description: 'Ensure continuous ingestion with self-healing nodes and failure buffers.',
  },
  {
    value: 4.5,
    suffix: 'x',
    label: 'ROI within 12 Months',
    decimals: 1,
    icon: 'trending_up',
    description: 'Deliver rapid, measurable business value from data engineering investments.',
  },
];

function StatCard({ value, suffix, label, decimals = 0, inView, delay, icon, description }) {
  const count = useCountUp(value, 2000, inView);

  return (
    <div
      className={`outcomes__stat-card reveal${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="outcomes__stat-card-icon-wrapper">
        <span className="material-symbols-outlined outcomes__stat-card-icon">{icon}</span>
      </div>
      
      <div className="outcomes__stat-card-content">
        <div className="outcomes__stat-card-value font-display-lg">
          {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
          <span className="outcomes__stat-card-suffix">{suffix}</span>
        </div>
        <h3 className="outcomes__stat-card-label font-headline-sm">{label}</h3>
        <p className="outcomes__stat-card-desc font-body-md">{description}</p>
      </div>

      <div className="outcomes__stat-card-progress">
        <div
          className="outcomes__stat-card-progress-fill"
          style={{
            width: inView ? '100%' : '0%',
            transitionDelay: `${delay + 300}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Outcomes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section className="section outcomes" ref={ref}>
      <div className="container">
        <div className={`outcomes__header reveal${isInView ? ' visible' : ''}`}>
          <h2 className="font-headline-md section-title">
            Enterprise Scale. Proven Outcomes.
          </h2>
          <p className="font-body-lg section-subtitle">
            We build modern, highly optimized platforms that translate into measurable business value.
          </p>
        </div>
        
        <div className="outcomes__grid">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} inView={isInView} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
