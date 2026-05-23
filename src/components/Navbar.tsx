/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Users } from 'lucide-react';

interface NavbarProps {
  onOpenReferral: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Social Proof', href: '#social' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About Us', href: '#team' },
  { name: 'Jobs', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenReferral }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'social', 'work', 'portfolio', 'team', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center transform rotate-12">
            <span className="text-black font-black text-xl -rotate-12">NG</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tighter">
            NextGen <span className="text-amber-500">Vaibhav</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                activeSection === link.href.substring(1) ? 'text-amber-500' : 'text-zinc-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenReferral}
            className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-black px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95"
          >
            <Users size={16} />
            <span>Refer</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-zinc-400 hover:text-white transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 lg:hidden bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col space-y-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-zinc-400 hover:text-amber-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                onOpenReferral();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 bg-amber-500 text-black py-4 rounded-xl text-lg font-bold"
            >
              <Users size={20} />
              <span>Refer A Friend</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
