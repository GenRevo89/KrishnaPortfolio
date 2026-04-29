'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import TimelineEntry from '@/components/ui/TimelineEntry';
import PagePane from '@/components/ui/PagePane';
import { EDUCATION, SKILLS } from '@/data/content';

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

export default function AboutContent() {
  return (
    <PagePane maxWidth="6xl">
      <section className="section-padding pb-0">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            kicker="About"
            title="Krishna Patel"
            subtitle="Polymathic serial entrepreneur and published author operating at the intersection of technology, biology, and human systems."
          />
        </div>
      </section>

      {/* ─── BIO ────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Main bio */}
            <div className="lg:col-span-3">
              <FadeSection>
                <div className="space-y-6 text-[rgba(255,255,255,0.5)] leading-relaxed">
                  <p>
                    Based in Ponderosa, New Mexico, Krishna Patel brings dual expertise in the sciences
                    and the humanities to every venture. With{' '}
                    <span className="text-white/80">Summa Cum Laude</span> degrees in both{' '}
                    <span className="text-accent/80">Biochemistry</span> and{' '}
                    <span className="text-accent/80">English Studies</span> from the University of New
                    Mexico — graduating at the top of both classes independently — his work defies
                    disciplinary boundaries.
                  </p>
                  <p>
                    He pursued an interdisciplinary{' '}
                    <span className="text-white/80">PhD in Mechanical Engineering and Neuroscience</span>{' '}
                    at UNM, researching reservoir computing, synchronization, and chaos theory. This
                    work culminated in the design of the{' '}
                    <span className="text-[#F59E0B]/80">
                      Microtubule Cymatic Analog Reservoir Computer
                    </span>
                    , initially supported by a Department of Defense grant.
                  </p>
                  <p>
                    He is published in{' '}
                    <span className="text-white/80 italic">Current Biology</span> (2024) for research
                    on stem cell-specific ecdysone signaling and Drosophila sleep homeostasis. He is
                    the author of{' '}
                    <span className="text-white/80">eight published books</span> spanning economics,
                    phenomenology, organizational theory, postcolonial literary criticism, and a 4,700-line
                    Miltonic epic poem.
                  </p>
                  <p>
                    As Founder and Chairman of{' '}
                    <span className="text-accent/80">BasaltHQ</span>, he builds production-grade AI
                    agent systems including multi-agent architectures using Microsoft AutoGen and
                    real-time voice AI via WebRTC. The platform serves diverse business verticals with
                    enterprise-grade technology through four integrated products.
                  </p>
                  <p>
                    His theoretical work — the{' '}
                    <span className="text-white/80">Theory of Intentionality</span> — presents a
                    unified cosmological framework positing the universe as a fundamental informational
                    process. The{' '}
                    <span className="text-white/80">Dynamic Phenomenology Framework</span> serves as
                    the binding corporate constitution for BasaltHQ, codified in its Certificate of
                    Incorporation and Bylaws.
                  </p>
                </div>
              </FadeSection>
            </div>

            {/* Sidebar: Quick facts */}
            <div className="lg:col-span-2">
              <FadeSection delay={0.2}>
                <GlassCard hover={false} flat>
                  <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent/60 mb-6">
                    At a Glance
                  </h4>
                  <div className="h-full space-y-8">
                    {[
                      { label: 'Location', value: 'Ponderosa, New Mexico' },
                      { label: 'Email', value: 'krishnapatel@mac.com', href: 'mailto:krishnapatel@mac.com' },
                      {
                        label: 'LinkedIn',
                        value: 'krishna-patel-89039120',
                        href: 'https://www.linkedin.com/in/krishna-patel-89039120/',
                      },
                      { label: 'GitHub', value: 'GenRevo89', href: 'https://github.com/GenRevo89' },
                      { label: 'Publications', value: '8 Books + Current Biology' },
                      { label: 'Ventures Founded', value: '7+' },
                      { label: 'Clearance', value: 'US Citizen, Clearance Eligible' },
                    ].map((item) => (
                      <div key={item.label}>
                        <span className="font-mono text-[10px] tracking-wider uppercase text-[rgba(255,255,255,0.25)] block mb-2">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-accent/70 hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm text-[rgba(255,255,255,0.6)]">{item.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Awards */}
                <GlassCard className="p-6 mt-5" hover={false} glow>
                  <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#F59E0B]/60 mb-5">
                    Awards & Honors
                  </h4>
                  <div className="space-y-5">
                    {[
                      'Summa Cum Laude — Biochemistry (UNM)',
                      'Summa Cum Laude — English Studies (UNM)',
                      'Richard B. Loftfield Award',
                      'Elsie & James Demas Scholarship',
                      'Top of Graduating Class (×2)',
                    ].map((award) => (
                      <div key={award} className="flex items-start gap-2 text-sm text-[rgba(255,255,255,0.5)]">
                        <span className="text-[#F59E0B]/50 mt-0.5 shrink-0">◆</span>
                        {award}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ──────────────────────────────────────── */}
      <section className="section-padding border-t border-[rgba(255,255,255,0.03)]">
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-accent/60 mb-10">
              Education
            </h3>
          </FadeSection>

          <div className="max-w-2xl">
            {EDUCATION.map((edu, i) => (
              <TimelineEntry
                key={edu.degree}
                year={edu.year || ''}
                title={edu.degree}
                subtitle={`${edu.institution} — ${edu.location}`}
                description={
                  edu.description ||
                  (edu.honors ? edu.honors.join(' · ') : '')
                }
                tags={edu.honors?.map((h) =>
                  h.includes('Summa') ? '★ ' + h : h
                )}
                accent={edu.honors?.some((h) => h.includes('Summa'))}
                delay={0.05 * i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─────────────────────────────────────────── */}
      <section className="section-padding border-t border-[rgba(255,255,255,0.03)]">
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-accent/60 mb-16">
              Technical Skills
            </h3>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SKILLS.map((category, i) => (
              <GlassCard key={category.name} delay={0.08 * i} className="p-8">
                <h4 className="text-base font-medium text-white/80 mb-6">{category.name}</h4>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center justify-center px-3 py-2 text-xs font-light rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] text-[rgba(255,255,255,0.5)] hover:border-accent/20 hover:text-accent/70 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY ──────────────────────────────────────── */}
      <section className="section-padding border-t border-[rgba(255,255,255,0.03)]">
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-accent/60 mb-10">
              Community & Service
            </h3>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard delay={0.1}>
              <h4 className="text-base font-medium text-white/80 mb-4">
                Southwest Environmental Education Cooperative
              </h4>
              <p className="text-xs text-accent/60 mb-4">Advisory Board &amp; Digital Media</p>
              <p className="text-sm text-[rgba(255,255,255,0.35)] leading-relaxed">
                Regional strategy for environmental literacy and digital media outreach.
              </p>
            </GlassCard>
            <GlassCard delay={0.15}>
              <h4 className="text-base font-medium text-white/80 mb-4">
                India Day Albuquerque
              </h4>
              <p className="text-xs text-accent/60 mb-4">Co-Founder / Operations</p>
              <p className="text-sm text-[rgba(255,255,255,0.35)] leading-relaxed">
                Built operational foundation for annual Indian Independence Day celebration.
                Designed sponsorship packets and raised community funding.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ─── CLOSING STATEMENT ──────────────────────────────── */}
      <section className="section-padding w-full flex justify-center">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
          <FadeSection className="w-full flex flex-col items-center justify-center text-center">
            <div className="w-full accent-line mb-8" />
            <blockquote className="w-full font-serif text-xl md:text-2xl font-light text-[rgba(255,255,255,0.5)] leading-relaxed italic text-center">
              &ldquo;Bringing dual expertise in biochemistry and the humanities to create solutions
              that are both technically rigorous and deeply human-centered.&rdquo;
            </blockquote>
            <div className="w-full mt-8 flex items-center justify-center gap-4">
              <a
                href="mailto:krishnapatel@mac.com"
                className="px-6 py-3 rounded-xl border border-accent/30 bg-accent/5 text-accent text-sm font-light tracking-wide hover:bg-accent/10 hover:border-accent/50 transition-all duration-400"
              >
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-patel-89039120/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.4)] text-sm font-light tracking-wide hover:text-white/70 hover:border-[rgba(255,255,255,0.12)] transition-all duration-400"
              >
                LinkedIn ↗
              </a>
            </div>
            <div className="w-full accent-line mt-8" />
          </FadeSection>
        </div>
      </section>
    </PagePane>
  );
}
