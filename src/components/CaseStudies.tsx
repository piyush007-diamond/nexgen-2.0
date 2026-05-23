/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { caseStudies } from '../data';
import { ChevronDown, ExternalLink, Trophy, AppWindow, Users } from 'lucide-react';

interface CaseStudiesProps {
  onOpenReferral: () => void;
}

export default function CaseStudies({ onOpenReferral }: CaseStudiesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-20">
          <div className="max-w-2xl mb-12 lg:mb-0">
            <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              Deep Dive <span className="text-zinc-600">/</span> <br />
              Into Our Work
            </h2>
            <p className="text-zinc-500 text-lg">
              Explore the detailed mechanics behind our most successful launches and strategic growth breakthroughs.
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenReferral}
            className="group relative w-32 h-32 rounded-full border-2 border-amber-500/30 flex items-center justify-center p-1 transition-all hover:border-amber-500"
          >
            <div className="absolute inset-2 rounded-full border border-dashed border-amber-500/20 animate-[spin_20s_linear_infinite]" />
            <div className="bg-amber-500 text-black w-full h-full rounded-full flex flex-col items-center justify-center shadow-xl shadow-amber-500/20">
              <Users size={28} />
              <span className="text-[10px] font-black uppercase mt-1">Refer</span>
            </div>
          </motion.button>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden transition-all hover:border-zinc-700"
            >
              <button
                onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-500 group-hover:text-amber-500 transition-colors">
                    <Trophy size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{study.title}</h3>
                    <p className="text-zinc-500 text-sm">{study.overview.slice(0, 70)}...</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${expandedId === study.id ? 'rotate-180' : ''}`}>
                  <ChevronDown size={32} className="text-zinc-700" />
                </div>
              </button>

              <AnimatePresence>
                {expandedId === study.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 border-t border-zinc-800/50">
                      <div className="grid lg:grid-cols-3 gap-12 mt-8">
                        <div className="lg:col-span-2 space-y-8">
                          <div>
                            <h4 className="text-xs font-black text-zinc-600 uppercase tracking-widest mb-4">Project Overview</h4>
                            <p className="text-zinc-400 text-lg leading-relaxed">{study.overview}</p>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-xs font-black text-zinc-600 uppercase tracking-widest mb-4">Deliverables</h4>
                              <ul className="space-y-2">
                                {study.created.map((item, idx) => (
                                  <li key={idx} className="flex items-center space-x-2 text-zinc-300">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-xs font-black text-zinc-600 uppercase tracking-widest mb-4">The Impact</h4>
                              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                                <p className="text-white font-bold text-lg">{study.results}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 h-fit">
                          <h4 className="text-xs font-black text-zinc-600 uppercase tracking-widest mb-6">Live Links</h4>
                          <div className="space-y-4">
                            {study.links.map((link, idx) => (
                              <a
                                key={idx}
                                href={link.url}
                                className="flex items-center justify-between p-4 bg-zinc-950 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all group/link"
                              >
                                <div className="flex items-center space-x-3">
                                  <AppWindow size={20} className="text-zinc-600 group-hover/link:text-amber-500" />
                                  <span className="text-white font-medium">{link.label}</span>
                                </div>
                                <ExternalLink size={18} className="text-zinc-800 group-hover/link:text-white" />
                              </a>
                            ))}
                          </div>
                          <button className="w-full mt-8 bg-amber-500 text-black py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg shadow-amber-500/10">
                            Download Case Study
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
