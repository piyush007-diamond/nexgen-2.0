/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroVideos from './components/IntroVideos';
import SocialProof from './components/SocialProof';
import WorkGrid from './components/WorkGrid';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReferralModal from './components/ReferralModal';

export default function App() {
  const [isReferralOpen, setIsReferralOpen] = useState(false);

  const openReferral = () => setIsReferralOpen(true);
  const closeReferral = () => setIsReferralOpen(false);

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100 selection:bg-amber-500 selection:text-black">
      <Navbar onOpenReferral={openReferral} />
      
      <main>
        <Hero onOpenReferral={openReferral} />
        <section className="bg-zinc-900 py-16 border-y border-zinc-800">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {['YouTube', 'Instagram', 'TikTok', 'Spotify', 'Amazon', 'Meta'].map((partner) => (
                <span key={partner} className="text-2xl font-black tracking-tighter text-white">
                  {partner}
                </span>
              ))}
            </div>
            <div className="mt-12 text-center">
               <p className="text-zinc-500 text-sm max-w-2xl mx-auto uppercase tracking-widest font-black">
                 Trusted by Industry Giants & Global Creators
               </p>
            </div>
          </div>
        </section>

        <IntroVideos />
        <SocialProof onOpenReferral={openReferral} />
        <WorkGrid />
        <CaseStudies onOpenReferral={openReferral} />
        <Team />
        <Contact />
      </main>

      <Footer />
      
      <ReferralModal isOpen={isReferralOpen} onClose={closeReferral} />
    </div>
  );
}

