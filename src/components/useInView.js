import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for detecting when an element is in the viewport.
 * Used for scroll-triggered reveal animations.
 */
export function useInView(ref, options = {}) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el); // Only trigger once
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options.threshold, options.rootMargin]);

  return isInView;
}

/**
 * Custom hook for counting up a number when in view.
 */
export function useCountUp(target, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    const start = performance.now();
    const numericTarget = parseFloat(target);

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * numericTarget);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}
