'use client';

import { motion } from 'framer-motion';

interface PagePaneProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: '4xl' | '5xl' | '6xl' | '7xl';
}

export default function PagePane({ children, className = '', maxWidth = '6xl' }: PagePaneProps) {
  const maxWClass = {
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
  }[maxWidth];

  return (
    <div 
      className="w-full h-[85vh] max-h-[900px] p-4 sm:p-8 flex flex-col pointer-events-none z-10"
      style={{
        maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`glass pointer-events-auto relative mx-auto w-full flex-1 rounded-t-3xl border-t border-x border-[rgba(255,255,255,0.06)] shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-y-auto no-scrollbar ${className}`}
      >
        <div className="p-16 flex flex-col min-h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
