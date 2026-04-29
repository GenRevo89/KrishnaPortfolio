'use client';

import { useEffect, useRef, useCallback } from 'react';
import { pickRandomPattern } from './patterns';

interface ConwayCanvasProps {
  className?: string;
  cellSize?: number;
  tickRate?: number;
  initialDensity?: number;
  glowColor?: string;
  glowIntensity?: number;
  fadeTrails?: boolean;
}

export default function ConwayCanvas({
  className = '',
  cellSize: cellSizeProp,
  tickRate = 120,
  initialDensity = 0.08,
  glowColor = '61, 216, 176',
  glowIntensity = 0.85,
  fadeTrails = true,
}: ConwayCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<Uint8Array | null>(null);
  const colsRef = useRef(0);
  const rowsRef = useRef(0);
  const animFrameRef = useRef(0);
  const lastTickRef = useRef(0);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const lastSpawnRef = useRef(0);

  const getCellSize = useCallback(() => {
    if (cellSizeProp) return cellSizeProp;
    if (typeof window === 'undefined') return 10;
    if (window.innerWidth < 640) return 8;
    if (window.innerWidth < 1024) return 10;
    return 12;
  }, [cellSizeProp]);

  // Initialize grid
  const initGrid = useCallback(
    (cols: number, rows: number): Uint8Array => {
      const grid = new Uint8Array(cols * rows);
      for (let i = 0; i < grid.length; i++) {
        grid[i] = Math.random() < initialDensity ? 1 : 0;
      }
      return grid;
    },
    [initialDensity]
  );

  // Compute next generation
  const nextGen = useCallback((grid: Uint8Array, cols: number, rows: number): Uint8Array => {
    const next = new Uint8Array(cols * rows);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let neighbors = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = (x + dx + cols) % cols;
            const ny = (y + dy + rows) % rows;
            neighbors += grid[ny * cols + nx];
          }
        }
        const idx = y * cols + x;
        const alive = grid[idx];
        if (alive) {
          next[idx] = neighbors === 2 || neighbors === 3 ? 1 : 0;
        } else {
          next[idx] = neighbors === 3 ? 1 : 0;
        }
      }
    }
    return next;
  }, []);

  // Spawn pattern at coordinates
  const spawnPattern = useCallback(
    (grid: Uint8Array, cols: number, rows: number, cx: number, cy: number) => {
      const pattern = pickRandomPattern();
      const ph = pattern.length;
      const pw = pattern[0].length;
      const startX = cx - Math.floor(pw / 2);
      const startY = cy - Math.floor(ph / 2);
      for (let py = 0; py < ph; py++) {
        for (let px = 0; px < pw; px++) {
          if (pattern[py][px]) {
            const gx = (startX + px + cols) % cols;
            const gy = (startY + py + rows) % rows;
            grid[gy * cols + gx] = 1;
          }
        }
      }
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cs = getCellSize();
      const newCols = Math.ceil(w / cs);
      const newRows = Math.ceil(h / cs);

      // Preserve existing cells on resize
      const oldGrid = gridRef.current;
      const oldCols = colsRef.current;
      const oldRows = rowsRef.current;
      const newGrid = new Uint8Array(newCols * newRows);

      if (oldGrid) {
        const copyW = Math.min(oldCols, newCols);
        const copyH = Math.min(oldRows, newRows);
        for (let y = 0; y < copyH; y++) {
          for (let x = 0; x < copyW; x++) {
            newGrid[y * newCols + x] = oldGrid[y * oldCols + x];
          }
        }
        // Fill new areas
        for (let y = 0; y < newRows; y++) {
          for (let x = 0; x < newCols; x++) {
            if (x >= oldCols || y >= oldRows) {
              newGrid[y * newCols + x] = Math.random() < initialDensity ? 1 : 0;
            }
          }
        }
      } else {
        for (let i = 0; i < newGrid.length; i++) {
          newGrid[i] = Math.random() < initialDensity ? 1 : 0;
        }
      }

      gridRef.current = newGrid;
      colsRef.current = newCols;
      rowsRef.current = newRows;
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse handlers
    const handleMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    const handleLeave = () => {
      mouseRef.current.active = false;
    };
    const handleClick = (e: MouseEvent) => {
      const cs = getCellSize();
      const cx = Math.floor(e.clientX / cs);
      const cy = Math.floor(e.clientY / cs);
      if (gridRef.current) {
        spawnPattern(gridRef.current, colsRef.current, rowsRef.current, cx, cy);
      }
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    canvas.addEventListener('click', handleClick);

    // Animation loop
    const animate = (time: number) => {
      animFrameRef.current = requestAnimationFrame(animate);
      const cs = getCellSize();
      const cols = colsRef.current;
      const rows = rowsRef.current;
      const grid = gridRef.current;
      if (!grid) return;

      // Tick at controlled rate
      if (time - lastTickRef.current >= tickRate) {
        lastTickRef.current = time;

        // Mouse spawn (throttled)
        if (
          mouseRef.current.active &&
          time - lastSpawnRef.current > 800
        ) {
          const cx = Math.floor(mouseRef.current.x / cs);
          const cy = Math.floor(mouseRef.current.y / cs);
          spawnPattern(grid, cols, rows, cx, cy);
          lastSpawnRef.current = time;
        }

        // Compute next generation
        gridRef.current = nextGen(grid, cols, rows);
      }

      // Render
      const w = window.innerWidth;
      const h = window.innerHeight;

      if (fadeTrails) {
        ctx.fillStyle = 'rgba(5, 5, 5, 0.25)';
        ctx.fillRect(0, 0, w, h);
      } else {
        ctx.clearRect(0, 0, w, h);
      }

      const currentGrid = gridRef.current!;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (currentGrid[y * cols + x]) {
            const px = x * cs;
            const py = y * cs;
            const centerX = px + cs / 2;
            const centerY = py + cs / 2;

            // Glow
            const grad = ctx.createRadialGradient(
              centerX,
              centerY,
              0,
              centerX,
              centerY,
              cs * 1.5
            );
            grad.addColorStop(0, `rgba(${glowColor}, ${glowIntensity})`);
            grad.addColorStop(0.4, `rgba(${glowColor}, ${glowIntensity * 0.3})`);
            grad.addColorStop(1, `rgba(${glowColor}, 0)`);
            ctx.fillStyle = grad;
            ctx.fillRect(px - cs, py - cs, cs * 3, cs * 3);

            // Core cell
            ctx.fillStyle = `rgba(${glowColor}, ${glowIntensity})`;
            ctx.fillRect(px + 1, py + 1, cs - 2, cs - 2);
          }
        }
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
      canvas.removeEventListener('click', handleClick);
    };
  }, [getCellSize, initGrid, nextGen, spawnPattern, tickRate, glowColor, glowIntensity, fadeTrails, initialDensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 pointer-events-none ${className}`}
      style={{ width: '100vw', height: '100vh' }}
      aria-hidden="true"
    />
  );
}
