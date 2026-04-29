'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  caption?: string;
}

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  description?: string;
  details?: string[];
  tags?: string[];
  media: MediaItem[];
  color?: string;
  medallion?: string;
  link?: string;
  children?: ReactNode;
}

export default function MediaModal({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  details,
  tags,
  media,
  color = '#3DD8B0',
  medallion,
  link,
  children,
}: MediaModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  // Pause all videos when closing
  useEffect(() => {
    if (!isOpen && contentRef.current) {
      contentRef.current.querySelectorAll('video').forEach((v) => v.pause());
    }
  }, [isOpen]);

  // Don't render on server
  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-[10000] w-10 h-10 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.5)] flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>

          {/* Modal Shell */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-[95%] sm:w-[90%] max-w-3xl relative mt-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Protruding Medallion */}
            {medallion && (
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-[100] shrink-0 w-32 h-32 rounded-full overflow-hidden border border-[rgba(255,255,255,0.15)] bg-black p-1 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[rgba(255,255,255,0.02)]">
                  <img src={medallion} alt="" className="w-full h-full object-contain" />
                </div>
              </div>
            )}

            {/* Scrollable Content Container */}
            <div
              className="w-full max-h-[80vh] overflow-y-auto rounded-3xl border border-[rgba(255,255,255,0.08)] shadow-2xl relative"
              style={{
                backgroundColor: 'rgba(12, 12, 14, 0.98)',
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255,255,255,0.1) transparent',
              }}
            >
              {/* Indestructible Padding Wrapper */}
              <div className="px-6 pb-10 sm:px-12 sm:pb-12 md:px-16 md:pb-16 w-full flex flex-col items-center gap-12 md:gap-16">
                
                {/* Physical spacer to push content below the protruding medallion */}
                <div className="w-full h-16 sm:h-20 md:h-24 shrink-0"></div>

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-8 w-full">
                  <div className="w-full flex flex-col items-center gap-4">
                    <h2 className="font-serif text-3xl md:text-5xl font-light text-white/95">
                      {title}
                    </h2>
                    {subtitle && (
                      <p className="text-base md:text-lg text-[rgba(255,255,255,0.45)] font-light tracking-wide">{subtitle}</p>
                    )}
                  </div>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-white/80 hover:text-white transition-all font-mono text-xs tracking-[0.2em] uppercase border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)] shadow-lg"
                      style={{ paddingTop: '14px', paddingBottom: '14px', paddingLeft: '32px', paddingRight: '32px', lineHeight: '1.5' }}
                    >
                      Visit Site
                    </a>
                  )}
                </div>

              {/* Description */}
              {description && (
                <div className="w-full max-w-2xl">
                  <p className="text-[rgba(255,255,255,0.7)] text-lg md:text-xl leading-relaxed text-center font-light">
                    {description}
                  </p>
                </div>
              )}

              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center justify-center font-mono uppercase tracking-[0.15em] rounded-full border text-[rgba(255,255,255,0.6)]"
                      style={{
                        borderColor: `${color}25`,
                        backgroundColor: `${color}08`,
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        fontSize: '11px',
                        lineHeight: '1.5'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Details */}
              {details && details.length > 0 && (
                <div className="w-full flex justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 w-full max-w-2xl">
                    {details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-3 text-sm md:text-base text-[rgba(255,255,255,0.65)] leading-relaxed font-light"
                      >
                        <span className="mt-1.5 shrink-0 text-[10px]" style={{ color: color }}>◆</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Custom children content */}
              <div className="w-full max-w-2xl">
                {children}
              </div>

              {/* Media Gallery */}
              {media.length > 0 && (
                <div className="mt-6 border-t border-white/[0.05] pt-8 w-full">
                  {media.length > 1 && (
                    <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.25)] mb-6 text-center">
                      Gallery
                    </h4>
                  )}
                  <div className={`grid gap-4 ${media.length === 1 ? 'place-items-center' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {media.map((item, idx) => (
                      <div
                        key={idx}
                        className={`relative rounded-xl overflow-hidden border border-[rgba(255,255,255,0.06)] ${
                          idx === 0 && media.length > 1 ? 'md:col-span-2' : ''
                        } ${media.length === 1 ? 'w-full max-w-2xl' : ''}`}
                      >
                        {item.type === 'image' ? (
                          <img
                            src={item.src}
                            alt={item.caption || title}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <video
                            src={item.src}
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full h-auto"
                            style={{ maxHeight: '60vh' }}
                          />
                        )}
                        {item.caption && (
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent">
                            <p className="text-[11px] text-white/60 font-mono">{item.caption}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
