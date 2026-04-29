'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import PagePane from '@/components/ui/PagePane';
import MediaModal from '@/components/ui/MediaModal';
import { DPF_ORDERS, ACADEMIC_ENTRIES, DPFOrder } from '@/data/content';

function FadeSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ResearchContent() {
  const [selectedOrder, setSelectedOrder] = useState<DPFOrder | null>(null);

  return (
    <PagePane maxWidth="5xl">
      {/* ─── HERO BANNER ────────────────────────────────────── */}
      <section className="section-padding pb-0">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            kicker="Research"
            title="The Informational Universe"
            subtitle="A unified framework positing that reality is fundamentally informational — and that agency, meaning, and consciousness emerge at criticality."
          />
        </div>
      </section>

      {/* ─── THEORY OF INTENTIONALITY ───────────────────────── */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-accent rotate-45" />
              <h3 className="font-serif text-2xl md:text-3xl font-light">
                Theory of Intentionality
              </h3>
            </div>
            <p className="text-[rgba(255,255,255,0.45)] leading-relaxed max-w-3xl mb-8">
              A 171-page manuscript presenting a unified cosmological, physical, and philosophical
              framework. ToI posits the universe as a fundamental informational process evolving
              toward agency through criticality and phase transitions.
            </p>
          </FadeSection>

          {/* Postulates */}
          <FadeSection delay={0.1}>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-accent/70 mb-6">
              Fundamental Postulates
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {[
                {
                  num: 'I',
                  title: 'Informational Ontology',
                  text: 'Reality is fundamentally informational. All entities — matter, energy, space, time — are emergent patterns in an underlying informational substrate.',
                },
                {
                  num: 'II',
                  title: 'Criticality Attractor',
                  text: 'Complex systems with threshold dynamics and dissipation naturally evolve toward the critical state. Criticality is a universal attractor.',
                },
                {
                  num: 'III',
                  title: 'Phase Transition Genesis',
                  text: 'Qualitative novelty — structure, life, mind — arises only at singularities where continuous descriptions break down.',
                },
                {
                  num: 'IV',
                  title: 'Chimeric Phase Creativity',
                  text: 'The edge of chaos is the locus of creativity, maintained by Gödelian dynamics that prevent equilibrium and generate power laws.',
                },
                {
                  num: 'V',
                  title: 'Intentionality Emergence',
                  text: 'At sufficient criticality, Intentionality emerges as a comparable contribution to dynamics alongside traditional causality.',
                },
              ].map((p, i) => (
                <GlassCard key={i} delay={0.1 + i * 0.06} flat>
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-2xl text-accent/40 font-light mt-1 shrink-0">
                      {p.num}
                    </span>
                    <div>
                      <h5 className="text-white/80 font-medium mb-4">{p.title}</h5>
                      <p className="text-sm text-[rgba(255,255,255,0.35)] leading-relaxed">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </FadeSection>

          {/* Master Equations */}
          <FadeSection delay={0.1} className="mt-16">
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-accent/70 mb-6">
              Master Equations
            </h4>
            <div className="space-y-6">
              {[
                {
                  label: 'Information Conservation',
                  eq: 'd/dt ( Φ + Σ + I_matter ) = 0',
                  desc: 'Total cosmic information is conserved; evolution transforms Pure Information into Structured Information.',
                },
                {
                  label: 'Intentionality Emergence',
                  eq: 'I(S) = θ(ξ − ξ_c) · ∇_goal F[S]',
                  desc: 'Intentionality emerges when correlation length ξ exceeds threshold ξ_c.',
                },
                {
                  label: 'Causal-Intentional Balance',
                  eq: 'dS/dt = (1 − α)C(S) + α·I(S)',
                  desc: 'System trajectory is a weighted sum of causation C and purposeful intentionality I.',
                },
                {
                  label: 'The Gödelian Engine',
                  eq: 'dG/dt = ε Σ_k λ_k |G_k⟩⟨G_k| · ρ_system',
                  desc: 'Ensures the system remains incomplete and exploratory, preventing equilibrium.',
                },
              ].map((eq, i) => (
                <GlassCard key={i} delay={0.05 * i} flat>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="shrink-0">
                      <span className="font-mono text-[10px] tracking-wider uppercase text-accent/50">
                        {eq.label}
                      </span>
                      <div className="mt-3 font-mono text-sm md:text-base text-white/80 bg-[rgba(61,216,176,0.04)] border border-accent/10 rounded-lg px-6 py-2.5.5 inline-block">
                        {eq.eq}
                      </div>
                    </div>
                    <p className="text-sm text-[rgba(255,255,255,0.35)] leading-relaxed">
                      {eq.desc}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </FadeSection>

          {/* Dark Sector */}
          <FadeSection delay={0.1} className="mt-16">
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-accent/70 mb-6">
              The Informational Dark Sector
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <GlassCard glow flat>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-indigo-400 to-violet-600" />
                  <h5 className="text-white/80 font-medium">Dark Energy as Pure Information (Φ)</h5>
                </div>
                <p className="text-sm text-[rgba(255,255,255,0.35)] leading-relaxed">
                  The unstructured potential of the vacuum. Represents the possibility space of the
                  universe and drives expansion by creating new informational capacity.
                </p>
              </GlassCard>
              <GlassCard glow flat>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-600" />
                  <h5 className="text-white/80 font-medium">Dark Matter as Primitive Information (Σ)</h5>
                </div>
                <p className="text-sm text-[rgba(255,255,255,0.35)] leading-relaxed">
                  The structured, correlated memory of cosmic history. Acts as informational
                  scaffolding that directs the formation of visible structure.
                </p>
              </GlassCard>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── DYNAMIC PHENOMENOLOGY FRAMEWORK ────────────────── */}
      <section className="section-padding border-t border-[rgba(255,255,255,0.03)]">
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#EC4899] rotate-45" />
              <h3 className="font-serif text-2xl md:text-3xl font-light">
                Dynamic Phenomenology
              </h3>
            </div>
            <p className="text-[rgba(255,255,255,0.45)] leading-relaxed max-w-3xl mb-12">
              A nine-order architecture mapping kinematic derivatives to philosophical,
              mathematical, and operational domains. Serves as the binding corporate
              constitution for BasaltHQ Inc.
            </p>
          </FadeSection>

          {/* Nine Orders */}
          <div className="space-y-10">
            {DPF_ORDERS.map((order, i) => (
              <GlassCard key={order.order} delay={0.05 * i} className="group cursor-pointer" flat>
                <div className="flex flex-col md:flex-row gap-6 md:gap-10" onClick={() => setSelectedOrder(order)}>
                  {/* Order number */}
                  <div className="shrink-0 flex md:flex-col items-center md:items-start gap-3 md:gap-2">
                    <span className="font-serif text-3xl md:text-5xl text-accent/30 font-light leading-none">
                      {order.order}
                    </span>
                    <span className="font-mono text-[10px] tracking-wider uppercase text-[rgba(255,255,255,0.25)]">
                      {order.derivative}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h4 className="text-xl md:text-2xl text-white/90 font-medium tracking-wide">
                        {order.name}
                      </h4>
                      {order.japanese && (
                        <span className="text-xl md:text-2xl font-serif text-accent/70 font-light">
                          {order.japanese}
                        </span>
                      )}
                      <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest border border-accent/20 text-accent/70 bg-accent/5 ml-auto md:ml-0">
                        {order.theme}
                      </span>
                    </div>
                    <p className="text-base text-[rgba(255,255,255,0.5)] leading-relaxed italic mb-5">
                      "{order.philosophy}"
                    </p>
                    <p className="text-sm md:text-base text-[rgba(255,255,255,0.4)] leading-relaxed">
                      {order.principle}
                    </p>
                  </div>

                  {/* Note image */}
                  {order.image && (
                    <div className="shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 shadow-xl">
                      <img
                        src={order.image}
                        alt={`${order.name} notes`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESERVOIR COMPUTER ─────────────────────────────── */}
      <section className="section-padding border-t border-[rgba(255,255,255,0.03)]">
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#F59E0B] rotate-45" />
              <h3 className="font-serif text-2xl md:text-3xl font-light">
                Microtubule Cymatic Analog Reservoir Computer
              </h3>
            </div>
          </FadeSection>

          <GlassCard delay={0.1} glow flat>
            <div className="flex items-start gap-3 mb-4">
              <span className="inline-flex items-center justify-center px-3 py-2 rounded text-[10px] font-mono uppercase tracking-wider bg-[#F59E0B]/10 text-[#F59E0B]/80 border border-[#F59E0B]/20">
                DoD Grant
              </span>
              <span className="inline-flex items-center justify-center px-3 py-2 rounded text-[10px] font-mono uppercase tracking-wider bg-accent/10 text-accent/80 border border-accent/20">
                Active Research
              </span>
            </div>
            <p className="text-[rgba(255,255,255,0.5)] leading-relaxed mb-6 max-w-3xl">
              A novel unconventional computing architecture inspired by biological cytoskeletal
              dynamics. This project bridges Mechanical Engineering and Neuroscience, positing
              that the brain&apos;s information processing may rely on cymatic resonance within the
              microtubule network.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Domain', value: 'Unconventional Computing / Reservoir Computing' },
                { label: 'Foundation', value: 'Synchronization Theory & Chaos Theory' },
                { label: 'Status', value: 'Simulation → Physical Prototype' },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]">
                  <span className="font-mono text-[10px] tracking-wider uppercase text-[rgba(255,255,255,0.25)] block mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm text-[rgba(255,255,255,0.6)]">{item.value}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ─── PUBLICATIONS & PRESENTATIONS ───────────────────── */}
      <section className="section-padding border-t border-[rgba(255,255,255,0.03)]">
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-[#0EA5E9] rotate-45" />
              <h3 className="font-serif text-2xl md:text-3xl font-light">
                Academic Publications & Presentations
              </h3>
            </div>
          </FadeSection>

          <div className="space-y-6">
            {ACADEMIC_ENTRIES.map((entry, i) => (
              <GlassCard key={i} delay={0.05 * i} flat>
                <div className="h-full flex flex-col">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className={`px-3 py-2 rounded text-[10px] font-mono uppercase tracking-wider border ${
                        entry.type === 'publication'
                          ? 'bg-[#F59E0B]/10 text-[#F59E0B]/80 border-[#F59E0B]/20'
                          : entry.type === 'lecture'
                          ? 'bg-accent/10 text-accent/80 border-accent/20'
                          : 'bg-[rgba(255,255,255,0.03)] text-[rgba(255,255,255,0.4)] border-[rgba(255,255,255,0.08)]'
                      }`}
                    >
                      {entry.type}
                    </span>
                    <span className="font-mono text-[10px] text-[rgba(255,255,255,0.25)]">
                      {entry.date}
                    </span>
                  </div>
                  <h4 className={`text-base md:text-lg font-medium mb-1 ${entry.type === 'publication' ? 'text-[#F59E0B]/90' : 'text-white/80'}`}>
                    {entry.title}
                  </h4>
                  {entry.authors && (
                    <p className="text-xs text-[rgba(255,255,255,0.35)] font-mono mb-2">
                      {entry.authors}
                    </p>
                  )}
                  <p className="text-sm text-[rgba(255,255,255,0.35)] italic">{entry.venue}</p>
                  {(entry.link || entry.doi) && (
                    <a
                      href={entry.link || `https://doi.org/${entry.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block font-mono text-xs text-accent/60 hover:text-accent transition-colors"
                    >
                      {entry.link ? 'View Publication ↗' : `DOI: ${entry.doi} ↗`}
                    </a>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      {/* DPF Detail Modal */}
      {selectedOrder && (
        <MediaModal
          isOpen={!!selectedOrder}
          onClose={() => setSelectedOrder(null)}
          title={`Order ${selectedOrder.order}: ${selectedOrder.name}`}
          subtitle={`${selectedOrder.derivative} — ${selectedOrder.theme}`}
          description={selectedOrder.principle}
          details={[
            `Philosophy: ${selectedOrder.philosophy}`,
            `Practical: ${selectedOrder.practical}`,
          ]}
          media={selectedOrder.image ? [{ type: 'image' as const, src: selectedOrder.image }] : []}
          color="#EC4899"
        />
      )}
    </PagePane>
  );
}
