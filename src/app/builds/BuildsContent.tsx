'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import PagePane from '@/components/ui/PagePane';
import MediaModal, { MediaItem } from '@/components/ui/MediaModal';
import { BUILDS } from '@/data/content';

const CATEGORY_COLORS: Record<string, string> = {
  Neuroscience: '#3DD8B0',
  'Lab Engineering': '#0EA5E9',
  Agriculture: '#10B981',
  'Unconventional Computing': '#F59E0B',
};

function buildMedia(build: typeof BUILDS[number]): MediaItem[] {
  const items: MediaItem[] = [];
  if (build.images) {
    build.images.forEach((src) => items.push({ type: 'image', src }));
  }
  if (build.videos) {
    build.videos.forEach((src) => items.push({ type: 'video', src }));
  }
  return items;
}

export default function BuildsContent() {
  const [selected, setSelected] = useState<typeof BUILDS[number] | null>(null);

  return (
    <PagePane maxWidth="5xl">
      <section className="section-padding pb-0">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            kicker="Builds"
            title="Hardware & Lab Engineering"
            subtitle="From Drosophila sleep-tracking arrays to hydroponic grows and unconventional computing prototypes — hands-on engineering across domains."
          />
        </div>
      </section>

      {/* ─── BUILDS GRID ────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Bento-style grid — first two items are large */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {BUILDS.map((build, i) => {
              const color = CATEGORY_COLORS[build.category] || '#3DD8B0';
              const isLarge = i < 2;
              const hasMedia = (build.images && build.images.length > 0) || (build.videos && build.videos.length > 0);

              return (
                <div
                  key={build.title}
                  className={`cursor-pointer ${isLarge && i === 0 ? 'lg:col-span-2' : ''}`}
                  onClick={() => setSelected(build)}
                >
                  <GlassCard
                    delay={0.08 * i}
                    className="group overflow-hidden"
                    flat
                  >
                    <div className="h-full">
                      {/* Image zone — real photos or generative fallback */}
                      {build.images && build.images.length > 0 ? (
                        <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.04)]">
                          <img
                            src={build.images[0]}
                            alt={build.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.5)] to-transparent" />
                          {hasMedia && (
                            <div className="absolute bottom-3 left-3 flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.1)]">
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="white" fillOpacity="0.6">
                                <rect x="0" y="0" width="4" height="4" rx="0.5" />
                                <rect x="6" y="0" width="4" height="4" rx="0.5" />
                                <rect x="0" y="6" width="4" height="4" rx="0.5" />
                                <rect x="6" y="6" width="4" height="4" rx="0.5" />
                              </svg>
                              <span className="text-[10px] font-mono text-white/60">
                                {(build.images?.length || 0) + (build.videos?.length || 0)}
                              </span>
                            </div>
                          )}
                        </div>
                      ) : build.videos && build.videos.length > 0 ? (
                        <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)]">
                          <video
                            src={build.videos[0]}
                            muted
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.5)] to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.2)] flex items-center justify-center">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="white" fillOpacity="0.8">
                                <path d="M4 2l10 6-10 6V2z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <ImagePlaceholder build={build} color={color} />
                      )}

                      {/* Category + Title */}
                      <div className="mt-8 flex flex-wrap items-center gap-3 mb-4">
                        <span
                          className="inline-flex items-center justify-center px-4 py-2 text-[10px] font-mono uppercase tracking-wider rounded-full border"
                          style={{
                            borderColor: `${color}30`,
                            color: `${color}cc`,
                            backgroundColor: `${color}0a`,
                          }}
                        >
                          {build.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl md:text-2xl font-light text-white/90 mb-4">
                        {build.title}
                      </h3>

                      <p className="text-sm text-[rgba(255,255,255,0.4)] leading-relaxed mb-8 max-w-xl">
                        {build.description}
                      </p>

                      {/* Specs */}
                      <div className={`grid gap-3 ${isLarge ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                        {build.specs.map((spec) => (
                          <div
                            key={spec}
                            className="flex items-start gap-3 text-sm text-[rgba(255,255,255,0.3)]"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: `${color}60` }} />
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selected && (
        <MediaModal
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          title={selected.title}
          subtitle={selected.category}
          description={selected.description}
          details={selected.specs}
          media={buildMedia(selected)}
          color={CATEGORY_COLORS[selected.category] || '#3DD8B0'}
        />
      )}
    </PagePane>
  );
}

/** Generative placeholder for build images — a unique pattern per build */
function ImagePlaceholder({ build, color }: { build: typeof BUILDS[number]; color: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Generate a deterministic grid pattern based on title hash
  const hash = build.title.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const cells: boolean[] = [];
  for (let i = 0; i < 64; i++) {
    cells.push(((hash * (i + 7) * 31) % 100) < 35);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="relative w-full aspect-[2/1] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)]"
    >
      {/* Generative Conway-style grid */}
      <div className="absolute inset-0 grid grid-cols-16 grid-rows-4 gap-[1px] p-4 opacity-30">
        {cells.map((alive, i) => (
          <div
            key={i}
            className="rounded-[1px] transition-all duration-1000"
            style={{
              backgroundColor: alive ? `${color}40` : 'transparent',
              boxShadow: alive ? `0 0 6px ${color}20` : 'none',
            }}
          />
        ))}
      </div>

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div
            className="w-12 h-12 mx-auto mb-3 rounded-xl border flex items-center justify-center"
            style={{ borderColor: `${color}20`, backgroundColor: `${color}08` }}
          >
            <span className="text-lg" style={{ color: `${color}80` }}>⬡</span>
          </div>
          <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: `${color}40` }}>
            {build.category}
          </p>
        </div>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${color}05 0%, transparent 50%, ${color}03 100%)`,
        }}
      />
    </motion.div>
  );
}
