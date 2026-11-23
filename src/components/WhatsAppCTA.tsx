import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WHATSAPP_CONTACT, buildWhatsAppUrl } from '../utils/links';

function OfficialWhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="h-6 w-6 shrink-0"
      fill="none"
    >
      <path
        fill="#25D366"
        d="M16.002 3C8.832 3 3 8.832 3 16.002c0 2.294.6 4.534 1.74 6.506L3 29l6.654-1.718A12.94 12.94 0 0 0 16.002 29C23.17 29 29 23.168 29 16.002 29 8.832 23.17 3 16.002 3Z"
      />
      <path
        fill="#FFFFFF"
        d="M23.09 19.63c-.36-.18-2.14-1.056-2.47-1.176-.332-.12-.574-.18-.815.18-.242.36-.935 1.176-1.147 1.418-.21.24-.422.27-.783.09-.36-.18-1.522-.56-2.9-1.788-1.072-.956-1.795-2.138-2.006-2.498-.21-.36-.023-.555.158-.735.162-.162.36-.422.542-.633.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.815-1.964-1.116-2.69-.294-.706-.593-.61-.815-.622l-.695-.012c-.242 0-.633.09-.964.45-.332.36-1.266 1.236-1.266 3.014s1.296 3.495 1.477 3.736c.18.24 2.55 3.892 6.178 5.458.863.372 1.537.595 2.062.762.866.275 1.655.236 2.278.143.695-.104 2.14-.875 2.442-1.72.302-.844.302-1.568.211-1.72-.09-.15-.332-.24-.692-.42Z"
      />
    </svg>
  );
}

export function WhatsAppCTA() {
  const [clicked, setClicked] = useState(false);
  const whatsappUrl = buildWhatsAppUrl();

  const handleClick = () => {
    setClicked(true);
    window.setTimeout(() => setClicked(false), 2000);
  };

  return (
    <section
      aria-label="Contato direto pelo WhatsApp"
      style={{ animationDelay: '280ms' }}
      className="cs22-reveal mt-5 sm:mt-6"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group ghost-glass-panel glass-cta-button flex min-h-[72px] w-full items-center justify-between gap-4 rounded-[22px] px-5 sm:px-7 py-4 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_-14px_rgba(234,88,12,0.28)] active:scale-[0.988] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080B]"
      >
        <div className="flex items-center gap-4 min-w-0">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-white/15 bg-[#0C0F14]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-200 group-hover:scale-105">
            <OfficialWhatsAppIcon />
          </div>

          <div className="min-w-0 text-left">
            <span className="block font-display text-sm sm:text-base font-semibold tracking-wide text-white">
              {clicked ? 'ABRINDO WHATSAPP...' : WHATSAPP_CONTACT.label}
            </span>
            <span className="mt-0.5 block text-xs sm:text-sm font-medium text-[#CBD5E1] tabular-nums">
              {WHATSAPP_CONTACT.displayPhone}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 rounded-[12px] border border-[#FB923C]/35 bg-[#EA580C]/15 px-3.5 py-2 text-xs font-semibold tracking-wide text-[#FDBA74] transition-colors duration-200 group-hover:border-[#FB923C]/65 group-hover:bg-[#EA580C]/25 group-hover:text-white">
          <span className="hidden sm:inline whitespace-nowrap">Iniciar conversa</span>
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </a>
    </section>
  );
}
