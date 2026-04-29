import type { Metadata } from 'next';
import ResearchContent from './ResearchContent';

export const metadata: Metadata = {
  title: 'Research',
  description:
    'The Theory of Intentionality, Dynamic Phenomenology Framework, Microtubule Reservoir Computer, and published research in Current Biology.',
};

export default function ResearchPage() {
  return <ResearchContent />;
}
