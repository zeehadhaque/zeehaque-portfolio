import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROCESS_STAGES } from '../data/portfolioData';
import { Clock, CheckCircle2, ChevronRight } from 'lucide-react';

export default function FilmmakingProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      className="relative w-full py-28 sm:py-36 bg-[#060708] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-[#b91c1c] uppercase">
              <span className="w-2 h-0.5 bg-[#b91c1c]" />
              <span>THE PRODUCTION CYCLE</span>
            </div>
            <h2 className="font-cinematic text-3xl sm:text-5xl lg:text-6xl font-black tracking-wider text-white uppercase">
              FILMMAKING PROCESS
            </h2>
            <p className="font-body text-zinc-400 text-sm sm:text-base max-w-xl font-light">
              From an unspoken psychological spark to final theatrical DCP exhibition. A disciplined, 7-stage architectural arc.
            </p>
          </div>

          <div className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
            07 PROGRESSIVE PHASES
          </div>
        </div>

        {/* Desktop Horizontal Timeline Stepper */}
        <div className="hidden lg:block mb-12">
          <div className="relative flex items-center justify-between">
            {/* Background connecting track */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/10 z-0" />
            
            {/* Active progress bar indicator */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#b91c1c] z-0 transition-all duration-500"
              style={{ width: `${(activeStep / (PROCESS_STAGES.length - 1)) * 100}%` }}
            />

            {PROCESS_STAGES.map((stage, idx) => {
              const isActive = idx === activeStep;
              const isPassed = idx < activeStep;

              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  data-cursor="button"
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs transition-all duration-300 ${
                      isActive
                        ? 'bg-[#b91c1c] text-white ring-4 ring-[#b91c1c]/20 scale-110 shadow-[0_0_15px_rgba(185,28,28,0.6)]'
                        : isPassed
                          ? 'bg-zinc-800 text-zinc-200 border border-white/20'
                          : 'bg-[#08090b] text-zinc-600 border border-white/10 group-hover:border-white/30'
                    }`}
                  >
                    {stage.step}
                  </div>
                  <span
                    className={`mt-3 font-cinematic text-xs tracking-wider uppercase font-bold transition-colors ${
                      isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}
                  >
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Display (Desktop Spotlight) */}
        <div className="hidden lg:block p-8 rounded bg-[#090b0d] border border-white/10 shadow-2xl">
          <div className="flex items-start justify-between border-b border-white/10 pb-6 mb-6">
            <div>
              <div className="font-mono text-xs text-[#b91c1c] tracking-[0.3em] uppercase">
                PHASE 0{activeStep + 1} // {PROCESS_STAGES[activeStep].phase}
              </div>
              <h3 className="font-cinematic text-4xl font-bold text-white uppercase mt-1 tracking-wider">
                {PROCESS_STAGES[activeStep].title}
              </h3>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                className="px-3 py-1.5 rounded border border-white/10 disabled:opacity-30 text-xs font-mono tracking-widest text-zinc-300 uppercase hover:border-white/30 transition-colors"
              >
                PREV PHASE
              </button>
              <button
                type="button"
                disabled={activeStep === PROCESS_STAGES.length - 1}
                onClick={() => setActiveStep(Math.min(PROCESS_STAGES.length - 1, activeStep + 1))}
                className="px-3 py-1.5 rounded border border-[#b91c1c]/40 bg-[#b91c1c]/20 hover:bg-[#b91c1c] text-white disabled:opacity-30 text-xs font-mono tracking-widest uppercase transition-colors"
              >
                NEXT PHASE
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 space-y-4">
              <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                DIRECTORIAL FOCUS
              </div>
              <p className="font-body text-lg text-zinc-200 font-light leading-relaxed">
                {PROCESS_STAGES[activeStep].description}
              </p>
            </div>

            <div className="p-5 rounded bg-black/40 border border-white/5 space-y-3">
              <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                KEY DELIVERABLES
              </div>
              <ul className="space-y-2 font-mono text-xs text-zinc-300">
                {PROCESS_STAGES[activeStep].deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#b91c1c]">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STAGES.map((stage, idx) => (
            <div
              key={stage.step}
              className="p-6 rounded bg-[#090b0d] border border-white/10 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="font-mono text-xs text-[#b91c1c] tracking-widest font-bold">
                  {stage.step} // {stage.phase}
                </span>
                <span className="font-mono text-[10px] text-zinc-500 uppercase">
                  PHASE 0{idx + 1}
                </span>
              </div>

              <h3 className="font-cinematic text-2xl font-bold text-white uppercase tracking-wider">
                {stage.title}
              </h3>

              <p className="font-body text-sm text-zinc-300 leading-relaxed font-light">
                {stage.description}
              </p>

              <div className="pt-3 border-t border-white/5">
                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
                  DELIVERABLES:
                </div>
                <div className="flex flex-wrap gap-2">
                  {stage.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded bg-white/5 font-mono text-[10px] text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
