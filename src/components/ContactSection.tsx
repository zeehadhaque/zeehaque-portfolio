import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, Phone, Copy, Check, Play, ExternalLink, Send } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenInquiry: () => void;
  onOpenReel: () => void;
}

export default function ContactSection({ onOpenInquiry, onOpenReel }: ContactSectionProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 sm:py-36 bg-[#050607] border-t border-white/10 text-center overflow-hidden"
    >
      {/* Background Vignette & Soft Spotlight */}
      <div className="absolute inset-0 cinematic-vignette pointer-events-none opacity-90" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-96 bg-[#b91c1c]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 space-y-12">
        {/* End Credits Header Mark */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.4em] text-zinc-400 uppercase border border-white/10 px-3 py-1 rounded-full bg-black/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c] animate-pulse" />
            <span>CLOSING TITLE SEQUENCE // DIRECT CONTACT</span>
          </div>

          {/* Huge Heading */}
          <h2 className="font-cinematic font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-white uppercase max-w-4xl mx-auto leading-tight drop-shadow-2xl">
            LET'S MAKE SOMETHING WORTH WATCHING.
          </h2>

          {/* Subtext */}
          <p className="font-body text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            For films, narrative collaborations, cinematography, editing commissions, or discussing an original screen idea.
          </p>
        </div>

        {/* Priority Direct Channels: Gmail & WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
          {/* WhatsApp Direct Card */}
          <div className="relative p-6 rounded-lg bg-[#080a0c] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group shadow-xl">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-md bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-cinematic font-bold text-sm text-white tracking-widest uppercase">
                      WHATSAPP DIRECT
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase">
                    MESSAGES & DIRECT CALLS
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(CONTACT_INFO.phone, 'phone')}
                title="Copy phone number"
                className="p-2 rounded border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors"
              >
                {copiedType === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <div className="mt-5 space-y-1">
              <div className="font-mono text-lg sm:text-xl font-bold text-zinc-100 tracking-wider">
                {CONTACT_INFO.phone}
              </div>
              <div className="font-mono text-[11px] text-zinc-500">
                International: <span className="text-zinc-400">{CONTACT_INFO.formattedPhone}</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-3">
              <a
                id="contact-whatsapp-chat-btn"
                href={CONTACT_INFO.whatsappTextUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-emerald-600/90 hover:bg-emerald-500 text-white font-mono text-xs tracking-wider uppercase font-semibold transition-all shadow-lg"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>CHAT ON WHATSAPP</span>
              </a>
              <a
                id="contact-phone-call-btn"
                href={CONTACT_INFO.telUrl}
                data-cursor="link"
                title="Direct Phone Call"
                className="p-2.5 rounded border border-white/15 hover:border-white/30 bg-white/5 text-zinc-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Gmail Direct Card */}
          <div className="relative p-6 rounded-lg bg-[#080a0c] border border-white/10 hover:border-[#b91c1c]/50 transition-all duration-300 group shadow-xl">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-md bg-red-950/40 border border-red-500/30 flex items-center justify-center text-red-400 shadow-[0_0_15px_rgba(185,28,28,0.25)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-cinematic font-bold text-sm text-white tracking-widest uppercase">
                      OFFICIAL GMAIL
                    </span>
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase">
                    SCRIPTS & FORMAL PROPOSALS
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
                title="Copy Gmail address"
                className="p-2 rounded border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-colors"
              >
                {copiedType === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <div className="mt-5 space-y-1">
              <div className="font-mono text-base sm:text-lg font-bold text-zinc-100 tracking-tight break-all">
                {CONTACT_INFO.email}
              </div>
              <div className="font-mono text-[11px] text-zinc-500">
                Inbox Monitored Daily • Response within 24h
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-3">
              <a
                id="contact-gmail-send-btn"
                href={`mailto:${CONTACT_INFO.email}?subject=Film%20Project%20Inquiry%20%E2%80%94%20Zeehad%20Haque`}
                data-cursor="link"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#b91c1c] hover:bg-red-700 text-white font-mono text-xs tracking-wider uppercase font-semibold transition-all shadow-lg"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SEND GMAIL</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
                data-cursor="button"
                className="py-2.5 px-3 rounded border border-white/15 hover:border-white/30 bg-white/5 text-zinc-300 hover:text-white font-mono text-xs tracking-wider uppercase transition-colors"
              >
                {copiedType === 'email' ? 'COPIED' : 'COPY'}
              </button>
            </div>
          </div>
        </div>

        {/* Supplementary Action Row */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            id="contact-start-project-btn"
            type="button"
            onClick={onOpenInquiry}
            data-cursor="button"
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-mono text-xs tracking-[0.2em] uppercase rounded transition-all flex items-center gap-2"
          >
            <span>SUBMIT INQUIRY DOSSIER</span>
          </button>

          <button
            id="contact-watch-work-btn"
            type="button"
            onClick={onOpenReel}
            data-cursor="play"
            className="px-6 py-3 bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white font-mono text-xs tracking-[0.2em] uppercase rounded transition-all flex items-center gap-2"
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#b91c1c]" />
            <span>WATCH SHOWREEL</span>
          </button>
        </div>

        {/* Cinematic End-Credits Style Social & Production Directory */}
        <div className="pt-12 border-t border-white/10 max-w-3xl mx-auto space-y-6">
          <div className="font-mono text-[10px] tracking-[0.35em] text-zinc-500 uppercase">
            DIRECTORY // OFFICIAL CHANNELS & PROFILES
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="group p-3 rounded bg-white/[0.02] border border-white/5 hover:border-white/25 hover:bg-white/[0.05] transition-all flex flex-col items-center justify-center space-y-1"
              >
                <span className="font-cinematic text-xs font-bold text-zinc-300 group-hover:text-white uppercase tracking-wider">
                  {social.label}
                </span>
                <span className="font-mono text-[9px] text-zinc-500 group-hover:text-[#b91c1c] tracking-tight truncate max-w-full">
                  {social.handle}
                </span>
              </a>
            ))}
          </div>

          <div className="font-mono text-[11px] text-zinc-400 tracking-wider pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#b91c1c]" />
              <span>GMAIL: <strong className="text-white">zeehadhaque@gmail.com</strong></span>
            </span>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WHATSAPP: <strong className="text-white">01629851155</strong></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
