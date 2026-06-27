import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Hero.css';

function useMousePosition() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  useEffect(() => {
    const handleMouse = (e) => {
      x.set(e.clientX / window.innerWidth);
      y.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [x, y]);

  return { x, y };
}

function AnimatedCounter({ target, suffix = '', duration = 2000, decimals = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(decimals)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, decimals]);

  const display = decimals > 0 ? count.toFixed(decimals) : count.toLocaleString();
  return <>{display}{suffix}</>;
}

const PARTICLE_COUNT = 20;

export default function Hero() {
  const { x: mouseX, y: mouseY } = useMousePosition();
  const springX = useSpring(mouseX, { stiffness: 120, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 30 });
  const visualRef = useRef(null);
  const [glowPos, setGlowPos] = useState({ x: -100, y: -100 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleMouseMove = (e) => {
    const rect = visualRef.current?.getBoundingClientRect();
    if (rect) {
      setGlowPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  useEffect(() => {
    const unsubX = springX.on('change', (v) => {
      tiltX.set((v - 0.5) * 12);
    });
    const unsubY = springY.on('change', (v) => {
      tiltY.set((v - 0.5) * -12);
    });
    return () => { unsubX(); unsubY(); };
  }, [springX, springY, tiltX, tiltY]);

  const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 2 + Math.random() * 6,
    delay: Math.random() * 6,
    duration: 4 + Math.random() * 6,
    drift: Math.random() * 20 - 10,
    hue: Math.random() > 0.5 ? 'var(--secondary)' : 'var(--data-teal)',
    opacity: 0.08 + Math.random() * 0.14,
  }));

  return (
    <section className="hero" aria-label="Hero">
      {/* Aurora / Morphing Background */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__aurora" />
        <div className="hero__morph-grid" />
        <div className="hero__scanline" />

        {/* Mouse-reactive glow orb */}
        <motion.div
          className="hero__cursor-glow"
          animate={
            mounted
              ? {
                  left: `${glowPos.x}%`,
                  top: `${glowPos.y}%`,
                  opacity: 1,
                }
              : { opacity: 0 }
          }
          transition={{ type: 'spring', stiffness: 80, damping: 25 }}
        />

        {/* Enhanced Particle Constellation */}
        <div className="hero__particles">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="hero__particle"
              style={{
                top: `${p.top}%`,
                left: `${p.left}%`,
                width: p.size,
                height: p.size,
                background: p.hue,
                opacity: p.opacity,
              }}
              animate={{
                y: [0, -p.drift, 0],
                x: [0, p.drift * 0.5, 0],
                scale: [1, 1.6, 1],
                opacity: [p.opacity, p.opacity * 2.2, p.opacity],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      <div className="container hero__grid">
        {/* Left Column */}
        <div className="hero__content">
          <motion.div
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero__eyebrow-dot" />
            <span className="font-label-caps">Enterprise Data Engineering</span>
          </motion.div>

          <motion.h1
            className="hero__title font-display-lg"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Modern Data Engineering Solutions That{' '}
            <span className="hero__highlight">
              Scale
              <span className="hero__highlight-shimmer" />
            </span>
          </motion.h1>

          <motion.p
            className="hero__subtitle font-body-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            We design and build high-performance data pipelines, robust storage architectures,
            and automated MLOps infrastructure that turn raw data into your competitive advantage.
          </motion.p>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#contact" className="btn btn-primary btn-hero">
              Book a Consultation
            </a>
            <a href="#case-studies" className="btn btn-outline btn-hero">
              View Case Studies
            </a>
          </motion.div>
        </div>

        {/* Right Column - 3D Tilt Visual */}
        <motion.div
          ref={visualRef}
          className="hero__visual"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setGlowPos({ x: -100, y: -100 })}
          style={{ rotateX: tiltY, rotateY: tiltX }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__visual-glow" aria-hidden="true" />
          <div className="hero__visual-aura" aria-hidden="true" />

          {/* Background network visualization */}
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

              {/* Outer glow ring */}
              <circle cx="250" cy="225" r="170" fill="none" stroke="url(#orbitGrad1)" strokeWidth="0.5" strokeDasharray="2 8">
                <animateTransform attributeName="transform" type="rotate" from="0 250 225" to="360 250 225" dur="30s" repeatCount="indefinite" />
              </circle>
              <circle cx="250" cy="225" r="200" fill="none" stroke="url(#orbitGrad2)" strokeWidth="0.5" strokeDasharray="3 12">
                <animateTransform attributeName="transform" type="rotate" from="360 250 225" to="0 250 225" dur="40s" repeatCount="indefinite" />
              </circle>

              {/* Glowing background circles */}
              <circle cx="250" cy="225" r="140" fill="url(#hubGlow)" className="hero__visual-center-glow" />
              <circle cx="250" cy="225" r="180" fill="none" stroke="rgba(139, 92, 246, 0.06)" strokeWidth="1" strokeDasharray="5 5" />
              <circle cx="250" cy="225" r="100" fill="none" stroke="rgba(20, 184, 166, 0.07)" strokeWidth="0.8" />

              {/* Data node constellation */}
              <circle cx="80" cy="80" r="4" fill="var(--secondary)" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="420" cy="90" r="3" fill="#8B5CF6" opacity="0.25">
                <animate attributeName="opacity" values="0.25;0.7;0.25" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="400" cy="360" r="3.5" fill="var(--data-teal)" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.75;0.3" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="90" cy="370" r="3" fill="var(--secondary)" opacity="0.2">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="60" cy="200" r="2.5" fill="#8B5CF6" opacity="0.2">
                <animate attributeName="opacity" values="0.2;0.65;0.2" dur="5s" repeatCount="indefinite" />
              </circle>
              <circle cx="440" cy="240" r="3" fill="var(--data-teal)" opacity="0.25">
                <animate attributeName="opacity" values="0.25;0.7;0.25" dur="4.2s" repeatCount="indefinite" />
              </circle>

              {/* Connecting lines between nodes */}
              <line x1="80" y1="80" x2="250" y2="225" stroke="url(#flowLineGrad)" strokeWidth="0.5" opacity="0.12" />
              <line x1="420" y1="90" x2="250" y2="225" stroke="url(#flowLineGrad)" strokeWidth="0.5" opacity="0.1" />
              <line x1="400" y1="360" x2="250" y2="225" stroke="url(#flowLineGrad)" strokeWidth="0.5" opacity="0.12" />
              <line x1="90" y1="370" x2="250" y2="225" stroke="url(#flowLineGrad)" strokeWidth="0.5" opacity="0.08" />

              {/* Grid lines */}

              {/* Connecting grid lines */}
              <path d="M 50 100 Q 250 225 450 100" fill="none" stroke="rgba(139, 92, 246, 0.04)" strokeWidth="1.5" />
              <path d="M 50 350 Q 250 225 450 350" fill="none" stroke="rgba(20, 184, 166, 0.04)" strokeWidth="1.5" />
              <path d="M 100 225 L 400 225" fill="none" stroke="rgba(14, 30, 91, 0.04)" strokeWidth="1.5" />
              <path d="M 250 50 L 250 400" fill="none" stroke="rgba(245, 158, 11, 0.03)" strokeWidth="1" />

              {/* Continuous flow animation paths */}
              <motion.path
                d="M 50 100 Q 250 225 450 350"
                fill="none"
                stroke="url(#flowLineGrad)"
                strokeWidth="2"
                strokeDasharray="6 30"
                animate={{ strokeDashoffset: [0, -36] }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 4 }}
              />
              <motion.path
                d="M 50 350 Q 250 225 450 100"
                fill="none"
                stroke="url(#flowLineGrad)"
                strokeWidth="2"
                strokeDasharray="6 30"
                animate={{ strokeDashoffset: [-36, 0] }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 4 }}
              />
              <motion.path
                d="M 250 50 Q 350 225 150 400"
                fill="none"
                stroke="url(#flowLineGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 24"
                animate={{ strokeDashoffset: [0, -28] }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 6 }}
              />

              {/* Data pulse dots along paths */}
              <motion.circle
                r="3" fill="var(--secondary)"
                animate={{ cx: [50, 450], cy: [100, 350] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              />
              <motion.circle
                r="2.5" fill="var(--data-teal)"
                animate={{ cx: [450, 50], cy: [350, 100] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
              />

              {/* Center rotating engine core with enhanced glow */}
              <g transform="translate(250, 225)">
                <circle
                  r="45"
                  fill="rgba(252, 248, 255, 0.9)"
                  stroke="rgba(139, 92, 246, 0.15)"
                  strokeWidth="1.5"
                />
                <motion.circle
                  r="38"
                  fill="none"
                  stroke="var(--secondary)"
                  strokeWidth="1.5"
                  strokeDasharray="8 6"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, ease: 'linear', duration: 12 }}
                />
                <motion.circle
                  r="28"
                  fill="none"
                  stroke="var(--data-teal)"
                  strokeWidth="1.5"
                  strokeDasharray="12 4"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, ease: 'linear', duration: 8 }}
                />
                <motion.circle
                  r="18"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="1"
                  strokeDasharray="3 9"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, ease: 'linear', duration: 6 }}
                />
                <circle r="10" fill="var(--primary)" />
                <circle r="5" fill="#ffffff">
                  <animate attributeName="r" values="5;6;5" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>
          </div>

          {/* Floating Glass Widgets with animated glow borders */}

          {/* Widget 1: Stream ingestion */}
          <motion.div
            className="hero__widget hero__widget--ingest"
            animate={{ y: [-8, 8], x: [-2, 2] }}
            transition={{ repeat: Infinity, repeatType: 'mirror', duration: 3.5, ease: 'easeInOut' }}
          >
            <div className="hero__widget-border-glow" />
            <div className="hero__widget-header">
              <span className="hero__widget-dot hero__widget-dot--pulsing" />
              <span className="hero__widget-title">Stream Ingest</span>
            </div>
            <div className="hero__widget-value">
              <AnimatedCounter target={1248500} /> <span className="hero__widget-unit">evt/s</span>
            </div>
            <div className="hero__widget-sub">Kafka clusters healthy</div>
          </motion.div>

          {/* Widget 2: Transform Engine */}
          <motion.div
            className="hero__widget hero__widget--transform"
            animate={{ y: [8, -8], x: [2, -2] }}
            transition={{ repeat: Infinity, repeatType: 'mirror', duration: 4.2, ease: 'easeInOut' }}
          >
            <div className="hero__widget-border-glow" />
            <div className="hero__widget-header">
              <span className="material-symbols-outlined hero__widget-icon hero__widget-icon--teal">settings_input_component</span>
              <span className="hero__widget-title">dbt Engine</span>
            </div>
            <div className="hero__widget-progress-row">
              <div className="hero__widget-bar-bg">
                <motion.div
                  className="hero__widget-bar-fill"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                />
              </div>
              <span className="hero__widget-percent">99.9%</span>
            </div>
            <div className="hero__widget-sub">Quality check: passed</div>
          </motion.div>

          {/* Widget 3: AI Inference */}
          <motion.div
            className="hero__widget hero__widget--ai"
            animate={{ y: [-6, 6], x: [3, -3] }}
            transition={{ repeat: Infinity, repeatType: 'mirror', duration: 3.8, ease: 'easeInOut' }}
          >
            <div className="hero__widget-border-glow" />
            <div className="hero__widget-header">
              <span className="material-symbols-outlined hero__widget-icon hero__widget-icon--purple">psychology</span>
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
          </motion.div>

          {/* Widget 4: Lakehouse Storage */}
          <motion.div
            className="hero__widget hero__widget--storage"
            animate={{ y: [6, -6], x: [-3, 3] }}
            transition={{ repeat: Infinity, repeatType: 'mirror', duration: 4.5, ease: 'easeInOut' }}
          >
            <div className="hero__widget-border-glow" />
            <div className="hero__widget-header">
              <span className="material-symbols-outlined hero__widget-icon hero__widget-icon--orange">database</span>
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
          </motion.div>

          {/* Widget 5: Real-time Analytics - NEW */}
          <motion.div
            className="hero__widget hero__widget--analytics"
            animate={{ y: [-5, 7], x: [2, -4] }}
            transition={{ repeat: Infinity, repeatType: 'mirror', duration: 5, ease: 'easeInOut' }}
          >
            <div className="hero__widget-border-glow" />
            <div className="hero__widget-header">
              <span className="material-symbols-outlined hero__widget-icon hero__widget-icon--amber">insights</span>
              <span className="hero__widget-title">Real-time Analytics</span>
            </div>
            <div className="hero__widget-value" style={{ fontSize: 15 }}>
              <AnimatedCounter target={997} suffix="" /><span className="hero__widget-unit">%</span>
            </div>
            <div className="hero__widget-sub">Query performance SLA</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
