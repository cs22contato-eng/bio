import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BusinessUnit, OFFICIAL_LOGO_PATH } from '../utils/links';

interface UnitCardProps {
  unit: BusinessUnit;
  index: number;
}

export function UnitCard({ unit, index }: UnitCardProps) {
  const [clicked, setClicked] = useState(false);

  const handleLinkClick = () => {
    setClicked(true);
    window.setTimeout(() => setClicked(false), 1800);
  };

  const isCopper = unit.accentTone === 'copper';

  return (
    <article
      style={{ animationDelay: `${130 + index * 80}ms` }}
      className="cs22-reveal group ghost-glass-panel flex h-full flex-col justify-between rounded-[24px] p-5 sm:p-7 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
    >
      {/* Subtle internal ambient reflection inside card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 right-6 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isCopper
            ? 'radial-gradient(circle, rgba(234, 88, 12, 0.22) 0%, transparent 72%)'
            : 'radial-gradient(circle, rgba(203, 213, 225, 0.18) 0%, transparent 72%)',
        }}
      />

      {/* Top specular metallic accent hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 h-px opacity-60 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: isCopper
            ? 'linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.55), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(226, 232, 240, 0.5), transparent)',
        }}
      />

      <div>
        {/* Official Unit Brand Lockup using the official CS22 emblem */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[14px] border border-white/15 bg-[#0A0C10] shadow-[0_6px_18px_-4px_rgba(0,0,0,0.75)]">
            <img
              src={OFFICIAL_LOGO_PATH}
              alt={`Símbolo oficial ${unit.title}`}
              width={48}
              height={48}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover select-none"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="min-w-0">
            <h2 className="font-display text-xl sm:text-[22px] font-semibold tracking-tight text-white leading-tight">
              {unit.title}
            </h2>
            <p className="mt-0.5 text-xs font-medium tracking-wider uppercase text-[#94A3B8]">
              CS22 · {unit.unitSubtitle}
            </p>
          </div>
        </div>

        {/* Unit Description */}
        <p className="text-sm sm:text-[15px] leading-relaxed text-[#CBD5E1]/90">
          {unit.description}
        </p>
      </div>

      {/* Primary Unit CTA Button */}
      <div className="mt-6 pt-1">
        <a
          href={unit.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className={`glass-cta-button flex min-h-[50px] w-full items-center justify-between gap-3 rounded-[14px] px-4 sm:px-5 py-3 text-xs sm:text-[13px] font-semibold tracking-wide text-white active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080B] ${
            isCopper
              ? 'border border-[#FB923C]/35 bg-gradient-to-r from-[#EA580C]/25 via-[#1C1917]/75 to-[#1E293B]/65 hover:border-[#FB923C]/65 hover:from-[#EA580C]/35 hover:to-[#292524]/80 hover:shadow-[0_10px_30px_-10px_rgba(234,88,12,0.45)]'
              : 'border border-[#CBD5E1]/25 bg-gradient-to-r from-[#334155]/45 via-[#161922]/80 to-[#1E293B]/65 hover:border-[#E2E8F0]/55 hover:from-[#475569]/55 hover:to-[#1E293B]/85 hover:shadow-[0_10px_30px_-10px_rgba(203,213,225,0.28)]'
          }`}
        >
          <span className="truncate">
            {clicked ? `ABRINDO ${unit.unitSubtitle.toUpperCase()}...` : unit.ctaLabel}
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-[#E2E8F0] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  );
}
