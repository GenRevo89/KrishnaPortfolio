'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ConwayTopography = dynamic(() => import('./ConwayTopography'), { ssr: false });

export default function ConwayBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Dense on desktop (120x120), lighter on mobile (60x60)
  const gridSize = isMobile ? 60 : 120;
  const spacing = isMobile ? 1.0 : 0.7;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Deep vignette overlay to blend 3D with the dark theme */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, transparent 20%, rgba(5, 5, 5, 0.95) 100%),
            linear-gradient(to bottom, rgba(5, 5, 5, 0.8) 0%, transparent 20%, transparent 80%, rgba(5, 5, 5, 1) 100%)
          `,
        }}
      />
      
      <Canvas dpr={[1, 2]} gl={{ antialias: false, alpha: true }} camera={{ position: [0, 20, 30], fov: 45 }}>
        <fog attach="fog" args={['#050505', 10, 60]} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <ConwayTopography gridSize={gridSize} spacing={spacing} />
        </Suspense>
      </Canvas>
    </div>
  );
}
