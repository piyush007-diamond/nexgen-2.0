/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Youtube, Instagram, Twitter, Music, Users } from 'lucide-react';
import { socialMetrics } from '../data';

interface SocialProofProps {
  onOpenReferral: () => void;
}

const iconMap = {
  YouTube: Youtube,
  Instagram: Instagram,
  TikTok: Music,
  Twitter: Twitter,
};

export default function SocialProof({ onOpenReferral }: SocialProofProps) {
  return (
    <section id="social" className="py-24 bg-zinc-900 overflow-hidden relative">
      {/* Decorative Branding Text */}
      <div className="absolute top-0 right-0 text-[20vw] font-black text-white/[0.02] leading-none select-none pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        REACH
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Our Reach & Impact</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Harnessing the power of high-engagement networks to amplify your brand value. We don't just create; we conquer the feed.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {socialMetrics.map((metric, index) => {
            const Icon = iconMap[metric.platform as keyof typeof iconMap];
            return (
              <motion.div
                key={metric.platform}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl group transition-all hover:border-amber-500/50"
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${metric.color}20`, color: metric.color }}
                >
                  <Icon size={28} />
                </div>
                <div className="text-4xl font-black text-white mb-1">{metric.count}</div>
                <div className="text-zinc-500 text-sm font-semibold uppercase tracking-widest">{metric.label}</div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <button
            onClick={onOpenReferral}
            className="inline-flex items-center space-x-3 bg-amber-500 hover:bg-amber-600 text-black px-10 py-5 rounded-2xl font-black transition-all shadow-xl shadow-amber-500/10 active:scale-95"
          >
            <Users size={24} />
            <span className="uppercase tracking-widest">Refer Us For Your Brand</span>
          </button>
          
          <div className="mt-8 flex justify-center items-center space-x-4 grayscale opacity-40">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Theran Speak Branding Colors</span>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-zinc-100" />
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
