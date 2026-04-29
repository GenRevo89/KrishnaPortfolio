import type { Metadata } from 'next';
import VenturesContent from './VenturesContent';

export const metadata: Metadata = {
  title: 'Ventures',
  description:
    'Serial founder across AI, blockchain, neuroscience, renewable energy, agriculture, and film. BasaltHQ, The Utility Company, Imursi Ethomics, and more.',
};

export default function VenturesPage() {
  return <VenturesContent />;
}
