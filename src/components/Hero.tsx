import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Play, ChevronDown, Compass, Film } from 'lucide-react';
import { DIRECTOR_BIO } from '../data/portfolioData';

interface HeroProps {
  onOpenReel: () => void;
}

export default function Hero({ onOpenReel }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Atmospheric film dust / subtle ambient light particles canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle 35mm projector dust motes
    const particleCount = 38;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.4,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -Math.random() * 0.35 - 0.05,
      alpha: Math.random() * 0.35 + 0.1,
      maxAlpha: Math.random() * 0.4 + 0.1,
    }));

    let frameCount = 0;
    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      // Faint central anamorphic horizontal anamorphic light sweep
      const sweepY = height * 0.48;
      const gradient = ctx.createRadialGradient(
        width * 0.5,
        sweepY,
        10,
        width * 0.5,
        sweepY,
        width * 0.65
      );
      gradient.addColorStop(0, 'rgba(185, 28, 28, 0.05)');
      gradient.addColorStop(0.3, 'rgba(30, 40, 50, 0.03)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle floating dust
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 225, 230, ${p.alpha * (0.8 + 0.2 * Math.sin(frameCount * 0.02))})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between items-center text-center px-4 sm:px-6 pt-24 pb-12 overflow-hidden select-none bg-[#060708]"
    >
      {/* Background Layer: Atmospheric cinematic texture & video placeholder */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Placeholder for /assets/hero-reel.mp4 */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105 transition-transform duration-10000 ease-out"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2400&q=85')`,
            filter: 'contrast(125%) brightness(65%) grayscale(40%)',
          }}
        />

        {/* Ambient Film Canvas Particles */}
        <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />

        {/* Heavy Atmospheric Vignette & Letterbox Shadow */}
        <div className="cinematic-vignette absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060708] via-transparent to-[#060708]/80" />
      </div>

      {/* Top Metadata / Coordinates */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between text-[10px] font-mono tracking-[0.28em] text-zinc-500 uppercase px-4 pt-4"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#b91c1c] animate-pulse" />
          <span>PORTFOLIO ARCHIVE // 2026</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>{DIRECTOR_BIO.locationCoords}</span>
          <span className="text-zinc-700">|</span>
          <span>FORMAT: 2.39:1 CINEMASCOPE</span>
        </div>
      </motion.div>

      {/* Center Cinematic Title Sequence */}
      <div className="relative z-10 my-auto py-12 max-w-5xl mx-auto flex flex-col items-center">
        {/* Archival category tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 text-[11px] font-mono text-zinc-400 tracking-[0.3em] uppercase backdrop-blur-sm"
        >
          <Film className="w-3 h-3 text-[#b91c1c]" />
          <span>INDEPENDENT CINEMA &amp; ATMOSPHERES</span>
        </motion.div>

        {/* Large Cinematic Display Heading */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: '0.35em', scale: 0.96 }}
          animate={{ opacity: 1, letterSpacing: '0.18em', scale: 1 }}
          transition={{ duration: 2.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-cinematic font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.14em] text-white uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
        >
          ZEEHAD HAQUE
        </motion.h1>

        {/* Cinematic Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 font-mono text-xs sm:text-sm md:text-base tracking-[0.28em] text-zinc-300 font-medium uppercase text-center px-4"
        >
          FILMMAKER / WRITER / DIRECTOR / CINEMATOGRAPHER / EDITOR
        </motion.div>

        {/* Thin decorative rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 1.8 }}
          className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-transparent via-[#b91c1c] to-transparent my-7"
        />

        {/* Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.0 }}
          className="font-body text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl font-light italic tracking-wide px-4"
        >
          &ldquo;{DIRECTOR_BIO.statement}&rdquo;
        </motion.p>

        {/* Interactive action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            id="hero-play-reel-btn"
            type="button"
            onClick={onOpenReel}
            data-cursor="play"
            className="group relative inline-flex items-center gap-3 px-6 py-3.5 bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs tracking-[0.2em] font-semibold uppercase rounded transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(185,28,28,0.4)]"
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#b91c1c] group-hover:scale-110 transition-transform" />
            <span>PLAY SHOWREEL</span>
          </button>

          <a
            id="hero-explore-works-btn"
            href="#works"
            data-cursor="link"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-black/60 hover:bg-white/5 border border-white/20 hover:border-white/40 text-zinc-200 font-mono text-xs tracking-[0.2em] uppercase rounded transition-all duration-300 backdrop-blur-sm"
          >
            <span>SELECTED WORKS</span>
          </a>

          <a
            id="hero-explore-universe-btn"
            href="#universe"
            data-cursor="link"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 text-zinc-400 hover:text-white font-mono text-xs tracking-[0.2em] uppercase rounded transition-all duration-300"
          >
            <Compass className="w-3.5 h-3.5 text-[#b91c1c]" />
            <span>ENTER UNIVERSE</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator with gentle pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 2.6 }}
        className="relative z-10 flex flex-col items-center gap-2 text-center"
      >
        <a
          href="#showreel"
          data-cursor="link"
          className="group flex flex-col items-center gap-2 focus:outline-none"
        >
          <span className="font-mono text-[10px] tracking-[0.35em] text-zinc-500 group-hover:text-zinc-300 uppercase transition-colors">
            SCROLL TO ENTER
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#b91c1c] transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-[#b91c1c]"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
