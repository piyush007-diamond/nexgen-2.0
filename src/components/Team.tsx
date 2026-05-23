/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { teamMembers } from '../data';
import { Youtube, Instagram, Twitter, Linkedin, Briefcase, Target, Heart, Users } from 'lucide-react';

const icons = {
  youtube: Youtube,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
};

export default function Team() {
  return (
    <section id="team" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">Team Behind NextGen</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
            A collective of creators, strategists, and visionaries dedicated to pushing the boundaries of what's possible in the digital space.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center text-center group hover:border-amber-500/30 transition-all"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-amber-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-2xl object-cover relative z-10 border border-zinc-800"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-amber-500 text-sm font-black uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-zinc-500 text-sm mb-6 leading-relaxed">{member.bio}</p>
              
              <div className="flex space-x-4 mt-auto">
                {Object.entries(member.socials).map(([platform, url]) => {
                  const Icon = icons[platform as keyof typeof icons];
                  return (
                    <a
                      key={platform}
                      href={url}
                      className="text-zinc-600 hover:text-white transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ahead in Action & Culture */}
        <div className="grid lg:grid-cols-2 gap-12 bg-zinc-900 border border-zinc-800 rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[80px] -mr-48 -mt-48" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center space-x-4">
              <Target size={32} className="text-amber-500" />
              <span>Ahead in Action</span>
            </h3>
            <div className="space-y-6">
              {[
                { title: 'Community Outreach', desc: 'Workshops for aspiring regional creators.' },
                { title: 'Tech Integration', desc: 'Exploring AI-driven post-production workflows.' },
                { title: 'Sustainability', desc: 'Reducing production footprints through remote editing.' },
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="inline-block mt-10 text-amber-500 font-bold hover:underline">
              Redirect to Full About Us →
            </a>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center space-x-4">
              <Heart size={32} className="text-pink-500" />
              <span>Culture & Values</span>
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                <Briefcase size={24} className="text-zinc-600 mb-4" />
                <h4 className="text-white font-bold mb-2">Creativity First</h4>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Innovation over imitation</p>
              </div>
              <div className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                <Users size={24} className="text-zinc-600 mb-4" />
                <h4 className="text-white font-bold mb-2">Team Sync</h4>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Growth through synergy</p>
              </div>
            </div>
            <div className="mt-8 p-8 border border-dashed border-zinc-800 rounded-2xl">
              <p className="text-zinc-400 text-center italic">
                "We believe that the best content is born when passion meets precision."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
