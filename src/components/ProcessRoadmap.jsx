import { useRef } from 'react';
import { useInView } from './useInView';
import './ProcessRoadmap.css';

const STEPS = [
  {
    num: 1,
    title: 'Discovery',
    desc: 'Mapping existing bottlenecks and defining business objectives.',
  },
  {
    num: 2,
    title: 'Architecting',
    desc: 'Designing custom frameworks with security-first principles.',
  },
  {
    num: 3,
    title: 'Deployment',
    desc: 'Agile implementation with zero-downtime migration.',
  },
  {
    num: 4,
    title: 'Optimization',
    desc: 'Continuous monitoring and scaling as your needs evolve.',
  },
];

export default function ProcessRoadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.15 });

  return (
    <section className="section section-alt process" ref={ref}>
      <div className="container">
        <h2 className={`font-headline-md section-title reveal${isInView ? ' visible' : ''}`}>
          Our Precision Roadmap
        </h2>
        <p className={`font-body-lg section-subtitle reveal${isInView ? ' visible' : ''}`} style={{ transitionDelay: '100ms' }}>
          A battle-tested methodology that transforms complexity into clarity.
        </p>

        <div className="process__timeline">
          <div className="process__line" aria-hidden="true">
            <div
              className="process__line-fill"
              style={{ width: isInView ? '100%' : '0%' }}
            />
          </div>

          <div className="process__steps">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`process__step card reveal${isInView ? ' visible' : ''}`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="process__step-num">{step.num}</div>
                <h3 className="font-headline-sm process__step-title">{step.title}</h3>
                <p className="font-body-md process__step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
