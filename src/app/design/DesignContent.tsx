'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import PagePane from '@/components/ui/PagePane';
import MediaModal, { MediaItem } from '@/components/ui/MediaModal';

const CATEGORIES = ['All', 'Interior', 'Graphic', 'Photography', 'Film', 'Animation'] as const;
type Category = (typeof CATEGORIES)[number];

interface DesignProject {
  title: string;
  category: Exclude<Category, 'All'>;
  description: string;
  year: string;
  tags: string[];
  color: string;
  images?: string[];
  videos?: string[];
}

const PROJECTS: DesignProject[] = [
  {
    title: 'Krishna Patel Design Studio',
    category: 'Graphic',
    description:
      'A decade of brand identities, marketing materials, web design, and visual systems for diverse clients spanning tech startups, hospitality, and cultural organizations.',
    year: '2011 – Present',
    tags: ['Branding', 'Web Design', 'Visual Identity', 'Print', 'Motion Graphics'],
    color: '#0EA5E9',
    images: [
      '/images/design/graphic/IMG_2490.JPG',
      '/images/design/graphic/IMG_2491.JPG',
      '/images/design/graphic/IMG_2492.JPG',
      '/images/design/graphic/IMG_2493.JPG',
      '/images/design/graphic/IMG_2494.JPG',
      '/images/design/graphic/preroll.JPEG',
    ],
    videos: [
      '/images/design/animations/NowHiringBussers_web.mp4',
      '/images/design/animations/SobremesaDiscovery_web.mp4',
      '/images/design/animations/SobremesaHiringCooks_web.mp4',
      '/images/design/animations/UnderNewManagement_web.mp4',
      '/images/design/animations/projectportals.mp4',
    ],
  },
  {
    title: 'Avang Music Visual Campaign',
    category: 'Film',
    description:
      '150 music videos produced for the Persian music label, each requiring unique creative direction, set design, and post-production pipelines.',
    year: '2009 – 2010',
    tags: ['Music Video', 'Direction', 'Post-Production', 'Color Grading'],
    color: '#F97316',
  },
  {
    title: 'Retail Interiors Collection',
    category: 'Interior',
    description:
      'Contemporary retail interior design projects blending industrial materiality with organic warmth. Focus on spatial flow, customer experience, and biophilic integration.',
    year: '2018 – Present',
    tags: ['Retail', 'Biophilic', 'Contemporary', 'Spatial Design'],
    color: '#10B981',
    images: [
      '/images/interior/IMG_1247.JPEG',
      '/images/interior/IMG_2407.JPEG',
      '/images/interior/IMG_2462.JPEG',
      '/images/interior/output_image.JPEG',
    ],
    videos: [
      '/images/interior/IMG_2462.mp4',
    ],
  },
  {
    title: 'BasaltHQ Brand System',
    category: 'Graphic',
    description:
      'Complete brand identity system for BasaltHQ — including the obsidian/teal color language, shield iconography, subsidiary logos, and the high-fidelity dark theme design system.',
    year: '2023 – Present',
    tags: ['Brand System', 'UI/UX', 'Design System', 'Dark Theme'],
    color: '#3DD8B0',
    images: [
      '/images/basalthq/BasaltHQShield.png',
      '/images/basalthq/BasaltHQWideD.png',
      '/images/basalthq/BasaltHQWide.png',
      '/images/basalthq/Basalt.png',
      '/images/basalthq/BasaltCRMD.png',
      '/images/basalthq/BasaltERPD.png',
      '/images/basalthq/BasaltEchoD.png',
      '/images/basalthq/BasaltSurgeD.png',
      '/images/basalthq/BasaltOnyxD.png',
      '/images/basalthq/BasaltCMSD.png',
    ],
    videos: [],
  },
  {
    title: 'Godboy — Feature Film',
    category: 'Film',
    description:
      'Independently produced feature film. Managed all aspects from financing through post-production. Completed pre-production in 3 weeks.',
    year: '2008 – 2009',
    tags: ['Feature Film', 'Independent', 'Direction', 'Production'],
    color: '#EF4444',
  },
  {
    title: 'Hurricane Katrina Jazz Documentary',
    category: 'Film',
    description:
      '30-minute PBS documentary capturing the resilience of New Orleans jazz artists in the aftermath of Hurricane Katrina.',
    year: '2006',
    tags: ['Documentary', 'PBS', 'Post-Production', 'Editorial'],
    color: '#8B5CF6',
  },
  {
    title: 'Botanical Photography Series',
    category: 'Photography',
    description:
      'Macro and environmental photography documenting botanical specimens, cannabis cultivation processes, and the intersection of biology and design.',
    year: '2019 – Present',
    tags: ['Macro', 'Botanical', 'Documentation', 'Environmental'],
    color: '#10B981',
  },
  {
    title: '3D Visualization & Animation',
    category: 'Animation',
    description:
      'Blender and Unreal Engine work spanning architectural visualization, scientific illustration, product renders, and generative art experiments.',
    year: '2020 – Present',
    tags: ['Blender', 'Unreal Engine', 'Arch-Viz', 'Generative'],
    color: '#EC4899',
    videos: [
      '/images/design/animations/Episode1IntroHD_web.mp4',
    ],
  },
  {
    title: 'Vijay Amritraj Foundation Gala',
    category: 'Film',
    description:
      'Multi-camera live production design for charity gala featuring tennis exhibitions and Beach Boys concert performance.',
    year: '2010 – 2011',
    tags: ['Live Production', 'Multi-Camera', 'Event', 'Broadcast'],
    color: '#F59E0B',
  },
];

