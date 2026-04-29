import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Krishna Patel — polymathic serial entrepreneur with dual Summa Cum Laude degrees in Biochemistry and English, PhD research in ME/Neuroscience, and 8 published books.',
};

export default function AboutPage() {
  return <AboutContent />;
}
