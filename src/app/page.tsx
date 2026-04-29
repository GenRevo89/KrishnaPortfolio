'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { DOMAIN_CARDS } from '@/data/content';
import GlassCard from '@/components/ui/GlassCard';
import PagePane from '@/components/ui/PagePane';

export default function HomePage() {
  return (
    <PagePane maxWidth="7xl">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative flex-1 overflow-hidden min-h-[60vh]"
      >
        {/* Left: Profile Image — fills the entire left half, fades at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute top-0 left-0 h-full hidden md:block"
          style={{
            width: '50%',
            maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%), linear-gradient(to right, black 0%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%), linear-gradient(to right, black 0%, black 70%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'destination-in',
          }}
        >
          <Image
            src="/images/profilepicture.png"
            alt="Krishna Patel"
            fill
            className="object-contain object-center"
            priority
          />
        </motion.div>

        {/* Grid overlay for content alignment */}
        <div className="relative z-10 w-full h-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center min-h-[60vh] px-6">

          {/* Left spacer (image is behind via absolute) */}
          <div className="hidden md:block" />

          {/* Right: Content */}
          <div className="text-center md:text-left py-16 md:pl-12">
            {/* Mobile-only profile image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center mb-10 md:hidden"
            >
              <div className="relative w-[240px] h-[240px]">
                <Image
                  src="/images/profilepicture.png"
                  alt="Krishna Patel"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Micro kicker */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[rgba(255,255,255,0.3)]">
                ◈&nbsp;&nbsp;Portfolio&nbsp;&nbsp;◈
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-7xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1]"
            >
              <span className="text-gradient">Krishna</span>
              <br />
              <span className="text-white/90">Patel</span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-6 md:mt-8"
            >
              <p className="font-mono text-[11px] sm:text-sm tracking-[0.15em] uppercase text-[rgba(255,255,255,0.4)]">
                Entrepreneur&ensp;·&ensp;Scientist&ensp;·&ensp;Author&ensp;·&ensp;Builder
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mt-5 text-base sm:text-lg text-[rgba(255,255,255,0.35)] font-light leading-relaxed max-w-lg"
            >
              Building at the intersection of technology, biology, and human systems.
              <br className="hidden sm:block" />
              <span className="text-[rgba(255,255,255,0.2)]">
                Published in <span className="italic text-[rgba(255,255,255,0.4)]">Current Biology</span>. Eight books. Serial founder.
              </span>
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mt-8 flex items-center justify-center md:justify-start gap-4"
            >
              <Link
                href="/research"
                className="group px-6 py-4 rounded-xl border border-accent/30 bg-accent/5 text-accent text-sm font-light tracking-wide hover:bg-accent/10 hover:border-accent/50 transition-all duration-400 flex items-center gap-2"
              >
                Explore My Work
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link
                href="/about"
                className="px-6 py-4 rounded-xl border border-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.4)] text-sm font-light tracking-wide hover:text-white/70 hover:border-[rgba(255,255,255,0.12)] transition-all duration-400"
              >
                About Me
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── DOMAIN GRID ──────────────────────────────────────── */}
      <section className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Decorative divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-16" />

          {/* Section kicker */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[rgba(255,255,255,0.25)]">
              Domains of Practice
            </span>
            <div className="mt-4 mx-auto flex items-center justify-center gap-3" style={{ marginBottom: '120px' }}>
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent/30" />
              <div className="w-1.5 h-1.5 border border-accent/30 rotate-45" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent/30" />
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {DOMAIN_CARDS.map((card, i) => (
              <GlassCard key={card.href} delay={0.1 + i * 0.08} className="group" flat>
                <Link href={card.href} className="block h-full">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl border flex items-center justify-center text-xl mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      borderColor: `${card.accent}30`,
                      color: card.accent,
                      backgroundColor: `${card.accent}08`,
                    }}
                  >
                    {card.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white/90 mb-3 tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[rgba(255,255,255,0.35)] font-light leading-loose">
                    {card.subtitle}
                  </p>

                  {/* Arrow */}
                  <div className="mt-8 flex items-center gap-3 text-[rgba(255,255,255,0.15)] group-hover:text-accent transition-colors duration-300">
                    <div className="w-8 h-px bg-current" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </Link>
              </GlassCard>
            ))}
          </div>

          {/* Philosophy quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex flex-col items-center"
            style={{ marginTop: '180px', paddingBottom: '160px' }}
          >
            <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent mb-16" />
            <blockquote className="font-serif text-lg md:text-xl lg:text-2xl font-light text-[rgba(255,255,255,0.5)] leading-relaxed italic text-center px-8">
              &ldquo;The universe is a fundamental informational process evolving toward states of agency
              and self-awareness through criticality and phase transitions.&rdquo;
            </blockquote>
            <p className="mt-6 font-mono text-[9px] tracking-[0.25em] uppercase text-[rgba(255,255,255,0.2)] text-center">
              — Theory of Intentionality
            </p>
            <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent mt-16" style={{ marginBottom: '100px' }} />
          </motion.div>
        </div>
      </section>
    </PagePane>
  );
}
