'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEntryProps {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  accent?: boolean;
  delay?: number;
}

export default function TimelineEntry({
  year,
  title,
  subtitle,
  description,
  tags,
  accent = false,
  delay = 0,
}: TimelineEntryProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.06)] group-last:bg-gradient-to-b group-last:from-[rgba(255,255,255,0.06)] group-last:to-transparent" />

      {/* Timeline dot */}
      <div className={`absolute left-0 top-1 w-2 h-2 -translate-x-[3.5px] rotate-45 border ${accent ? 'border-accent bg-accent/20' : 'border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)]'} transition-colors duration-300 group-hover:border-accent group-hover:bg-accent/20`} />

      {/* Year */}
      <span className="font-mono text-xs text-[rgba(255,255,255,0.3)] tracking-wider">
        {year}
      </span>

      {/* Title */}
      <h3 className={`mt-1 text-lg md:text-xl font-medium ${accent ? 'text-accent' : 'text-white'}`}>
        {title}
      </h3>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-0.5 text-sm text-[rgba(255,255,255,0.4)] italic">{subtitle}</p>
      )}

      {/* Description */}
      <p className="mt-3 text-sm md:text-base text-[rgba(255,255,255,0.5)] leading-relaxed max-w-xl">
        {description}
      </p>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center justify-center px-4 py-2 text-[10px] font-mono uppercase tracking-wider rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] text-[rgba(255,255,255,0.4)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
