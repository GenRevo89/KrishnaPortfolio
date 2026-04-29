import type { Metadata } from 'next';
import BuildsContent from './BuildsContent';

export const metadata: Metadata = {
  title: 'Builds',
  description:
    'Hardware builds and lab engineering: Ethoscope arrays, PiVR systems, peristaltic pumps, hydroponic grows, and the Microtubule Reservoir Computer.',
};

export default function BuildsPage() {
  return <BuildsContent />;
}
