'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import TimelineEntry from '@/components/ui/TimelineEntry';
import PagePane from '@/components/ui/PagePane';
import MediaModal from '@/components/ui/MediaModal';
import { VENTURES, MEDIA_ENTRIES, Venture } from '@/data/content';

export default function VenturesContent() {
  const [selected, setSelected] = useState<Venture | null>(null);
  const featured = VENTURES.filter((v) => v.featured);
  const others = VENTURES.filter((v) => !v.featured);

  return (
    <PagePane maxWidth="5xl">
      <section className="section-padding pb-0">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            kicker="Ventures"
            title="Building Across Domains"
            subtitle="Serial founder spanning AI enterprise platforms, neuroscience instrumentation, renewable energy, agriculture, and media production."
          />
        </div>
      </section>

      {/* ─── FEATURED VENTURES ──────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto space-y-8">
          {featured.map((venture, i) => (
            <GlassCard key={venture.name} delay={0.1 + i * 0.1} className="overflow-hidden cursor-pointer" flat>
              <div className="h-full" onClick={() => setSelected(venture)}>
                {/* Header with medallion */}
                <div className="flex items-start gap-6 mb-8">
                  {venture.image && (
                    <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
                      <img
                        src={venture.image}
                        alt={venture.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl font-light text-white/90">
                          {venture.name}
                        </h3>
                        <p className="text-sm text-accent/70 font-light mt-2">{venture.role}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] tracking-wider text-[rgba(255,255,255,0.25)]">
                          {venture.period}
                        </span>
                        <span className="font-mono text-[10px] text-[rgba(255,255,255,0.15)]">
                          {venture.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[rgba(255,255,255,0.45)] leading-relaxed mb-8 max-w-3xl">
                  {venture.description}
                </p>

                {/* Details */}
                {venture.details.length > 0 && (
                  <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {venture.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-3 text-sm text-[rgba(255,255,255,0.35)]"
                      >
                        <span className="text-accent/40 mt-1 shrink-0">◆</span>
                        {detail}
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {venture.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center justify-center px-4 py-2 text-[10px] font-mono uppercase tracking-wider rounded-full border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] text-[rgba(255,255,255,0.35)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ─── OTHER VENTURES ─────────────────────────────────── */}
      <section className="section-padding border-t border-[rgba(255,255,255,0.03)]">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-[rgba(255,255,255,0.3)] mb-10">
            Additional Ventures
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {others.map((venture, i) => (
              <GlassCard key={venture.name} delay={0.05 * i} className="cursor-pointer" flat>
                <div className="flex items-start gap-5 mb-4" onClick={() => setSelected(venture)}>
                  {venture.image && (
                    <div className="shrink-0 w-14 h-14 rounded-full overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
                      <img
                        src={venture.image}
                        alt={venture.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-base font-medium text-white/80">{venture.name}</h4>
                      <span className="font-mono text-[10px] text-[rgba(255,255,255,0.2)] shrink-0">
                        {venture.period}
                      </span>
                    </div>
                    <p className="text-xs text-accent/60 mt-2">{venture.role}</p>
                  </div>
                </div>
                <p className="text-sm text-[rgba(255,255,255,0.35)] leading-relaxed mb-6">
                  {venture.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {venture.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center justify-center px-3 py-2 text-[9px] font-mono uppercase tracking-wider rounded border border-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.25)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FILM & MEDIA ───────────────────────────────────── */}
      <section className="section-padding border-t border-[rgba(255,255,255,0.03)]">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-[rgba(255,255,255,0.3)] mb-10">
            Film, Media & Production
          </h3>
          <div className="space-y-0">
            {MEDIA_ENTRIES.map((entry, i) => (
              <TimelineEntry
                key={entry.name}
                year={entry.period}
                title={entry.name}
                subtitle={`${entry.role} — ${entry.location}`}
                description={entry.description}
                delay={0.05 * i}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Detail Modal */}
      {selected && (
        <MediaModal
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          title={selected.name}
          subtitle={`${selected.role} · ${selected.period}`}
          description={selected.description}
          details={selected.details}
          tags={selected.tags}
          media={[]}
          medallion={selected.image}
          link={selected.link}
          color="#3DD8B0"
        />
      )}
    </PagePane>
  );
}
