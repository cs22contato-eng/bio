export const OFFICIAL_LOGO_PATH =
  '/assets/aistudio/WhatsApp_Image_2026-11-20_at_23.47.17_7b9a96a4.jpeg';

export interface BusinessUnit {
  id: 'marketing' | 'desenvolvimento';
  title: string;
  unitSubtitle: string;
  eyebrowLabel: string;
  description: string;
  ctaLabel: string;
  href: string;
  accentTone: 'copper' | 'silver';
}

export const BRAND_IDENTITY = {
  name: 'CS22',
  tagline: 'Tecnologia que move negócios.',
  complement:
    'Conheça nossas soluções em tecnologia, marketing e desenvolvimento digital.',
  footerSummary: 'CS22 — Tecnologia que move negócios.',
  footerDivisions: 'Marketing | Desenvolvimento Digital | Tecnologia',
} as const;

export const WHATSAPP_CONTACT = {
  label: 'FALE COM A CS22',
  displayPhone: '(18) 99162-1455',
  baseUrl: 'https://wa.me/5518991621455',
  defaultMessage:
    'Olá! Acessei a página da CS22 e gostaria de conhecer melhor as soluções da empresa.',
} as const;

export const BUSINESS_UNITS: readonly BusinessUnit[] = [
  {
    id: 'marketing',
    title: 'CS22 Marketing',
    unitSubtitle: 'Marketing',
    eyebrowLabel: 'CS22 · Marketing',
    description:
      'Marketing, fotografia automotiva e produção audiovisual para fortalecer sua presença digital e valorizar seus produtos.',
    ctaLabel: 'ACESSAR CS22 MARKETING',
    href: 'https://marketing.cs22.com.br',
    accentTone: 'copper',
  },
  {
    id: 'desenvolvimento',
    title: 'CS22 · Desenvolvimento Digital',
    unitSubtitle: 'Desenvolvimento',
    eyebrowLabel: 'Web · Apps · Micro SaaS',
    description:
      'Sites profissionais, aplicativos, micro apps e Micro SaaS sob medida para automatizar processos e escalar negócios.',
    ctaLabel: 'ACESSAR DESENVOLVIMENTO',
    href: 'https://soft.cs22.com.br',
    accentTone: 'silver',
  },
] as const;

export function buildWhatsAppUrl(
  baseUrl: string = WHATSAPP_CONTACT.baseUrl,
  message: string = WHATSAPP_CONTACT.defaultMessage,
): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const trimmedMessage = message.trim();
  if (!trimmedMessage) {
    return cleanBase;
  }
  return `${cleanBase}?text=${encodeURIComponent(trimmedMessage)}`;
}

export function isValidDestinationUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
