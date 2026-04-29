'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import PagePane from '@/components/ui/PagePane';
import MediaModal, { MediaItem } from '@/components/ui/MediaModal';
import { PUBLICATIONS, Publication } from '@/data/content';

const SERIES_INFO: Record<string, { label: string; description: string }> = {
  'utility-network': {
    label: 'The Utility Network',
    description:
      'A groundbreaking series of treatises and manifestos mapping the architecture of a new kind of civilization — a blueprint for a network state united by meaningful work.',
  },
  meditations: {
    label: 'Meditations Series',
    description:
      'Applies The Utility Network philosophy to historical, literary, and cultural analysis — deep meditations on how ideas shape civilizations.',
  },
  cinema: {
    label: 'Cinema Series',
    description:
      'Translates complex ideas about power, identity, and transformation into compelling human stories through cinematic form.',
  },
  epic: {
    label: 'Epic Series',
    description:
      'The literary pinnacle — long-form verse narratives in the tradition of Homer, Virgil, Dante, and Milton.',
  },
};

const SERIES_ORDER = ['utility-network', 'meditations', 'cinema', 'epic'] as const;

export default function PublicationsContent() {
  const [selected, setSelected] = useState<Publication | null>(null);

  return (
    <PagePane maxWidth="5xl">
      <section className="section-padding pb-0">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            kicker="Publications"
            title="The Written Word"
            subtitle="Eight published books, a political thriller screenplay, and a 4,700-line Miltonic epic — all exploring the architecture of meaningful civilization."
          />
        </div>
      </section>

      {/* ─── SERIES SECTIONS ────────────────────────────────── */}
      {SERIES_ORDER.map((seriesKey) => {
        const info = SERIES_INFO[seriesKey];
        const books = PUBLICATIONS.filter((p) => p.series === seriesKey);
        if (books.length === 0) return null;

        return (
          <SeriesSection key={seriesKey} info={info} books={books} onSelect={setSelected} />
        );
      })}

      {/* Detail Modal */}
      {selected && (
        <MediaModal
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          title={selected.title}
          subtitle={selected.subtitle}
          description={selected.description}
          tags={selected.keyConcepts}
          media={selected.cover ? [{ type: 'image' as const, src: selected.cover }] : []}
          color={selected.color}
          link={selected.link}
        >
          <p className="text-[11px] font-mono tracking-wider text-[rgba(255,255,255,0.25)] uppercase mb-2">
            Audience
          </p>
          <p className="text-sm text-[rgba(255,255,255,0.5)] mb-8">
            {selected.audience}
          </p>
        </MediaModal>
      )}
    </PagePane>
  );
}

function SeriesSection({
  info,
  books,
  onSelect,
}: {
  info: { label: string; description: string };
  books: typeof PUBLICATIONS;
  onSelect: (book: Publication) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="section-padding border-t border-[rgba(255,255,255,0.03)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-accent/60 mb-2">
            {info.label}
          </h3>
          <p className="text-sm text-[rgba(255,255,255,0.35)] max-w-2xl leading-relaxed">
            {info.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book, i) => (
            <GlassCard key={book.title} delay={0.1 + i * 0.1} className="group overflow-hidden cursor-pointer" flat>
              <div className="h-full flex flex-col" onClick={() => onSelect(book)}>
                {/* Book Cover */}
                {book.cover && (
                  <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden mb-8 border border-[rgba(255,255,255,0.06)]">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.6)] to-transparent" />
                  </div>
                )}

                {/* Color accent bar */}
                <div
                  className="w-10 h-1 rounded-full mb-6 transition-all duration-500 group-hover:w-16"
                  style={{ backgroundColor: book.color }}
                />

                {/* Title */}
                <h4 className="font-serif text-xl md:text-2xl font-light text-white/90 mb-3 leading-tight">
                  {book.title}
                </h4>
                <p className="text-sm text-[rgba(255,255,255,0.35)] italic mb-6">
                  {book.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[rgba(255,255,255,0.4)] leading-relaxed mb-8">
                  {book.description}
                </p>

                {/* Key Concepts */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {book.keyConcepts.map((concept) => (
                    <span
                      key={concept}
                      className="inline-flex items-center justify-center px-4 py-2 text-[10px] font-mono uppercase tracking-wider rounded-full border text-[rgba(255,255,255,0.4)]"
                      style={{
                        borderColor: `${book.color}25`,
                        backgroundColor: `${book.color}08`,
                      }}
                    >
                      {concept}
                    </span>
                  ))}
                </div>

                {/* Audience */}
                <p className="text-[10px] font-mono tracking-wider text-[rgba(255,255,255,0.2)] uppercase">
                  For: {book.audience}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
