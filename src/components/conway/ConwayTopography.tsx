'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { usePathname } from 'next/navigation';
import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';
import { pickRandomPattern } from './patterns';
import { Html } from '@react-three/drei';

import HomePage from '@/app/page';
import AboutContent from '@/app/about/AboutContent';
import ResearchContent from '@/app/research/ResearchContent';
import VenturesContent from '@/app/ventures/VenturesContent';
import PublicationsContent from '@/app/publications/PublicationsContent';
import BuildsContent from '@/app/builds/BuildsContent';
import DesignContent from '@/app/design/DesignContent';

const SPATIAL_PANES = [
  { path: '/', component: HomePage, pos: [0, 4, 0] as [number, number, number] },
  { path: '/research', component: ResearchContent, pos: [-40, 4, -150] as [number, number, number] },
  { path: '/ventures', component: VenturesContent, pos: [40, 4, -300] as [number, number, number] },
  { path: '/publications', component: PublicationsContent, pos: [-40, 4, -450] as [number, number, number] },
  { path: '/builds', component: BuildsContent, pos: [40, 4, -600] as [number, number, number] },
  { path: '/design', component: DesignContent, pos: [-40, 4, -750] as [number, number, number] },
  { path: '/about', component: AboutContent, pos: [0, 4, -900] as [number, number, number] },
];

interface ConwayTopographyProps {
  gridSize?: number;
  spacing?: number;
  tickRate?: number;
  glowColor?: string;
  intensity?: number;
}

