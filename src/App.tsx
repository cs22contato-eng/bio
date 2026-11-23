/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AmbientBackground } from './components/AmbientBackground';
import { BrandFooter } from './components/BrandFooter';
import { BrandHeader } from './components/BrandHeader';
import { UnitCard } from './components/UnitCard';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { BUSINESS_UNITS } from './utils/links';

export default function App() {
  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between">
      <AmbientBackground />

      <main className="relative z-10 mx-auto w-full max-w-4xl px-3.5 sm:px-6 flex-1 flex flex-col justify-center">
        <BrandHeader />

        {/* Primary Business Units — Equal Visual Weight */}
        <section
          aria-label="Unidades de negócio da CS22"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch"
        >
          {BUSINESS_UNITS.map((unit, index) => (
            <UnitCard key={unit.id} unit={unit} index={index} />
          ))}
        </section>

        {/* Direct Contact CTA */}
        <WhatsAppCTA />
      </main>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6">
        <BrandFooter />
      </div>
    </div>
  );
}
