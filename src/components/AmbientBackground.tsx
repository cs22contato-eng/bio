import { useEffect, useRef } from 'react';

export function AmbientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let rafId = 0;
    let targetX = 50;
    let targetY = 25;

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;

      if (!rafId) {
        rafId = window.requestAnimationFrame(() => {
          el.style.setProperty('--mx', `${targetX.toFixed(2)}%`);
          el.style.setProperty('--my', `${targetY.toFixed(2)}%`);
          rafId = 0;
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden select-none"
      style={{ ['--mx' as string]: '50%', ['--my' as string]: '22%' }}
    >
      {/* Base deep obsidian gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 0%, #141821 0%, #090B0F 52%, #050608 100%)',
        }}
      />

      {/* Dynamic mouse-following soft metallic spotlight */}
      <div
        className="absolute inset-0 hidden md:block transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(640px circle at var(--mx) var(--my), rgba(234, 88, 12, 0.085), rgba(203, 213, 225, 0.03) 40%, transparent 72%)',
        }}
      />

      {/* Top center warm copper-amber halo behind logo */}
      <div
        className="animate-ambient-breath absolute -top-28 left-1/2 -translate-x-1/2 h-[420px] w-[680px] rounded-full blur-[110px]"
        style={{
          background:
            'radial-gradient(circle, rgba(234, 88, 12, 0.16) 0%, rgba(194, 65, 12, 0.06) 45%, transparent 75%)',
        }}
      />

      {/* Subtle brushed titanium silver atmospheric wash */}
      <div
        className="absolute top-[36%] -left-32 h-[380px] w-[420px] rounded-full blur-[120px] opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(203, 213, 225, 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Lower right warm depth balance */}
      <div
        className="absolute bottom-[-120px] -right-24 h-[360px] w-[420px] rounded-full blur-[120px] opacity-35"
        style={{
          background:
            'radial-gradient(circle, rgba(234, 88, 12, 0.11) 0%, transparent 70%)',
        }}
      />

      {/* Architectural precision grid */}
      <div className="cs22-tech-grid absolute inset-0" />

      {/* Subtle floating Ghost Glass geometric planes */}
      <div
        className="animate-float-slow absolute top-[14%] right-[7%] hidden sm:block h-28 w-28 rounded-3xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm"
        style={{ transform: 'rotate(18deg)' }}
      />
      <div
        className="animate-float-slow-delayed absolute bottom-[18%] left-[6%] hidden sm:block h-24 w-24 rounded-2xl border border-[#EA580C]/15 bg-[#EA580C]/[0.02] backdrop-blur-sm"
        style={{ transform: 'rotate(-14deg)' }}
      />

      {/* Delicate horizontal horizon reflection line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>
  );
}