export default function DesignContent() {
  const [filter, setFilter] = useState<Category>('All');
  const [selected, setSelected] = useState<DesignProject | null>(null);
  const filtered =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  function projectMedia(p: DesignProject): MediaItem[] {
    const items: MediaItem[] = [];
    if (p.images) p.images.forEach((src) => items.push({ type: 'image', src }));
    if (p.videos) p.videos.forEach((src) => items.push({ type: 'video', src }));
    return items;
  }

  return (
    <PagePane maxWidth="6xl">
      <section className="section-padding pb-0">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            kicker="Design"
            title="Visual & Creative Work"
            subtitle="A decade of graphic design, film production, interior design, photography, and animation — from Bollywood to Blender."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                  px-6 py-2.5 rounded-lg text-sm font-light tracking-wide transition-all duration-300 border
                  ${
                    filter === cat
                      ? 'border-accent/30 bg-accent/10 text-accent'
                      : 'border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] text-[rgba(255,255,255,0.4)] hover:text-white/70 hover:border-[rgba(255,255,255,0.1)]'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="cursor-pointer"
                  onClick={() => setSelected(project)}
                >
                  <GlassCard className="h-full group" hover flat>
                    <div className="h-full flex flex-col">
                      {/* Image — real photos or generative fallback */}
                      {project.images && project.images.length > 0 ? (
                        <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden border border-[rgba(255,255,255,0.04)]">
                          <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.5)] to-transparent" />
                        </div>
                      ) : (
                        <DesignPlaceholder project={project} />
                      )}

                      {/* Content */}
                      <div className="mt-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className="inline-flex items-center justify-center px-3 py-2 text-[9px] font-mono uppercase tracking-wider rounded"
                            style={{
                              backgroundColor: `${project.color}15`,
                              color: `${project.color}aa`,
                            }}
                          >
                            {project.category}
                          </span>
                          <span className="font-mono text-[10px] text-[rgba(255,255,255,0.2)]">
                            {project.year}
                          </span>
                        </div>

                        <h3 className="text-base font-medium text-white/90 mb-4 leading-snug">
                          {project.title}
                        </h3>

                        <p className="text-xs text-[rgba(255,255,255,0.35)] leading-relaxed flex-1">
                          {project.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center justify-center px-3 py-2 text-[9px] font-mono uppercase tracking-wider rounded border border-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.25)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selected && (
        <MediaModal
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          title={selected.title}
          subtitle={`${selected.category} · ${selected.year}`}
          description={selected.description}
          tags={selected.tags}
          media={projectMedia(selected)}
          color={selected.color}
        />
      )}
    </PagePane>
  );
}

/** Unique generative visual per project */
function DesignPlaceholder({ project }: { project: DesignProject }) {
  const hash = project.title.split('').reduce((a, c, i) => a + c.charCodeAt(0) * (i + 1), 0);

  // Generate abstract composition
  const shapes = Array.from({ length: 6 }, (_, i) => ({
    x: ((hash * (i + 3) * 17) % 80) + 10,
    y: ((hash * (i + 5) * 23) % 60) + 20,
    size: ((hash * (i + 1) * 13) % 30) + 10,
    opacity: 0.05 + ((hash * (i + 2) * 7) % 15) / 100,
    rotation: (hash * (i + 4) * 11) % 360,
  }));

  return (
    <div
      className="relative w-full aspect-[3/2] rounded-lg overflow-hidden border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)]"
    >
      {/* Abstract shapes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {shapes.map((s, i) => (
          <g key={i}>
            {i % 3 === 0 ? (
              <circle
                cx={s.x}
                cy={s.y}
                r={s.size / 2}
                fill={project.color}
                opacity={s.opacity}
              />
            ) : i % 3 === 1 ? (
              <rect
                x={s.x - s.size / 2}
                y={s.y - s.size / 2}
                width={s.size}
                height={s.size}
                fill={project.color}
                opacity={s.opacity}
                transform={`rotate(${s.rotation} ${s.x} ${s.y})`}
              />
            ) : (
              <line
                x1={s.x - s.size}
                y1={s.y}
                x2={s.x + s.size}
                y2={s.y + s.size / 3}
                stroke={project.color}
                strokeWidth="0.5"
                opacity={s.opacity * 2}
              />
            )}
          </g>
        ))}
      </svg>

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border backdrop-blur-sm"
          style={{
            borderColor: `${project.color}15`,
            backgroundColor: `rgba(5,5,5,0.6)`,
          }}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: `${project.color}60` }}>
            {project.category}
          </span>
        </div>
      </div>
    </div>
  );
}
