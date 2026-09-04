import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Maximize2, Volume2, VolumeX, Film, Aperture } from 'lucide-react';
import { DIRECTOR_BIO } from '../data/portfolioData';

interface ShowreelProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

export default function Showreel({ isModalOpen, setIsModalOpen }: ShowreelProps) {
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const reelCrafts = [
    { name: "DIRECTING", desc: "Performance & Tone" },
    { name: "CINEMATOGRAPHY", desc: "Anamorphic Framing & Light" },
    { name: "EDITING", desc: "Rhythm, Tension & Montage" },
    { name: "STORYTELLING", desc: "Atmosphere & Subtext" }
  ];

  return (
    <section
      id="showreel"
      className="relative w-full py-24 sm:py-32 bg-[#060708] border-t border-white/5 overflow-hidden"
    >
      {/* Background glow & subtle grain */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#b91c1c]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[11px] tracking-[0.3em] text-[#b91c1c] uppercase">
              <span className="w-2 h-0.5 bg-[#b91c1c]" />
              <span>SELECTED MOMENTS / 2024—2026</span>
            </div>
            <h2 className="font-cinematic text-3xl sm:text-5xl font-extrabold tracking-wider text-white uppercase">
              SHOWREEL
            </h2>
          </div>

          <div className="font-mono text-xs text-zinc-500 tracking-[0.2em] flex items-center gap-4">
            <span>RATIO: 2.39:1 CINEMASCOPE</span>
            <span className="text-zinc-700">|</span>
            <span>4K MASTER</span>
          </div>
        </div>

        {/* Cinematic Video Player Container (2.39:1 aspect ratio) */}
        <div
          id="showreel-viewport"
          onClick={() => setIsModalOpen(true)}
          data-cursor="play"
          className="group relative w-full aspect-[16/9] md:aspect-[2.39/1] rounded-sm overflow-hidden bg-[#0c0d10] border border-white/10 cursor-pointer shadow-2xl transition-all duration-500 hover:border-white/30"
        >
          {/* Visual Poster Background */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
            style={{
              backgroundImage: `url('${DIRECTOR_BIO.showreelThumbnail}'), url('https://i.ytimg.com/vi/O88euzMxskQ/hqdefault.jpg')`,
              filter: 'brightness(65%) contrast(110%)',
            }}
          />

          {/* Letterbox Mattes (2.39:1 Anamorphic Top/Bottom Bars) */}
          <div className="absolute top-0 left-0 right-0 h-4 md:h-7 bg-[#060708] z-10 border-b border-white/5 opacity-80" />
          <div className="absolute bottom-0 left-0 right-0 h-4 md:h-7 bg-[#060708] z-10 border-t border-white/5 opacity-80" />

          {/* Cinematic Scanlines & Vignette */}
          <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />
          <div className="absolute inset-0 cinematic-vignette opacity-80 pointer-events-none" />

          {/* Center Play Interaction Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 transition-all duration-300 group-hover:bg-black/40">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/40 flex items-center justify-center bg-black/60 backdrop-blur-md transition-all duration-500 group-hover:border-[#b91c1c] group-hover:bg-[#b91c1c]/80 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            >
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-25" />
              <Play className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-current ml-1" />
            </motion.div>

            <span className="mt-4 font-mono text-xs sm:text-sm tracking-[0.3em] font-semibold text-white uppercase drop-shadow group-hover:text-white transition-colors">
              PLAY REEL
            </span>
            <span className="mt-1 font-mono text-[10px] tracking-[0.2em] text-zinc-400">
              03:42 // SOUND ON RECOMMENDED
            </span>
          </div>

          {/* Top Left Timecode Display */}
          <div className="absolute top-7 left-6 z-20 hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-widest text-zinc-400 bg-black/60 px-2.5 py-1 rounded border border-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c] animate-pulse" />
            <span>TC 01:00:14:22</span>
          </div>

          {/* Bottom Right Resolution Badge */}
          <div className="absolute bottom-7 right-6 z-20 hidden sm:flex items-center gap-3 font-mono text-[10px] tracking-widest text-zinc-400 bg-black/60 px-2.5 py-1 rounded border border-white/10 backdrop-blur-sm">
            <span>DCI 4K</span>
            <span className="text-zinc-600">|</span>
            <span>24.000 FPS</span>
          </div>
        </div>

        {/* Bottom Metadata: Directing • Cinematography • Editing • Storytelling */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/5">
          {reelCrafts.map((craft, idx) => (
            <div
              key={craft.name}
              className="flex flex-col p-4 rounded bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] text-[#b91c1c] tracking-widest">
                  0{idx + 1}
                </span>
                <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-[#b91c1c] transition-colors" />
              </div>
              <span className="font-cinematic text-sm sm:text-base text-zinc-200 group-hover:text-white font-bold tracking-wider uppercase">
                {craft.name}
              </span>
              <span className="font-mono text-[11px] text-zinc-500 tracking-wider mt-1">
                {craft.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Cinematic Theater Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Top Bar Controls */}
            <div className="flex items-center justify-between max-w-7xl mx-auto w-full pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#b91c1c] animate-pulse" />
                <span className="font-cinematic text-sm sm:text-base tracking-widest text-white uppercase font-bold">
                  ZEEHAD HAQUE — SHOWREEL 2024—2026
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  data-cursor="button"
                  className="p-2 rounded border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#b91c1c]" />}
                </button>
                <button
                  id="btn-close-showreel-modal"
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  data-cursor="button"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/20 hover:border-white/40 bg-white/5 text-zinc-200 hover:text-white font-mono text-xs tracking-widest uppercase transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>CLOSE</span>
                </button>
              </div>
            </div>

            {/* Main Theatrical Video Screen */}
            <div className="my-auto w-full max-w-5xl mx-auto aspect-[16/9] bg-black rounded overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.9)] relative flex items-center justify-center">
              {/* Embedded video player placeholder */}
              <iframe
                src={`${DIRECTOR_BIO.showreelUrl}?autoplay=1&mute=${isMuted ? 1 : 0}&rel=0&controls=1`}
                title="Zeehad Haque Showreel"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Bottom Letterbox Bar */}
            <div className="max-w-7xl mx-auto w-full pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
              <div>PRESS ESCAPE OR CLICK CLOSE TO EXIT THEATER</div>
              <div className="text-zinc-400">YOUTUBE: O88euzMxskQ // DIRECTORIAL MASTER</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
