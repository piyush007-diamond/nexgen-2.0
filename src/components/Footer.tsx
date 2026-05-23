/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, Youtube, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-xl">NG</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-widest uppercase">
                NextGen <span className="text-amber-500">Vaibhav</span>
              </span>
            </div>
            <p className="text-zinc-500 text-lg max-w-md mb-10 leading-relaxed">
              Empowering the next generation of digital storytellers through premium content strategy and viral execution. 
              Let's build your digital empire together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white transition-colors border border-zinc-800">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white transition-colors border border-zinc-800">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white transition-colors border border-zinc-800">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Social Proof', 'Portfolio', 'About Us', 'Jobs', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-zinc-500 hover:text-amber-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <Mail size={18} className="text-amber-500 mt-1" />
                <span className="text-zinc-500">hello@nextgenvaibhav.com</span>
              </li>
              <li className="flex items-start space-x-4">
                <Phone size={18} className="text-amber-500 mt-1" />
                <span className="text-zinc-500">+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="text-amber-500 mt-1" />
                <span className="text-zinc-500">Mumbai, MH, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
          <p>© {currentYear} NextGen Vaibhav Kadnar Agency. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
