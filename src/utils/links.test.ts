import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BRAND_IDENTITY,
  BUSINESS_UNITS,
  OFFICIAL_LOGO_PATH,
  WHATSAPP_CONTACT,
  buildWhatsAppUrl,
  isValidDestinationUrl,
} from './links';

test('official logo path points to project asset', () => {
  assert.equal(
    OFFICIAL_LOGO_PATH,
    '/assets/aistudio/WhatsApp_Image_2026-11-20_at_23.47.17_7b9a96a4.jpeg',
  );
});

test('brand identity strings match required institutional copy', () => {
  assert.equal(BRAND_IDENTITY.name, 'CS22');
  assert.equal(BRAND_IDENTITY.tagline, 'Tecnologia que move negócios.');
  assert.equal(
    BRAND_IDENTITY.complement,
    'Conheça nossas soluções em tecnologia, marketing e gestão empresarial.',
  );
  assert.equal(BRAND_IDENTITY.footerDivisions, 'Marketing | Sistemas | Tecnologia');
});

test('business units define exact titles, buttons, and HTTPS destinations', () => {
  assert.equal(BUSINESS_UNITS.length, 2);

  const [marketing, sistemas] = BUSINESS_UNITS;
  assert.equal(marketing.title, 'CS22 Marketing');
  assert.equal(marketing.ctaLabel, 'ACESSAR CS22 MARKETING');
  assert.equal(marketing.href, 'https://marketing.cs22.com.br');
  assert.equal(isValidDestinationUrl(marketing.href), true);

  assert.equal(sistemas.title, 'CS22 Sistemas');
  assert.equal(sistemas.ctaLabel, 'ACESSAR CS22 SISTEMAS');
  assert.equal(sistemas.href, 'https://gestao.cs22.com.br');
  assert.equal(isValidDestinationUrl(sistemas.href), true);
});

test('WhatsApp URL builder preserves base endpoint and encodes greeting message', () => {
  const url = buildWhatsAppUrl();
  assert.equal(url.startsWith('https://wa.me/5518991621455?text='), true);
  assert.equal(isValidDestinationUrl(url), true);

  const parsed = new URL(url);
  assert.equal(parsed.searchParams.get('text'), WHATSAPP_CONTACT.defaultMessage);
  assert.equal(WHATSAPP_CONTACT.displayPhone, '(18) 99162-1455');
  assert.equal(WHATSAPP_CONTACT.label, 'FALE COM A CS22');
});

test('WhatsApp URL builder returns clean base URL when message is blank', () => {
  assert.equal(
    buildWhatsAppUrl('https://wa.me/5518991621455/', '   '),
    'https://wa.me/5518991621455',
  );
});
