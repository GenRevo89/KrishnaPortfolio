'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  kicker,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-24 ${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      {kicker && (
        <span className="micro-kicker block mb-4 tracking-[0.25em]">{kicker}</span>
      )}
      <h2
        className={`
          font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight
          leading-[1.1]
        `}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-[rgba(255,255,255,0.5)] text-lg md:text-xl max-w-2xl leading-relaxed font-light">
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <div className={`mt-8 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="w-8 h-px bg-accent" />
        <div className="w-2 h-2 border border-accent rotate-45" />
        <div className="w-16 h-px bg-gradient-to-r from-accent to-transparent" />
      </div>
    </motion.div>
  );
}
