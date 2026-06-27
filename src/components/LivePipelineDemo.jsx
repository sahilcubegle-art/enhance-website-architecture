import { useRef, useState, useEffect } from 'react';
import { useInView } from './useInView';
import { motion, AnimatePresence } from 'framer-motion';
import './LivePipelineDemo.css';

const LOG_TEMPLATES = [
  { tone: 'orange', icon: 'cloud_upload', text: 'Ingested batch from Salesforce stream' },
  { tone: 'blue', icon: 'bolt', text: 'Transform job dbt_run completed' },
  { tone: 'teal', icon: 'check_circle', text: 'Model fraud_v4 served prediction' },
  { tone: 'orange', icon: 'sensors', text: 'IoT telemetry partition flushed' },
  { tone: 'blue', icon: 'tune', text: 'Feature vector recomputed' },
  { tone: 'teal', icon: 'analytics', text: 'Dashboard metrics refreshed' },
  { tone: 'orange', icon: 'database', text: 'CDC sync from Postgres applied' },
  { tone: 'teal', icon: 'verified', text: 'Data quality check passed' },
];

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function LivePipelineDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  const [throughput, setThroughput] = useState(48230);
  const [latency, setLatency] = useState(42);
  const [uptime, setUptime] = useState(99.98);
  const [bars, setBars] = useState([62, 48, 80, 55, 70, 38, 90, 60]);
  const [logs, setLogs] = useState(() =>
    [0, 1, 2, 3].map((i) => ({ ...LOG_TEMPLATES[i], key: `init-${i}`, t: '0s' }))
  );

  useEffect(() => {
    if (!isInView) return;
    const id = setInterval(() => {
      setThroughput((v) => Math.max(38000, v + rand(-1800, 2200)));
      setLatency(rand(31, 58));
      setUptime(Number((99.9 + Math.random() * 0.09).toFixed(2)));
      setBars((prev) => prev.map(() => rand(30, 100)));
      setLogs((prev) => {
        const next = LOG_TEMPLATES[rand(0, LOG_TEMPLATES.length - 1)];
        const entry = { ...next, key: `${Date.now()}-${rand(0, 9999)}`, t: 'now' };
        return [entry, ...prev.slice(0, 3)];
      });
    }, 2000);
    return () => clearInterval(id);
  }, [isInView]);

  return (
    <section id="live-demo" className="section livedemo" ref={ref}>
      {/* Hero-style animated background */}
      <div className="livedemo__bg" aria-hidden="true">
        <div className="livedemo__gradient" />
        <div className="livedemo__particles">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="livedemo__particle" style={{ '--i': i }} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className={`livedemo__header reveal${isInView ? ' visible' : ''}`}>
          <span className="livedemo__tag font-label-caps">Platform in Motion</span>
          <h2 className="font-headline-md livedemo__heading">Watch your data work in real time</h2>
          <p className="font-body-lg livedemo__desc">
            A live look at the control plane &mdash; events streaming in, transforms firing, and
            models serving predictions across the enterprise, second by second.
          </p>
        </div>

        <motion.div
          className="livedemo__panel"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Window chrome */}
          <div className="livedemo__chrome">
            <div className="livedemo__dots" aria-hidden="true">
              <span /><span /><span />
            </div>
            <span className="livedemo__chrome-title">cubegle • control plane</span>
            <span className="livedemo__live">
              <span className="livedemo__live-dot" /> LIVE
            </span>
          </div>

          {/* KPI tiles */}
          <div className="livedemo__kpis">
            <div className="livedemo__kpi">
              <span className="livedemo__kpi-label">Events / sec</span>
              <span className="livedemo__kpi-value">{throughput.toLocaleString()}</span>
              <span className="livedemo__kpi-trend livedemo__kpi-trend--up">
                <span className="material-symbols-outlined">trending_up</span> streaming
              </span>
            </div>
            <div className="livedemo__kpi">
              <span className="livedemo__kpi-label">Pipeline Latency</span>
              <span className="livedemo__kpi-value">{latency}<small>ms</small></span>
              <span className="livedemo__kpi-trend livedemo__kpi-trend--teal">
                <span className="material-symbols-outlined">speed</span> p95
              </span>
            </div>
            <div className="livedemo__kpi">
              <span className="livedemo__kpi-label">Uptime</span>
              <span className="livedemo__kpi-value">{uptime}<small>%</small></span>
              <span className="livedemo__kpi-trend livedemo__kpi-trend--teal">
                <span className="material-symbols-outlined">check_circle</span> healthy
              </span>
            </div>
          </div>

          {/* Body: chart + log feed */}
          <div className="livedemo__body">
            <div className="livedemo__chart">
              <div className="livedemo__chart-head">
                <span className="livedemo__chart-title">Throughput by partition</span>
                <span className="livedemo__chart-sub">last 8 windows</span>
              </div>
              <div className="livedemo__bars">
                {bars.map((h, i) => (
                  <div className="livedemo__bar-track" key={i}>
                    <motion.div
                      className="livedemo__bar"
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1.4, ease: 'easeInOut' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="livedemo__feed">
              <div className="livedemo__feed-head">
                <span className="livedemo__chart-title">Event stream</span>
                <span className="material-symbols-outlined livedemo__feed-icon">graphic_eq</span>
              </div>
              <ul className="livedemo__log-list">
                <AnimatePresence initial={false}>
                  {logs.map((log) => (
                    <motion.li
                      key={log.key}
                      className="livedemo__log"
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className={`material-symbols-outlined livedemo__log-icon livedemo__log-icon--${log.tone}`}>
                        {log.icon}
                      </span>
                      <span className="livedemo__log-text">{log.text}</span>
                      <span className="livedemo__log-time">{log.t}</span>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