export default function ConwayTopography({
  gridSize = 60,
  spacing = 1.2,
  tickRate = 120,
  glowColor = '#3DD8B0',
  intensity = 1.5,
}: ConwayTopographyProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dropsMeshRef = useRef<THREE.InstancedMesh>(null);
  const { camera, mouse, viewport } = useThree();

  const noise2D = useMemo(() => createNoise2D(), []);

  // Game of Life state - using Refs instead of state for 60fps performance
  const currentGridRef = useRef<Uint8Array>(new Uint8Array(gridSize * gridSize));
  const nextGridRef = useRef<Uint8Array>(new Uint8Array(gridSize * gridSize));

  // Initialize grid once
  useEffect(() => {
    const arr = currentGridRef.current;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Math.random() < 0.08 ? 1 : 0;
    }
  }, [gridSize]);

  const lastTickRef = useRef(0);
  const timeRef = useRef(0);

  // Drops state
  const MAX_DROPS = 150;
  const dropsRef = useRef(Array.from({ length: MAX_DROPS }, () => ({
    active: false,
    x: 0, y: 0, z: 0,
    gridX: 0, gridZ: 0,
    hue: 0,
    speed: 0
  })));

  // Colors
  const colorBase = useMemo(() => new THREE.Color('#050505'), []);
  const colorActive = useMemo(() => new THREE.Color(glowColor), [glowColor]);
  const tempColor = useMemo(() => new THREE.Color(), []);
  const tempObject = useMemo(() => new THREE.Object3D(), []);

  // Custom teardrop geometry
  const dropGeometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(0.08, 16, 16);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (y > 0) {
        // Taper the top half into a point
        const factor = 1 - (y / 0.08);
        pos.setX(i, pos.getX(i) * factor);
        pos.setZ(i, pos.getZ(i) * factor);
        // Stretch the point upward
        pos.setY(i, y * 3.5);
      }
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Initialize main instances
  useEffect(() => {
    if (!meshRef.current || !dropsMeshRef.current) return;

    // Init main mesh
    let i = 0;
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        const px = (x - gridSize / 2) * spacing;
        const pz = (z - gridSize / 2) * spacing;
        tempObject.position.set(px, 0, pz);
        tempObject.updateMatrix();
        meshRef.current.setMatrixAt(i, tempObject.matrix);
        meshRef.current.setColorAt(i, colorBase);
        i++;
      }
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;

    // Init drops mesh
    for (let j = 0; j < MAX_DROPS; j++) {
      tempObject.position.set(0, -1000, 0);
      tempObject.updateMatrix();
      dropsMeshRef.current.setMatrixAt(j, tempObject.matrix);
      dropsMeshRef.current.setColorAt(j, colorBase);
    }
    dropsMeshRef.current.instanceMatrix.needsUpdate = true;
    if (dropsMeshRef.current.instanceColor) dropsMeshRef.current.instanceColor.needsUpdate = true;

  }, [gridSize, spacing, tempObject, colorBase]);

  const pathname = usePathname();
  const lookAtRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const { size } = useThree();

  useFrame((state, delta) => {
    // --- 3D NAVIGATION TRANSITIONS (Immersive 3D Panes) ---
    const activePane = SPATIAL_PANES.find(p => p.path === pathname) || SPATIAL_PANES[0];

    // Position camera just above the pane to see the terrain!
    const targetPos = new THREE.Vector3(activePane.pos[0], activePane.pos[1] + 6, activePane.pos[2] + 45);
    const targetLookAt = new THREE.Vector3(activePane.pos[0], activePane.pos[1], activePane.pos[2]);

    // Calculate distance to target
    const dist = state.camera.position.distanceTo(targetPos);

    // Cinematic Swing Maneuver: If we are traveling far, the camera arcs outwards and upwards
    // As dist approaches 0, the sine waves approach 0, settling smoothly into the target
    const swingX = Math.sin(dist * 0.015) * 50;
    const swingY = Math.sin(dist * 0.008) * 20;

    const lerpTarget = new THREE.Vector3(
      targetPos.x + swingX,
      targetPos.y + swingY,
      targetPos.z
    );

    // Smoothly fly camera along the curved path
    state.camera.position.lerp(lerpTarget, 0.025);
    lookAtRef.current.lerp(targetLookAt, 0.03);
    state.camera.lookAt(lookAtRef.current);

    timeRef.current += delta;
    const time = timeRef.current;
    const mesh = meshRef.current;
    const dropsMesh = dropsMeshRef.current;
    if (!mesh || !dropsMesh) return;

    // Lock mesh bounds directly beneath the camera
    mesh.position.set(state.camera.position.x, 0, state.camera.position.z);
    dropsMesh.position.set(state.camera.position.x, 0, state.camera.position.z);

    // Calculate camera velocity to determine if we are "traveling"
    const isTraveling = state.camera.position.distanceTo(targetPos) > 10;
    const killRate = isTraveling ? 0.3 : 0.001; // Fade out pattern when traveling, natural slow decay otherwise

    // HMR safety: Ensure drops array matches MAX_DROPS
    if (dropsRef.current.length !== MAX_DROPS) {
      dropsRef.current = Array.from({ length: MAX_DROPS }, () => ({
        active: false,
        x: 0, y: 0, z: 0,
        gridX: 0, gridZ: 0,
        hue: 0,
        speed: 0
      }));
    }

    const scrollY = window.scrollY || 0;
    // Don't rotate the entire mesh, it ruins the infinite terrain illusion. 
    // We only rotate the objects individually or just rely on camera movement.
    // Instead of rotation, we just rely on the noise rippling.

    const pointerX = (mouse.x * viewport.width) / 2;
    const pointerY = (mouse.y * viewport.height) / 2;

    const currentGrid = currentGridRef.current;
    const nextGrid = nextGridRef.current;

    // --- DROPS LOGIC (Rainfall) ---
    // Spawn multiple drops per frame
    for (let s = 0; s < 2; s++) {
      if (Math.random() < 0.4) {
        const drop = dropsRef.current.find(d => !d.active);
        if (drop) {
          drop.active = true;
          drop.gridX = Math.floor(Math.random() * (gridSize - 10)) + 5;
          drop.gridZ = Math.floor(Math.random() * (gridSize - 10)) + 5;
          drop.x = (drop.gridX - gridSize / 2) * spacing;
          drop.z = (drop.gridZ - gridSize / 2) * spacing;
          drop.y = 10 + Math.random() * 8; // Spawn visibly within the camera frustum
          drop.speed = 0.1 + Math.random() * 0.15; // Faster fall like rain
          drop.hue = Math.random(); // random color
        }
      }
    }

    // Process drops
    for (let i = 0; i < MAX_DROPS; i++) {
      const drop = dropsRef.current[i];
      if (drop.active) {
        drop.y -= drop.speed;

        // World coordinates for drops
        const worldX = drop.x + mesh.position.x;
        const worldZ = drop.z + mesh.position.z;

        // Calculate target height on mesh
        const targetHeight = noise2D(worldX * 0.08 + time * 0.1, worldZ * 0.08 + time * 0.05) * 3;

        if (drop.y <= targetHeight) {
          // Splash impact!
          drop.active = false;

          // Always spawn a pattern on drop impact
          const pattern = pickRandomPattern();
          for (const [px, pz] of pattern) {
            const nx = drop.gridX + px;
            const nz = drop.gridZ + pz;
            if (nx >= 0 && nx < gridSize && nz >= 0 && nz < gridSize) {
              currentGrid[nz * gridSize + nx] = 1;
            }
          }

          tempObject.position.set(0, -1000, 0);
        } else {
          tempObject.position.set(drop.x, drop.y, drop.z);
          // Scale slightly, but keep the teardrop aspect ratio mostly intact
          tempObject.scale.set(0.8, 1.2, 0.8);
        }

        tempObject.updateMatrix();
        dropsMesh.setMatrixAt(i, tempObject.matrix);
        tempColor.setHSL(drop.hue, 1, 0.6).multiplyScalar(intensity * 1.5);
        dropsMesh.setColorAt(i, tempColor);
      } else {
        tempObject.position.set(0, -1000, 0);
        tempObject.updateMatrix();
        dropsMesh.setMatrixAt(i, tempObject.matrix);
      }
    }
    dropsMesh.instanceMatrix.needsUpdate = true;
    if (dropsMesh.instanceColor) dropsMesh.instanceColor.needsUpdate = true;


    // --- CONWAY LOGIC TICK ---
    if (time * 1000 - lastTickRef.current >= tickRate) {
      lastTickRef.current = time * 1000;

      for (let x = 0; x < gridSize; x++) {
        for (let z = 0; z < gridSize; z++) {
          const idx = z * gridSize + x;

          // Natural decay or forced vaporize when traveling
          if (Math.random() < killRate) {
            nextGrid[idx] = 0;
            continue;
          }

          let neighbors = 0;
          for (let dx = -1; dx <= 1; dx++) {
            for (let dz = -1; dz <= 1; dz++) {
              if (dx === 0 && dz === 0) continue;
              const nx = x + dx;
              const nz = z + dz;
              // Hard boundaries so patterns hit the edge and die, they don't wrap around the infinite plane!
              if (nx >= 0 && nx < gridSize && nz >= 0 && nz < gridSize) {
                neighbors += currentGrid[nz * gridSize + nx];
              }
            }
          }

          const alive = currentGrid[idx];

          if (alive) {
            nextGrid[idx] = neighbors === 2 || neighbors === 3 ? 1 : 0;
          } else {
            nextGrid[idx] = neighbors === 3 ? 1 : 0;
          }
        }
      }

      // Copy nextGrid to currentGrid
      currentGrid.set(nextGrid);
    }

    // --- UPDATE VISUALS (Heights & Colors) ---
    let i = 0;
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        const px = (x - gridSize / 2) * spacing;
        const pz = (z - gridSize / 2) * spacing;

        const worldX = px + mesh.position.x;
        const worldZ = pz + mesh.position.z;

        const baseHeight = noise2D(worldX * 0.08 + time * 0.1, worldZ * 0.08 + time * 0.05) * 3;

        // Repulsion logic (mouse interaction)
        const worldPt = new THREE.Vector3(pointerX + mesh.position.x, pointerY, mesh.position.z);
        const dx = worldX - worldPt.x;
        const dz = worldZ - worldPt.y;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const repulsion = Math.max(0, 5 - dist) * 0.5;

        tempObject.position.set(px, baseHeight - repulsion, pz);

        const edgeDist = Math.sqrt(px * px + pz * pz);
        const maxDist = (gridSize * spacing) / 2;
        const scale = Math.max(0, 1 - Math.pow(edgeDist / maxDist, 4));

        tempObject.scale.set(scale, scale, scale);

        const isAlive = currentGrid[z * gridSize + x] === 1;

        if (isAlive) {
          tempObject.position.y += 0.5;
          const hue = (0.45 + (px * 0.01) + (pz * 0.01) + (time * 0.05)) % 1;
          tempColor.setHSL(hue, 0.8, 0.6).multiplyScalar(intensity);
        } else {
          tempColor.lerpColors(colorBase, colorActive, 0.03);
        }

        tempObject.updateMatrix();
        mesh.setMatrixAt(i, tempObject.matrix);
        mesh.setColorAt(i, tempColor);
        i++;
      }
    }

    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  });

  return (
    <group>
      {/* The main topographical Conway grid */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, gridSize * gridSize]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>

      {/* The dropping rain spheres */}
      <instancedMesh ref={dropsMeshRef} args={[undefined, undefined, MAX_DROPS]}>
        <primitive object={dropGeometry} attach="geometry" />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>

      {/* The 3D Spatial Panes */}
      {SPATIAL_PANES.map((pane) => (
        <group key={pane.path}>
          {/* Oil Rig Structural Foundation */}
          <group position={[pane.pos[0], 0, pane.pos[2]]}>
            {/* Struts into the topology */}
            <mesh position={[-18, -4, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 8]} />
              <meshBasicMaterial color="#3DD8B0" opacity={0.15} transparent wireframe />
            </mesh>
            <mesh position={[18, -4, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 8]} />
              <meshBasicMaterial color="#3DD8B0" opacity={0.15} transparent wireframe />
            </mesh>
            {/* Ground anchor ring */}
            <mesh position={[0, -8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[19, 20, 32]} />
              <meshBasicMaterial color="#3DD8B0" opacity={0.2} transparent />
            </mesh>
            {/* Glowing core underneath */}
            <mesh position={[0, -7.5, 0]}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshBasicMaterial color="#3DD8B0" opacity={0.4} transparent />
            </mesh>
          </group>

          <Html
            transform
            center
            distanceFactor={9}
            position={[pane.pos[0], pane.pos[1], pane.pos[2]]}
            zIndexRange={[100, 0]}
            className={pathname === pane.path ? 'pointer-events-auto' : 'pointer-events-none'}
          >
            <div
              className="w-[90vw] lg:w-[1200px] transition-all duration-1000 origin-center"
              style={{ opacity: pathname === pane.path ? 1 : 0.05 }}
            >
              <pane.component />
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}
