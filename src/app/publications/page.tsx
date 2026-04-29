import type { Metadata } from 'next';
import PublicationsContent from './PublicationsContent';

export const metadata: Metadata = {
  title: 'Publications',
  description:
    'Eight books spanning economics, phenomenology, organizational theory, and literature. Plus a Miltonic epic, a Bollywood screenplay, and a Current Biology publication.',
};

export default function PublicationsPage() {
  return <PublicationsContent />;
}
