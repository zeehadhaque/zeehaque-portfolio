import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Film, Aperture, Scissors, PenTool, Sparkles, Award } from 'lucide-react';
import { DIRECTOR_BIO } from '../data/portfolioData';

export default function AboutDirector() {
  return (
    <section
      id="about"
      className="relative w-full py-28 sm:py-36 bg-[#060708] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[11px] tracking-[0.3em] text-[#b91c1c] uppercase">
              <span className="w-2 h-0.5 bg-[#b91c1c]" />
              <span>DIRECTOR'S STATEMENT &amp; PROFILE</span>
            </div>
            <h2 className="font-cinematic text-3xl sm:text-5xl lg:text-6xl font-black tracking-wider text-white uppercase">
              THE FILMMAKER
            </h2>
          </div>

          <div className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
            BANGLADESH // INDEPENDENT CINEMA
          </div>
        </div>

        {/* Main 2-Column Director Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Vertical Cinematic Tape (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-row gap-6">
            {/* Cinematic Vertical Text Element: STORY → IMAGE → MOTION → EMOTION */}
            <div className="hidden sm:flex flex-col items-center justify-between py-6 font-mono text-[11px] tracking-[0.35em] text-zinc-500 uppercase border-r border-white/10 pr-6 select-none">
              <span className="text-[#b91c1c] font-bold">STORY</span>
              <span className="text-zinc-600">↓</span>
              <span>IMAGE</span>
              <span className="text-zinc-600">↓</span>
              <span>MOTION</span>
              <span className="text-zinc-600">↓</span>
              <span className="text-zinc-300">EMOTION</span>
            </div>

            {/* Director Portrait Placeholder in 4:5 Cinema Framing */}
            <div className="flex-1 relative aspect-[4/5] rounded overflow-hidden bg-[#0c0d10] border border-white/15 shadow-2xl group">
              <img
                src={DIRECTOR_BIO.portraitPlaceholder}
                alt="Zeehad Haque Portrait"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:scale-103 transition-transform duration-1000"
              />
              <div className="cinematic-vignette absolute inset-0 opacity-80" />
              <div className="absolute inset-0 scanlines opacity-15 pointer-events-none" />

              {/* Slate Marks on Portrait */}
              <div className="absolute top-4 left-4 font-mono text-[9px] tracking-widest text-white/80 bg-black/70 px-2 py-1 rounded backdrop-blur-sm">
                PORTRAIT // [ADD PORTRAIT ASSET]
              </div>
              <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] tracking-widest text-zinc-400 bg-black/80 p-2.5 rounded border border-white/10 backdrop-blur-md flex items-center justify-between">
                <span>ZEEHAD HAQUE</span>
                <span className="text-[#b91c1c]">DIR / DP / ED</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Creative Philosophy & Metadata (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Primary Bio Statement */}
            <div className="space-y-6">
              <p className="font-cinematic text-xl sm:text-2xl md:text-3xl text-white font-semibold leading-relaxed tracking-wide">
                {DIRECTOR_BIO.bioHeadline}
              </p>

              <p className="font-body text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
                {DIRECTOR_BIO.philosophy}
              </p>

              <p className="font-body text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
                Rooted in the visual and sonic landscape of Bangladesh—where monsoon humidity, crowded Old Dhaka alleyways, and misty delta horizons create a singular chiaroscuro—I treat cinema as an immersive psychological investigation. My films prioritize internal character truth over spectacle, allowing scenes to breathe and tension to build organically.
              </p>
            </div>

            {/* Cinematic Personal Metadata Block */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded bg-white/[0.02] border border-white/10">
              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-[#b91c1c] uppercase">
                  BASED IN
                </div>
                <div className="font-cinematic text-base font-bold text-white uppercase mt-1">
                  BANGLADESH
                </div>
                <div className="font-mono text-[11px] text-zinc-500 mt-0.5">
                  DHAKA &amp; REGIONS
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-[#b91c1c] uppercase">
                  FOCUS
                </div>
                <div className="font-cinematic text-base font-bold text-white uppercase mt-1">
                  CINEMA / STORY / VISUALS
                </div>
                <div className="font-mono text-[11px] text-zinc-500 mt-0.5">
                  PSYCHOLOGY &amp; SUSPENSE
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-[#b91c1c] uppercase">
                  CRAFT
                </div>
                <div className="font-cinematic text-base font-bold text-white uppercase mt-1">
                  DIRECTING / DP / EDITING
                </div>
                <div className="font-mono text-[11px] text-zinc-500 mt-0.5">
                  END-TO-END VISION
                </div>
              </div>
            </div>

            {/* Core Disciplines List */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="font-mono text-xs tracking-[0.25em] text-zinc-400 uppercase">
                DIRECTORIAL ETHOS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3.5 rounded bg-black/40 border border-white/5">
                  <Film className="w-4 h-4 text-[#b91c1c] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-xs text-white font-medium block uppercase tracking-wider">
                      Atmospheric Rigor
                    </span>
                    <span className="font-body text-xs text-zinc-400 font-light mt-0.5 block">
                      Every shadow and camera movement serves the emotional state of the character.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded bg-black/40 border border-white/5">
                  <Scissors className="w-4 h-4 text-[#b91c1c] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-xs text-white font-medium block uppercase tracking-wider">
                      Rhythmic Pacing
                    </span>
                    <span className="font-body text-xs text-zinc-400 font-light mt-0.5 block">
                      Balancing sustained atmospheric holds with sharp, heart-stopping narrative turns.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
