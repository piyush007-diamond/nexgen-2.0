/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
            <p className="text-zinc-500 text-lg mb-12">
              Ready to take your content to the next level? Fill out the form or reach out directly to start a conversation.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-amber-500 border border-zinc-800">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 uppercase font-black tracking-widest mb-1">Email Us</p>
                  <p className="text-white font-bold">hello@nextgenvaibhav.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-amber-500 border border-zinc-800">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 uppercase font-black tracking-widest mb-1">Call Us</p>
                  <p className="text-white font-bold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-amber-500 border border-zinc-800">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 uppercase font-black tracking-widest mb-1">Visit Us</p>
                  <p className="text-white font-bold">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-zinc-900">
              <h4 className="text-white font-bold mb-6">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {[
                  { Icon: Youtube, href: '#', color: 'hover:text-[#FF0000]' },
                  { Icon: Instagram, href: '#', color: 'hover:text-[#E4405F]' },
                  { Icon: Twitter, href: '#', color: 'hover:text-[#1DA1F2]' },
                ].map(({ Icon, href, color }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className={`w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-zinc-600 transition-all border border-zinc-800 ${color}`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 lg:p-12 rounded-[2.5rem]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-600 uppercase tracking-widest">Your Name</label>
                  <input
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-600 uppercase tracking-widest">Your Email</label>
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-zinc-600 uppercase tracking-widest">Mobile Number</label>
                <input
                  required
                  type="tel"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-zinc-600 uppercase tracking-widest">Your Message</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-black py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all transform active:scale-95 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={20} />
              </button>
              
              {isSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-amber-500 font-bold"
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
