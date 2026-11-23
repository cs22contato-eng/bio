import { BRAND_IDENTITY, OFFICIAL_LOGO_PATH } from '../utils/links';

export function BrandHeader() {
  return (
    <header className="relative flex flex-col items-center text-center pt-8 pb-7 sm:pt-12 sm:pb-10">
      {/* Official CS22 Emblem with discrete ambient illumination */}
      <div className="cs22-logo-reveal relative mb-6 flex items-center justify-center">
        {/* Discrete luminous halo behind the official mark */}
        <div
          aria-hidden="true"
          className="absolute -inset-6 rounded-full opacity-75 blur-2xl"
          style={{
            background:
              'radial-gradient(circle, rgba(234, 88, 12, 0.28) 0%, rgba(203, 213, 225, 0.12) 48%, transparent 75%)',
          }}
        />

        {/* Glass halo frame preserving exact 1:1 emblem without altering logo */}
        <div className="relative rounded-[26px] p-[3px] bg-gradient-to-br from-[#FDBA74]/45 via-white/20 to-[#94A3B8]/25 shadow-[0_18px_45px_-12px_rgba(0,0,0,0.85)]">
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-[23px] bg-[#0B0D11]">
            <img
              src={OFFICIAL_LOGO_PATH}
              alt="Logo oficial da CS22"
              width={112}
              height={112}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover select-none"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Brand Title & Institutional Signature */}
      <div
        className="cs22-reveal max-w-xl px-2"
        style={{ animationDelay: '70ms' }}
      >
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
          {BRAND_IDENTITY.name}
        </h1>

        <p className="mt-1.5 font-display text-base sm:text-lg font-medium tracking-wide bg-gradient-to-r from-[#F8FAFC] via-[#FDBA74] to-[#E2E8F0] bg-clip-text text-transparent">
          {BRAND_IDENTITY.tagline}
        </p>

        <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#CBD5E1]/90 max-w-md mx-auto [text-wrap:balance]">
          {BRAND_IDENTITY.complement}
        </p>
      </div>
    </header>
  );
}
