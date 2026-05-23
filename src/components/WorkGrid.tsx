/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { ExternalLink, X, BarChart3, Radio } from 'lucide-react';
import { Project } from '../types';

export default function WorkGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Our Recent Work</h2>
            <p className="text-zinc-500 max-w-md">Highlighting the most impactful campaigns and content series we've delivered.</p>
          </div>
          <div className="flex space-x-2">
            {['All', 'YouTube', 'Shorts', 'Brand'].map((cat) => (
              <button key={cat} className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${cat === 'All' ? 'bg-amber-500 border-amber-500 text-black' : 'border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-zinc-900 shadow-2xl">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-amber-500 text-black text-[10px] font-black uppercase tracking-widest mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 text-white">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-900 border border-zinc-800 p-8 lg:p-12 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <span className="text-amber-500 text-xs font-black uppercase tracking-[0.2em] mb-4 block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                    {selectedProject.title}
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 bg-zinc-800/50 p-4 rounded-2xl border border-zinc-700/50">
                      <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center">
                        <BarChart3 size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 uppercase font-black">Success Metric</p>
                        <p className="text-white font-bold">{selectedProject.metrics}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 bg-zinc-800/50 p-4 rounded-2xl border border-zinc-700/50">
                      <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center">
                        <Radio size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 uppercase font-black">Related Channels</p>
                        <p className="text-white font-bold">{selectedProject.relatedChannels.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-6 text-xl">Key Content & Posts</h4>
                  <div className="space-y-4">
                    {selectedProject.videos.map((vid, idx) => (
                      <div key={idx} className="group/item flex items-center justify-between p-4 bg-zinc-950 rounded-2xl border border-zinc-800 transition-all hover:border-zinc-700">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-600 group-hover/item:text-amber-500">
                            <Radio size={20} />
                          </div>
                          <div>
                            <p className="text-white font-medium">{vid.title}</p>
                            <p className="text-zinc-500 text-xs">{vid.engagement}</p>
                          </div>
                        </div>
                        <button className="text-zinc-600 hover:text-white">
                          <ExternalLink size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-10 bg-white text-black font-black py-4 rounded-2xl uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors">
                    Visit Portfolio Link
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
