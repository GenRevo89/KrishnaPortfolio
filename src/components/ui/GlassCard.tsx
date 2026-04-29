'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  glow?: boolean;
  flat?: boolean;
  id?: string;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = '',
  delay = 0,
  hover = true,
  glow = false,
  flat = false,
  id,
  onClick,
}: GlassCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        relative overflow-hidden rounded-2xl
        ${flat ? 'bg-white/[0.02] border border-white/[0.04]' : 'glass'}
        ${hover ? (flat ? 'hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500' : 'glass-hover') : ''}
        ${glow ? 'animate-border-glow' : ''}
        ${className}
      `}
      style={{ padding: '40px' }}
      onClick={onClick}
    >
      {/* Subtle top edge highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent" />
      {children}
    </motion.div>
  );
}
