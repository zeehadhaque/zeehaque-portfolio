import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CRAFT_ITEMS } from '../data/portfolioData';

interface CraftServicesProps {
  onOpenInquiry: (craftTitle?: string) => void;
}

export default function CraftServices({ onOpenInquiry }: CraftServicesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleCraft = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="craft"
      className="relative w-full py-28 sm:py-36 bg-[#060708] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-[#b91c1c] uppercase">
              <span className="w-2 h-0.5 bg-[#b91c1c]" />
              <span>DISCIPLINES &amp; MASTERY</span>
            </div>
            <h2 className="font-cinematic text-3xl sm:text-5xl lg:text-6xl font-black tracking-wider text-white uppercase">
              SERVICES / CRAFT
            </h2>
            <p className="font-body text-zinc-400 text-sm sm:text-base max-w-xl font-light">
              Disciplined execution across all phases of the moving image — from initial concept and camera blocking to final color master.
            </p>
          </div>

          <div className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
            06 CORE PILLARS
          </div>
        </div>

        {/* Expandable Craft List (Editorial Style Accordion) */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {CRAFT_ITEMS.map((craft, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={craft.number}
                className="group transition-colors duration-300 hover:bg-white/[0.01]"
              >
                {/* Accordion Row Header */}
                <button
                  type="button"
                  onClick={() => toggleCraft(idx)}
                  data-cursor="button"
                  className="w-full py-8 sm:py-10 flex items-start sm:items-center justify-between text-left focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start sm:items-center gap-6 sm:gap-12 flex-1 pr-4">
                    {/* Number */}
                    <span className="font-mono text-sm sm:text-base text-zinc-500 group-hover:text-[#b91c1c] transition-colors tracking-widest pt-1 sm:pt-0">
                      {craft.number}
                    </span>

                    {/* Title & Summary */}
                    <div className="space-y-1">
                      <h3 className="font-cinematic text-xl sm:text-3xl font-bold tracking-wider text-white uppercase group-hover:text-zinc-200 transition-colors">
                        {craft.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-zinc-400 max-w-2xl font-light line-clamp-1 sm:line-clamp-none">
                        {craft.summary}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Indicator */}
                  <div className="p-2 sm:p-2.5 rounded-full border border-white/10 group-hover:border-white/30 text-zinc-400 group-hover:text-white transition-all shrink-0">
                    {isExpanded ? (
                      <Minus className="w-4 h-4 text-[#b91c1c]" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Expanded Craft Detail */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden pb-10 pl-12 sm:pl-20 pr-4 sm:pr-8"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-white/5">
                        {/* Description */}
                        <div className="lg:col-span-2 space-y-4">
                          <h4 className="font-mono text-xs tracking-[0.25em] text-[#b91c1c] uppercase">
                            APPROACH &amp; METHODOLOGY
                          </h4>
                          <p className="font-body text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                            {craft.fullDescription}
                          </p>

                          {/* Key Aspects list */}
                          <div className="pt-2">
                            <div className="font-mono text-[11px] tracking-widest text-zinc-400 uppercase mb-2">
                              KEY CAPABILITIES
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {craft.keyAspects.map((aspect, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]" />
                                  <span>{aspect}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Tools & Collaboration Action */}
                        <div className="p-5 rounded bg-white/[0.02] border border-white/10 space-y-4 flex flex-col justify-between">
                          <div>
                            <div className="font-mono text-xs tracking-widest text-white uppercase border-b border-white/10 pb-2 mb-3">
                              WORKFLOW &amp; TOOLS
                            </div>
                            <ul className="space-y-2 font-mono text-xs text-zinc-400">
                              {craft.toolsAndMethods.map((tool, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-[#b91c1c]">✦</span>
                                  <span>{tool}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button
                            type="button"
                            onClick={() => onOpenInquiry(craft.title)}
                            data-cursor="button"
                            className="w-full mt-4 py-2.5 px-4 bg-white/10 hover:bg-[#b91c1c] text-white font-mono text-xs tracking-widest uppercase rounded flex items-center justify-center gap-2 transition-all"
                          >
                            <span>ENGAGE FOR {craft.title}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
