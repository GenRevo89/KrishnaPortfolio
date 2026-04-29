import type { Metadata } from 'next';
import DesignContent from './DesignContent';

export const metadata: Metadata = {
  title: 'Design',
  description:
    'Interior design, graphic design, photography, film production, and animation — a decade of creative work across disciplines.',
};

export default function DesignPage() {
  return <DesignContent />;
}
