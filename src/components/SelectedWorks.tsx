import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Eye, Film, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { FILM_PROJECTS } from '../data/portfolioData';
import { FilmProject } from '../types';

interface SelectedWorksProps {
  onSelectProject: (project: FilmProject) => void;
}

export default function SelectedWorks({ onSelectProject }: SelectedWorksProps) {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filterCategories = ['ALL', 'TIME & DREAM LOOPS', 'PSYCHOLOGICAL', 'MYSTERY', 'DARK COMEDY', 'DRAMA', 'SUPERNATURAL', 'SUSPENSE & ACTION'];

  const filteredProjects = FILM_PROJECTS.filter((proj) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'TIME & DREAM LOOPS') {
      const g = proj.genre.toLowerCase();
      const tags = proj.thematicTags.join(' ').toLowerCase();
      return g.includes('loop') || tags.includes('loop');
    }
    if (activeFilter === 'PSYCHOLOGICAL') return proj.genre.toLowerCase().includes('psychological');
    if (activeFilter === 'MYSTERY') return proj.genre.toLowerCase().includes('mystery');
    if (activeFilter === 'DARK COMEDY') return proj.genre.toLowerCase().includes('comedy');
    if (activeFilter === 'DRAMA') return proj.genre.toLowerCase().includes('drama');
    if (activeFilter === 'SUPERNATURAL') return proj.genre.toLowerCase().includes('supernatural');
    if (activeFilter === 'SUSPENSE & ACTION') {
      const g = proj.genre.toLowerCase();
      return g.includes('suspense') || g.includes('action') || g.includes('survival');
    }
    return true;
  });

  return (
    <section
      id="works"
      className="relative w-full py-28 sm:py-36 bg-[#060708] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-[#b91c1c] uppercase">
              <span className="w-2 h-0.5 bg-[#b91c1c]" />
              <span>SELECTED DIRECTORIAL ARCHIVE</span>
            </div>
            <h2 className="font-cinematic text-3xl sm:text-5xl lg:text-6xl font-black tracking-wider text-white uppercase">
              SELECTED WORKS
            </h2>
            <p className="font-body text-zinc-400 text-sm sm:text-base max-w-xl font-light">
              Atmospheric short films exploring psychological thresholds, supernatural tension, and quiet human frictions.
            </p>
          </div>

          {/* Genre Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                data-cursor="button"
                className={`px-3 py-1.5 rounded font-mono text-[11px] tracking-widest uppercase transition-all duration-300 border ${
                  activeFilter === cat
                    ? 'bg-[#b91c1c] text-white border-[#b91c1c] shadow-[0_0_15px_rgba(185,28,28,0.4)]'
                    : 'bg-white/[0.03] text-zinc-400 border-white/10 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Film Archive Gallery (Cinematic Poster / Docket Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              data-cursor="view"
              className="group relative flex flex-col rounded-sm overflow-hidden bg-[#0a0c0e] border border-white/10 hover:border-white/35 transition-all duration-500 cursor-pointer shadow-xl"
            >
              {/* Top Film Archive Meta Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#060708] border-b border-white/5 font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]" />
                  <span>DOCKET {(index + 1).toString().padStart(2, '0')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-zinc-500" />
                  <span>{project.runtime}</span>
                  <span className="text-zinc-600">|</span>
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Poster Image Area with Aspect Ratio & Film Grain */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-950">
                <img
                  src={project.posterImage}
                  alt={`${project.title} Poster`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108 filter contrast-110 brightness-85 group-hover:brightness-95"
                />

                {/* Subtle Film Grain Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

                {/* Corner Trailer Indicator */}
                {project.trailerUrl && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-red-200 bg-[#b91c1c]/90 px-2 py-0.5 rounded backdrop-blur-sm shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    <span>WATCH ONLINE</span>
                  </div>
                )}

                {/* Corner Aesthetic Coordinates */}
                <div className="absolute top-3 right-3 font-mono text-[9px] tracking-widest text-white/70 bg-black/70 px-1.5 py-0.5 rounded backdrop-blur-sm">
                  {project.technicalSpecs.aspectRatio}
                </div>

                {/* Floating "VIEW FILM" pill on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#b91c1c]/90 text-white font-mono text-xs tracking-widest uppercase shadow-2xl backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{project.trailerUrl ? "WATCH FILM / CLIP" : "VIEW DOSSIER"}</span>
                  </div>
                </div>

                {/* Bottom Shadow Gradient for Title Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-[#0a0c0e]/40 to-transparent opacity-95 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Card Footer Information */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-gradient-to-b from-[#0a0c0e] to-[#0d0f13] border-t border-white/5">
                <div>
                  {/* Bengali Title if present */}
                  {project.bengaliTitle && (
                    <div className="font-light text-zinc-400 text-sm tracking-wide">
                      {project.bengaliTitle}
                    </div>
                  )}

                  {/* English / Primary Display Title */}
                  <h3 className="font-cinematic text-xl sm:text-2xl font-bold tracking-wider text-white uppercase group-hover:text-zinc-100 group-hover:translate-x-1 transition-all duration-300 mt-0.5">
                    {project.title}
                  </h3>

                  {/* Genre */}
                  <div className="font-mono text-[11px] text-[#b91c1c] tracking-widest uppercase mt-1">
                    {project.genre}
                  </div>

                  {/* Short Synopsis Preview */}
                  <p className="font-body text-xs sm:text-sm text-zinc-400 line-clamp-2 mt-2 leading-relaxed font-light">
                    {project.synopsis}
                  </p>
                </div>

                {/* Role & Expand Prompt */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  <div className="truncate max-w-[70%]">
                    ROLE: <span className="text-zinc-300">{project.role}</span>
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400 group-hover:text-[#b91c1c] transition-colors">
                    <span>EXPLORE</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
