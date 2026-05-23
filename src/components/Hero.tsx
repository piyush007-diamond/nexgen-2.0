/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Play, ArrowRight, Users } from 'lucide-react';

interface HeroProps {
  onOpenReferral: () => void;
}

export default function Hero({ onOpenReferral }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full mb-8">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">Leading YouTube Agency</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              We Craft the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Future of Content
              </span>
            </h1>
            
            <p className="text-xl text-zinc-400 mb-10 max-w-lg leading-relaxed">
              NextGen Vaibhav Kadnar is more than a creator—we are a premium content engine helping brands and creators dominate the digital attention economy.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="bg-zinc-100 hover:bg-white text-black px-8 py-4 rounded-xl flex items-center space-x-2 font-bold transition-all transform hover:translate-y-[-2px] hover:shadow-lg shadow-amber-500/10"
              >
                <span>Explore Our Work</span>
                <ArrowRight size={20} />
              </a>
              <button
                onClick={onOpenReferral}
                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white px-8 py-4 rounded-xl flex items-center space-x-2 font-bold transition-all transform hover:translate-y-[-2px]"
              >
                <Users size={20} className="text-amber-500" />
                <span>Join Referral System</span>
              </button>
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm max-w-md">
              <p className="text-zinc-500 text-sm italic font-medium">
                "Our mission is to bridge the gap between creative vision and viral execution, delivering unmatched engagement for every partner."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 group">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200&h=800"
                alt="Production"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-amber-500 text-black rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/20"
                >
                  <Play size={32} fill="currentColor" className="ml-1" />
                </motion.button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-950/80 backdrop-blur-md rounded-2xl border border-zinc-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold">2024 Showreel</h4>
                    <p className="text-zinc-400 text-xs uppercase tracking-widest mt-1">Directing Brilliance</p>
                  </div>
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-950 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
