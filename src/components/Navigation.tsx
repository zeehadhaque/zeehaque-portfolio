import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Film, Disc } from 'lucide-react';
import AtmosphericAudio from './AtmosphericAudio';

interface NavigationProps {
  onOpenReel: () => void;
  onOpenInquiry: () => void;
}

export default function Navigation({ onOpenReel, onOpenInquiry }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'showreel', 'works', 'universe', 'about', 'craft', 'process', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#works' },
    { name: 'SHOWREEL', href: '#showreel' },
    { name: 'UNIVERSE', href: '#universe' },
    { name: 'THE FILMMAKER', href: '#about' },
    { name: 'CRAFT', href: '#craft' },
    { name: 'PROCESS', href: '#process' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-[#060708]/90 backdrop-blur-md border-b border-white/[0.07] py-3.5'
            : 'bg-gradient-to-b from-[#060708]/95 via-[#060708]/50 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo / Director Name */}
          <a
            href="#hero"
            id="nav-logo"
            data-cursor="link"
            className="group flex flex-col items-start focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c] transition-transform duration-300 group-hover:scale-150" />
              <span className="font-cinematic tracking-[0.25em] text-sm sm:text-base font-bold text-white group-hover:text-zinc-200 transition-colors uppercase">
                ZEEHAD HAQUE
              </span>
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] text-zinc-500 tracking-[0.3em] uppercase pl-3.5 group-hover:text-zinc-400">
              DIRECTOR / BANGLADESH
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isCurrent = 
                (link.href === '#works' && activeSection === 'works') ||
                (link.href === '#universe' && activeSection === 'universe') ||
                (link.href === '#about' && activeSection === 'about') ||
                (link.href === '#craft' && activeSection === 'craft') ||
                (link.href === '#process' && activeSection === 'process') ||
                (link.href === '#contact' && activeSection === 'contact') ||
                (link.href === '#showreel' && activeSection === 'showreel');

              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  data-cursor="link"
                  className={`relative font-mono text-[11px] tracking-[0.22em] transition-all duration-300 ${
                    isCurrent
                      ? 'text-white font-medium'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isCurrent && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[1px] bg-[#b91c1c]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Quick Actions & Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <AtmosphericAudio />

            <button
              id="nav-play-reel-btn"
              type="button"
              onClick={onOpenReel}
              data-cursor="play"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded border border-white/20 bg-white/5 hover:bg-[#b91c1c] hover:border-[#b91c1c] transition-all duration-300 text-xs font-mono text-white tracking-widest uppercase"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>REEL</span>
            </button>

            <button
              id="nav-inquire-btn"
              type="button"
              onClick={onOpenInquiry}
              data-cursor="button"
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-[#b91c1c]/40 text-[#f5f5f5] hover:border-[#b91c1c] bg-[#b91c1c]/15 hover:bg-[#b91c1c]/30 text-xs font-mono tracking-widest uppercase transition-all"
            >
              <span>INQUIRE</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <AtmosphericAudio />
            
            <button
              id="btn-mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-cursor="button"
              aria-label="Toggle navigation menu"
              className="p-2 rounded text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 bg-black/50"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Fade-through-black overlay) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-40 bg-[#060708]/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-300"
        >
          <div className="space-y-6">
            <div className="text-[10px] font-mono tracking-[0.3em] text-[#b91c1c] uppercase">
              INDEX // DIRECTORS LOG
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-baseline justify-between border-b border-white/10 pb-3 group"
                >
                  <span className="font-cinematic text-2xl text-zinc-300 group-hover:text-white tracking-widest transition-colors">
                    {link.name}
                  </span>
                  <span className="font-mono text-xs text-zinc-600 group-hover:text-[#b91c1c]">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReel();
                }}
                className="flex-1 py-3 px-4 bg-[#b91c1c] text-white font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2 rounded"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                PLAY SHOWREEL
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="py-3 px-4 border border-white/20 text-white font-mono text-xs tracking-widest uppercase rounded"
              >
                INQUIRE
              </button>
            </div>
            
            <div className="font-mono text-[10px] text-zinc-500 tracking-widest text-center">
              ZEEHAD HAQUE • DHAKA, BANGLADESH
            </div>
          </div>
        </div>
      )}
    </>
  );
}
