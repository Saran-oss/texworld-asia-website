'use client';

import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

export default function CountUp({
  to, from = 0, direction = 'up', delay = 0,
  duration = 2, className = '', startWhen = true,
  separator = '', onStart, onEnd
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);
  const springValue = useSpring(motionValue, {
    damping: 20 + 40 / duration,
    stiffness: 100 / duration
  });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  const maxDecimals = Math.max(
    (String(from).split('.')[1] || '').length,
    (String(to).split('.')[1] || '').length
  );

  const formatValue = useCallback(value => {
    const formatted = new Intl.NumberFormat('en-US', {
      useGrouping: !!separator,
      minimumFractionDigits: maxDecimals,
      maximumFractionDigits: maxDecimals
    }).format(value);

    return separator ? formatted.replace(/,/g, separator) : formatted;
  }, [maxDecimals, separator]);

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (!isInView || !startWhen) return;
    onStart?.();

    const timer = setTimeout(() => {
      motionValue.set(direction === 'down' ? from : to);
    }, delay * 1000);

    const endTimer = setTimeout(() => onEnd?.(), (delay + duration) * 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, [isInView, startWhen, motionValue, direction, from, to, delay, duration, onStart, onEnd]);

  useEffect(() => springValue.on('change', value => {
    if (ref.current) ref.current.textContent = formatValue(value);
  }), [springValue, formatValue]);

  return <span ref={ref} className={className} />;
}