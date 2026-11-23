import { BRAND_IDENTITY, OFFICIAL_LOGO_PATH } from '../utils/links';

export function BrandFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 sm:mt-12 border-t border-white/[0.08] pt-6 pb-8 text-center">
      <div className="flex flex-col items-center gap-2.5">
        <div className="flex items-center justify-center gap-2.5">
          <img
            src={OFFICIAL_LOGO_PATH}
            alt="CS22"
            width={20}
            height={20}
            referrerPolicy="no-referrer"
            className="h-5 w-5 rounded-[6px] object-cover opacity-85 border border-white/10 select-none"
            loading="lazy"
            decoding="async"
          />
          <p className="font-display text-xs sm:text-sm font-semibold tracking-wide text-[#E2E8F0]">
            {BRAND_IDENTITY.footerSummary}
          </p>
        </div>

        <p className="text-xs tracking-wide text-[#94A3B8]">
          {BRAND_IDENTITY.footerDivisions}
        </p>

        <p className="mt-0.5 text-[11px] text-[#64748B] tabular-nums">
          © {currentYear} CS22
        </p>
      </div>
    </footer>
  );
}
