import React from 'react';
import { motion } from 'motion/react';
import { Mail, Film, ArrowUpRight, Play, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS, DIRECTOR_BIO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenInquiry: () => void;
  onOpenReel: () => void;
}

export default function ContactSection({ onOpenInquiry, onOpenReel }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="relative w-full py-32 sm:py-44 bg-[#050607] border-t border-white/10 text-center overflow-hidden"
    >
      {/* Background Vignette & Soft Spotlight */}
      <div className="absolute inset-0 cinematic-vignette pointer-events-none opacity-90" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-96 bg-[#b91c1c]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 space-y-14">
        {/* End Credits Header Mark */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.4em] text-zinc-500 uppercase border border-white/10 px-3 py-1 rounded-full bg-black/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c] animate-pulse" />
            <span>CLOSING TITLE SEQUENCE // COLLABORATION</span>
          </div>

          {/* Huge Heading */}
          <h2 className="font-cinematic font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-white uppercase max-w-4xl mx-auto leading-tight drop-shadow-2xl">
            LET'S MAKE SOMETHING WORTH WATCHING.
          </h2>

          {/* Subtext */}
          <p className="font-body text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            For films, collaborations, editing projects, cinematography, creative work or just an idea worth discussing.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <button
            id="contact-start-project-btn"
            type="button"
            onClick={onOpenInquiry}
            data-cursor="button"
            className="px-7 py-4 bg-[#b91c1c] hover:bg-red-700 text-white font-mono text-xs tracking-[0.22em] font-semibold uppercase rounded transition-all duration-300 shadow-[0_0_25px_rgba(185,28,28,0.5)]"
          >
            START A PROJECT
          </button>

          <a
            id="contact-email-btn"
            href="mailto:zeehadhaque@example.com?subject=Film%20Collaboration%20Inquiry%20%E2%80%94%20Zeehad%20Haque"
            data-cursor="button"
            className="px-7 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-mono text-xs tracking-[0.22em] uppercase rounded transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>EMAIL ME</span>
          </a>

          <button
            id="contact-watch-work-btn"
            type="button"
            onClick={onOpenReel}
            data-cursor="play"
            className="px-7 py-4 bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white font-mono text-xs tracking-[0.22em] uppercase rounded transition-all duration-300 flex items-center gap-2"
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#b91c1c]" />
            <span>WATCH MY WORK</span>
          </button>
        </div>

        {/* Cinematic End-Credits Style Social & Production Directory */}
        <div className="pt-16 border-t border-white/10 max-w-2xl mx-auto space-y-8">
          <div className="font-mono text-[10px] tracking-[0.35em] text-zinc-500 uppercase">
            DIRECTORY // OFFICIAL CHANNELS
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SOCIAL_LINKS.slice(0, 4).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="group p-4 rounded bg-white/[0.02] border border-white/5 hover:border-white/25 hover:bg-white/[0.04] transition-all flex flex-col items-center justify-center space-y-1.5"
              >
                <span className="font-cinematic text-xs sm:text-sm font-bold text-zinc-300 group-hover:text-white uppercase tracking-wider">
                  {social.label}
                </span>
                <span className="font-mono text-[10px] text-zinc-600 group-hover:text-[#b91c1c] tracking-widest">
                  {social.handle}
                </span>
                <span className="text-[9px] font-mono text-zinc-600 opacity-60">
                  {social.note}
                </span>
              </a>
            ))}
          </div>

          <div className="font-mono text-[11px] text-zinc-500 tracking-widest pt-4">
            DIRECT INQUIRIES: <span className="text-zinc-300">zeehadhaque@example.com</span>
            <div className="text-[10px] text-zinc-600 mt-1">[REPLACE WITH YOUR PREFERRED CONTACT EMAIL]</div>
          </div>
        </div>
      </div>
    </section>
  );
}
