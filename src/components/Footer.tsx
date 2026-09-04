import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, Mail, MessageCircle } from 'lucide-react';
import { DIRECTOR_BIO, CONTACT_INFO } from '../data/portfolioData';

export default function Footer() {
  const [dhakaTime, setDhakaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Dhaka (Asia/Dhaka timezone: UTC+6)
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dhaka',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(now);
      setDhakaTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="relative w-full bg-[#030405] text-zinc-400 border-t border-white/10 py-16 px-5 sm:px-8 select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Top Tier: Name & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-10 gap-6">
          <div className="space-y-2">
            <h3 className="font-cinematic text-2xl sm:text-3xl font-extrabold tracking-widest text-white uppercase">
              ZEEHAD HAQUE
            </h3>
            <p className="font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase">
              FILMMAKER / WRITER / DIRECTOR / CINEMATOGRAPHER / EDITOR
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-zinc-500 tracking-widest">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#b91c1c]" />
              <span>DHAKA: {dhakaTime || '00:00:00'} [UTC+6]</span>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              data-cursor="button"
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Navigation Links & Direct Contacts */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs tracking-widest text-zinc-500">
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <a href="#hero" className="hover:text-white transition-colors">HOME</a>
            <a href="#works" className="hover:text-white transition-colors">SELECTED WORKS</a>
            <a href="#showreel" className="hover:text-white transition-colors">SHOWREEL</a>
            <a href="#universe" className="hover:text-white transition-colors">CINEMATIC UNIVERSE</a>
            <a href="#about" className="hover:text-white transition-colors">THE FILMMAKER</a>
            <a href="#craft" className="hover:text-white transition-colors">CRAFT</a>
            <a href="#process" className="hover:text-white transition-colors">PROCESS</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-zinc-400">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors text-[11px]"
            >
              <Mail className="w-3.5 h-3.5 text-[#b91c1c]" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors text-[11px]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WA: {CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Colophon */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-8 font-mono text-[11px] text-zinc-600 gap-4">
          <div>
            © 2026 Zeehad Haque. All rights reserved.
          </div>
          <div className="tracking-widest uppercase text-center sm:text-right">
            ATMOSPHERE • PSYCHOLOGY • MOTION • INDEPENDENT CINEMA
          </div>
        </div>
      </div>
    </footer>
  );
}
