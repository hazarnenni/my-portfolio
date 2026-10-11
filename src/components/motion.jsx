import React, { useEffect, useRef, useState } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia?.(REDUCED_MOTION_QUERY).matches
  );
  useEffect(() => {
    const media = window.matchMedia?.(REDUCED_MOTION_QUERY);
    if (!media) return undefined;
    const onChange = () => setReduced(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

export function useInView(options = { rootMargin: '0px 0px -10% 0px' }, once = true) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (entry.isIntersecting && once) observer.disconnect();
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
    // Options are static per call site.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once]);
  return [ref, inView];
}

// Fades and lifts its content into place the first time it scrolls into view.
export function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Card that tilts in 3D toward the cursor and shows a spotlight where it points.
export function TiltCard({ as: Tag = 'div', className = '', max = 8, children, ...rest }) {
  const ref = useRef(null);
  const frame = useRef(0);
  const reducedMotion = usePrefersReducedMotion();

  const handleMove = (event) => {
    if (event.pointerType !== 'mouse') return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--mx', `${px * 100}%`);
      el.style.setProperty('--my', `${py * 100}%`);
      if (!reducedMotion) {
        el.style.setProperty('--rx', `${(0.5 - py) * max}deg`);
        el.style.setProperty('--ry', `${(px - 0.5) * max}deg`);
      }
    });
  };

  const handleLeave = () => {
    cancelAnimationFrame(frame.current);
    const el = ref.current;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return (
    <Tag
      ref={ref}
      className={`tilt-card ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...rest}
    >
      <span className="tilt-spotlight" aria-hidden="true" />
      {children}
    </Tag>
  );
}
