import { useState, useEffect, useRef } from 'react';
import './Hero.css';

function AnimatedCounter({ target, suffix = '', duration = 2000, decimals = 0 }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    startRef.current = 0;
    startTimeRef.current = null;

    function step(timestamp) {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(Number(current.toFixed(decimals)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, decimals]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();
  return <>{display}{suffix}</>;
}

const PARTICLE_COUNT = 10;

export default function Hero() {
  const visualRef = useRef(null);
  const tiltRef = useRef(null);
  const glowRef = useRef(null);
  const rafRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);    // Direct DOM mouse handling — zero React re-renders
  useEffect(() => {
    const visual = visualRef.current;
    const tilt = tiltRef.current;
    const glow = glowRef.current;
    if (!visual || !tilt || !glow) return;

    let frameId = null;
    let currentX = 0.5;
    let currentY = 0.5;
    let targetX = 0.5;
    let targetY = 0.5;
    let glowTargetX = -100;
    let glowTargetY = -100;
    let glowCurX = -100;
    let glowCurY = -100;
    let hasMouseEntered = false;

    function lerp(a, b, t) { return a + (b - a) * t; }

    function tick() {
      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);
      glowCurX = lerp(glowCurX, glowTargetX, 0.06);
      glowCurY = lerp(glowCurY, glowTargetY, 0.06);

      const tiltX = (currentX - 0.5) * 10;
      const tiltY = (currentY - 0.5) * -10;
      tilt.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

      glow.style.left = `${glowCurX}%`;
      glow.style.top = `${glowCurY}%`;

      frameId = requestAnimationFrame(tick);
    }
    frameId = requestAnimationFrame(tick);

    function onMouseMove(e) {
      const rect = visual.getBoundingClientRect();
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
      glowTargetX = ((e.clientX - rect.left) / rect.width) * 100;
      glowTargetY = ((e.clientY - rect.top) / rect.height) * 100;

      if (!hasMouseEntered) {
        hasMouseEntered = true;
        glow.style.opacity = 1;
      }
    }

    function onMouseLeave() {
      targetX = 0.5;
      targetY = 0.5;
      glowTargetX = -100;
      glowTargetY = -100;
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    visual.addEventListener('mouseleave', onMouseLeave, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      visual.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 2 + Math.random() * 5,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
    driftX: (Math.random() - 0.5) * 40,
    driftY: (Math.random() - 0.5) * 30,
    hue: Math.random() > 0.5 ? 'var(--secondary)' : 'var(--data-teal)',
    opacity: 0.08 + Math.random() * 0.12,
  }));

  return (
    <section className="hero" aria-label="Hero">
      {/* Background Layers */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__aurora" />
        <div className="hero__morph-grid" />
        <div className="hero__scanline" />

        {/* Cursor glow — DOM-driven, zero re-renders */}
        <div ref={glowRef} className="hero__cursor-glow" />

        {/* Particles — pure CSS animations */}
        <div className="hero__particles">
          {particles.map((p) => (
            <div
              key={p.id}
              className="hero__particle"
              style={{
                top: `${p.top}%`,
                left: `${p.left}%`,
                width: p.size,
                height: p.size,
                background: p.hue,
                '--start-opacity': p.opacity,
                '--peak-opacity': p.opacity * 2.2,
                '--drift-x': `${p.driftX}px`,
                '--drift-y': `${p.driftY}px`,
                '--anim-duration': `${p.duration}s`,
                '--anim-delay': `${p.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container hero__grid">
        {/* Left Column */}
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            <span className="font-label-caps">Enterprise Data Engineering</span>
          </div>

          <h1 className="hero__title font-display-lg">
            Modern Data Engineering Solutions That{' '}
            <span className="hero__highlight">
              Scale
              <span className="hero__highlight-shimmer" />
            </span>
          </h1>

          <p className="hero__subtitle font-body-lg">
            We design and build high-performance data pipelines, robust storage architectures,
            and automated MLOps infrastructure that turn raw data into your competitive advantage.
          </p>

          <div className="hero__ctas">
            <a href="#contact" className="btn btn-primary btn-hero">
              Book a Consultation
            </a>
            <a href="#case-studies" className="btn btn-outline btn-hero">
              View Case Studies
            </a>
          </div>
        </div>

        {/* Right Column — 3D Tilt Panel (DOM-driven, no React re-renders) */}
        <div
          ref={visualRef}
          className="hero__visual"
        >
          <div ref={tiltRef} className="hero__visual-inner">
            <div className="hero__visual-glow" aria-hidden="true" />
            <div className="hero__visual-aura" aria-hidden="true" />

            {/* SVG Network Visualization — pure SVG/CSS animations */}
            <div className="hero__visual-bg-lines">
              <svg viewBox="0 0 500 450" className="hero__visual-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.25" />
                    <stop offset="50%" stopColor="var(--data-teal)" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="flowLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--secondary)" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="var(--data-teal)" />
                  </linearGradient>
                  <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="orbitGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--data-teal)" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.04" />
                  </linearGradient>
                </defs>

                {/* Orbiting rings */}
                <circle cx="250" cy="225" r="170" fill="none" stroke="url(#orbitGrad1)" strokeWidth="0.5" strokeDasharray="2 8" className="hero__svg-rotate-cw" />
                <circle cx="250" cy="225" r="200" fill="none" stroke="url(#orbitGrad2)" strokeWidth="0.5" strokeDasharray="3 12" className="hero__svg-rotate-ccw" />

                {/* Background glow */}
                <circle cx="250" cy="225" r="140" fill="url(#hubGlow)" />
                <circle cx="250" cy="225" r="180" fill="none" stroke="rgba(139, 92, 246, 0.06)" strokeWidth="1" strokeDasharray="5 5" />
                <circle cx="250" cy="225" r="100" fill="none" stroke="rgba(20, 184, 166, 0.07)" strokeWidth="0.8" />

                {/* Data nodes */}
                <circle cx="80" cy="80" r="4" fill="var(--secondary)" opacity="0.3" className="hero__svg-pulse" />
                <circle cx="420" cy="90" r="3" fill="#8B5CF6" opacity="0.25" className="hero__svg-pulse-delay-1" />
                <circle cx="400" cy="360" r="3.5" fill="var(--data-teal)" opacity="0.3" className="hero__svg-pulse-delay-2" />
                <circle cx="90" cy="370" r="3" fill="var(--secondary)" opacity="0.2" className="hero__svg-pulse-delay-3" />
                <circle cx="60" cy="200" r="2.5" fill="#8B5CF6" opacity="0.2" className="hero__svg-pulse-delay-1" />
                <circle cx="440" cy="240" r="3" fill="var(--data-teal)" opacity="0.25" className="hero__svg-pulse-delay-2" />

                {/* Connecting lines */}
                <line x1="80" y1="80" x2="250" y2="225" stroke="url(#flowLineGrad)" strokeWidth="0.5" opacity="0.12" />
                <line x1="420" y1="90" x2="250" y2="225" stroke="url(#flowLineGrad)" strokeWidth="0.5" opacity="0.1" />
                <line x1="400" y1="360" x2="250" y2="225" stroke="url(#flowLineGrad)" strokeWidth="0.5" opacity="0.12" />
                <line x1="90" y1="370" x2="250" y2="225" stroke="url(#flowLineGrad)" strokeWidth="0.5" opacity="0.08" />
                <line x1="60" y1="200" x2="250" y2="225" stroke="url(#flowLineGrad)" strokeWidth="0.5" opacity="0.1" />
                <line x1="440" y1="240" x2="250" y2="225" stroke="url(#flowLineGrad)" strokeWidth="0.5" opacity="0.1" />

                {/* Grid arcs */}
                <path d="M 50 100 Q 250 225 450 100" fill="none" stroke="rgba(139, 92, 246, 0.04)" strokeWidth="1.5" />
                <path d="M 50 350 Q 250 225 450 350" fill="none" stroke="rgba(20, 184, 166, 0.04)" strokeWidth="1.5" />
                <path d="M 100 225 L 400 225" fill="none" stroke="rgba(14, 30, 91, 0.04)" strokeWidth="1.5" />
                <path d="M 250 50 L 250 400" fill="none" stroke="rgba(245, 158, 11, 0.03)" strokeWidth="1" />

                {/* Continuous data flow paths — CSS driven */}
                <path d="M 50 100 Q 250 225 450 350" fill="none" stroke="url(#flowLineGrad)" strokeWidth="2" strokeDasharray="6 30" className="hero__svg-flow" />
                <path d="M 50 350 Q 250 225 450 100" fill="none" stroke="url(#flowLineGrad)" strokeWidth="2" strokeDasharray="6 30" className="hero__svg-flow-reverse" />
                <path d="M 250 50 Q 350 225 150 400" fill="none" stroke="url(#flowLineGrad)" strokeWidth="1.5" strokeDasharray="4 24" className="hero__svg-flow-slow" />

                {/* Data pulse dots — SVG animate for broad compat */}
                <circle r="3" fill="var(--secondary)">
                  <animate attributeName="cx" values="50;450;50" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="100;350;100" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="2.5" fill="var(--data-teal)">
                  <animate attributeName="cx" values="450;50;450" dur="3.5s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="350;100;350" dur="3.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="3.5s" repeatCount="indefinite" />
                </circle>

                {/* Center engine */}
                <g transform="translate(250, 225)">
                  <circle r="45" fill="rgba(252, 248, 255, 0.9)" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1.5" />
                  <circle r="38" fill="none" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="8 6" className="hero__svg-engine-cw" />
                  <circle r="28" fill="none" stroke="var(--data-teal)" strokeWidth="1.5" strokeDasharray="12 4" className="hero__svg-engine-ccw" />
                  <circle r="18" fill="none" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3 9" className="hero__svg-engine-fast" />
                  <circle r="10" fill="var(--primary)" />
                  <circle r="5" fill="#ffffff" className="hero__svg-core-pulse" />
                </g>
              </svg>
            </div>

            {/* Floating Glass Widgets — pure CSS float animations */}
            <div className="hero__widget hero__widget--ingest hero__widget-float-1">
              <div className="hero__widget-border-glow" />
              <div className="hero__widget-header">
                <span className="hero__widget-dot hero__widget-dot--pulsing" />
                <span className="hero__widget-title">Stream Ingest</span>
              </div>
              <div className="hero__widget-value">
                <AnimatedCounter target={1248500} /> <span className="hero__widget-unit">evt/s</span>
              </div>
              <div className="hero__widget-sub">Kafka clusters healthy</div>
            </div>

            <div className="hero__widget hero__widget--transform hero__widget-float-2">
              <div className="hero__widget-border-glow" />
              <div className="hero__widget-header">
                <span className="hero__widget-title">dbt Engine</span>
              </div>
              <div className="hero__widget-progress-row">
                <div className="hero__widget-bar-bg">
                  <div className="hero__widget-bar-fill hero__widget-bar-anim" />
                </div>
                <span className="hero__widget-percent">99.9%</span>
              </div>
              <div className="hero__widget-sub">Quality check: passed</div>
            </div>

            <div className="hero__widget hero__widget--ai hero__widget-float-3">
              <div className="hero__widget-border-glow" />
              <div className="hero__widget-header">
                <span className="hero__widget-title">ML Prediction</span>
              </div>
              <div className="hero__widget-metric-grid">
                <div>
                  <div className="hero__widget-metric-val">
                    <AnimatedCounter target={4.8} decimals={1} suffix="" />ms
                  </div>
                  <div className="hero__widget-metric-lbl">Latency</div>
                </div>
                <div className="hero__widget-metric-divider">
                  <div className="hero__widget-metric-val">
                    <AnimatedCounter target={99.4} decimals={1} suffix="" />%
                  </div>
                  <div className="hero__widget-metric-lbl">Accuracy</div>
                </div>
              </div>
            </div>

            <div className="hero__widget hero__widget--storage hero__widget-float-4">
              <div className="hero__widget-border-glow" />
              <div className="hero__widget-header">
                <span className="hero__widget-title">Delta Storage</span>
              </div>
              <div className="hero__widget-storage-line">
                <span className="hero__widget-storage-lbl">Hot tier</span>
                <span className="hero__widget-storage-val">85 TB</span>
              </div>
              <div className="hero__widget-storage-line">
                <span className="hero__widget-storage-lbl">Cold tier</span>
                <span className="hero__widget-storage-val">2.1 PB</span>
              </div>
            </div>

            <div className="hero__widget hero__widget--analytics hero__widget-float-5">
              <div className="hero__widget-border-glow" />
              <div className="hero__widget-header">
                <span className="hero__widget-title">Real-time Analytics</span>
              </div>
              <div className="hero__widget-value" style={{ fontSize: 15 }}>
                <AnimatedCounter target={997} suffix="" /><span className="hero__widget-unit">%</span>
              </div>
              <div className="hero__widget-sub">Query performance SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
