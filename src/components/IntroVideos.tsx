/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const services = [
  {
    title: 'Content Creation',
    desc: 'High-end YouTube production from script to final edit.',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Strategy & Growth',
    desc: 'Algorithm-focused strategies to maximize reach and retention.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Brand Power',
    desc: 'Bespoke partnerships that align with your unique voice.',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600',
  },
];

export default function IntroVideos() {
  return (
    <section id="what-we-do" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
                <img
                  src={service.thumbnail}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center border border-white/30">
                    <Play size={24} fill="white" />
                  </div>
                </div>
                {/* Branding Accent */}
                <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 bg-amber-500 text-black px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                  <span>owlED</span>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-zinc-400 text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
