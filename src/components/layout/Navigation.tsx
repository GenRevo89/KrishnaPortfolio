'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home', icon: '◈' },
  { href: '/research', label: 'Research', icon: '◇' },
  { href: '/ventures', label: 'Ventures', icon: '△' },
  { href: '/publications', label: 'Publications', icon: '▢' },
  { href: '/builds', label: 'Builds', icon: '⬡' },
  { href: '/design', label: 'Design', icon: '○' },
  { href: '/about', label: 'About', icon: '◎' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
          ${scrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-[#3DD8B0]/20 shadow-xl'
            : 'bg-transparent border-transparent'
          }
        `}
        style={{ paddingLeft: 'clamp(2rem, 5vw, 6rem)', paddingRight: 'clamp(2rem, 5vw, 6rem)' }}
      >
        <div className="w-full max-w-[1600px] mx-auto h-28 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative group flex items-center gap-3"
          >
            {/* KP monogram as Conway block pattern */}
            <div className="w-8 h-8 grid grid-cols-3 grid-rows-3 gap-[2px] group-hover:scale-110 transition-transform duration-300">
              <div className="bg-accent/80 rounded-[1px]" />
              <div className="bg-accent/60 rounded-[1px]" />
              <div className="bg-transparent" />
              <div className="bg-accent/60 rounded-[1px]" />
              <div className="bg-accent/40 rounded-[1px]" />
              <div className="bg-accent/80 rounded-[1px]" />
              <div className="bg-transparent" />
              <div className="bg-accent/60 rounded-[1px]" />
              <div className="bg-accent/40 rounded-[1px]" />
            </div>
            <span className="font-serif text-lg tracking-wide hidden sm:block">
              Krishna Patel <span className="text-[10px] text-accent font-mono ml-2">v3</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center" style={{ gap: '2.5rem' }}>
            {NAV_LINKS.filter(l => l.href !== '/').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative px-8 py-4 text-sm font-light tracking-wide transition-all duration-300 rounded-lg cursor-pointer group
                  hover:bg-white/10
                  ${pathname === link.href
                    ? 'text-accent'
                    : 'text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.9)]'
                  }
                `}
              >
                <span className="relative z-10">{link.label}</span>
                {pathname === link.href ? (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-1 left-6 right-6 h-px bg-accent"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                ) : (
                  <div className="absolute bottom-1 left-6 right-6 h-px bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <motion.div
                animate={mobileOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                className="w-6 h-px bg-white/70"
              />
              <motion.div
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-4 h-px bg-white/50"
              />
              <motion.div
                animate={mobileOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                className="w-6 h-px bg-white/70"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[rgba(5,5,5,0.95)] backdrop-blur-3xl"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[rgba(10,10,10,0.98)] border-l border-[rgba(255,255,255,0.04)] flex flex-col justify-center px-12"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      flex items-center gap-4 py-4 text-2xl font-serif font-light tracking-wide transition-colors duration-300
                      ${pathname === link.href
                        ? 'text-accent'
                        : 'text-[rgba(255,255,255,0.5)] hover:text-white'
                      }
                    `}
                  >
                    <span className="text-base opacity-40">{link.icon}</span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Decorative bottom element */}
              <div className="mt-12 flex items-center gap-3">
                <div className="w-8 h-px bg-accent/30" />
                <div className="w-1.5 h-1.5 border border-accent/30 rotate-45" />
                <div className="flex-1 h-px bg-gradient-to-r from-accent/20 to-transparent" />
              </div>
              <p className="mt-4 font-mono text-[10px] text-[rgba(255,255,255,0.2)] tracking-widest uppercase">
                Built at the edge of chaos
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
